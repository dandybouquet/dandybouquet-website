import time
import yaml
import re
from pathlib import Path
from argparse import ArgumentParser
import requests
from datetime import datetime
from urllib.parse import urlencode
import json


def derpi_to_image(image: dict) -> dict:
    return {
        "name": str(image["id"]),
        "full": image["representations"]["full"],
        "thumb": image["representations"]["thumb"],
        "source": image["source_url"],
        "date": image["created_at"],
        "artist": "dandybouquet",
        "derpi_id": image["id"],
    }


def search_derpibooru(gallery_id: int, api_key: str) -> list[dict]:
    results = []
    page = 1

    while True:
        url = "https://derpibooru.org/api/v1/json/search/images?"
        page_size = 50
        params = {
            "q": f"gallery_id:{gallery_id}",
            "page": page,
            "per_page": page_size,
            "sf": "id",
            "sd": "desc",
            "key": api_key,
        }
        url += urlencode(params)

        print(f"Searching derpibooru page {page}: {url}")
        page += 1
        response = requests.get(url)

        if response.status_code == 200:
            response_data = response.json()
            response_images = response_data["images"]
            total = response_data["total"]
            print(f" {len(response_images)} results, {total} total")
            for image_data in response_images:
                results.append(derpi_to_image(image_data))
            if len(response_images) < page_size:
                break
            time.sleep(2.0)
        else:
            raise Exception(f"Error response: {response.status_code}")

    return results


def process_file(path: Path) -> dict:
    data = {
        "full": "/" + path.relative_to("public").as_posix(),
        "thumb": "/thumbs/" + path.with_suffix(".jpg").name,
        "artist": "dandybouquet",
        "date": None,
    }

    match = re.match(r"(\d\d\d\d\d\d\d\d)_", path.name)
    if match:
        date_str = match.group(1)
        date = datetime.strptime(date_str, "%Y%m%d")
        print(date)
        data["date"] = date.strftime("%Y-%m-%dT%H:%M:%SZ")

    if path.suffix == ".gif":
        data["thumb"] = data["full"]

    return data


def main():
    parser = ArgumentParser()
    # parser.add_argument("-g", "--gallery", type=int, default=26328)
    # parser.add_argument("-o", "--output", type=str, default="src/assets/gallery.json")

    args = parser.parse_args()
    # output_path = Path(args.output)

    config_path = Path(__file__).resolve().parent.joinpath("config.yaml")
    print(f"Loading config: {config_path}")
    with open(config_path, "r") as stream:
        config = yaml.safe_load(stream)

    galleries = config["galleries"]
    derpi_api_key = config["derpi_api_key"]

    for gallery in galleries:
        images = []

        gallery_id = gallery["derpi_gallery"]
        output_path = gallery["path"]
        file_source = gallery["file_source"]
        nsfw = gallery["nsfw"]

        if file_source:
            file_source = Path(file_source)
            assert file_source.is_dir()
            for path in file_source.iterdir():
                print(f"Adding to gallery: {path}")
                image = process_file(path)
                if image:
                    image["nsfw"] = nsfw
                    images.append(image)
                    # print(image)

        derpi_images = search_derpibooru(gallery_id=gallery_id, api_key=derpi_api_key)
        for image in derpi_images:
            image["nsfw"] = nsfw
        images += derpi_images

        # Sort by date
        images.sort(key=lambda x: x.get("date", None) or "", reverse=True)

        data = {
            "images": images,
        }

        with open(output_path, "w", encoding="utf8") as stream:
            json.dump(data, stream, ensure_ascii=False, indent=2, sort_keys=True)


if __name__ == "__main__":
    main()

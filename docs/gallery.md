# Art Gallery

## Artworks from Derpibooru

Derpibooru galleries are used to simplify the process of choosing artworks for the website gallery. The python script `generate_gallery.py` will pull json data from these galleries using the [Derpibooru API](https://derpibooru.org/pages/api), then save json files with information about each artwork, including name, description, and image/thumbnail URLs.

### Galleries in Use

These are the galleries integrated into the website's build process.

| Gallery                                                        | Purpose                                                                                              |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [dandy-sfw-portfolio](https://derpibooru.org/galleries/26328)  | SFW Artworks shown in [gallery](https://www.dandybouquet.com/gallery)                                |
| [dandy-nsfw-portfolio](https://derpibooru.org/galleries/26334) | NSFW Artworks shown in [gallery](https://www.dandybouquet.com/gallery) with a mature content warning |
| [dandy-sfw-samples](https://derpibooru.org/galleries/26333)    | Sample Artworks shown on [homepage](https://www.dandybouquet.com/)                                   |

### Pulling Gallery Data

Run this script to update galleries locally from the latest derpibooru artworks.

```bash
python ./scripts/generate_gallery.py
```

## Other Artworks in Gallery

Other artworks, which are not hosted on derpibooru, can still be shown in the gallery.

Examples:

- DeviantArt

## Generating Thumbnails

All images in the site need thumbnails. This script will generate a thumbnail for each image.

```bash
python ./scripts/generate_thumbs.py -i ./public/images/ \
    -o ./public/thumbs/ -s 250
```

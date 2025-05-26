import cv2
from pathlib import Path
import numpy
from argparse import ArgumentParser


def generate_thumbnail(path: Path, out_path: Path, size=150):
    with open(path, "rb") as stream:
        raw_bytes = bytearray(stream.read())
        numpy_array = numpy.asarray(raw_bytes, dtype=numpy.uint8)
        image = cv2.imdecode(numpy_array, cv2.IMREAD_UNCHANGED)

        # image = cv2.imread(path)
        if image is None:
            return

        # Scale to fit in size, but with same aspect ratio
        height = image.shape[0]
        width = image.shape[1]
        if width > height:
            final_height = round(size * (height / width))
            final_width = size
        elif height > width:
            final_width = round(size * (width / height))
            final_height = size
        else:
            final_width = size
            final_height = size

        # Keep scaling down by 50% until reached thumbnail size
        reduced_width = int(width / 2)
        reduced_height = int(height / 2)
        while max(reduced_width, reduced_height) > max(final_width, final_height):
            image = cv2.resize(image, (reduced_width, reduced_height))
            reduced_width = int(reduced_width / 2)
            reduced_height = int(reduced_height / 2)

        image = cv2.resize(image, (final_width, final_height))
        cv2.imwrite(out_path, image)


def convert_dir(dir_path: Path, output_path: Path, size: int):

    for path in dir_path.iterdir():
        if path.is_dir():
            convert_dir(path, output_path, size=size)
        elif path.is_file():
            result_path = output_path.joinpath(path.with_suffix(".jpg").name)
            print(f"Converting: {path} -> {result_path}")
            generate_thumbnail(path, result_path, size=size)


def main():
    parser = ArgumentParser()
    parser.add_argument("-o", "--output", type=str)
    parser.add_argument("-i", "--input", type=str)
    parser.add_argument("-s", "--size", type=int, default=250)

    args = parser.parse_args()
    output_path = Path(args.output)
    input_path = Path(args.input)
    size = args.size
    if not output_path.is_dir():
        parser.error(f"not a directory {args.output}")
    if not input_path.is_dir():
        parser.error(f"not a directory {args.input}")

    convert_dir(input_path, output_path, size=size)


if __name__ == "__main__":
    main()

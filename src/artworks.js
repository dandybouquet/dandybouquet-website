import data from "@/assets/dandy-sfw-gallery.json" assert { type: "json" };

let art = [];

data.images.forEach((image) => {
  art.push({
    name: image.id,
    src: image.representations.full,
    thumb: image.representations.thumb,
    source_urls: image.source_urls,
    date: image.created_at,
  });
});

export const ARTWORKS = art;

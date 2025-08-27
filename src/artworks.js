import galleryData from "@/assets/gallery.json" assert { type: "json" };
import nsfwGalleryData from "@/assets/nsfw_gallery.json" assert { type: "json" };
import featuredImages from "@/assets/featured_art.json" assert { type: "json" };

export const ARTWORKS = galleryData.images;

let allArtworks = galleryData.images;
allArtworks = allArtworks.concat(nsfwGalleryData.images);
allArtworks = allArtworks.sort((a, b) => {
  const nameA = a.date.toUpperCase(); // ignore upper and lowercase
  const nameB = b.date.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }

  // names must be equal
  return 0;
});

export const ALL_ARTWORKS = allArtworks;
export const FEATURED_ARTWORKS = featuredImages.images;

export const NULL_ARTWORK = {
  artist: "N/A",
  date: "2025-08-15T15:09:31Z",
  full: null,
  name: "error",
  nsfw: false,
  source: null,
  thumb: null,
  derpi_id: null,
};

export const ARTISTS = {
  dandybouquet: {
    name: "Dandy Bouquet",
  },
  straw: {
    name: "Straw",
    url: "https://bsky.app/profile/cstrawberrymilk.bsky.social",
  },
  starcast: {
    name: "Starcast Eclipse",
    url: "https://www.starcastart.com",
  },
  confetti: {
    name: "Confetti Cakez",
    url: "https://cakez.art",
  },
  kam: {
    name: "kam",
    url: "https://bsky.app/profile/kampony.bsky.social",
  },
  frowoppy: {
    name: "FrOwOppy",
    url: "https://bsky.app/profile/frowoppy.bsky.social",
  },
  maplecakes: {
    name: "Boomchii",
    url: "https://puggypuppy.carrd.co/",
  },
  msanii: {
    name: "Msanii",
    url: "",
  },
  avui: {
    name: "Avui",
    url: "https://x.com/AvuiArts",
  },
  elusivepurple: {
    name: "Elusive Purple",
    url: "https://elusivepurple.straw.page/",
  },
  minamikoboyasy: {
    name: "minamikoboyasy",
    url: "",
  },
  lightly: {
    name: "Lightly-san",
    url: "https://lightlysan.carrd.co/",
  },
  ember: {
    name: "EmbersLament",
    url: "https://x.com/emberslament",
  },
  vederlicht: {
    name: "VederlichtArt",
    url: "https://linktr.ee/vederlichtart",
  },
  starberrymint: {
    name: "starberrymint",
    url: "https://starberrymint.carrd.co/",
  },
  light: {
    name: "Light",
    url: "https://lightsart.carrd.co/",
  },
  fwubby: {
    name: "Fwubby",
    url: "https://www.deviantart.com/fwubbie",
  },
  default: {
    name: "Not Specified",
    url: "",
  },
};

export const DEFAULT_ARTIST = ARTISTS.default;

import { ALL_ARTWORKS, NULL_ARTWORK } from "./artworks";

export const artFromFile = function (path) {
  let data = { full: path, artist: "" };

  // Artist name
  let regex = new RegExp(".*_by_([a-z]+)\\..*", "g");
  let match = regex.exec(path);
  if (match) {
    data.artist = match[1];
  } else {
    // console.log("Unknown artist: " + path);
  }

  // Thumb
  regex = new RegExp("/.*?([^/]+?).[^.]*$");
  match = regex.exec(path);
  if (match) {
    data.thumb = "/thumbs/" + match[1] + ".jpg";
  } else {
    console.log("Missing thumbnail: " + data.thumb);
  }

  return data;
};

export const artFromDerpi = function (derpi_id) {
  const index = ALL_ARTWORKS.findIndex((art) => art.derpi_id == derpi_id);
  if (index >= 0) {
    return ALL_ARTWORKS[index];
  }
  return NULL_ARTWORK;
};

const charData = [
  {
    key: "sylvia",
    name: "Sylvia Evergreen",
    designer: "dandybouquet",
    tags: ["female", "pegasus"],
    description: [
      "My main OC. A park ranger pegasus mare who loves nature and wildlife. She is cheerful and charismatic, always having a positive outlook. Works for the Equestrian Park Services, caring for the northern forests of Equestria.",
    ],
    permissions: [],
    refs: [
      artFromFile("/images/sylvia/20211015_sylvia_ref_by_dandybouquet.png"),
      artFromFile(
        "/images/sylvia/20230621_sylvia_anthro_ref_by_dandybouquet.png"
      ),
    ],
    images: [
      artFromFile("/images/sylvia/20230719_sylvia_by_straw.png"),
      artFromFile(
        "/images/sylvia/20211228_secret_santa_for_dandy_bouquet_by_avui.png"
      ),
      artFromFile("/images/sylvia/20221103_sylvia_by_confetti.png"),
      artFromFile("/images/sylvia/20240707_sylvia_by_kam.png"),
    ],
  },
  {
    key: "bella",
    name: "Bella Meadows",
    designer: "frowoppy",
    tags: ["female", "earth pony"],
    description: [
      "Earth pony mare who loves gardening and fancy outfits. Lives in a cottage in a small village and sells flowers as a profession. Likes more more traditional styles, regarding clothes and decorations. She can be fairly reserved, hard to get close to.",
    ],
    refs: [artFromFile("/images/bella/adoptable_by_frowoppy.png")],
    images: [
      artFromFile("/images/bella/adoptable_by_frowoppy.png"),
      artFromFile("/images/bella/20250301_bella_by_dandybouquet.png"),
      artFromFile("/images/bella/20240702_bella_by_starberrymint.png"),
    ],
  },
  {
    key: "amber",
    name: "Amber Glow",
    designer: "maplecakes",
    tags: ["female", "kirin"],
    description: [
      "Female kirin. Has a taste for the finer things, can be prim and pompous at times, but always looks out for her friends.",
    ],
    images: [
      artFromFile("/images/amber/20240713_amber_glow_by_maplecakes.png"),
      artFromFile("/images/amber/20221208_amber_glow_by_maplecakes.png"),
      artFromFile("/images/amber/20230701_amber_glow_by_starcast.png"),
    ],
  },
  {
    key: "lumi",
    name: "Luminessence",
    designer: "dandybouquet",
    tags: ["female", "earth pony"],
    description: [
      "Earth pony mare enchantress who lives in an enchanted forest. She is a bit mysterious and alluring, mostly active during the night. Not many ponies have seen her, but those who have can't help but follow the glow of her mane.",
    ],
    refs: [
      artFromFile("/images/lumi/20220408_lumi_pony_ref_by_dandybouquet.png"),
      artFromFile("/images/lumi/20220320_lumi_anthro_ref_by_dandybouquet.png"),
    ],
    images: [
      artFromFile("/images/lumi/20220721_lumi_by_msanii.png"),
      artFromFile("/images/lumi/20230704_lumi_by_elusivepurple.png"),
      artFromFile("/images/lumi/20230721_lumi_by_avui.png"),
      artFromFile("/images/lumi/20220402_lumi_by_minamikoboyasy.png"),
      artFromFile("/images/lumi/20220711_lumi_by_lightly.jpg"),
    ],
  },
  {
    key: "summer",
    name: "Summer Sands",
    designer: "ember",
    tags: ["female", "earth pony"],
    description: [
      "Earth pony mare who loves the beach: sun-bathing, swimming, and surfing!",
    ],
    refs: [artFromFile("/images/summer/20220908_summer_ref_by_ember.png")],
    images: [
      artFromFile("/images/summer/20220908_summer_ref_by_ember.png"),
      artFromFile("/images/summer/20230708_summer_by_kam.png"),
      artFromFile("/images/summer/20230725_summer_by_light.png"),
      artFromFile("/images/summer/20230801_summer_by_fwubbie.png"),
    ],
  },
  {
    key: "nellie",
    name: "Nellie",
    designer: "dandybouquet",
    tags: ["female", "seal"],
    description: [
      "Female seal who has a bubbly personality and loves to party. Very friendly and playful, sometimes too much so. Loves to give big hugs, to friends and strangers.",
    ],
    refs: [
      artFromFile("/images/nellie/20220626_nellie_ref_by_dandybouquet.png"),
    ],
    images: [artFromFile("/images/nellie/20240730_nellie_by_vederlicht.png")],
  },
];

export const CHARACTERS = charData;

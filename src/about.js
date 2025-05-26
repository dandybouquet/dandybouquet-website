import { artFromFile } from "./characters";

export const ABOUT = {
  tools: [
    {
      title: "Digital Art",
      description: [
        "Huion Kamvas Pro 20",
        "PaintTool SAI Ver.2",
        "Clip Studio Paint Ex 2.0 (for animations)",
      ],
      images: [artFromFile("/images/supplies/kamvas.png")],
    },
    {
      title: "Colored Pencils",
      description: ["Faber Castell Polychromos", "Prismacolor Permier"],
      images: [artFromFile("/images/supplies/colored_pencils.jpg")],
    },
    {
      title: "Markers",
      description: ["Alcohol-based Copic Sketch Markers"],
      images: [artFromFile("/images/supplies/copic_markers.jpg")],
    },
    {
      title: "Acrylic Paint",
      description: [
        "POSCA Acrylic Paint Pens (mostly 3M size)",
        "FolkArt Acrylic Paints",
        "Mix of thin canvas panels and larger stretched canvas",
      ],
      images: [artFromFile("/images/supplies/posca_pens.webp")],
    },
    {
      title: "Watercolor Paint",
      description: ["GenCrafts Solid Watercolors", "Cotton Paper"],
      images: [artFromFile("/images/supplies/watercolor.jpg")],
    },
    {
      title: "Gouache Paint",
      description: ["Holbein Artist's Gouache"],
      images: [artFromFile("/images/supplies/holbein_gouache.jpg")],
    },
    {
      title: "Drawing Paper",
      description: [
        "Canson Mixed Media",
        "Strathmore 300-Series Bristol (Smooth Surface)",
        "Strathmore 400-Series Marker Pad",
      ],
      images: [
        artFromFile("/images/supplies/paper_strathmore.webp"),
        artFromFile("/images/supplies/paper_canson.jpg"),
      ],
    },
    {
      title: "Papercraft  Tools",
      description: [
        "Encore Textured Cardstock",
        "Cricut Maker 4",
        "Bearly Glue and Sticky Cubes",
      ],
      images: [artFromFile("/images/supplies/papercraft.jpg")],
    },
    {
      title: "Other Drawing Tools",
      description: [
        "Micron Fineliners: for linework/inking",
        "Gellyrole White Gel Pens: for adding white highlights",
        "Faber Castell Kneaded Erasers: for smooth erasing",
        "Kimberly 2H Pencil: for light sketching",
      ],
      images: [],
    },
  ],
};

export const LINKS = [
  {
    text: "Twitter/X",
    url: "https://x.com/DandyBouquet",
    nsfwUrl: "https://x.com/Dandy_nsfw",
    icon: "mdi-twitter",
    image: null,
    postArt: true,
  },
  {
    text: "Bluesky",
    url: "https://bsky.app/profile/dandybouquet.bsky.social",
    nsfwUrl: "https://bsky.app/profile/dandynsfw.bsky.social",
    image: "/icons/bluesky.png",
    postArt: true,
  },
  {
    text: "DeviantArt",
    url: "https://www.deviantart.com/dandybouquet",
    icon: "mdi-deviantart",
    image: null,
    postArt: true,
  },
  {
    text: "Derpibooru (Pony art)",
    url: "https://derpibooru.org/search?q=artist%3Adandy",
    image: "/icons/derpibooru.png",
    postArt: true,
  },
  {
    text: "Toyhouse (My Characters)",
    url: "https://toyhou.se/DandyBouquet",
    icon: "mdi-home",
    postArt: false,
  },
  {
    text: "Picarto (Art Streams)",
    url: "https://picarto.tv/DandyBouquet",
    image: "/icons/picarto.png",
    postArt: false,
  },
];

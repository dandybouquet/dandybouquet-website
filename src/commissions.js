import { artFromFile, artFromDerpi } from "./characters";

export const COMMISSIONS = {
  termsOfService: [
    "All prices in USD. Payment done using PayPal Invoices before work is started",
    "Prices may change based on complexity. Ask if unsure about price or what I will draw",
    "This sheet may not list all options. Ask if you would like something different",
    "NSFW allowed only for anthro/human, limited to simple female nudity",
    "I own the rights to the artwork. You may not sell it or use it commercially",
  ],
  offerings: [
    {
      name: "Marker Drawing",
      prices: ["Pony/animal = $70", "Anthro/human = $90"],
      details: ['5x7" paper', "Background = $5 to $30", "Free shipping"],
      images: [
        artFromDerpi(3484847),
        artFromFile("/images/commissions/marker_anthro.png"),
      ],
      cols: 6,
      type: "row",
    },
    {
      name: "Acrylic Painting",
      prices: ["$80"],
      details: [
        '4x6" thin canvas panel',
        "Limited color palette",
        "Background included",
        "Shipping costs extra",
      ],
      images: [artFromDerpi(3555737)],
      cols: 6,
      type: "row",
    },
    {
      name: "Simple Shaded Digital Art",
      prices: ["Pony/animal = $60, Anthro/human = $80"],
      details: ["Cel shading with some highlights"],
      images: [
        artFromDerpi(3107592), // Candy Apples
        artFromDerpi(3575791), // Stagea
      ],
      cols: 6,
      type: "col",
    },
    {
      name: "Fully Shaded Digital Art",
      prices: ["Pony/animal = $60, Anthro/human = $80"],
      details: ["Smooth shading with more rendering"],
      images: [artFromDerpi(3562692), artFromDerpi(3584820)],
      cols: 6,
      type: "col",
    },
    {
      name: "Animation",
      prices: ["Starts at $450 - simple character, upper body, 12 frames"],
      details: [
        "Short frame-by-frame animation, 12 FPS, optionally looped",
        "Around 1 to 4 seconds of unique motion",
        "Single character only, female preferred, any anthro species",
        "Simple cel-shading only",
        "Price is determined by length and complexity",
      ],
      images: [artFromFile("/images/commissions/animation.png")],
      cols: 12,
      type: "row",
    },
  ],
};

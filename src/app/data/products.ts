export type MainCategoryId = 'gifts' | 'flowers' | 'chocolate' | 'premium' | 'romance';

export type Product = {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  category: string;
  description: string;
  /** Primary shelf for fallback browsing */
  mainCategoryId: MainCategoryId;
  /** Subcategory chip ids this product appears under (globally unique ids from `subcategories.ts`) */
  subcategoryIds: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: 'rose-velvet-bouquet',
    name: 'Rose Velvet Bouquet',
    price: '$145',
    category: 'Flowers',
    description:
      'Hand-tied premium red roses wrapped in velvet paper for anniversaries and romantic occasions.',
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&h=400&fit=crop',
    mainCategoryId: 'flowers',
    subcategoryIds: ['roses', 'bouquets', 'anniversary', 'valentines', 'date-night', 'proposal', 'just-because'],
  },
  {
    id: 'noir-luxe-gift-box',
    name: 'Noir Luxe Gift Box',
    price: '$210',
    category: 'Gifts',
    description: 'Curated hamper with artisan candles, silk ribbon, and a premium greeting card.',
    imageUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop',
    mainCategoryId: 'gifts',
    subcategoryIds: ['hampers', 'birthday', 'corporate', 'signature', 'imported', 'new-baby'],
  },
  {
    id: 'midnight-truffles',
    name: 'Midnight Truffles',
    price: '$68',
    category: 'Chocolate',
    description:
      'Belgian dark chocolate truffles with hazelnut praline and cacao nib crunch.',
    imageUrl: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop',
    mainCategoryId: 'chocolate',
    subcategoryIds: ['truffles', 'dark', 'gift-boxes', 'signature', 'imported'],
  },
  {
    id: 'orchid-grace-basket',
    name: 'Orchid Grace Basket',
    price: '$172',
    category: 'Flowers',
    description:
      'Elegant white orchid arrangement in a handcrafted basket with satin accents.',
    imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=400&fit=crop',
    mainCategoryId: 'flowers',
    subcategoryIds: ['orchids', 'plants', 'bouquets', 'imported', 'signature', 'anniversary'],
  },
  {
    id: 'golden-celebration-hamper',
    name: 'Golden Celebration Hamper',
    price: '$260',
    category: 'Gifts',
    description:
      'Luxury hamper featuring sparkling juice, gourmet snacks, and keepsake accessories.',
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop',
    mainCategoryId: 'gifts',
    subcategoryIds: ['hampers', 'birthday', 'anniversary', 'corporate', 'limited', 'signature'],
  },
  {
    id: 'ruby-cocoa-collection',
    name: 'Ruby Cocoa Collection',
    price: '$94',
    category: 'Chocolate',
    description:
      'A luxury chocolate set blending ruby chocolate bars and handcrafted bonbons.',
    imageUrl: 'https://images.unsplash.com/photo-1606312619344-66fd36d9f4d5?w=400&h=400&fit=crop',
    mainCategoryId: 'chocolate',
    subcategoryIds: ['ruby', 'gift-boxes', 'pralines', 'limited', 'signature'],
  },
  {
    id: 'peony-blush-bouquet',
    name: 'Peony Blush Bouquet',
    price: '$158',
    category: 'Flowers',
    description:
      'Soft pink peonies and seasonal fillers designed for birthdays and congratulations.',
    imageUrl: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=400&h=400&fit=crop',
    mainCategoryId: 'flowers',
    subcategoryIds: ['bouquets', 'seasonal', 'birthday', 'new-baby', 'vegan', 'just-because'],
  },
  {
    id: 'couture-chocolate-hearts',
    name: 'Couture Chocolate Hearts',
    price: '$76',
    category: 'Chocolate',
    description: 'Heart-shaped premium pralines in a couture-inspired gift box.',
    imageUrl: 'https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=400&h=400&fit=crop',
    mainCategoryId: 'chocolate',
    subcategoryIds: ['pralines', 'gift-boxes', 'valentines', 'proposal', 'just-because', 'limited', 'date-night'],
  },
  {
    id: 'emerald-signature-trunk',
    name: 'Emerald Signature Trunk',
    price: '$340',
    category: 'Gifts',
    description: 'A signature trunk of artisan treats, tea, and keepsake accessories.',
    imageUrl: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400&h=400&fit=crop',
    mainCategoryId: 'gifts',
    subcategoryIds: ['hampers', 'signature', 'corporate', 'anniversary'],
  },
  {
    id: 'birthday-luxe-box',
    name: 'Birthday Luxe Box',
    price: '$129',
    category: 'Gifts',
    description: 'Birthday-ready gift box with mini cake, blooms, and celebration add-ons.',
    imageUrl: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop',
    mainCategoryId: 'gifts',
    subcategoryIds: ['birthday', 'hampers', 'just-because'],
  },
  {
    id: 'newborn-welcome-crate',
    name: 'Newborn Welcome Crate',
    price: '$184',
    category: 'Gifts',
    description: 'Premium baby gift crate with plush, flowers, and personalized card.',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop',
    mainCategoryId: 'gifts',
    subcategoryIds: ['new-baby', 'hampers', 'signature'],
  },
  {
    id: 'executive-appreciation-set',
    name: 'Executive Appreciation Set',
    price: '$220',
    category: 'Gifts',
    description: 'Corporate-ready box with coffee, leather notebook, and premium snacks.',
    imageUrl: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=400&h=400&fit=crop',
    mainCategoryId: 'gifts',
    subcategoryIds: ['corporate', 'signature', 'imported'],
  },
  {
    id: 'elegance-rose-dome',
    name: 'Elegance Rose Dome',
    price: '$196',
    category: 'Flowers',
    description: 'Long-lasting preserved rose dome finished with luxury ribbon detailing.',
    imageUrl: 'https://images.unsplash.com/photo-1494336934272-fd4f1dbaf4c2?w=400&h=400&fit=crop',
    mainCategoryId: 'flowers',
    subcategoryIds: ['roses', 'anniversary', 'proposal', 'signature'],
  },
  {
    id: 'amber-tulip-bundle',
    name: 'Amber Tulip Bundle',
    price: '$118',
    category: 'Flowers',
    description: 'Fresh tulip bouquet in warm tones, ideal for cheerful gifting moments.',
    imageUrl: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=400&h=400&fit=crop',
    mainCategoryId: 'flowers',
    subcategoryIds: ['bouquets', 'seasonal', 'birthday', 'just-because'],
  },
  {
    id: 'orchid-velour-planter',
    name: 'Orchid Velour Planter',
    price: '$188',
    category: 'Flowers',
    description: 'Double stem orchid in a velour ceramic planter with gift wrap.',
    imageUrl: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?w=400&h=400&fit=crop',
    mainCategoryId: 'flowers',
    subcategoryIds: ['orchids', 'plants', 'imported', 'signature'],
  },
  {
    id: 'seasonal-garden-basket',
    name: 'Seasonal Garden Basket',
    price: '$134',
    category: 'Flowers',
    description: 'A seasonal mix of premium stems arranged in a handwoven basket.',
    imageUrl: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=400&h=400&fit=crop',
    mainCategoryId: 'flowers',
    subcategoryIds: ['seasonal', 'bouquets', 'anniversary'],
  },
  {
    id: 'obsidian-truffle-flight',
    name: 'Obsidian Truffle Flight',
    price: '$88',
    category: 'Chocolate',
    description: 'Chef-crafted truffle flight with dark ganache and crunchy centers.',
    imageUrl: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&h=400&fit=crop',
    mainCategoryId: 'chocolate',
    subcategoryIds: ['truffles', 'dark', 'signature'],
  },
  {
    id: 'ruby-praline-ribbon-box',
    name: 'Ruby Praline Ribbon Box',
    price: '$82',
    category: 'Chocolate',
    description: 'Gift-ready praline selection wrapped in a ruby satin ribbon.',
    imageUrl: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop',
    mainCategoryId: 'chocolate',
    subcategoryIds: ['pralines', 'ruby', 'gift-boxes', 'valentines'],
  },
  {
    id: 'imperial-dark-squares',
    name: 'Imperial Dark Squares',
    price: '$64',
    category: 'Chocolate',
    description: '72% cacao dark squares with sea salt, orange zest, and almond notes.',
    imageUrl: 'https://images.unsplash.com/photo-1575377427642-087cf684f29d?w=400&h=400&fit=crop',
    mainCategoryId: 'chocolate',
    subcategoryIds: ['dark', 'gift-boxes', 'imported'],
  },
  {
    id: 'limited-cocoa-atelier',
    name: 'Limited Cocoa Atelier',
    price: '$128',
    category: 'Chocolate',
    description: 'Limited-edition atelier collection with seasonal premium fillings.',
    imageUrl: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=400&fit=crop',
    mainCategoryId: 'chocolate',
    subcategoryIds: ['limited', 'signature', 'gift-boxes', 'truffles'],
  },
  {
    id: 'signature-royal-hamper',
    name: 'Signature Royal Hamper',
    price: '$320',
    category: 'Premium',
    description: 'Top-tier hamper of imported delicacies, floral accents, and keepsakes.',
    imageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&h=400&fit=crop',
    mainCategoryId: 'premium',
    subcategoryIds: ['signature', 'limited', 'imported', 'hampers'],
  },
  {
    id: 'vegan-luxe-delight-box',
    name: 'Vegan Luxe Delight Box',
    price: '$152',
    category: 'Premium',
    description: 'Plant-based gourmet assortment with premium vegan desserts and tea.',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=400&fit=crop',
    mainCategoryId: 'premium',
    subcategoryIds: ['vegan', 'signature', 'gift-boxes'],
  },
  {
    id: 'imported-grand-selection',
    name: 'Imported Grand Selection',
    price: '$278',
    category: 'Premium',
    description: 'Imported chocolate, preserves, and fragrance-packed gifting set.',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop',
    mainCategoryId: 'premium',
    subcategoryIds: ['imported', 'limited', 'corporate', 'signature'],
  },
  {
    id: 'limited-edition-opulence-bundle',
    name: 'Limited Opulence Bundle',
    price: '$365',
    category: 'Premium',
    description: 'Rare limited-run bundle crafted for milestone celebrations.',
    imageUrl: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400&h=400&fit=crop',
    mainCategoryId: 'premium',
    subcategoryIds: ['limited', 'anniversary', 'proposal', 'signature'],
  },
  {
    id: 'valentine-rose-choco-duo',
    name: 'Valentine Rose Choco Duo',
    price: '$146',
    category: 'Romance',
    description: 'Romantic duo of red roses and handcrafted heart chocolates.',
    imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop',
    mainCategoryId: 'romance',
    subcategoryIds: ['valentines', 'date-night', 'roses', 'pralines'],
  },
  {
    id: 'midnight-date-box',
    name: 'Midnight Date Box',
    price: '$139',
    category: 'Romance',
    description: 'Date-night edit with scented candle, blooms, and artisan sweets.',
    imageUrl: 'https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?w=400&h=400&fit=crop',
    mainCategoryId: 'romance',
    subcategoryIds: ['date-night', 'just-because', 'signature'],
  },
  {
    id: 'proposal-moment-collection',
    name: 'Proposal Moment Collection',
    price: '$245',
    category: 'Romance',
    description: 'Statement collection made for proposal setups and surprise reveals.',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=400&fit=crop',
    mainCategoryId: 'romance',
    subcategoryIds: ['proposal', 'valentines', 'limited', 'roses'],
  },
  {
    id: 'just-because-soft-bloom-set',
    name: 'Just Because Soft Bloom Set',
    price: '$112',
    category: 'Romance',
    description: 'Thoughtful floral-chocolate combo for spontaneous romantic gestures.',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    mainCategoryId: 'romance',
    subcategoryIds: ['just-because', 'date-night', 'bouquets'],
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsForMainCategory(mainCategoryId: MainCategoryId): Product[] {
  return PRODUCTS.filter((p) => p.mainCategoryId === mainCategoryId);
}

/**
 * Products for the active main+subcategory, weighted so direct subcategory matches rank first.
 */
export function getProductsForSubcategory(
  subcategoryId: string | null,
  mainCategoryId: MainCategoryId,
): Product[] {
  const inMainCategory = getProductsForMainCategory(mainCategoryId);
  if (!subcategoryId) return inMainCategory;

  const weighted = inMainCategory
    .map((product) => ({
      product,
      score: product.subcategoryIds.includes(subcategoryId) ? 2 : 0,
    }))
    .sort((a, b) => b.score - a.score);

  const matches = weighted.filter((entry) => entry.score > 0).map((entry) => entry.product);
  if (matches.length > 0) return matches;

  return inMainCategory;
}

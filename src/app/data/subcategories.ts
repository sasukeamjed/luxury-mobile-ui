export type Subcategory = { id: string; label: string };

/** Subcategories keyed by main category id (lowercase). */
export const SUBCATEGORIES_BY_MAIN: Record<string, Subcategory[]> = {
  gifts: [
    { id: 'hampers', label: 'Hampers' },
    { id: 'birthday', label: 'Birthday' },
    { id: 'anniversary', label: 'Anniversary' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'new-baby', label: 'New Baby' },
  ],
  flowers: [
    { id: 'roses', label: 'Roses' },
    { id: 'bouquets', label: 'Bouquets' },
    { id: 'orchids', label: 'Orchids' },
    { id: 'plants', label: 'Plants' },
    { id: 'seasonal', label: 'Seasonal' },
  ],
  chocolate: [
    { id: 'truffles', label: 'Truffles' },
    { id: 'dark', label: 'Dark' },
    { id: 'gift-boxes', label: 'Gift Boxes' },
    { id: 'ruby', label: 'Ruby' },
    { id: 'pralines', label: 'Pralines' },
  ],
  premium: [
    { id: 'limited', label: 'Limited' },
    { id: 'signature', label: 'Signature' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'imported', label: 'Imported' },
  ],
  romance: [
    { id: 'valentines', label: "Valentine's" },
    { id: 'date-night', label: 'Date Night' },
    { id: 'proposal', label: 'Proposal' },
    { id: 'just-because', label: 'Just Because' },
  ],
};

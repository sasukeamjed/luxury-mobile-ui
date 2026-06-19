import { PRODUCTS, type Product } from './products';

export const FAVORITE_PRODUCT_IDS = [
  'rose-velvet-bouquet',
  'noir-luxe-gift-box',
  'midnight-truffles',
] as const;

export function getFavoriteProducts(): Product[] {
  return FAVORITE_PRODUCT_IDS.map(
    (id) => PRODUCTS.find((product) => product.id === id),
  ).filter((product): product is Product => product != null);
}

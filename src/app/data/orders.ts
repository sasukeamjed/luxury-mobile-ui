export type WooCommerceOrderStatus =
  | 'pending'
  | 'processing'
  | 'on-hold'
  | 'completed'
  | 'cancelled'
  | 'refunded'
  | 'failed';

export type Order = {
  id: string;
  orderNumber: number;
  productName: string;
  imageUrl: string;
  customerName: string;
  location: string;
  createdAt: string;
  total: string;
  tax: string;
  quantity: number;
  status: WooCommerceOrderStatus;
};

export const ORDER_STATUS_FILTERS: { key: 'all' | WooCommerceOrderStatus; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'pending', label: 'Pending' },
  { key: 'processing', label: 'Processing' },
  { key: 'on-hold', label: 'On Hold' },
  { key: 'completed', label: 'Completed' },
  { key: 'cancelled', label: 'Cancelled' },
  { key: 'refunded', label: 'Refunded' },
  { key: 'failed', label: 'Failed' },
];

export const ORDER_STATUS_META: Record<
  WooCommerceOrderStatus,
  { label: string; className: string }
> = {
  pending: { label: 'Pending payment', className: 'text-[#c9922e]' },
  processing: { label: 'Processing', className: 'text-[#d4843f]' },
  'on-hold': { label: 'On hold', className: 'text-[#7a6c63]' },
  completed: { label: 'Completed', className: 'text-[#2f8f5b]' },
  cancelled: { label: 'Cancelled', className: 'text-[#9a6b6b]' },
  refunded: { label: 'Refunded', className: 'text-[#7f6b9a]' },
  failed: { label: 'Failed', className: 'text-[#b54a4a]' },
};

export const ORDERS: Order[] = [
  {
    id: 'ord-333',
    orderNumber: 333,
    productName: 'Rose Velvet Bouquet',
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&h=400&fit=crop',
    customerName: 'Amjad',
    location: 'Muscat, OM',
    createdAt: '16 Jun, 12:56',
    total: '23.00 OMR',
    tax: '0.00 OMR',
    quantity: 1,
    status: 'completed',
  },
  {
    id: 'ord-334',
    orderNumber: 334,
    productName: 'Noir Luxe Gift Box',
    imageUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop',
    customerName: 'Sara',
    location: 'Salalah, OM',
    createdAt: '15 Jun, 09:14',
    total: '48.50 OMR',
    tax: '2.10 OMR',
    quantity: 1,
    status: 'processing',
  },
  {
    id: 'ord-335',
    orderNumber: 335,
    productName: 'Midnight Truffles',
    imageUrl: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop',
    customerName: 'Layla',
    location: 'Nizwa, OM',
    createdAt: '14 Jun, 18:22',
    total: '12.00 OMR',
    tax: '0.00 OMR',
    quantity: 2,
    status: 'pending',
  },
  {
    id: 'ord-336',
    orderNumber: 336,
    productName: 'Orchid Grace Basket',
    imageUrl: 'https://images.unsplash.com/photo-1490759847868-88b447b91e0a?w=400&h=400&fit=crop',
    customerName: 'Omar',
    location: 'Sohar, OM',
    createdAt: '13 Jun, 11:05',
    total: '35.00 OMR',
    tax: '1.50 OMR',
    quantity: 1,
    status: 'on-hold',
  },
  {
    id: 'ord-337',
    orderNumber: 337,
    productName: 'Champagne Bloom Box',
    imageUrl: 'https://images.unsplash.com/photo-1518895949257-762f1c8866f0?w=400&h=400&fit=crop',
    customerName: 'Fatima',
    location: 'Muscat, OM',
    createdAt: '12 Jun, 16:40',
    total: '29.00 OMR',
    tax: '0.00 OMR',
    quantity: 1,
    status: 'cancelled',
  },
  {
    id: 'ord-338',
    orderNumber: 338,
    productName: 'Velvet Macaron Tower',
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=400&fit=crop',
    customerName: 'Hassan',
    location: 'Sur, OM',
    createdAt: '11 Jun, 08:18',
    total: '18.00 OMR',
    tax: '0.00 OMR',
    quantity: 1,
    status: 'refunded',
  },
  {
    id: 'ord-339',
    orderNumber: 339,
    productName: 'Garden Peony Wrap',
    imageUrl: 'https://images.unsplash.com/photo-1464349095439-e68a09fa0e30?w=400&h=400&fit=crop',
    customerName: 'Noor',
    location: 'Ibri, OM',
    createdAt: '10 Jun, 20:33',
    total: '26.00 OMR',
    tax: '0.00 OMR',
    quantity: 1,
    status: 'failed',
  },
  {
    id: 'ord-340',
    orderNumber: 340,
    productName: 'Signature Hamper',
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop',
    customerName: 'Amjad',
    location: 'Muscat, OM',
    createdAt: '9 Jun, 14:02',
    total: '54.00 OMR',
    tax: '2.40 OMR',
    quantity: 1,
    status: 'completed',
  },
];

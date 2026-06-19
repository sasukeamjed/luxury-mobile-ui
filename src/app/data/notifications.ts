export type NotificationType = 'order' | 'promo' | 'reminder' | 'update';

export type AppNotification = {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  group: 'today' | 'earlier';
  read: boolean;
  imageUrl?: string;
  productId?: string;
};

export const NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif-1',
    type: 'order',
    title: 'Order on its way',
    message: 'Your Noir Luxe Gift Box has shipped and arrives tomorrow by 6 PM.',
    time: '12 min ago',
    group: 'today',
    read: false,
    imageUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop',
    productId: 'noir-luxe-gift-box',
  },
  {
    id: 'notif-2',
    type: 'promo',
    title: "Valentine's Collection",
    message: 'Early access to our limited rose & truffle pairings — 15% off until Friday.',
    time: '2 hr ago',
    group: 'today',
    read: false,
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&h=400&fit=crop',
  },
  {
    id: 'notif-3',
    type: 'reminder',
    title: 'Anniversary in 3 days',
    message: 'A curated reminder for your upcoming celebration. Browse romantic bouquets now.',
    time: '5 hr ago',
    group: 'today',
    read: true,
  },
  {
    id: 'notif-4',
    type: 'update',
    title: 'Back in stock',
    message: 'Midnight Truffles are available again — only 24 boxes left in this batch.',
    time: 'Yesterday',
    group: 'earlier',
    read: false,
    imageUrl: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=400&fit=crop',
    productId: 'midnight-truffles',
  },
  {
    id: 'notif-5',
    type: 'order',
    title: 'Delivery confirmed',
    message: 'Rose Velvet Bouquet was delivered to the recipient. View gift message details.',
    time: 'Yesterday',
    group: 'earlier',
    read: true,
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&h=400&fit=crop',
    productId: 'rose-velvet-bouquet',
  },
  {
    id: 'notif-6',
    type: 'promo',
    title: 'Premium member perk',
    message: 'Complimentary silk ribbon upgrade on all hampers this week.',
    time: '2 days ago',
    group: 'earlier',
    read: true,
  },
];

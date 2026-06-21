import { type ElementType, useMemo, useState } from 'react';
import {
  Bell,
  CalendarHeart,
  CheckCheck,
  Gift,
  Sparkles,
  Tag,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router';
import { DraggableScrollRow } from '../components/DraggableScrollRow';
import { MobileShell } from '../components/MobileShell';
import {
  NOTIFICATIONS,
  type AppNotification,
  type NotificationType,
} from '../data/notifications';

type FilterKey = 'all' | NotificationType;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'order', label: 'Orders' },
  { key: 'promo', label: 'Offers' },
  { key: 'reminder', label: 'Reminders' },
  { key: 'update', label: 'Updates' },
];

const TYPE_META: Record<
  NotificationType,
  { icon: ElementType; accent: string; chip: string }
> = {
  order: {
    icon: Truck,
    accent: 'from-[#9a4726] to-[#b85a32]',
    chip: 'bg-[#fee0cf]/55 text-[#9a4726]',
  },
  promo: {
    icon: Tag,
    accent: 'from-[#8b3f22] to-[#ab5a35]',
    chip: 'bg-[#f8e8dc] text-[#8b3f22]',
  },
  reminder: {
    icon: CalendarHeart,
    accent: 'from-[#a04a2d] to-[#c26a45]',
    chip: 'bg-[#fce8df] text-[#a04a2d]',
  },
  update: {
    icon: Sparkles,
    accent: 'from-[#7f331d] to-[#9a4726]',
    chip: 'bg-[#f3e2d8] text-[#7f331d]',
  },
};

function NotificationItem({
  notification,
  onMarkRead,
}: {
  notification: AppNotification;
  onMarkRead: (id: string) => void;
}) {
  const meta = TYPE_META[notification.type];
  const Icon = meta.icon;
  const content = (
    <div
      className={`flex items-start gap-3 rounded-2xl border px-4 py-4 transition ${
        notification.read
          ? 'border-[rgba(154,71,38,0.08)] bg-white'
          : 'border-[rgba(154,71,38,0.16)] bg-white shadow-[0_8px_22px_rgba(154,71,38,0.1)]'
      }`}
    >
      {notification.imageUrl ? (
        <div className="relative shrink-0">
          <img
            src={notification.imageUrl}
            alt=""
            className="h-12 w-12 rounded-xl object-cover ring-1 ring-[#eadfd7]"
          />
          <span
            className={`absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br text-white shadow-sm ${meta.accent}`}
          >
            <Icon className="h-2.5 w-2.5" />
          </span>
        </div>
      ) : (
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-[0_4px_12px_rgba(154,71,38,0.2)] ${meta.accent}`}
        >
          <Icon className="h-5 w-5" />
        </span>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className={`text-sm ${notification.read ? 'font-medium text-[#4a4a4a]' : 'font-semibold text-[#1a1a1a]'}`}>
            {notification.title}
          </p>
          {!notification.read ? (
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#9a4726]" />
          ) : null}
        </div>
        <p className="mt-1 text-xs leading-relaxed text-[#8a817a]">{notification.message}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${meta.chip}`}>
            {notification.type}
          </span>
          <span className="text-[11px] text-[#b0a59d]">{notification.time}</span>
        </div>
      </div>
    </div>
  );

  if (notification.productId) {
    return (
      <Link
        to={`/product/${notification.productId}`}
        onClick={() => onMarkRead(notification.id)}
        className="block"
      >
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={() => onMarkRead(notification.id)} className="block w-full text-left">
      {content}
    </button>
  );
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const unreadCount = useMemo(
    () => notifications.filter((item) => !item.read).length,
    [notifications],
  );

  const filteredNotifications = useMemo(
    () =>
      activeFilter === 'all'
        ? notifications
        : notifications.filter((item) => item.type === activeFilter),
    [notifications, activeFilter],
  );

  const todayItems = filteredNotifications.filter((item) => item.group === 'today');
  const earlierItems = filteredNotifications.filter((item) => item.group === 'earlier');

  const markRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item)),
    );
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  return (
    <MobileShell>
          <div className="flex h-12 items-center justify-between">
            <span className="text-sm text-[#1a1a1a]">9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
              <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
              <div className="h-3 w-6 rounded-sm border border-[#1a1a1a] bg-[#1a1a1a]" />
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-[rgba(154,71,38,0.12)] bg-white p-5 shadow-[0_12px_34px_rgba(61,29,22,0.08)]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9a4726] to-[#b85a32] text-white shadow-[0_4px_12px_rgba(154,71,38,0.24)]">
                  <Bell className="h-6 w-6" />
                  {unreadCount > 0 ? (
                    <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1a1a1a] px-1 text-[10px] font-semibold text-white">
                      {unreadCount}
                    </span>
                  ) : null}
                </div>
                <div>
                  <h1 className="text-[#1a1a1a]">Notifications</h1>
                  <p className="text-xs text-[#737373]">
                    {unreadCount > 0
                      ? `${unreadCount} unread update${unreadCount === 1 ? '' : 's'}`
                      : 'You are all caught up'}
                  </p>
                </div>
              </div>
              {unreadCount > 0 ? (
                <button
                  type="button"
                  onClick={markAllRead}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[rgba(154,71,38,0.18)] bg-[#fff8f3] px-3 py-2 text-[11px] font-medium text-[#9a4726] transition hover:bg-[#fdf0e6]"
                >
                  <CheckCheck className="h-3.5 w-3.5" />
                  Mark all read
                </button>
              ) : null}
            </div>
          </div>

          <DraggableScrollRow className="mt-4 flex gap-2 pb-1">
            {FILTERS.map((filter) => {
              const active = activeFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-medium transition-all ${
                    active
                      ? 'border-transparent bg-gradient-to-br from-[#9a4726] to-[#b85a32] text-white shadow-[0_6px_18px_rgba(154,71,38,0.35)]'
                      : 'border-[#9a4726]/20 bg-[#fffdfa] text-[#6b4e3f]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </DraggableScrollRow>

          <div className="mt-5 space-y-5 pb-8">
            {todayItems.length > 0 ? (
              <section>
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9a4726]/72">
                  Today
                </p>
                <div className="space-y-2.5">
                  {todayItems.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      onMarkRead={markRead}
                    />
                  ))}
                </div>
              </section>
            ) : null}

            {earlierItems.length > 0 ? (
              <section>
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9a4726]/72">
                  Earlier
                </p>
                <div className="space-y-2.5">
                  {earlierItems.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      onMarkRead={markRead}
                    />
                  ))}
                </div>
              </section>
            ) : null}

            {filteredNotifications.length === 0 ? (
              <div className="rounded-3xl border border-[rgba(154,71,38,0.12)] bg-white px-6 py-10 text-center shadow-[0_12px_34px_rgba(61,29,22,0.06)]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fee0cf]/45 text-[#9a4726]">
                  <Gift className="h-7 w-7" />
                </div>
                <p className="mt-4 text-sm font-medium text-[#1a1a1a]">No notifications here</p>
                <p className="mt-1 text-xs text-[#8a8a8a]">
                  Updates about orders, offers, and reminders will appear in this view.
                </p>
              </div>
            ) : null}
          </div>
    </MobileShell>
  );
}

import { useMemo, useState } from 'react';
import { ChevronLeft, Package } from 'lucide-react';
import { Link } from 'react-router';
import { DraggableScrollRow } from '../components/DraggableScrollRow';
import { MobileShell } from '../components/MobileShell';
import {
  ORDER_STATUS_FILTERS,
  ORDER_STATUS_META,
  ORDERS,
  type Order,
  type WooCommerceOrderStatus,
} from '../data/orders';

type FilterKey = 'all' | WooCommerceOrderStatus;

function OrderCard({ order }: { order: Order }) {
  const statusMeta = ORDER_STATUS_META[order.status];

  return (
    <article className="overflow-hidden rounded-3xl border border-[rgba(154,71,38,0.12)] bg-white shadow-[0_8px_24px_rgba(61,29,22,0.08)]">
      <div className="flex gap-3 p-4">
        <img
          src={order.imageUrl}
          alt=""
          className="h-16 w-16 shrink-0 rounded-2xl object-cover ring-1 ring-[#eadfd7]"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-[#1a1a1a]">{order.productName}</p>
          <p className="mt-1 text-xs text-[#6b5c54]">
            {order.customerName} | {order.location}
          </p>
          <div className="mt-2 space-y-0.5 text-[11px] text-[#a39a93]">
            <p>Created on: {order.createdAt}</p>
            <p>Order No.: {order.orderNumber}</p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[rgba(154,71,38,0.08)] bg-[#faf6f2] px-4 py-3">
        <div className="absolute inset-y-2 left-0 w-1 rounded-r-full bg-gradient-to-b from-[#b05a34] to-[#9a4726]" />
        <div className="grid grid-cols-4 gap-2 pl-3 text-center">
          <div>
            <p className="text-[10px] text-[#a39a93]">Total</p>
            <p className="mt-0.5 text-[11px] font-semibold text-[#1a1a1a]">{order.total}</p>
          </div>
          <div>
            <p className="text-[10px] text-[#a39a93]">Tax</p>
            <p className="mt-0.5 text-[11px] font-semibold text-[#1a1a1a]">{order.tax}</p>
          </div>
          <div>
            <p className="text-[10px] text-[#a39a93]">Qty</p>
            <p className="mt-0.5 text-[11px] font-semibold text-[#1a1a1a]">{order.quantity}</p>
          </div>
          <div>
            <p className="text-[10px] text-[#a39a93]">Status</p>
            <p className={`mt-0.5 text-[11px] font-semibold ${statusMeta.className}`}>
              {statusMeta.label}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function OrderHistoryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filteredOrders = useMemo(
    () => (activeFilter === 'all' ? ORDERS : ORDERS.filter((order) => order.status === activeFilter)),
    [activeFilter],
  );

  return (
    <MobileShell>
      <div className="flex h-12 items-center justify-between">
        <Link
          to="/profile"
          className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white px-3 py-2 text-sm font-medium text-[#9a4726]"
        >
          <ChevronLeft className="h-4 w-4" />
          Profile
        </Link>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
          <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
          <div className="h-3 w-6 rounded-sm border border-[#1a1a1a] bg-[#1a1a1a]" />
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-[#1a1a1a]">Order History</h1>
        <p className="mt-1 text-xs text-[#8a817a]">Track deliveries, payments, and order updates.</p>
      </div>

      <DraggableScrollRow className="mt-4 flex gap-2 pb-1">
        {ORDER_STATUS_FILTERS.map((filter) => {
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

      <div className="mt-5 space-y-3">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => <OrderCard key={order.id} order={order} />)
        ) : (
          <div className="rounded-3xl border border-[rgba(154,71,38,0.12)] bg-white px-6 py-10 text-center shadow-[0_12px_34px_rgba(61,29,22,0.06)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fee0cf]/45 text-[#9a4726]">
              <Package className="h-7 w-7" />
            </div>
            <p className="mt-4 text-sm font-medium text-[#1a1a1a]">No orders in this status</p>
            <p className="mt-1 text-xs text-[#8a8a8a]">Try another filter to view your order history.</p>
          </div>
        )}
      </div>
    </MobileShell>
  );
}

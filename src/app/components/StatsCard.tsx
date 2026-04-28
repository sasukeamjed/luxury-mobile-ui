import { TrendingUp } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string;
  trend?: string;
}

export function StatsCard({ label, value, trend }: StatsCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-[#FEE0CF]/20 rounded-2xl p-5 shadow-[0_4px_20px_rgba(154,71,38,0.06)] border border-[rgba(154,71,38,0.08)]">
      <p className="text-sm text-[#737373] mb-2">{label}</p>
      <div className="flex items-end justify-between">
        <h2 className="text-[#1a1a1a]">{value}</h2>
        {trend && (
          <div className="flex items-center gap-1 text-[#9a4726] bg-[#FEE0CF] px-2 py-1 rounded-lg">
            <TrendingUp className="w-3.5 h-3.5" />
            <span className="text-xs">{trend}</span>
          </div>
        )}
      </div>
    </div>
  );
}

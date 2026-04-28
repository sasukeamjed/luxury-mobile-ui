import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  variant?: 'primary' | 'secondary';
}

export function ActionButton({ icon: Icon, label, variant = 'primary' }: ActionButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <button
      className={`flex-1 flex flex-col items-center gap-3 py-6 rounded-2xl transition-all ${
        isPrimary
          ? 'bg-[#9a4726] text-white shadow-[0_8px_24px_rgba(154,71,38,0.25)] hover:shadow-[0_12px_32px_rgba(154,71,38,0.35)]'
          : 'bg-[#FEE0CF] text-[#9a4726] shadow-[0_4px_16px_rgba(254,224,207,0.4)] hover:shadow-[0_8px_24px_rgba(254,224,207,0.6)]'
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
        isPrimary ? 'bg-white/20' : 'bg-white/60'
      }`}>
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-sm">{label}</span>
    </button>
  );
}

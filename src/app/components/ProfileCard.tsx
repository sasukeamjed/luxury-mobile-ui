import { Heart, MessageCircle, Share2 } from 'lucide-react';

export function ProfileCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9a4726] to-[#b85a32] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(154,71,38,0.2)]">
          <span className="text-2xl">✨</span>
        </div>
        <div className="flex-1">
          <h3 className="text-[#1a1a1a] mb-1">Sophie Laurent</h3>
          <p className="text-sm text-[#737373]">Premium Member</p>
        </div>
        <div className="w-2 h-2 rounded-full bg-[#9a4726]"></div>
      </div>

      <p className="text-[#1a1a1a] mb-6 leading-relaxed">
        "Exceptional experience from start to finish. The attention to detail and premium quality exceeded all expectations."
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-[rgba(0,0,0,0.04)]">
        <button className="flex items-center gap-2 text-[#737373] hover:text-[#9a4726] transition-colors">
          <Heart className="w-5 h-5" />
          <span className="text-sm">248</span>
        </button>
        <button className="flex items-center gap-2 text-[#737373] hover:text-[#9a4726] transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">32</span>
        </button>
        <button className="flex items-center gap-2 text-[#737373] hover:text-[#9a4726] transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import { Sparkles, CheckCircle, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideUp bg-[#121215] text-white border border-luxe-gold/60 shadow-gold-glow rounded-2xl p-4 flex items-center gap-3 max-w-md">
      <div className="w-8 h-8 rounded-full bg-luxe-gold/20 flex items-center justify-center text-luxe-gold border border-luxe-gold/50">
        <Sparkles className="w-4 h-4" />
      </div>
      <p className="text-xs font-semibold text-gray-200 flex-1">
        {message}
      </p>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-white p-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

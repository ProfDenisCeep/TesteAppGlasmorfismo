import { ReactNode } from 'react';

interface GlassCardProps {
  children?: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl ${className}`}
      style={{
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Destaque sutil na borda superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      {/* Conteúdo do cartão */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Brilho sutil no canto superior esquerdo */}
      <div 
        className="absolute -top-1 -left-1 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}

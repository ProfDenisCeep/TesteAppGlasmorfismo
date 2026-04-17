import { GlassCard } from "./components/GlassCard";

export default function App() {
  return (
    <div 
      className="size-full flex items-center justify-center p-8"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1639493115941-a70fcef4f715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwY29sb3JmdWwlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NjMxMjA0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <GlassCard className="max-w-md w-full p-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-white">
              Efeito Glassmorphism
            </h2>
            <p className="text-white/80 text-sm">
              Um cartão de vidro fosco com efeitos de desfoque e destaques de borda sutis
            </p>
          </div>
          
          <div className="h-px bg-white/20" />
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white text-xl">✨</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Backdrop Blur</h3>
                <p className="text-white/70 text-sm">Desfoque de fundo dinâmico</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white text-xl">💎</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Bordas Sutis</h3>
                <p className="text-white/70 text-sm">Destaques em gradiente</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white text-xl">🌈</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Transparência</h3>
                <p className="text-white/70 text-sm">Efeito de vidro moderno</p>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-4 px-6 py-3 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-medium transition-all duration-200 hover:scale-[1.02]">
            Explorar Mais
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
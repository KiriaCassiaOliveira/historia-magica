
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  darkMode?: boolean;
  currentView: string;
}

const Layout: React.FC<LayoutProps> = ({ children, darkMode = false, currentView }) => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${darkMode ? 'bg-[#0a0f1e] text-indigo-100' : 'bg-[#f0f4ff] text-slate-800'}`}>
      <header className={`p-4 sticky top-4 z-50 mx-4 mt-4 rounded-3xl shadow-lg border-2 transition-all ${darkMode ? 'border-slate-800 bg-slate-900/90' : 'border-white bg-white/90'}`}>
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate('#/')}
            className="flex items-center gap-3 group"
          >
            <div className="bg-indigo-100 p-2 rounded-2xl group-hover:scale-110 transition-transform">
              <span className="text-2xl">✨</span>
            </div>
            <h1 className={`font-bold text-2xl tracking-tight font-story ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
              Histórias Mágicas
            </h1>
          </button>
          <nav className="flex gap-2 sm:gap-4">
            <button 
              onClick={() => navigate('#/')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${currentView === 'home' ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-50 text-slate-600'}`}
            >
              Início
            </button>
            <button 
              onClick={() => navigate('#/library')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${currentView === 'library' ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-50 text-slate-600'}`}
            >
              <span>📚</span> <span className="hidden sm:inline">Meus Livros</span>
            </button>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto p-4 sm:p-8 relative min-h-[70vh]">
        {!darkMode && (
          <div className="absolute top-20 -left-10 text-4xl opacity-20 select-none pointer-events-none float-animation" style={{animationDelay: '1s'}}>☁️</div>
        )}
        <div className="relative z-10">
          {children}
        </div>
      </main>
      <footer className={`mt-20 p-10 border-t-4 border-dashed ${darkMode ? 'border-slate-800 text-slate-500' : 'border-indigo-100 text-slate-400'} text-center text-sm`}>
        <div className="text-3xl mb-4">🌙✨🧸</div>
        <p className="font-story text-lg">Criado com amor para pequenos sonhadores.</p>
        <p className="mt-4 text-xs max-w-md mx-auto opacity-70">
          Os dados são usados apenas para gerar a história. Privacidade total para sua família.
        </p>
      </footer>
    </div>
  );
};

export default Layout;

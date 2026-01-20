
import React from 'react';
import { Story } from '../types';

interface LibraryProps {
  stories: Story[];
  onSelect: (story: Story) => void;
  onDelete: (id: string) => void;
}

const Library: React.FC<LibraryProps> = ({ stories, onSelect, onDelete }) => {
  if (stories.length === 0) {
    return (
      <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
        <div className="text-7xl mb-6 opacity-30 float-animation">📚</div>
        <h3 className="text-3xl font-bold text-slate-800 font-story">Sua biblioteca está vazia</h3>
        <p className="text-slate-500 mt-2 font-medium">As histórias que você criar e guardar aparecerão aqui.</p>
        <button 
          onClick={() => window.location.hash = '#/form'}
          className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg"
        >
          Criar minha primeira história
        </button>
      </div>
    );
  }

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-end border-b-4 border-indigo-100 pb-6">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 font-story">Seu Baú de Histórias</h2>
          <p className="text-slate-500 font-medium italic">Onde vivem todas as suas aventuras...</p>
        </div>
        <div className="text-indigo-400 font-bold text-sm bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100">
          {stories.length} {stories.length === 1 ? 'História' : 'Histórias'}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map(s => (
          <div 
            key={s.id}
            className="bg-white rounded-[2.5rem] overflow-hidden shadow-md border-4 border-white hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group flex flex-col h-full relative"
            onClick={() => onSelect(s)}
          >
            {/* Botão Apagar - Posicionado de forma absoluta para melhor clique */}
            <button 
              onClick={(e) => handleDelete(e, s.id)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-red-50 text-red-500 rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-all scale-0 group-hover:scale-100 border-2 border-red-100"
              title="Remover do baú"
            >
              🗑️
            </button>

            <div className="relative h-48 overflow-hidden">
              {s.imageUrl ? (
                <img src={s.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={s.title} />
              ) : (
                <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-5xl">📖</div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-bold text-sm">Abrir Livro ➔</span>
              </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase font-black text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
                      {s.config.childName}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    {new Date(s.createdAt).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-800 line-clamp-2 font-story leading-tight">{s.title}</h4>
              </div>
              <p className="text-sm text-slate-500 line-clamp-2 mb-4 italic">
                "{s.content.substring(0, 80)}..."
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;

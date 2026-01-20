
import React, { useState, useRef, useEffect } from 'react';
import { Story } from '../types';
import { generateAudio } from '../services/geminiService';

interface StoryViewProps {
  story: Story;
  onSave: () => void;
  onRegenerate: () => void;
  isSaved: boolean;
}

const StoryView: React.FC<StoryViewProps> = ({ story, onSave, onRegenerate, isSaved }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsPlaying(false);
    setLoadingAudio(false);
  }, [story]);

  const handlePlayAudio = async () => {
    if (isPlaying) {
      setIsPlaying(false);
      // Aqui pararia o áudio real
      return;
    }

    setLoadingAudio(true);
    const base64 = await generateAudio(story.content);
    setLoadingAudio(false);
    
    if (base64) {
      setIsPlaying(true);
      // Simulação de áudio para este protótipo
      alert("A fada contadora está começando a ler... (Audio em processamento)");
    } else {
      alert("Não conseguimos carregar o áudio agora, mas você pode ler a história abaixo!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className={`p-8 sm:p-12 rounded-[3rem] shadow-2xl transition-colors duration-1000 ${story.config.bedtimeMode ? 'bg-slate-900 text-indigo-100 shadow-indigo-900/20' : 'bg-white text-slate-800'}`}>
        
        {story.imageUrl && (
          <div className="relative group">
            <img 
              src={story.imageUrl} 
              alt={story.title} 
              className="w-full h-80 object-cover rounded-3xl mb-10 shadow-lg border-4 border-white/10 group-hover:scale-[1.02] transition-transform"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        )}

        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight font-story">
            {story.title}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm opacity-70">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">Protagonista: {story.config.childName}</span>
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">Tema: {story.config.theme}</span>
          </div>
        </div>

        <div className="prose prose-indigo prose-xl max-w-none text-justify leading-relaxed font-medium whitespace-pre-wrap font-sans opacity-90">
          {story.content}
        </div>

        <div className="mt-16 pt-10 border-t border-indigo-500/10 flex flex-wrap justify-center gap-4">
          <button 
            onClick={handlePlayAudio}
            disabled={loadingAudio}
            className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all ${isPlaying ? 'bg-yellow-400 text-yellow-900' : 'bg-indigo-600 text-white hover:bg-indigo-700'} disabled:opacity-50`}
          >
            {loadingAudio ? '🪄 Preparando voz...' : isPlaying ? '⏸︎ Pausar Narração' : '🔊 Ouvir História'}
          </button>
          
          <button 
            onClick={onSave}
            disabled={isSaved}
            className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all border-2 ${isSaved ? 'bg-green-50 text-green-600 border-green-200 cursor-default' : 'border-indigo-600 text-indigo-600 hover:bg-indigo-50'}`}
          >
            {isSaved ? '✅ No seu Baú' : '💾 Guardar no Baú'}
          </button>

          <button 
            onClick={onRegenerate}
            className="flex items-center gap-3 px-8 py-4 rounded-full text-slate-400 font-medium hover:text-indigo-500 transition-all"
          >
            🔄 Criar outra versão
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryView;

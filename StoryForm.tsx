
import React, { useState } from 'react';
import { StoryConfig, StoryTheme, StoryMood, StoryValue, StoryLength } from '../types';

interface StoryFormProps {
  onSubmit: (config: StoryConfig) => void;
}

const StoryForm: React.FC<StoryFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<StoryConfig>({
    childName: '',
    theme: StoryTheme.FANTASY,
    mood: StoryMood.CALM,
    length: StoryLength.SHORT,
    bedtimeMode: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.childName) return;
    onSubmit(formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 sm:p-16 rounded-[4rem] shadow-2xl border-4 border-indigo-100 relative">
      {/* Decoração lateral estilo caderno */}
      <div className="absolute left-4 top-10 bottom-10 flex flex-col gap-4 opacity-10 pointer-events-none">
        {[...Array(10)].map((_, i) => <div key={i} className="w-4 h-4 rounded-full bg-indigo-500"></div>)}
      </div>

      <h2 className="text-4xl font-extrabold text-slate-900 mb-10 text-center font-story decoration-indigo-200 underline">
        Vamos Criar a Magia!
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-indigo-50/50 p-6 rounded-[2.5rem] border-2 border-dashed border-indigo-200">
          <label className="block text-lg font-bold text-indigo-900 mb-3 ml-2">Qual o nome do herói ou heroína? 🧒👧</label>
          <input 
            type="text"
            required
            value={formData.childName}
            onChange={e => setFormData({ ...formData, childName: e.target.value })}
            placeholder="Ex: Alice, João, Pedro..."
            className="w-full px-6 py-5 rounded-[2rem] bg-white border-4 border-transparent focus:border-indigo-400 outline-none text-xl font-bold transition-all shadow-inner"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700 ml-4 uppercase tracking-wider">Quantos anos tem?</label>
            <select 
              value={formData.ageGroup}
              onChange={e => setFormData({ ...formData, ageGroup: e.target.value })}
              className="w-full px-6 py-4 rounded-[2rem] bg-indigo-50 border-4 border-transparent focus:border-indigo-300 outline-none font-bold"
            >
              <option value="">Qualquer idade</option>
              <option value="2-4">2 a 4 aninhos</option>
              <option value="5-7">5 a 7 anos</option>
              <option value="8-10">8 a 10 anos</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700 ml-4 uppercase tracking-wider">Qual o tema?</label>
            <select 
              value={formData.theme}
              onChange={e => setFormData({ ...formData, theme: e.target.value as StoryTheme })}
              className="w-full px-6 py-4 rounded-[2rem] bg-indigo-50 border-4 border-transparent focus:border-indigo-300 outline-none font-bold"
            >
              {Object.values(StoryTheme).map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700 ml-4 uppercase tracking-wider">Vibe da História</label>
            <select 
              value={formData.mood}
              onChange={e => setFormData({ ...formData, mood: e.target.value as StoryMood })}
              className="w-full px-6 py-4 rounded-[2rem] bg-indigo-50 border-4 border-transparent focus:border-indigo-300 outline-none font-bold"
            >
              {Object.values(StoryMood).map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700 ml-4 uppercase tracking-wider">Lição Especial</label>
            <select 
              value={formData.value}
              onChange={e => setFormData({ ...formData, value: e.target.value as StoryValue })}
              className="w-full px-6 py-4 rounded-[2rem] bg-indigo-50 border-4 border-transparent focus:border-indigo-300 outline-none font-bold"
            >
              <option value="">Surpresa da fada!</option>
              {Object.values(StoryValue).map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
        </div>

        <div className="bg-yellow-50 p-8 rounded-[3rem] border-2 border-yellow-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🌙</div>
            <div>
               <h4 className="font-bold text-indigo-900">Modo Hora de Dormir</h4>
               <p className="text-xs text-indigo-700/70 font-bold">História focada em relaxar</p>
            </div>
          </div>
          <button 
            type="button"
            onClick={() => setFormData({ ...formData, bedtimeMode: !formData.bedtimeMode })}
            className={`w-20 h-10 rounded-full relative transition-colors ${formData.bedtimeMode ? 'bg-indigo-600' : 'bg-slate-300'}`}
          >
            <div className={`absolute top-1 w-8 h-8 rounded-full bg-white shadow-md transition-all ${formData.bedtimeMode ? 'left-11' : 'left-1'}`}></div>
          </button>
        </div>

        <div className="pt-6">
          <button 
            type="submit"
            className="bubbly-button w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 py-6 rounded-[2.5rem] text-2xl font-black shadow-xl border-b-8 border-yellow-600 transition-all flex items-center justify-center gap-4"
          >
            Abrir Livro Mágico! 📖✨
          </button>
          <div className="flex items-center justify-center gap-4 mt-6 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">
            <span className="h-px bg-slate-200 flex-grow"></span>
            <span>Seguro e Educativo</span>
            <span className="h-px bg-slate-200 flex-grow"></span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StoryForm;

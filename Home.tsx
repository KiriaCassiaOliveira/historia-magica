
import React from 'react';

interface HomeProps {
  onStart: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="space-y-20 pt-10">
      <section className="text-center space-y-8 relative">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm border-2 border-yellow-200 mb-2">
          <span>🌟</span> Onde a imaginação ganha vida
        </div>
        <h2 className="text-5xl sm:text-7xl font-extrabold text-slate-900 leading-tight font-story">
          Crie Contos Únicos <br/>
          <span className="text-indigo-600 underline decoration-wavy decoration-yellow-400">Para Seu Filho(a)</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
          Imagine uma história onde seu pequeno é o herói! Escolha o tema, o clima e deixe nossa IA criar 
          um conto inesquecível e seguro para a hora de dormir ou para qualquer momento mágico do dia. 🧸
        </p>
        <div className="pt-6">
          <button 
            onClick={onStart}
            className="bubbly-button bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-6 rounded-[2.5rem] text-2xl font-bold shadow-2xl shadow-indigo-200 border-b-8 border-indigo-800 transition-all flex items-center gap-4 mx-auto"
          >
            Criar Nova História ✨
          </button>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-8">
        {[
          { icon: '🎨', title: 'Totalmente Pessoal', desc: 'A criança vira o personagem principal da aventura.', color: 'bg-orange-50' },
          { icon: '🌙', title: 'Hora de Dormir', desc: 'Narrativas suaves que ajudam a relaxar e pegar no sono.', color: 'bg-blue-50' },
          { icon: '🔐', title: '100% Seguro', desc: 'Conteúdo filtrado para ser sempre gentil e educativo.', color: 'bg-pink-50' }
        ].map((feat, i) => (
          <div key={i} className={`${feat.color} p-10 rounded-[3rem] border-4 border-white shadow-xl magic-card text-center transition-transform hover:-translate-y-2`}>
            <div className="text-5xl mb-6 float-animation" style={{animationDelay: `${i * 0.5}s`}}>{feat.icon}</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 font-story">{feat.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">{feat.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-[4rem] p-8 sm:p-16 border-4 border-indigo-50 shadow-inner text-center">
        <h3 className="text-4xl font-extrabold text-indigo-900 font-story mb-6">Como funciona?</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 text-slate-600 font-medium">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-indigo-200">01</div>
            <p>Diga o nome da criança</p>
          </div>
          <div className="hidden sm:block text-indigo-100 text-4xl">➜</div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-indigo-200">02</div>
            <p>Escolha um tema favorito</p>
          </div>
          <div className="hidden sm:block text-indigo-100 text-4xl">➜</div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-indigo-200">03</div>
            <p>Leia e ouça juntos!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="py-10 space-y-12 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-extrabold text-slate-900 font-story">Escolha seu Caminho Mágico</h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">Mais histórias, mais formatos e magia ilimitada para sua família.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Plano Mensal */}
        <div className="bg-white p-10 rounded-[3rem] border-4 border-indigo-100 shadow-xl relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 bg-indigo-600 text-white px-6 py-2 rounded-bl-3xl font-bold text-sm">POPULAR</div>
          <h3 className="text-3xl font-bold text-indigo-900 mb-2">Assinante Pro</h3>
          <p className="text-slate-500 mb-6 font-medium">Histórias ilimitadas e exportação PDF</p>
          <div className="text-5xl font-black text-slate-800 mb-8">R$ 29<span className="text-xl">,90/mês</span></div>
          
          <ul className="space-y-4 mb-10 flex-grow">
            {['Histórias Ilimitadas', 'Exportar para PDF', 'Até 5 Perfis de Crianças', 'Suporte Prioritário'].map(f => (
              <li key={f} className="flex items-center gap-3 font-medium">
                <span className="text-green-500">✅</span> {f}
              </li>
            ))}
          </ul>

          {/* HOTMART BUTTON WIDGET PLACEHOLDER */}
          <div className="hotmart-button-container">
            <a href="https://pay.hotmart.com/SEU_ID_AQUI?checkoutMode=10" className="block text-center bg-indigo-600 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:scale-[1.02] transition-transform">
              Quero ser Pro ✨
            </a>
            {/* Cole o script do widget aqui quando tiver o código da Hotmart */}
          </div>
        </div>

        {/* Pacote de Créditos */}
        <div className="bg-orange-50 p-10 rounded-[3rem] border-4 border-orange-100 shadow-xl flex flex-col">
          <h3 className="text-3xl font-bold text-orange-900 mb-2">Pacote 50 Créditos</h3>
          <p className="text-slate-500 mb-6 font-medium">Para usar quando quiser, sem mensalidade</p>
          <div className="text-5xl font-black text-slate-800 mb-8">R$ 47<span className="text-xl">,00</span></div>
          
          <ul className="space-y-4 mb-10 flex-grow">
            {['Sem validade', '50 histórias curtas', 'Ideal para viagens', 'Histórias longas gastam 3 créditos'].map(f => (
              <li key={f} className="flex items-center gap-3 font-medium text-orange-900/70">
                <span className="text-orange-500">⭐</span> {f}
              </li>
            ))}
          </ul>

          <a href="https://pay.hotmart.com/SEU_ID_CREDITOS?checkoutMode=10" className="block text-center bg-orange-500 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:scale-[1.02] transition-transform">
            Comprar Créditos 🪙
          </a>
        </div>
      </div>
      
      <div className="text-center pt-10">
        <button onClick={() => window.location.hash = '#/'} className="text-slate-400 font-bold hover:text-indigo-600 underline">
          Voltar para o início
        </button>
      </div>
    </div>
  );
};

export default Pricing;

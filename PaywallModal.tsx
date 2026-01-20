
import React from 'react';

interface PaywallModalProps {
  onClose: () => void;
  reason: 'limit' | 'credits' | 'pdf' | 'library';
}

const PaywallModal: React.FC<PaywallModalProps> = ({ onClose, reason }) => {
  const content = {
    limit: "Você atingiu seu limite diário de 1 história gratuita.",
    credits: "Você não tem créditos suficientes para esta duração de história.",
    pdf: "Exportação em PDF é um recurso exclusivo do Plano Pro.",
    library: "Seu baú gratuito está cheio (máx 3 histórias)."
  };

  return (
    <div className="fixed inset-0 z-[200] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-[3rem] p-8 max-w-md w-full text-center shadow-2xl border-4 border-yellow-200 animate-in zoom-in duration-300">
        <div className="text-6xl mb-6">🚀</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Uau! Sua jornada está crescendo!</h3>
        <p className="text-slate-600 mb-8 font-medium">{content[reason]}</p>
        
        <div className="space-y-4">
          <button 
            onClick={() => window.location.hash = '#/pricing'}
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-indigo-700 transition-all"
          >
            Ver Planos Mágicos
          </button>
          <button 
            onClick={onClose}
            className="w-full text-slate-400 font-bold py-2 hover:text-slate-600"
          >
            Talvez mais tarde
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaywallModal;

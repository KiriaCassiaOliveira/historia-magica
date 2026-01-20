
import React from 'react';

interface UsageMeterProps {
  plan: 'free' | 'pro';
  storiesToday: number;
  credits: number;
}

const UsageMeter: React.FC<UsageMeterProps> = ({ plan, storiesToday, credits }) => {
  return (
    <div className="bg-indigo-50 p-4 rounded-2xl border-2 border-indigo-100 mb-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-xl">📊</span>
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-500">Seu Plano</p>
          <p className="font-bold text-indigo-600">{plan === 'pro' ? 'Assinante Pro ✨' : 'Plano Gratuito'}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[10px] uppercase font-bold text-slate-500">Disponível</p>
        <p className="font-bold text-slate-700">
          {plan === 'free' ? `${1 - storiesToday} histórias hoje` : `${credits} créditos`}
        </p>
      </div>
    </div>
  );
};

export default UsageMeter;

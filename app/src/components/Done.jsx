import React from 'react';
import { Mascot } from './Mascot';
import { Zap, Target, Star, Award } from 'lucide-react';

export const Done = ({ mistakes = 0, onContinue }) => {
  const xpGained = 15;
  const accuracy = Math.round(((3 - Math.min(mistakes, 3)) / 3) * 100);

  return (
    <div className="app-content no-nav p-6 flex flex-col justify-between flex-1 text-center" style={{ backgroundColor: 'var(--color-white)' }}>
      
      {/* Celebration Header Sparkles */}
      <div className="mt-10 flex flex-col items-center relative">
        {/* Sparkles background effect */}
        <div className="absolute inset-0 flex justify-around opacity-40 pointer-events-none">
          <Star size={20} fill="var(--color-yellow)" color="var(--color-yellow)" className="absolute left-[20%] top-[-10px] animate-bounce" />
          <Star size={16} fill="var(--color-blue)" color="var(--color-blue)" className="absolute right-[25%] top-[10px] animate-pulse" />
          <Star size={24} fill="var(--color-orange)" color="var(--color-orange)" className="absolute left-[35%] bottom-[-20px] animate-pulse" />
        </div>

        {/* Mascot & Mascot cheering side by side with a flexing arm bone */}
        <div className="flex items-end justify-center gap-2 mb-6">
          <Mascot state="celebrating" size={160} />
        </div>

        {/* Dynamic Titles */}
        <h1 style={{
          fontSize: '26px',
          fontWeight: '900',
          color: 'var(--color-orange)',
          textShadow: '0 1px 0 rgba(0,0,0,0.05)',
          marginBottom: '8px'
        }}>
          {accuracy === 100 ? 'Pontuação Perfeita!' : 'Excelente Trabalho!'}
        </h1>
        <p style={{
          fontSize: '15px',
          color: 'var(--color-gray-dark)',
          fontWeight: '600',
          maxWidth: '300px',
          margin: '0 auto'
        }}>
          {accuracy === 100 
            ? 'Você não cometeu nenhum erro nesta lição.' 
            : `Você concluiu a lição com ${accuracy}% de precisão.`}
        </p>
      </div>

      {/* Stats Cards Display */}
      <div className="grid grid-cols-2 gap-4 my-8 w-full px-2">
        {/* XP Card */}
        <div style={{
          backgroundColor: 'var(--color-yellow)',
          color: 'var(--color-charcoal)',
          borderRadius: '20px',
          padding: '16px 12px',
          boxShadow: '0 4px 0 var(--color-yellow-dark)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{
            fontSize: '11px',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            opacity: '0.9'
          }}>
            TOTAL DE XP
          </span>
          <div className="flex items-center gap-1.5 font-black text-2xl">
            <Zap size={22} fill="var(--color-charcoal)" strokeWidth={0} />
            <span>{xpGained}</span>
          </div>
        </div>

        {/* Accuracy/Precision Card */}
        <div style={{
          backgroundColor: 'var(--color-green)',
          color: 'var(--color-charcoal)',
          borderRadius: '20px',
          padding: '16px 12px',
          boxShadow: '0 4px 0 var(--color-green-dark)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{
            fontSize: '11px',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            opacity: '0.9'
          }}>
            PRECISÃO
          </span>
          <div className="flex items-center gap-1.5 font-black text-2xl">
            <Target size={22} strokeWidth={3} />
            <span>{accuracy}%</span>
          </div>
        </div>
      </div>

      {/* Continue Action */}
      <div className="mb-10 w-full px-2">
        <button
          onClick={onContinue}
          className="btn-3d btn-green"
          style={{ fontSize: '15px' }}
        >
          CONTINUAR
        </button>
      </div>
    </div>
  );
};

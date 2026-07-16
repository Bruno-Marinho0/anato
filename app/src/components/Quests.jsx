import React, { useState } from 'react';
import { Award, Flame, Heart, Zap, Target, Trophy } from 'lucide-react';

export const Quests = ({ stats = { streak: 2, gems: 565, hearts: 5 } }) => {
  const [activeSubTab, setActiveSubTab] = useState('badges'); // 'quests' or 'badges'

  return (
    <div className="app-content">
      {/* Top Stats Header */}
      <div className="top-header sticky top-0 z-20">
        {/* Logo */}
        <img src="/logo.png" alt="Anato" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />

        {/* Stats */}
        <div className="flex items-center gap-4">
          <div className="stat-item text-orange" style={{ color: 'var(--color-orange)' }}>
            <span className="stat-icon">
              <Flame size={20} fill="var(--color-orange)" strokeWidth={1} />
            </span>
            <span>{stats.streak}</span>
          </div>

          <div className="stat-item text-blue" style={{ color: 'var(--color-blue)' }}>
            <span className="stat-icon">
              <Zap size={20} fill="var(--color-blue)" strokeWidth={0} />
            </span>
            <span>{stats.gems}</span>
          </div>

          <div className="stat-item text-red" style={{ color: 'var(--color-red)' }}>
            <span className="stat-icon">
              <Heart size={20} fill="var(--color-red)" strokeWidth={1} />
            </span>
            <span>{stats.hearts}</span>
          </div>
        </div>
      </div>

      {/* Sub-Tabs (Quests / Badges) */}
      <div style={{
        display: 'flex',
        borderBottom: '2px solid var(--color-gray-light)',
        backgroundColor: 'var(--color-white)',
      }}>
        <button
          onClick={() => setActiveSubTab('quests')}
          style={{
            flex: 1,
            padding: '16px 0',
            border: 'none',
            background: 'none',
            fontSize: '15px',
            fontWeight: '800',
            color: activeSubTab === 'quests' ? 'var(--color-blue)' : 'var(--color-gray-medium)',
            borderBottom: activeSubTab === 'quests' ? '4px solid var(--color-blue)' : '4px solid transparent',
            marginBottom: '-2px',
            cursor: 'pointer',
            transition: 'color 0.2s'
          }}
        >
          MISSÕES
        </button>
        <button
          onClick={() => setActiveSubTab('badges')}
          style={{
            flex: 1,
            padding: '16px 0',
            border: 'none',
            background: 'none',
            fontSize: '15px',
            fontWeight: '800',
            color: activeSubTab === 'badges' ? 'var(--color-blue)' : 'var(--color-gray-medium)',
            borderBottom: activeSubTab === 'badges' ? '4px solid var(--color-blue)' : '4px solid transparent',
            marginBottom: '-2px',
            cursor: 'pointer',
            transition: 'color 0.2s'
          }}
        >
          CONQUISTAS
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
        {activeSubTab === 'badges' ? (
          <div className="animate-pop-in flex flex-col items-center max-w-[320px]">
            {/* Badges Overlap Illustration */}
            <div className="relative w-48 h-32 mb-6 flex justify-center items-center">
              {/* Left Badge (Blue) */}
              <div 
                className="absolute w-20 h-20 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                style={{
                  backgroundColor: 'var(--color-blue)',
                  left: '10px',
                  zIndex: 1,
                  transform: 'scale(0.85) rotate(-10deg)',
                  boxShadow: '0 4px 10px rgba(28, 176, 246, 0.3)'
                }}
              >
                <Zap size={32} color="white" fill="white" />
              </div>

              {/* Right Badge (Green) */}
              <div 
                className="absolute w-20 h-20 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                style={{
                  backgroundColor: 'var(--color-green)',
                  right: '10px',
                  zIndex: 1,
                  transform: 'scale(0.85) rotate(10deg)',
                  boxShadow: '0 4px 10px rgba(88, 204, 2, 0.3)'
                }}
              >
                <Target size={32} color="white" />
              </div>

              {/* Middle Badge (Yellow / Gold) */}
              <div 
                className="absolute w-24 h-24 rounded-full flex items-center justify-center border-4 border-white shadow-xl animate-bounce"
                style={{
                  backgroundColor: 'var(--color-yellow)',
                  zIndex: 2,
                  boxShadow: '0 6px 15px rgba(255, 200, 0, 0.4)'
                }}
              >
                <Trophy size={42} color="white" fill="white" />
              </div>
            </div>

            {/* Typography */}
            <h2 style={{
              fontSize: '22px',
              fontWeight: '800',
              color: 'var(--color-charcoal)',
              marginBottom: '10px',
              lineHeight: '1.2'
            }}>
              Desafios mensais abrem em breve!
            </h2>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-gray-dark)',
              lineHeight: '1.5',
              fontWeight: '600'
            }}>
              Complete o desafio de cada mês para obter medalhas e conquistas exclusivas de Osteologia.
            </p>
          </div>
        ) : (
          <div className="animate-pop-in w-full flex flex-col gap-4 text-left">
            <h2 className="text-lg font-extrabold text-charcoal mb-2">Missões Diárias</h2>
            
            {/* Quest Item 1 */}
            <div className="card-3d p-4 flex items-center gap-4 cursor-default">
              <div className="w-12 h-12 bg-orange/10 text-orange rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 150, 0, 0.15)', color: 'var(--color-orange)' }}>
                <Zap size={24} fill="var(--color-orange)" strokeWidth={1} />
              </div>
              <div className="flex-1">
                <div className="font-extrabold text-sm text-charcoal">Ganhe 20 XP</div>
                <div className="w-full bg-gray-light h-3 rounded-full mt-2 overflow-hidden">
                  <div className="bg-orange h-full rounded-full" style={{ width: '40%', backgroundColor: 'var(--color-orange)' }}></div>
                </div>
              </div>
              <div className="font-extrabold text-xs text-gray-medium">8/20 XP</div>
            </div>

            {/* Quest Item 2 */}
            <div className="card-3d p-4 flex items-center gap-4 cursor-default">
              <div className="w-12 h-12 bg-blue/10 text-blue rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(28, 176, 246, 0.15)', color: 'var(--color-blue)' }}>
                <Flame size={24} fill="var(--color-blue)" strokeWidth={1} />
              </div>
              <div className="flex-1">
                <div className="font-extrabold text-sm text-charcoal">Estude por 5 minutos</div>
                <div className="w-full bg-gray-light h-3 rounded-full mt-2 overflow-hidden">
                  <div className="bg-blue h-full rounded-full" style={{ width: '100%', backgroundColor: 'var(--color-blue)' }}></div>
                </div>
              </div>
              <div className="font-extrabold text-xs text-green" style={{ color: 'var(--color-green)' }}>CONCLUÍDO</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

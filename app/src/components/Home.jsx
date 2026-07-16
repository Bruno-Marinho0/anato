import React, { useState, useEffect, useRef } from 'react';
import { Mascot } from './Mascot';
import { BookOpen, Flame, Heart, Shield, Award, Home as HomeIcon, Dumbbell, Compass, HelpCircle, Store, Bell, Check } from 'lucide-react';

export const Home = ({ 
  stats = { streak: 2, gems: 565, hearts: 5 }, 
  onStartLesson,
  onOpenNotification,
  notificationOpen = false,
  onCloseNotification,
  activeTab = 'home',
  onTabChange
}) => {
  const pathNodes = [
    { id: 1, type: 'lesson', label: 'Introdução', status: 'completed', margin: '0px' },
    { id: 2, type: 'lesson', label: 'Osteologia Geral', status: 'completed', margin: '-35px' },
    { id: 3, type: 'lesson', label: 'Estudo do Fêmur', status: 'active', margin: '-60px' },
    { id: 4, type: 'chest', label: 'Baú de Fêmur', status: 'locked', margin: '-35px' },
    { id: 5, type: 'lesson', label: 'Membros Inferiores', status: 'locked', margin: '0px' },
    { id: 6, type: 'trophy', label: 'Prova do Fêmur', status: 'locked', margin: '45px' },
  ];

  const nodeRefs = useRef([]);
  nodeRefs.current = [];

  const addToRefs = (el) => {
    if (el && !nodeRefs.current.includes(el)) {
      nodeRefs.current.push(el);
    }
  };

  const [trailPath, setTrailPath] = useState('');

  useEffect(() => {
    const updatePath = () => {
      const container = document.querySelector('.path-container');
      if (!container || nodeRefs.current.length === 0) return;
      const containerRect = container.getBoundingClientRect();
      
      let points = [];
      for (let i = 0; i < pathNodes.length; i++) {
        const nodeEl = nodeRefs.current[i];
        if (!nodeEl) continue;
        const rect = nodeEl.getBoundingClientRect();
        
        // Find the center of the node button
        const buttonEl = nodeEl.querySelector('button');
        const buttonRect = buttonEl ? buttonEl.getBoundingClientRect() : rect;
        
        const x = buttonRect.left - containerRect.left + buttonRect.width / 2;
        const y = buttonRect.top - containerRect.top + buttonRect.height / 2;
        points.push({ x, y });
      }

      if (points.length < 2) return;

      const buildBezierPath = (pts) => {
        if (pts.length < 2) return '';
        let pathD = `M ${pts[0].x} ${pts[0].y}`;
        for (let i = 1; i < pts.length; i++) {
          const prev = pts[i - 1];
          const curr = pts[i];
          const cpY1 = prev.y + (curr.y - prev.y) / 2;
          const cpY2 = cpY1;
          pathD += ` C ${prev.x} ${cpY1}, ${curr.x} ${cpY2}, ${curr.x} ${curr.y}`;
        }
        return pathD;
      };

      setTrailPath(buildBezierPath(points));
    };

    updatePath();
    window.addEventListener('resize', updatePath);
    // Extra timeouts to guarantee exact measurements after components fully mount/hydrate
    const timer1 = setTimeout(updatePath, 100);
    const timer2 = setTimeout(updatePath, 500);

    return () => {
      window.removeEventListener('resize', updatePath);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathNodes.length]);

  return (
    <div className="app-content">
      {/* Top Stats Bar */}
      <div className="top-header sticky top-0 z-20" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Logo */}
        <img src="/logo.png" alt="Anato" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
      </div>

      {/* Main Path Scrollable Contents */}
      <div className="flex-1 p-4 bg-[#ffffff]">
        {/* Unit Header */}
        <div style={{
          backgroundColor: 'var(--color-green)',
          color: 'var(--color-charcoal)',
          borderRadius: '20px',
          padding: '16px 20px',
          marginBottom: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 0 var(--color-green-dark)',
          position: 'relative'
        }}>
          <div>
            <h3 style={{
              fontSize: '13px',
              fontWeight: '800',
              opacity: '0.85',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '4px'
            }}>
              PARTE 1, UNIDADE 2
            </h3>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '900',
              lineHeight: '1.2'
            }}>
              Morfologia do Fêmur
            </h2>
          </div>
          <button style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'var(--color-charcoal)',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '50%'
          }}
          title="Ver Guia"
          >
            <BookOpen size={28} />
          </button>
        </div>

        {/* Trail Path */}
        <div className="path-container">
          {/* Dotted/Dashed S-curve Trail Path connecting nodes */}
          <svg
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1
            }}
          >
            {trailPath && (
              <path
                d={trailPath}
                fill="none"
                stroke="#d6beb0"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray="0 22"
              />
            )}
          </svg>

          {/* Mascot Mascot Floating on the Right */}
          <div style={{
            position: 'absolute',
            right: '16px',
            top: '160px',
            zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Mascot state="guide" size={110} />
            <div style={{
              position: 'relative',
              backgroundColor: 'white',
              border: '2px solid var(--color-gray-light)',
              borderRadius: '12px',
              padding: '6px 10px',
              fontSize: '11px',
              fontWeight: '800',
              color: 'var(--color-charcoal)',
              maxWidth: '120px',
              textAlign: 'center',
              boxShadow: '0 2px 0 var(--color-gray-light)',
              marginTop: '6px'
            }}>
              {/* Bubble Arrow pointing UP */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '0',
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderBottom: '8px solid var(--color-gray-light)'
              }}></div>
              <div style={{
                position: 'absolute',
                top: '-6px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '0',
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderBottom: '7px solid white'
              }}></div>
              Estude 5 min todos os dias!
            </div>
          </div>

          {/* Render Path Nodes */}
          {pathNodes.map((node) => {
            const isCompleted = node.status === 'completed';
            const isActive = node.status === 'active';
            const isLocked = node.status === 'locked';

                        const size = node.type === 'lesson' ? '70px' : '64px';

            return (
              <div 
                key={node.id} 
                ref={addToRefs}
                className="path-node-wrapper"
                style={{ 
                  transform: `translateX(${node.margin})`,
                  zIndex: 2 
                }}
              >
                {/* Node Button Wrapper to center pulsing ring and button perfectly */}
                <div style={{ position: 'relative', width: size, height: size }}>
                  {/* Pulsing ring for active node */}
                  {isActive && (
                    <div className="pulsing-ring"></div>
                  )}

                  {/* Node Button */}
                  {node.type === 'lesson' ? (
                    <button
                      disabled={isLocked}
                      onClick={isActive ? onStartLesson : undefined}
                      className={`btn-3d flex items-center justify-center`}
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        padding: 0,
                        backgroundColor: isCompleted ? 'var(--color-green)' : isActive ? 'var(--color-green)' : 'var(--color-gray-light)',
                        borderColor: isCompleted ? 'var(--color-green-dark)' : isActive ? 'var(--color-green-dark)' : 'var(--color-gray-medium)',
                        boxShadow: isCompleted 
                          ? '0 6px 0 var(--color-green-dark)' 
                          : isActive 
                          ? '0 6px 0 var(--color-green-dark)' 
                          : '0 6px 0 var(--color-gray-medium)',
                        cursor: isLocked ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isCompleted ? (
                        <Check size={28} strokeWidth={4} color="var(--color-charcoal)" />
                      ) : isActive ? (
                        <Award size={32} strokeWidth={2.5} color="var(--color-charcoal)" />
                      ) : (
                        <Award size={32} strokeWidth={2.5} color="var(--color-gray-medium)" />
                      )}
                    </button>
                  ) : node.type === 'chest' ? (
                    <button
                      disabled={isLocked}
                      className="btn-3d flex items-center justify-center"
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        padding: 0,
                        backgroundColor: isLocked ? 'var(--color-gray-light)' : 'var(--color-yellow)',
                        borderColor: isLocked ? 'var(--color-gray-medium)' : 'var(--color-yellow-dark)',
                        boxShadow: isLocked 
                          ? '0 6px 0 var(--color-gray-medium)' 
                          : '0 6px 0 var(--color-yellow-dark)',
                        cursor: isLocked ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <Store size={28} color={isLocked ? 'var(--color-gray-medium)' : 'var(--color-charcoal)'} />
                    </button>
                  ) : (
                    <button
                      disabled={isLocked}
                      className="btn-3d flex items-center justify-center"
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        padding: 0,
                        backgroundColor: isLocked ? 'var(--color-gray-light)' : 'var(--color-yellow)',
                        borderColor: isLocked ? 'var(--color-gray-medium)' : 'var(--color-yellow-dark)',
                        boxShadow: isLocked 
                          ? '0 6px 0 var(--color-gray-medium)' 
                          : '0 6px 0 var(--color-yellow-dark)',
                        cursor: isLocked ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <Award size={28} color={isLocked ? 'var(--color-gray-medium)' : 'var(--color-charcoal)'} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Maintain Streak Slide-Up Modal */}
      {notificationOpen && (
        <div 
          className="absolute inset-0 bg-black/50 z-30 flex flex-col justify-end"
          style={{ animation: 'fadeIn 0.2s ease-out' }}
        >
          {/* Backdrop Click */}
          <div className="flex-1" onClick={onCloseNotification}></div>

          {/* Modal Container */}
          <div 
            className="bg-white rounded-t-[28px] p-6 text-center"
            style={{ 
              animation: 'slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
              boxShadow: '0 -4px 20px rgba(0,0,0,0.15)'
            }}
          >
            {/* Mascot with bell */}
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Mascot state="happy" size={130} />
                <div 
                  className="absolute bottom-0 right-0 bg-[#ff9600] text-white p-2 rounded-full border-4 border-white animate-bounce"
                  style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                >
                  <Bell size={20} fill="white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <h2 style={{
              fontSize: '22px',
              fontWeight: '800',
              color: 'var(--color-charcoal)',
              marginBottom: '8px'
            }}>
              Mantenha o seu ritmo!
            </h2>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-gray-dark)',
              lineHeight: '1.4',
              marginBottom: '24px',
              padding: '0 16px',
              fontWeight: '600'
            }}>
              Nós vamos te enviar um lembrete diário para que você não esqueça de praticar suas lições.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={onCloseNotification}
                className="btn-3d btn-blue"
              >
                ATIVAR AGORA
              </button>
              <button 
                onClick={onCloseNotification}
                className="py-3 text-gray-medium font-extrabold hover:text-charcoal transition-colors border-0 bg-transparent cursor-pointer"
                style={{ fontSize: '15px' }}
              >
                AGORA NÃO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

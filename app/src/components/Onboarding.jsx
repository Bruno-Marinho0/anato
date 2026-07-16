import React from 'react';

export const Onboarding = ({ onStartTest, onGoToMap, onLogin }) => {
  return (
    <div className="app-content no-nav flex flex-col justify-between p-6 text-center flex-1">
      {/* Top Header / Logo Section */}
      <div className="mt-10 flex flex-col items-center">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="/logo.png" 
            alt="Anato" 
            style={{ 
              height: '52px', 
              width: 'auto',
              objectFit: 'contain'
            }} 
          />
        </div>
      </div>

      {/* Mascot Welcome Section */}
      <div className="flex-1 flex flex-col items-center justify-center my-4">
        <div className="relative mb-6">
          <img 
            src="/mascot_welcome.png" 
            alt="Bem-vindo ao Anato" 
            style={{ 
              width: '180px', 
              height: '180px', 
              objectFit: 'contain'
            }} 
          />
        </div>
        
        {/* Welcome message */}
        <h1 style={{
          fontSize: '26px',
          fontWeight: '900',
          color: 'var(--color-charcoal)',
          lineHeight: '1.25',
          maxWidth: '320px',
          margin: '0 auto 12px auto',
        }}>
          Bem-vindo ao Anato!
        </h1>
        
        <p style={{
          fontSize: '14px',
          fontWeight: '700',
          color: 'var(--color-gray-dark)',
          maxWidth: '280px',
          margin: '0 auto',
          lineHeight: '1.4'
        }}>
          Aprenda anatomia humana de forma prática, divertida e interativa.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex flex-col gap-4 w-full px-2">
        <button 
          onClick={onStartTest}
          className="btn-3d btn-green"
          style={{ fontSize: '15px', fontWeight: '900' }}
        >
          INICIAR TESTE
        </button>
        <button 
          onClick={onGoToMap}
          className="btn-3d btn-outline"
          style={{ 
            fontSize: '15px', 
            fontWeight: '900',
            borderColor: 'var(--color-gray-light)',
            color: 'var(--color-charcoal)'
          }}
        >
          IR PARA O MAPA
        </button>
        
        <div style={{ marginTop: '12px' }}>
          <span style={{ color: 'var(--color-gray-medium)', fontSize: '14px', fontWeight: '700' }}>Já tem uma conta? </span>
          <button 
            onClick={onLogin}
            className="text-blue font-extrabold text-sm border-0 bg-transparent cursor-pointer hover:underline"
            style={{ fontSize: '14px' }}
          >
            ENTRAR
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Mascot } from './Mascot';
import { Flame, Zap, Heart, LogOut, Mail, Calendar } from 'lucide-react';

export const Profile = ({ profile, stats, onLogout }) => {
  return (
    <div className="app-content no-nav p-6 flex flex-col justify-between flex-1 text-center" style={{ backgroundColor: 'var(--color-white)' }}>
      {/* Top Header */}
      <div className="mt-6 flex flex-col items-center">
        {/* Mascot avatar */}
        <div className="flex justify-center mb-4 relative">
          <div className="w-28 h-28 bg-gray-bg border-4 border-gray-light rounded-full flex items-center justify-center overflow-hidden" style={{ boxShadow: '0 4px 0 var(--color-gray-light)' }}>
            <Mascot state="happy" size={100} />
          </div>
        </div>

        {/* User Info */}
        <h1 style={{
          fontSize: '26px',
          fontWeight: '900',
          color: 'var(--color-charcoal)',
          marginBottom: '4px'
        }}>
          {profile.name || 'Estudante'}
        </h1>
        <p style={{
          fontSize: '14px',
          color: 'var(--color-gray-dark)',
          fontWeight: '600',
          marginBottom: '20px'
        }}>
          Estudante de Anatomia
        </p>
      </div>

      {/* Profile Details Card */}
      <div className="card-3d p-4 mb-6 text-left flex flex-col gap-3 cursor-default" style={{ backgroundColor: 'var(--color-green-light)', borderColor: 'var(--color-green-dark)', boxShadow: '0 4px 0 var(--color-green-dark)' }}>
        <div className="flex items-center gap-3 text-sm font-bold text-charcoal">
          <Mail size={18} className="text-gray-medium" />
          <span>{profile.email}</span>
        </div>
        {profile.age && (
          <div className="flex items-center gap-3 text-sm font-bold text-charcoal">
            <Calendar size={18} className="text-gray-medium" />
            <span>{profile.age} anos</span>
          </div>
        )}
      </div>

      {/* Stats Cards Display */}
      <div className="grid grid-cols-3 gap-3 mb-6 w-full">
        {/* Streak */}
        <div style={{
          backgroundColor: 'var(--color-white)',
          border: '2px solid var(--color-gray-light)',
          borderRadius: '16px',
          padding: '12px 8px',
          boxShadow: '0 4px 0 var(--color-gray-light)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <span style={{ fontSize: '10px', fontWeight: '900', color: 'var(--color-gray-medium)', textTransform: 'uppercase' }}>
            Ofensiva
          </span>
          <div className="flex items-center gap-1 font-black text-lg text-orange" style={{ color: 'var(--color-orange)' }}>
            <Flame size={18} fill="var(--color-orange)" strokeWidth={1} />
            <span>{stats.streak}</span>
          </div>
        </div>

        {/* Gems */}
        <div style={{
          backgroundColor: 'var(--color-white)',
          border: '2px solid var(--color-gray-light)',
          borderRadius: '16px',
          padding: '12px 8px',
          boxShadow: '0 4px 0 var(--color-gray-light)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <span style={{ fontSize: '10px', fontWeight: '900', color: 'var(--color-gray-medium)', textTransform: 'uppercase' }}>
            Gemas
          </span>
          <div className="flex items-center gap-1 font-black text-lg text-blue" style={{ color: 'var(--color-blue)' }}>
            <Zap size={18} fill="var(--color-blue)" strokeWidth={0} />
            <span>{stats.gems}</span>
          </div>
        </div>

        {/* Hearts */}
        <div style={{
          backgroundColor: 'var(--color-white)',
          border: '2px solid var(--color-gray-light)',
          borderRadius: '16px',
          padding: '12px 8px',
          boxShadow: '0 4px 0 var(--color-gray-light)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <span style={{ fontSize: '10px', fontWeight: '900', color: 'var(--color-gray-medium)', textTransform: 'uppercase' }}>
            Vidas
          </span>
          <div className="flex items-center gap-1 font-black text-lg text-red" style={{ color: 'var(--color-red)' }}>
            <Heart size={18} fill="var(--color-red)" strokeWidth={1} />
            <span>{stats.hearts}</span>
          </div>
        </div>
      </div>

      {/* Logout Action */}
      <div className="mb-6 w-full">
        <button
          onClick={onLogout}
          className="btn-3d btn-outline-red flex items-center justify-center gap-2"
          style={{ fontSize: '15px' }}
        >
          <LogOut size={18} />
          SAIR DA CONTA
        </button>
      </div>
    </div>
  );
};

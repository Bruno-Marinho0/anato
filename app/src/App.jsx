import React, { useState } from 'react';
import { Onboarding } from './components/Onboarding';
import { Register } from './components/Register';
import { Home } from './components/Home';
import { Quests } from './components/Quests';
import { Lesson } from './components/Lesson';
import { Done } from './components/Done';
import { Profile } from './components/Profile';
import { Home as HomeIcon, Dumbbell, Shield, Store, User, BookOpen } from 'lucide-react';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('onboarding'); // onboarding, register, home, quests, lesson, done, profile
  const [activeTab, setActiveTab] = useState('home'); // home, quests, practice, ligas, profile
  const [userProfile, setUserProfile] = useState(null); // { age, name, email, password }
  const [streak, setStreak] = useState(2);
  const [gems, setGems] = useState(565);
  const [hearts, setHearts] = useState(5);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [mistakes, setMistakes] = useState(0);

  // Handle active navigation tabs
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setCurrentView('home');
    } else if (tab === 'quests') {
      setCurrentView('quests');
    } else if (tab === 'profile') {
      if (userProfile) {
        setCurrentView('profile');
      } else {
        setCurrentView('register');
      }
    } else {
      setCurrentView('mock-tab');
    }
  };

  // Render mock view for unfinished tabs in the MVP
  const renderMockTabView = () => {
    let title = '';
    let description = '';
    
    switch (activeTab) {
      case 'practice':
        title = 'Treino Diário';
        description = 'Revise termos anatômicos com repetição espaçada. Liberação após a primeira unidade!';
        break;
      case 'ligas':
        title = 'Ligas Competitivas';
        description = 'Dispute pontos de XP com outros estudantes da saúde de todo o Brasil. Disponível em breve!';
        break;
      case 'profile':
        title = 'Seu Perfil';
        description = 'Acompanhe seu histórico de estudos, estatísticas de acerto e conquistas.';
        break;
      default:
        title = 'Página em Desenvolvimento';
        description = 'Esta seção estará disponível na versão final do app.';
    }

    return (
      <div className="app-content">
        {/* Top Header */}
        <div className="top-header sticky top-0 z-20" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Logo */}
          <img src="/logo.png" alt="Anato" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
        </div>

        {/* Content */}
        <div className="flex-1 p-8 flex flex-col items-center justify-center text-center animate-pop-in">
          {/* Circular Trophy outline */}
          <div className="w-24 h-24 bg-gray-bg border-4 border-gray-light rounded-full flex items-center justify-center mb-6">
            <BookOpen size={44} className="text-gray-medium" />
          </div>
          
          <h2 style={{
            fontSize: '22px',
            fontWeight: '900',
            color: 'var(--color-charcoal)',
            marginBottom: '12px'
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: '14px',
            color: 'var(--color-gray-dark)',
            lineHeight: '1.5',
            fontWeight: '600',
            maxWidth: '280px'
          }}>
            {description}
          </p>

          <button 
            onClick={() => handleTabClick('home')}
            className="btn-3d btn-green"
            style={{ marginTop: '32px', maxWidth: '200px' }}
          >
            VOLTAR AO INÍCIO
          </button>
        </div>
      </div>
    );
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'onboarding':
        return (
          <Onboarding 
            onStartTest={() => {
              setCurrentView('lesson');
              setMistakes(0);
            }} 
            onGoToMap={() => {
              setCurrentView('home');
              setActiveTab('home');
            }} 
            onLogin={() => {
              setCurrentView('register');
            }}
          />
        );
      case 'register':
        return (
          <Register 
            onBack={() => {
              if (activeTab === 'profile') {
                setCurrentView('home');
                setActiveTab('home');
              } else {
                setCurrentView('onboarding');
              }
            }} 
            onSubmit={(profile) => {
              setUserProfile(profile);
              setCurrentView('profile');
              setActiveTab('profile');
            }} 
          />
        );
      case 'home':
        return (
          <Home 
            stats={{ streak, gems, hearts }}
            onStartLesson={() => {
              setCurrentView('lesson');
              setMistakes(0);
            }}
            onOpenNotification={() => setNotificationOpen(true)}
            notificationOpen={notificationOpen}
            onCloseNotification={() => setNotificationOpen(false)}
            activeTab={activeTab}
            onTabChange={handleTabClick}
          />
        );
      case 'quests':
        return (
          <Quests 
            stats={{ streak, gems, hearts }}
          />
        );
      case 'profile':
        return (
          <Profile 
            profile={userProfile}
            stats={{ streak, gems, hearts }}
            onLogout={() => {
              setUserProfile(null);
              setCurrentView('onboarding');
              setActiveTab('home');
            }}
          />
        );
      case 'lesson':
        return (
          <Lesson 
            hearts={hearts}
            onHeartDecrement={() => setHearts(prev => Math.max(1, prev - 1))} // keep at least 1 heart for the flow
            onCancel={() => {
              if (window.confirm("Deseja mesmo sair da lição? Seu progresso nesta sessão será perdido.")) {
                setCurrentView('home');
                setActiveTab('home');
              }
            }}
            onFinish={(stats) => {
              setMistakes(stats.mistakes);
              // Update streak and award gems on completion
              setStreak(prev => prev + 1);
              setGems(prev => prev + 15);
              setCurrentView('done');
            }}
          />
        );
      case 'done':
        return (
          <Done 
            mistakes={mistakes}
            onContinue={() => {
              setCurrentView('home');
              setActiveTab('home');
            }}
          />
        );
      case 'mock-tab':
        return renderMockTabView();
      default:
        return <div>View not found</div>;
    }
  };

  // Bottom Nav Bar should be visible on dashboard sub-tabs: home, quests, profile, or custom mock tabs
  const shouldShowBottomNav = ['home', 'quests', 'profile', 'mock-tab'].includes(currentView);

  return (
    <div className="app-frame">
      {/* Active Screen View */}
      {renderActiveView()}

      {/* Bottom Navigation Tab Bar */}
      {shouldShowBottomNav && (
        <div className="tab-navigation">
          <button 
            onClick={() => handleTabClick('home')}
            className={`tab-item border-0 bg-transparent cursor-pointer ${activeTab === 'home' ? 'active' : ''}`}
          >
            <div className="tab-icon">
              <HomeIcon size={24} fill={activeTab === 'home' ? 'currentColor' : 'none'} />
            </div>
          </button>
          
          <button 
            onClick={() => handleTabClick('practice')}
            className={`tab-item border-0 bg-transparent cursor-pointer ${activeTab === 'practice' ? 'active' : ''}`}
          >
            <div className="tab-icon">
              <Dumbbell size={24} />
            </div>
          </button>

          <button 
            onClick={() => handleTabClick('ligas')}
            className={`tab-item border-0 bg-transparent cursor-pointer ${activeTab === 'ligas' ? 'active' : ''}`}
          >
            <div className="tab-icon">
              <Shield size={24} fill={activeTab === 'ligas' ? 'currentColor' : 'none'} />
            </div>
          </button>

          <button 
            onClick={() => handleTabClick('quests')}
            className={`tab-item border-0 bg-transparent cursor-pointer ${activeTab === 'quests' ? 'active' : ''}`}
          >
            <div className="tab-icon">
              <Store size={24} fill={activeTab === 'quests' ? 'currentColor' : 'none'} />
            </div>
          </button>

          <button 
            onClick={() => handleTabClick('profile')}
            className={`tab-item border-0 bg-transparent cursor-pointer ${activeTab === 'profile' ? 'active' : ''}`}
          >
            <div className="tab-icon">
              <User size={24} fill={activeTab === 'profile' ? 'currentColor' : 'none'} />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

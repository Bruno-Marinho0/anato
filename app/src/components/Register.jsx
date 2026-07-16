import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

export const Register = ({ onBack, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age && name && email && password) {
      onSubmit({ age, name, email, password });
    }
  };

  const isFormValid = age && name && email && password;

  return (
    <div className="app-content no-nav p-6 flex flex-col justify-between flex-1">
      {/* Header back button */}
      <div>
        <button 
          onClick={onBack}
          className="p-1 -ml-1 text-gray-medium hover:text-charcoal transition-colors border-0 bg-transparent cursor-pointer"
        >
          <ArrowLeft size={28} strokeWidth={2.5} />
        </button>
      </div>

      {/* Main Content Form */}
      <div className="flex-1 flex flex-col justify-center my-6">
        <h2 style={{
          fontSize: '24px',
          fontWeight: '800',
          color: '#4b4b4b',
          textAlign: 'center',
          marginBottom: '28px'
        }}>
          Crie seu perfil
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Idade"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Nome (opcional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              style={{ paddingRight: '50px' }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-medium hover:text-charcoal border-0 bg-transparent cursor-pointer flex items-center justify-center"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className={`btn-3d ${isFormValid ? 'btn-blue' : 'btn-disabled'}`}
            style={{ marginTop: '12px' }}
            disabled={!isFormValid}
          >
            CRIAR CONTA
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center gap-4 my-6 text-gray-medium font-bold text-sm justify-center">
          <div className="h-[2px] bg-gray-light flex-1"></div>
          <span>OU</span>
          <div className="h-[2px] bg-gray-light flex-1"></div>
        </div>

        {/* Social Buttons */}
        <button
          type="button"
          onClick={() => onSubmit({ name: 'User', email: 'test@facebook.com' })}
          className="btn-3d btn-outline flex items-center justify-center gap-3"
          style={{ color: '#1877f2', borderColor: '#e5e5e5' }}
        >
          {/* Facebook Icon */}
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
          FACEBOOK
        </button>

        {/* Terms Disclaimer */}
        <p style={{
          fontSize: '12px',
          color: '#afafaf',
          textAlign: 'center',
          lineHeight: '1.4',
          marginTop: '20px',
          fontWeight: '600'
        }}>
          Ao se cadastrar no Anato, você concorda com nossos <span style={{ color: '#1cb0f6', cursor: 'pointer' }}>Termos de Serviço</span> e nossa <span style={{ color: '#1cb0f6', cursor: 'pointer' }}>Política de Privacidade</span>.
        </p>
      </div>

      {/* Login Navigation footer */}
      <div className="border-t-2 border-gray-light pt-4 text-center">
        <span className="text-gray-medium font-bold text-sm">Já tem uma conta? </span>
        <button
          onClick={onBack}
          className="text-blue font-extrabold text-sm border-0 bg-transparent cursor-pointer hover:underline"
        >
          ENTRAR
        </button>
      </div>
    </div>
  );
};

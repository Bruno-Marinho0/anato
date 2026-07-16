import React, { useState } from 'react';
import { Mascot } from './Mascot';
import { X, Heart, Volume2, Sparkles, AlertTriangle } from 'lucide-react';

export const Lesson = ({ onCancel, onFinish, onHeartDecrement, hearts }) => {
  const [currentStep, setCurrentStep] = useState(1); // 1, 2, 3, 4, 5
  const [selectedOption, setSelectedOption] = useState(null); // for multiple choice steps
  const [wordBankSelected, setWordBankSelected] = useState([]); // for translation step
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [mistakes, setMistakes] = useState(0);

  const handleCheckAnswer = () => {
    let correct = false;

    if (currentStep === 1) {
      correct = selectedOption === 'femur';
    } else if (currentStep === 2) {
      correct = selectedOption === 'longo';
    } else if (currentStep === 3) {
      correct = selectedOption === 'cabeca';
    } else if (currentStep === 4) {
      correct = selectedOption === 'verdadeiro';
    } else if (currentStep === 5) {
      correct = selectedOption === 'colo';
    }

    setIsCorrect(correct);
    setIsAnswerChecked(true);

    if (!correct) {
      setMistakes(prev => prev + 1);
      onHeartDecrement();
    }
  };

  const handleNext = () => {
    setIsAnswerChecked(false);
    setSelectedOption(null);
    setWordBankSelected([]);
    
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish({ mistakes });
    }
  };

  // Progress percentage
  const progressPercent = ((currentStep - 1) / 5) * 100;
  const progressCheckedPercent = (currentStep / 5) * 100;

  return (
    <div className="app-content no-nav flex flex-col justify-between flex-1" style={{ backgroundColor: 'var(--color-white)' }}>
      {/* Lesson Header */}
      <div className="flex items-center justify-between px-6 pt-6 pb-2 gap-4">
        {/* Close Button */}
        <button 
          onClick={onCancel}
          className="text-gray-medium hover:text-charcoal border-0 bg-transparent cursor-pointer"
        >
          <X size={26} strokeWidth={2.5} />
        </button>

        {/* 3D Progress Bar container */}
        <div 
          className="flex-1 h-5 rounded-full overflow-hidden" 
          style={{ 
            backgroundColor: 'var(--color-gray-light)',
            border: '2px solid var(--color-charcoal)',
            boxShadow: 'inset 0 2px 0 rgba(0,0,0,0.05)'
          }}
        >
          <div 
            className="h-full rounded-full transition-all duration-300 relative"
            style={{ 
              width: `${isAnswerChecked ? progressCheckedPercent : progressPercent}%`,
              backgroundColor: 'var(--color-green)',
              boxShadow: 'inset 0 -3px 0 var(--color-green-dark)',
              borderRight: `${(isAnswerChecked ? progressCheckedPercent : progressPercent) > 0 ? '2px solid var(--color-charcoal)' : 'none'}`
            }}
          >
            {/* Glossy reflection line */}
            <div className="absolute top-0.5 left-2 right-2 h-1 bg-white/40 rounded-full"></div>
          </div>
        </div>

        {/* Lives / Hearts */}
        <div className="flex items-center gap-1.5 text-red" style={{ color: 'var(--color-red)' }}>
          <Heart size={24} fill="var(--color-red)" strokeWidth={1} className="animate-pulse" />
          <span className="font-extrabold text-lg">{hearts}</span>
        </div>
      </div>

      {/* Main Lesson Content */}
      <div className="flex-1 flex flex-col px-6 py-4 justify-start">
        {/* Step 1: Multiple choice selection of the femur */}
        {currentStep === 1 && (
          <div className="animate-pop-in flex-1 flex flex-col">
            <div className="flex items-center gap-1.5 text-purple font-extrabold text-sm mb-2" style={{ color: 'var(--color-purple)' }}>
              <Sparkles size={16} fill="var(--color-purple)" />
              NOVA PARTE DO CORPO HUMANO
            </div>

            <h2 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--color-charcoal)', marginBottom: '24px' }}>
              Qual destes ossos é o Fêmur?
            </h2>

            <div className="grid grid-cols-2 gap-4 flex-grow mb-6">
              {/* Option 1: Fêmur (Correct) */}
              <div 
                onClick={() => !isAnswerChecked && setSelectedOption('femur')}
                className={`card-3d p-4 flex flex-col items-center justify-center ${selectedOption === 'femur' ? 'selected' : ''}`}
                style={{ height: '120px' }}
              >
                <img src="/femur.png" alt="Fêmur" style={{ height: '65px', width: 'auto', transform: 'rotate(45deg)' }} />
              </div>

              {/* Option 2: Crânio */}
              <div 
                onClick={() => !isAnswerChecked && setSelectedOption('cranio')}
                className={`card-3d p-4 flex flex-col items-center justify-center ${selectedOption === 'cranio' ? 'selected' : ''}`}
                style={{ height: '120px' }}
              >
                <img src="/skull.png" alt="Crânio" style={{ height: '70px', width: 'auto' }} />
              </div>
              {/* Option 3: Osso Genérico */}
              <div 
                onClick={() => !isAnswerChecked && setSelectedOption('osso_generico')}
                className={`card-3d p-4 flex flex-col items-center justify-center ${selectedOption === 'osso_generico' ? 'selected' : ''}`}
                style={{ height: '120px' }}
              >
                <img src="/bone_generic.png" alt="Osso" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} />
              </div>

              {/* Option 4: Pé */}
              <div 
                onClick={() => !isAnswerChecked && setSelectedOption('pe')}
                className={`card-3d p-4 flex flex-col items-center justify-center ${selectedOption === 'pe' ? 'selected' : ''}`}
                style={{ height: '120px' }}
              >
                <img src="/foot_skeleton.png" alt="Pé" style={{ height: '75px', width: 'auto', objectFit: 'contain' }} />
              </div>
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <Mascot state="guide" size={90} />
              <div style={{
                position: 'relative',
                backgroundColor: 'white',
                border: '2px solid var(--color-gray-light)',
                borderRadius: '16px',
                padding: '12px 16px',
                fontSize: '13px',
                color: 'var(--color-charcoal)',
                fontWeight: '600',
                lineHeight: '1.4',
                boxShadow: '0 2px 0 var(--color-gray-light)',
                flex: 1
              }}>
                Escolha o osso que representa o fêmur. Ele é o osso mais longo do corpo humano!
                <div style={{
                  position: 'absolute',
                  left: '-8px',
                  top: '50%',
                  transform: 'translateY(-50%) rotate(90deg)',
                  width: '0',
                  height: '0',
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '8px solid var(--color-gray-light)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  left: '-6px',
                  top: '50%',
                  transform: 'translateY(-50%) rotate(90deg)',
                  width: '0',
                  height: '0',
                  borderLeft: '5px solid transparent',
                  borderRight: '5px solid transparent',
                  borderTop: '7px solid white'
                }}></div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Multiple choice statement completion */}
        {currentStep === 2 && (
          <div className="animate-pop-in flex-1 flex flex-col">
            <div className="flex items-center gap-1.5 text-purple font-extrabold text-sm mb-2" style={{ color: 'var(--color-purple)' }}>
              <Sparkles size={16} fill="var(--color-purple)" />
              MÚLTIPLA ESCOLHA
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--color-charcoal)', marginBottom: '24px' }}>
              Complete a afirmação sobre o fêmur:
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <div style={{
                backgroundColor: 'white',
                border: '2px solid var(--color-gray-light)',
                borderRadius: '16px',
                padding: '16px 20px',
                fontSize: '18px',
                fontWeight: '800',
                color: 'var(--color-charcoal)',
                width: '100%',
                boxShadow: '0 4px 0 var(--color-gray-light)',
                textAlign: 'center'
              }}>
                "O fêmur é o osso mais ______"
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => !isAnswerChecked && setSelectedOption('longo')}
                className={`card-3d p-4 text-left font-extrabold text-sm flex items-center justify-between ${selectedOption === 'longo' ? 'selected' : ''}`}
                style={{ textTransform: 'none' }}
                disabled={isAnswerChecked}
              >
                <span>A. Longo do corpo humano</span>
                <span className="text-gray-medium text-xs font-bold">1</span>
              </button>

              <button
                onClick={() => !isAnswerChecked && setSelectedOption('curto')}
                className={`card-3d p-4 text-left font-extrabold text-sm flex items-center justify-between ${selectedOption === 'curto' ? 'selected' : ''}`}
                style={{ textTransform: 'none' }}
                disabled={isAnswerChecked}
              >
                <span>B. Curto do corpo humano</span>
                <span className="text-gray-medium text-xs font-bold">2</span>
              </button>

              <button
                onClick={() => !isAnswerChecked && setSelectedOption('largo')}
                className={`card-3d p-4 text-left font-extrabold text-sm flex items-center justify-between ${selectedOption === 'largo' ? 'selected' : ''}`}
                style={{ textTransform: 'none' }}
                disabled={isAnswerChecked}
              >
                <span>C. Largo do corpo humano</span>
                <span className="text-gray-medium text-xs font-bold">3</span>
              </button>

              <button
                onClick={() => !isAnswerChecked && setSelectedOption('fragil')}
                className={`card-3d p-4 text-left font-extrabold text-sm flex items-center justify-between ${selectedOption === 'fragil' ? 'selected' : ''}`}
                style={{ textTransform: 'none' }}
                disabled={isAnswerChecked}
              >
                <span>D. Frágil do corpo humano</span>
                <span className="text-gray-medium text-xs font-bold">4</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Pin Identification (Femur Head) */}
        {currentStep === 3 && (
          <div className="animate-pop-in flex-1 flex flex-col">
            <div className="flex items-center gap-1.5 text-purple font-extrabold text-sm mb-2" style={{ color: 'var(--color-purple)' }}>
              <AlertTriangle size={16} fill="var(--color-purple)" />
              PROVA PRÁTICA (ANATO)
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--color-charcoal)', marginBottom: '16px' }}>
              Identifique a estrutura apontada pelo alfinete 1:
            </h2>

            <div className="flex justify-center mb-6">
              <div className="relative border-2 border-gray-light rounded-2xl p-4 bg-gray-bg" style={{ width: '100%', maxWidth: '280px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/femur.png" alt="Femur Head Pin" style={{ height: '130px', width: 'auto', transform: 'rotate(-40deg) translateY(-10px)' }} />
                
                {/* Red Pin 1 pointing to the Head of the Femur */}
                <div style={{ position: 'absolute', top: '15px', left: 'calc(50% - 20px)', zIndex: 10 }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#ff4b4b',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '900',
                      fontSize: '11px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}>1</div>
                    <div style={{
                      width: '3px',
                      height: '20px',
                      backgroundColor: '#ff4b4b',
                      transform: 'rotate(-25deg)',
                      transformOrigin: 'top center',
                      marginLeft: '8px'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 flex-1 justify-end">
              <button
                onClick={() => !isAnswerChecked && setSelectedOption('colo')}
                className={`card-3d p-4 text-left font-extrabold text-sm flex items-center justify-between ${selectedOption === 'colo' ? 'selected' : ''}`}
                style={{ textTransform: 'none' }}
                disabled={isAnswerChecked}
              >
                <span>A. Colo do fêmur</span>
                <span className="text-gray-medium text-xs font-bold">1</span>
              </button>
              
              <button
                onClick={() => !isAnswerChecked && setSelectedOption('cabeca')}
                className={`card-3d p-4 text-left font-extrabold text-sm flex items-center justify-between ${selectedOption === 'cabeca' ? 'selected' : ''}`}
                style={{ textTransform: 'none' }}
                disabled={isAnswerChecked}
              >
                <span>B. Cabeça do fêmur</span>
                <span className="text-gray-medium text-xs font-bold">2</span>
              </button>

              <button
                onClick={() => !isAnswerChecked && setSelectedOption('trocanter')}
                className={`card-3d p-4 text-left font-extrabold text-sm flex items-center justify-between ${selectedOption === 'trocanter' ? 'selected' : ''}`}
                style={{ textTransform: 'none' }}
                disabled={isAnswerChecked}
              >
                <span>C. Trocanter maior</span>
                <span className="text-gray-medium text-xs font-bold">3</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: True / False Articulation */}
        {currentStep === 4 && (
          <div className="animate-pop-in flex-1 flex flex-col">
            <div className="flex items-center gap-1.5 text-purple font-extrabold text-sm mb-2" style={{ color: 'var(--color-purple)' }}>
              <Sparkles size={16} fill="var(--color-purple)" />
              VERDADEIRO OU FALSO
            </div>

            <h2 style={{ fontSize: '21px', fontWeight: '800', color: 'var(--color-charcoal)', marginBottom: '24px', lineHeight: '1.4' }}>
              O fêmur articula-se superiormente com o quadril (pelo acetábulo) e inferiormente com a tíbia e a patela.
            </h2>

            <div className="flex flex-col gap-4 flex-1 justify-center max-h-[220px] mb-6">
              <button 
                onClick={() => !isAnswerChecked && setSelectedOption('verdadeiro')}
                className={`btn-3d ${selectedOption === 'verdadeiro' ? 'btn-green' : 'btn-outline'}`}
                style={{ textTransform: 'none', fontSize: '18px' }}
                disabled={isAnswerChecked}
              >
                Verdadeiro
              </button>

              <button 
                onClick={() => !isAnswerChecked && setSelectedOption('falso')}
                className={`btn-3d ${selectedOption === 'falso' ? 'btn-green' : 'btn-outline'}`}
                style={{ textTransform: 'none', fontSize: '18px' }}
                disabled={isAnswerChecked}
              >
                Falso
              </button>
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <Mascot state="guide" size={90} />
              <div style={{
                position: 'relative',
                backgroundColor: 'white',
                border: '2px solid var(--color-gray-light)',
                borderRadius: '16px',
                padding: '12px 16px',
                fontSize: '13px',
                color: 'var(--color-charcoal)',
                fontWeight: '600',
                lineHeight: '1.4',
                boxShadow: '0 2px 0 var(--color-gray-light)',
                flex: 1
              }}>
                Lembre-se das conexões articulares! O fêmur conecta o tronco ao joelho.
                <div style={{
                  position: 'absolute',
                  left: '-8px',
                  top: '50%',
                  transform: 'translateY(-50%) rotate(90deg)',
                  width: '0',
                  height: '0',
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '8px solid var(--color-gray-light)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  left: '-6px',
                  top: '50%',
                  transform: 'translateY(-50%) rotate(90deg)',
                  width: '0',
                  height: '0',
                  borderLeft: '5px solid transparent',
                  borderRight: '5px solid transparent',
                  borderTop: '7px solid white'
                }}></div>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Pin Identification (Femur Neck) */}
        {currentStep === 5 && (
          <div className="animate-pop-in flex-1 flex flex-col">
            <div className="flex items-center gap-1.5 text-purple font-extrabold text-sm mb-2" style={{ color: 'var(--color-purple)' }}>
              <AlertTriangle size={16} fill="var(--color-purple)" />
              PROVA PRÁTICA (ANATO)
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--color-charcoal)', marginBottom: '16px' }}>
              Identifique a estrutura apontada pelo alfinete 2:
            </h2>

            <div className="flex justify-center mb-6">
              <div className="relative border-2 border-gray-light rounded-2xl p-4 bg-gray-bg" style={{ width: '100%', maxWidth: '280px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/femur.png" alt="Femur Neck Pin" style={{ height: '130px', width: 'auto', transform: 'rotate(-40deg) translateY(-10px)' }} />
                
                {/* Red Pin 2 pointing to the Neck of the Femur */}
                <div style={{ position: 'absolute', top: '35px', left: 'calc(50% - 10px)', zIndex: 10 }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#ff4b4b',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '900',
                      fontSize: '11px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}>2</div>
                    <div style={{
                      width: '3px',
                      height: '20px',
                      backgroundColor: '#ff4b4b',
                      transform: 'rotate(-25deg)',
                      transformOrigin: 'top center',
                      marginLeft: '8px'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 flex-1 justify-end">
              <button
                onClick={() => !isAnswerChecked && setSelectedOption('colo')}
                className={`card-3d p-4 text-left font-extrabold text-sm flex items-center justify-between ${selectedOption === 'colo' ? 'selected' : ''}`}
                style={{ textTransform: 'none' }}
                disabled={isAnswerChecked}
              >
                <span>A. Colo do fêmur</span>
                <span className="text-gray-medium text-xs font-bold">1</span>
              </button>
              
              <button
                onClick={() => !isAnswerChecked && setSelectedOption('epifise')}
                className={`card-3d p-4 text-left font-extrabold text-sm flex items-center justify-between ${selectedOption === 'epifise' ? 'selected' : ''}`}
                style={{ textTransform: 'none' }}
                disabled={isAnswerChecked}
              >
                <span>B. Epífise distal</span>
                <span className="text-gray-medium text-xs font-bold">2</span>
              </button>

              <button
                onClick={() => !isAnswerChecked && setSelectedOption('fossa')}
                className={`card-3d p-4 text-left font-extrabold text-sm flex items-center justify-between ${selectedOption === 'fossa' ? 'selected' : ''}`}
                style={{ textTransform: 'none' }}
                disabled={isAnswerChecked}
              >
                <span>C. Fossa da cabeça do fêmur</span>
                <span className="text-gray-medium text-xs font-bold">3</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Dynamic Feedback Footer Bar */}
      {!isAnswerChecked ? (
        <div className="border-t-2 border-gray-light p-6 bg-white flex justify-between items-center gap-4">
          <button
            onClick={handleCheckAnswer}
            disabled={
              (currentStep === 1 && !selectedOption) || 
              (currentStep === 2 && !selectedOption) || 
              (currentStep === 3 && !selectedOption) ||
              (currentStep === 4 && !selectedOption) ||
              (currentStep === 5 && !selectedOption)
            }
            className={`btn-3d ${
              ((currentStep === 1 && selectedOption) || 
               (currentStep === 2 && selectedOption) || 
               (currentStep === 3 && selectedOption) ||
               (currentStep === 4 && selectedOption) ||
               (currentStep === 5 && selectedOption)) 
                 ? 'btn-green' : 'btn-disabled'
            }`}
          >
            VERIFICAR
          </button>
        </div>
      ) : (
        /* Result Pop-up panel */
        <div 
          className="p-6 flex flex-col gap-4 animate-slide-up"
          style={{
            backgroundColor: isCorrect ? '#edf5eb' : '#fbf0ee',
            borderTop: `4px solid ${isCorrect ? '#5f8753' : 'var(--color-orange)'}`,
            zIndex: 10
          }}
        >
          <div className="flex items-center gap-4">
            <Mascot state={isCorrect ? 'happy' : 'sad'} size={64} />
            
            <div className="flex-1">
              <h3 style={{
                fontSize: '18px',
                fontWeight: '900',
                color: isCorrect ? '#3f5a36' : 'var(--color-orange)'
              }}>
                {isCorrect ? 'Excelente!' : 'Tente novamente!'}
              </h3>
              <p style={{
                fontSize: '13px',
                color: 'var(--color-charcoal)',
                fontWeight: '700',
                marginTop: '2px'
              }}>
                {isCorrect 
                  ? 'Você acertou! Continue assim.' 
                  : currentStep === 1 
                  ? 'A resposta correta era: "Fêmur".' 
                  : currentStep === 2 
                  ? 'A resposta correta é: "Longo do corpo humano".' 
                  : currentStep === 3 
                  ? 'A estrutura correta é a "Cabeça do fêmur".'
                  : currentStep === 4
                  ? 'A afirmação é Verdadeira!'
                  : 'A estrutura correta é o "Colo do fêmur".'}
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className={`btn-3d ${isCorrect ? 'btn-green' : 'btn-outline-red'}`}
            style={{ 
              backgroundColor: isCorrect ? 'var(--color-green)' : 'var(--color-red)',
              color: isCorrect ? 'var(--color-charcoal)' : 'white',
              borderColor: isCorrect ? 'var(--color-green-dark)' : 'var(--color-red-dark)',
              boxShadow: isCorrect ? '0 4px 0 var(--color-green-dark)' : '0 4px 0 var(--color-red-dark)'
            }}
          >
            CONTINUAR
          </button>
        </div>
      )}
    </div>
  );
};

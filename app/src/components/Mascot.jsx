import React from 'react';

export const Mascot = ({ state = 'happy', size = 120, className = '' }) => {
  // Determine animation/filter styling based on state
  let imgStyle = {
    width: `${size}px`,
    height: 'auto',
    maxHeight: '100%',
    objectFit: 'contain',
    display: 'block'
  };

  let animationClass = '';
  let accessory = null;

  if (state === 'happy') {
    animationClass = 'animate-bounce';
    accessory = (
      <div style={{
        position: 'absolute',
        top: '0px',
        right: '0px',
        fontSize: '24px',
        pointerEvents: 'none'
      }}>
        ✨
      </div>
    );
  } else if (state === 'celebrating') {
    animationClass = 'animate-bounce';
    accessory = null;
  } else if (state === 'thinking') {
    animationClass = 'animate-pulse';
    accessory = (
      <div style={{
        position: 'absolute',
        top: '0px',
        right: '0px',
        backgroundColor: '#1cb0f6',
        color: 'white',
        borderRadius: '50%',
        width: '26px',
        height: '26px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '900',
        fontSize: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
        zIndex: 5,
        pointerEvents: 'none'
      }}>
        ?
      </div>
    );
  } else if (state === 'sad') {
    accessory = null;
  }

  const isSuccessState = state === 'happy' || state === 'cheering';
  const isCelebrationState = state === 'celebrating';
  const isFailState = state === 'sad' || state === 'incorrect';

  const mascotSrc = isCelebrationState
    ? '/mascot_celebrating.png'
    : isSuccessState
      ? '/mascot_success.png'
      : isFailState
        ? '/mascot_fail.png'
        : '/mascot.png';

  return (
    <div 
      className={`${className}`} 
      style={{ 
        width: `${size}px`, 
        height: `${size}px`, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <img 
        src={mascotSrc} 
        alt="Mascot" 
        style={imgStyle}
        className={animationClass}
      />
      {accessory}
    </div>
  );
};

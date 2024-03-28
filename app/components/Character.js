// components/Character.js
import React from 'react';

const Character = ({  tileSize }) => {
  return (
 <div
      style={{
        width: `${tileSize}px`,
        height: `${tileSize}px`,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Center the character
      }}
    >
      <div
        style={{
          width: '60%',
          height: '60%',
          backgroundColor: 'purple',
          position: 'absolute',
          bottom: '0',
          left: '20%',
          borderRadius: '50% 50% 50% 50%',
        }}
      />
      <div
        style={{
          width: '0',
          height: '0',
          borderLeft: '60px solid transparent',
          borderRight: '60px solid transparent',
          borderBottom: '100px solid blue',
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
    </div>
  );
};

export default Character;
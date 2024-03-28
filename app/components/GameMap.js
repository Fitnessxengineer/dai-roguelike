// components/GameMap.js
import React from 'react';

const GameMap = ({ map, tileSize }) => {
  return (
    <div
      style={{
        width: `${map.length * tileSize}px`,
        height: `${map.length * tileSize}px`,
        backgroundColor: 'lightgray',
        position: 'relative',
      }}
    >
      {map.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <div
            key={`${rowIndex}-${cellIndex}`}
            style={{
              width: `${tileSize}px`,
              height: `${tileSize}px`,
              backgroundColor: cell ? 'black' : 'white',
              position: 'absolute',
              top: `${rowIndex * tileSize}px`,
              left: `${cellIndex * tileSize}px`,
            }}
          />
        ))
      )}
    </div>
  );
};

export default GameMap;
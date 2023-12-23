"use client"
import React, { useState } from 'react';

const PhoneButton = () => {
  const WIDTH = 50;
  const [bgOffset, setBgOffset] = useState(0);
  const [active, setActive] = useState(0);

  const slideBg = (n) => {
    const newBgOffset = WIDTH * n;
    setBgOffset(newBgOffset);
    setActive(n)

  };


  return (
    <div
    className='mb-7 font-bold'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     
      }}
    >
      <div
        style={{
          '--bg-offset': `${bgOffset}%`,
          display: 'flex',
          borderRadius: '20px',
          overflow: 'hidden',
          position: 'relative',
          background: 'white',
   
        }}
      >
        <div
          style={{
            content: '""',
            width: '50%',
            height: '100%',
            background: '#3AB3B3',
            position: 'absolute',
            top: 0,
            left: 'var(--bg-offset)',
            transition: 'left 0.3s',
            zIndex:0,
            borderRadius:"9999px"
           
          }}
        ></div>
        <button
          style={{
            width: '500px',
            border: 'none',
            padding: '0.75rem 1.5rem',
            background: '',
            cursor: 'pointer',
            zIndex:1,
            color: active==0? 'white' : '#3AB3B3',
            
  
          }}
          onClick={() => slideBg(0)}
        >
          Mitarbeiter
        </button>
        <button
          style={{
            width: '500px',
            border: 'none',
            padding: '0.75rem 1.5rem',
            background: 'transparent',
            cursor: 'pointer',
            borderRight: '1px solid #eee',
            color: active==1? 'white' : '#3AB3B3',
            zIndex:1,
           
          }}
          onClick={() => {slideBg(1)} }
        >
          Kunden
        </button>
       
      </div>
    </div>
  );
};

export default PhoneButton;
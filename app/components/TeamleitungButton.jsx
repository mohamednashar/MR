"use client"
import React, { useState } from 'react';
import CardTeamleitung from './CardTeamleitung';
import Gesamtauftrag from './Gesamtauftrag';

const TeamleitungButton = () => {
  const WIDTH = 50;
  const [bgOffset, setBgOffset] = useState(0);
  const [active, setActive] = useState(0);

  const slideBg = (n) => {
    const newBgOffset = WIDTH * n;
    setBgOffset(newBgOffset);
    setActive(n)

  };


  return (
    <>
    {
    active ==0 ?   <CardTeamleitung />:<Gesamtauftrag/>
    
    }
 

    <div
    className='mb-8 font-bold mt-8'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     
      }}
    >
      <div className='w-[82%]'
        style={{
          '--bg-offset': `${bgOffset}%`,
          display: 'flex',
          borderRadius: '15px',
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
            borderRadius:"15px"
           
          }}
        ></div>
        <button
          style={{
            width: '50%',
            border: 'none',
            padding: '0.75rem 1.5rem',
            background: '',
            cursor: 'pointer',
            zIndex:1,
            color: active==0? 'white' : '#265E73',
            
  
          }}
          onClick={() => slideBg(0)}
        >
          Teamleitung
        </button>
        <button
          style={{
            width: '50%',
            border: 'none',
            padding: '0.75rem 1.5rem',
            background: 'transparent',
            cursor: 'pointer',
            color: active==1? 'white' : '#265E73',
            zIndex:1,
           
          }}
          onClick={() => {slideBg(1)} }
        >
          Gesamtauftrag
        </button>
       
      </div>
     
    </div>
 
    </>
  );
};

export default TeamleitungButton;
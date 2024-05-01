import React, { useState } from 'react';
import './styles.css'; // Import your Tailwind CSS styles

interface FullName{
    isClicked: boolean;
    setIsClicked:  (value:boolean)=>void;
}

const AnimatedButton = ({isClicked, setIsClicked}:FullName) => {

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className=' rounded-[11px]'>
    <button
      className={`w-[136px] h-[23px] bg-gradient-to-t from-[#FDC541] to-[#fee8b3] text-[#000000] mr-16 rounded-[11px] text-[12px] transition-transform flex justify-center items-center ${
        isClicked ? 'translate-x-full' : ''
      }`}
      onClick={handleClick}
    >
      {isClicked ? 'All History' : 'Your History'}
    </button>
    </div>
  );
};

export default AnimatedButton;

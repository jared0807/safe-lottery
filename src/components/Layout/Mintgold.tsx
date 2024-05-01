import React, { useState } from 'react';
import Cancel from "../../assets/cancel.png"
import Safemoon from "../../assets/safemoon.png"
import Ton from "../../assets/ton.png"

const Mintgold = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(false);
  }

  return isVisible? (
    <div className='w-full h-screen flex justify-center items-center absolute left-0 top-0 bg-gray-800 bg-opacity-25 px-5'>
    <div className='w-[380px] pb-4 rounded-[15.2px] border-[0.84px] border-[#A7A7A7]  bg-white'>
      <div className='flex justify-between'>
        <h1 className='text-[20px] text-[#000000] font-bold pl-3 pt-5'>Mint Goldmoon on TON</h1>
        <div className='px-1 py-1 border-2 rounded-full  mt-6 mr-3 '> 
          <img src={Cancel} alt="cancel" className='w-[12.89px] h-[12.89px]' onClick={handleClose}/>
        </div>
      </div>
      <div className='flex justify-between pt-5'>
        <h1 className='font-bold text-[12px] text-start text-[#000000] pl-3'>Mint:</h1>
        <div className='flex pr-5'>
          <h1 className='text-[12px] font-bold text-[#000000] text-opacity-40 text-end'>GOLD</h1>
          <img src={Safemoon} alt="safemoon" className='w-[12px] h-[13px] items-end mt-1' />
        </div>
      </div>
      {/* <input className='border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500' /> */}
      <div className='px-3 pt-1'>
        <div className='flex bg-[#000000] bg-opacity-5 border-2 border-[#000000] border-opacity-10 w-full h-[52px] rounded-[6px] justify-between'>
          <h1 className='text-14px text-[#000000] text-opacity-30 text-start pl-2 pt-3' >Amount</h1>
          <div className='flex pr-2 pt-3'> 
            <h1 className='text-[12px] text-[#000000] text-opacity-30'>100</h1>
            <img src={Safemoon} alt="safemoon" className='w-[14px] h-[15px]' />
          </div>
        </div>
      </div>
      <div className='px-3'>
        <div className='flex flex-col border-2 border-[#000000] border-opacity-10 w-full h-[127px] rounded-[9px] bg-[#000000] bg-opacity-5 mt-2'>
          <div className='flex justify-between px-2 pt-2' >
            <div className='flex'>
              <h1 className='text-[14px] text-[#000000] text-opacity-30'>Cost per 1 GOLD</h1>
              <img src={Safemoon} alt="safemoon" className='w-[13px] h-[14px] mt-1' />
            </div> 
            <div className='flex gap-1'>
              <h1 className='text-[14px] text-[#000000] text-opacity-30'>1 TON</h1>
              <img src={Ton} alt="ton" className='w-[10px] h-[10px] mt-1' />
            </div>
          </div>
          <div>
            <div className='justify-between flex px-2'>
              <h1 className='text-[14px] text-[#000000] text-opacity-30'>Total cost</h1>
              <div className='flex gap-1'>
                <h1 className='text-[14px] text-[#000000] text-opacity-30'>100 TON</h1>
                <img src={Ton} alt="ton" className='w-[10px] h-[10px] mt-1' />
              </div>
            </div>
          </div>
          <div className='bg-[#000000] h-[1px] w-full mt-3 '></div>
          <div className='flex mt-3 justify-between px-2'>
            <h1 className='text-[14px] text-[#000000] text-opacity-30'>You pay:<br/>(Total cost + gas fee)</h1>
            <div className='flex gap-1'>
              <h1 className='text-[14px] text-[#000000] text-opacity-30'>~100 TON</h1>
              <img src={Ton} alt="ton" className='w-[10px] h-[10px] mt-1' />
            </div>
          </div>
        </div>
      </div>
      <div className='px-3 mt-3'>
        <button className='w-full h-[44px] rounded-[6px] border-1 border-[#FDC542] font-semibold bg-gradient-to-t from-[#FDC541] to-[#fee8b3]'>
          Mint GOLD 
        </button>
      </div>
    </div>
    </div>
  ): null; 
};

export default Mintgold;
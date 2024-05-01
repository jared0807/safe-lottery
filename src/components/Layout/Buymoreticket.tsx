"use client"

import Cancel from "../../assets/cancel.png"
import { useState } from "react";

const Buytickets = () => {
    const [isVisible, setIsVisible] = useState(true);
    const handleClose = () => {
        setIsVisible(false);
    }
    return isVisible? (
        <div className="w-full h-screen fixed left-0 top-0 bg-gray-800 bg-opacity-25 px-5 flex items-center justify-center z-10">
            <div className='w-[380px] pb-4 rounded-[15.2px] border-[0.84px] border-[#000000] border-opacity-25  bg-white'>
                <div className="flex justify-between px-3">
                    <h1 className="font-bold text-[20px] mt-3 ">Round 99</h1>
                    <div className="px-1 py-1 border-2 rounded-full mt-4" onClick={handleClose}>
                        <img src={Cancel} alt="cancel" className="w-[12.89px] h-[12.89px]"  />
                    </div>
                </div>
                <div className="px-3 mt-3"> 
                    <div className="bg-[#F8F8F8] rounded-[9px] px-20 pb-2">
                        <h1 className="font-bold text-[12px] pt-2">Your tickets:</h1>
                        <p className="text-[9px] text-[#6D6D70] pt-1">#001</p>
                        <div className="boder-2 rounded-[9px] border-[#000000] border-opacity-20 bg-white py-2 mt-2 text-center flex justify-between px-10">
                         <p className="text-[12px] ">3</p>
                         <p className="text-[12px] ">|</p>
                         <p className="text-[12px] ">3</p>
                         <p className="text-[12px] ">|</p>
                         <p className="text-[12px] ">3</p>
                        </div>
                        <p className="text-[9px] text-[#6D6D70] pt-2">#002</p>
                        <div className="boder-1 rounded-[9px] border-[#000000] border-opacity-20 bg-white py-2 mt-2 text-center flex justify-between px-10">
                         <p className="text-[12px] ">2</p>
                         <p className="text-[12px] ">|</p>
                         <p className="text-[12px] ">6</p>
                         <p className="text-[12px] ">|</p>
                         <p className="text-[12px] ">7</p>
                        </div>
                        <p className="text-[9px] text-[#6D6D70] pt-2">#003</p>
                        <div className="boder-1 rounded-[9px] border-[#000000] border-opacity-20 bg-white py-2 mt-2 text-center flex justify-between px-10">
                         <p className="text-[12px] ">3</p>
                         <p className="text-[12px] ">|</p>
                         <p className="text-[12px] ">3</p>
                         <p className="text-[12px] ">|</p>
                         <p className="text-[12px] ">3</p>
                        </div>
                    </div>
                    <div className="items-center flex justify-center pt-3">
                        <button className="px-4 py-3  bg-gradient-to-t from-[#FDC541] to-[#fee8b3] text-[#000000] font-medium rounded-md w-[270px] text-[12px]">
                            Buy more tickets
                        </button>
                    </div>
                </div>
            </div>    
        </div>
    ): null;
};

export default Buytickets
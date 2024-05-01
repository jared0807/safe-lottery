"use client"

import Cancel from "../../assets/cancel.png"
import { useState } from "react";
const Rounddata = () => {
    const [isVisible, setIsVisible] = useState(true);
    const handleClose = () => {
        setIsVisible(false);
    }
    return isVisible? (
        <div className="w-full h-screen fixed left-0 top-0 bg-gray-800 bg-opacity-25 px-5 flex items-center justify-center z-10">
            <div className='w-[380px] pb-4 rounded-[15.2px] border-[0.84px] border-[#000000] border-opacity-25  bg-white'>
                <div className="flex justify-between px-3">
                    <h1 className="font-bold text-[20px] mt-3 ">Round 98</h1>
                    <div className="px-1 py-1 border-2 rounded-full mt-4" onClick={handleClose}>
                        <img src={Cancel} alt="cancel" className="w-[12.89px] h-[12.89px]"  />
                    </div>
                </div>
                
            </div>    
        </div>
    ): null;
};

export default Rounddata
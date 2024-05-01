"use client"

import Cancel from "../../assets/cancel.png"
import { useState } from "react";
import Ticket from "../../assets/ticket.png"
import Safemoon from "../../assets/safemoon.png"
import Buytickets from "./Buytickets";

const Editnumbers = () => {
    const [ isComponentVisible, setIsComponentVisible ] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const handleClose = () => {
        setIsVisible(false);
    }

    const handleButtonClick = () => {
        setIsComponentVisible(!isComponentVisible);
        handleClose();
    };

    return isVisible? (
        <div className="w-full h-screen fixed left-0 top-0 bg-gray-800 bg-opacity-25 px-5 flex items-center justify-center z-10">
            <div className='w-[380px] pb-4 rounded-[15.2px] border-[0.84px] border-[#000000] border-opacity-25  bg-white'>
                <div className="flex justify-between px-3">
                    <h1 className="font-bold text-[20px] mt-3 ">Edit numbers</h1>
                    <div className="px-1 py-1 border-2 rounded-full mt-4" onClick={handleClose}>
                        <img src={Cancel} alt="cancel" className="w-[12.89px] h-[12.89px]"  />
                    </div>
                </div>
                <div className="flex justify-between px-3 pt-6">
                    <h1 className="text-[12px] font-bold text-[#000000]">Total Tickets Amount:</h1>
                    <div className="flex gap-1">
                        <h1 className="text-[12px] font-bold text-[#000000] text-opacity-50">5 Tickets</h1>
                        <img src={Ticket} alt="ticket" className="w-[20px] h-[8.72px] mt-1"/>
                    </div>
                </div>
                <div className="px-3">
                    <p className="text-8px">Numbers are randomized. If you do not want duplicates, mark checkbox below.Tap a number to edit it.Avalible digits: 0-9.</p>
                </div>
                <div className="flex justify-between px-3 pt-2">
                    <input type="checkbox" className="appearance-none checked:bg-blue-500" />
                    <h1 className="text-[12px] font-bold text-[#000000] text-opacity-50">Unique numbers on each ticket.</h1>    
                </div>
                <div className="px-3">
                    <button className="w-full px-5 py-2 text-[#0088CB]  mt-2 rounded-[6px] border-[1px] border-[#0088CB]">Randomize Tickets</button>
                </div>
                <div className="px-3 pt-2 flex flex-col "> 
                    <div className="flex  rounded-[6px] border-[0.84px] px-20 py-2  bg-[#000000] bg-opacity-5 flex-col">
                    <p className="text-[9px] text-[#6D6D70] pt-1 ">#001</p>
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
                    <div className="h-[1px] bg-[#000000] w-full mt-2">
                    </div>
                    <div className="flex justify-between mt-2">
                        <h1 className="text-[16px] text-[#6D6D70]">You pay:<br/><span className="text-[12px]">(Total cost + gas fee - bulk discount)</span></h1>
                        <div className="flex gap-1">
                            <h1 className="text-[14px] text-[#6D6D70]">~4.75 GOLD</h1>
                            <img src={Safemoon} alt="safemoon" className="w-[12px] h-[13px] mt-1" />
                        </div>
                    </div>
                    <button className="w-full px-5 py-2 text-[#FFFFFF] bg-gradient-to-t from-[#0088CB] to-[#00ccff] mt-2 rounded-[6px] border-[1px]">Buy Instantly</button>
                    <button className="w-full px-5 py-2 text-[#0088CB]  mt-2 rounded-[6px] border-[1px] border-[#FFFFFF]" onClick={handleButtonClick}>Go back</button>
                    {isComponentVisible && <Buytickets />}
                </div>
            </div>
            
        </div>
    ): null;
};

export default Editnumbers
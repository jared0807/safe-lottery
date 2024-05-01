"use client"

import Cancel from "../../assets/cancel.png"
import { useState } from "react";
import Ticket from "../../assets/ticket.png"
import Safemoon from "../../assets/safemoon.png"
import Error from "../../assets/error.png"
import Editnumbers from "./Editnumbers";

const Buytickets = () => {
    const [ isComponentVisible, setIsComponentVisible ] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const handleClose = () => {
        setIsVisible(false);
    }

    const handleButtonClick = () => {
        setIsComponentVisible(!isComponentVisible);
    };

    return isVisible? (
        <div className="w-full h-screen fixed left-0 top-0 bg-gray-800 bg-opacity-25 px-5 flex items-center justify-center z-10">
            <div className='w-[380px] pb-4 rounded-[15.2px] border-[0.84px] border-[#000000] border-opacity-25  bg-white'>
                <div className="flex justify-between px-3">
                    <h1 className="font-bold text-[20px] mt-3 ">Buy tickets</h1>
                    <div className="px-1 py-1 border-2 rounded-full mt-4" onClick={handleClose}>
                        <img src={Cancel} alt="cancel" className="w-[12.89px] h-[12.89px]"  />
                    </div>
                </div>
                <div className="flex justify-between px-3 pt-6">
                    <h1 className="text-[12px] font-bold text-[#000000]">Buy:</h1>
                    <div className="flex gap-1">
                        <h1 className="text-[12px] font-bold text-[#000000] text-opacity-50">Tickets</h1>
                        <img src={Ticket} alt="ticket" className="w-[20px] h-[8.72px] mt-1"/>
                    </div>
                </div>
                <div className="px-3 pt-2"> 
                    <div className="flex bg-[#000000] bg-opacity-5 rounded-[6px] border-[0.84px] px-3 py-2 justify-between">
                        <h1 className="text-[14px] ">Amount</h1>
                        <div className="flex gap-2">
                            <h1 className="text-[#000000] text-opacity-20 text-[14px]">5</h1>
                            <div className="bg-[#158AC9] bg-opacity-15 w-[61px] h-[24px] rounded-[6.76px]">
                                <h1 className="text-[11.82px] text-[#158AC9] px-2 py-1">Max buy</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between px-3 pt-2">
                    <h1 className="text-[12px] font-bold text-[#000000]">Gold balance:</h1>
                    <div className="flex gap-1">
                        <h1 className="text-[12px] font-bold text-[#000000] text-opacity-50">100 000</h1>
                        <img src={Safemoon} alt="safemoon" className="w-[12px] h-[13px] mt-1"/>
                    </div>
                </div>
                <div className="px-3 pt-2 flex flex-col "> 
                    <div className="flex  rounded-[6px] border-[0.84px] px-3 py-2  bg-[#000000] bg-opacity-5 flex-col">
                        <div className="flex justify-between">
                            <h1 className="text-[14px] text-[#6D6D70]">Available to buy</h1>
                            <h1 className="text-[#6D6D70] text-[14px]"><span className="text-[#43D26C]">100</span>/100 Tickets</h1>    
                        </div>
                        <div className="flex justify-between">
                            <h1 className="text-[14px] text-[#6D6D70]">Min. buy</h1>
                            <h1 className="text-[14px] text-[#6D6D70]">1 Ticket</h1>
                        </div>
                        <div className="flex justify-between">
                            <h1 className="text-[14px] text-[#6D6D70]">Max. buy</h1>
                            <h1 className="text-[14px] text-[#6D6D70]">100 Tickets</h1>
                        </div>

                        <div className="flex justify-between mt-2">
                            <h1 className="text-[14px] text-[#6D6D70]">Cost per Ticket</h1>
                            <div className="flex gap-1">
                                <h1 className="text-[14px] text-[#6D6D70]">5$ in GOLD</h1>
                                <img src={Safemoon} alt="safemoon" className="w-[12px] h-[13px] mt-1" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-2">
                            <h1 className="text-[14px] text-[#6D6D70]">Total cost</h1>
                            <div className="flex gap-1">
                                <h1 className="text-[14px] text-[#6D6D70]">5 GOLD</h1>
                                <img src={Safemoon} alt="safemoon" className="w-[12px] h-[13px] mt-1" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-2">
                            <div className="flex gap-1">
                                <h1 className="text-[14px] text-[#6D6D70]"><span className="text-[#000000] font-bold">0.05%</span> bulk discount</h1>
                                <div className="bg-[#000000] bg-opacity-10 rounded-full  px-2.5 py-2">
                                <img src={Error} alt="error" className="w-[1.7px] h-[7.79px] "/>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <h1 className="text-[14px] text-[#6D6D70]">0.25 GOLD</h1>
                                <img src={Safemoon} alt="safemoon" className="w-[12px] h-[13px] mt-1" />
                            </div>
                        </div>
                        <div className="h-[1px] bg-[#000000] w-full mt-3">
                        </div>
                        <div className="flex justify-between mt-2">
                            <h1 className="text-[16px] text-[#6D6D70]">You pay:<br/><span className="text-[12px]">(Total cost + gas fee - bulk discount)</span></h1>
                            <div className="flex gap-1">
                                <h1 className="text-[14px] text-[#6D6D70]">~4.75 GOLD</h1>
                                <img src={Safemoon} alt="safemoon" className="w-[12px] h-[13px] mt-1" />
                            </div>
                        </div>
                    </div>
                    <button className="w-full px-5 py-2 text-[#FFFFFF] bg-gradient-to-t from-[#0088CB] to-[#00ccff] mt-2 rounded-[6px] border-[1px]">Buy Instantly</button>
                    <button className="w-full px-5 py-2 text-[#0088CB]  mt-2 rounded-[6px] border-[1px] border-[#0088CB]" onClick={handleButtonClick}>View/Edit Numbers</button>
                    {isComponentVisible && <Editnumbers />}
                    <p className="text-[12px] font-semibold text-center mt-2">"Buy instantly" chooses random numbers, with no<br/> duplicates among your tickets. This is the final purchase.</p>
                </div>
            </div>
            
        </div>
    ): null;
};

export default Buytickets
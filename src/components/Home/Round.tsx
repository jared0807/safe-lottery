"use client"

import Safemoon from "../../assets/safemoon.png"
import BuyButton from "../../components/Buttons/BuyButton"
import { useState } from "react"
import Buymoreticket from "../../components/Layout/Buymoreticket"

const Round = () => {
    const [ isComponentVisible, setIsComponentVisible ] = useState(false);

    const handleButtonClick = () => {
        setIsComponentVisible(!isComponentVisible);
    };
    return (
        <div className="items-center justify-center">
            <h1 className="text-[24px] text-center font-semibold">Round 99</h1>
            <h1 className="text-[24px] text-center font-semibold">Get your tickets now!</h1>
            <h1 className="text-[18.54px] text-center font-medium"><span className="text-[24px] text-[#FFD231] font-bold">57m 30s </span>until the draw</h1>
            <div className="flex justify-center items-center gap-4 mt-2">
                <div className="w-[56px] h-[70px] bg-gradient-to-r from-[#FFD231] via-[#FFFFFF] to-[#FFD231] bg-gradient-[120deg] bg-opacity-90 rounded-[6px]">
                </div>
                <div className="w-[56px] h-[70px] bg-gradient-to-r from-[#FFD231] via-[#FFFFFF] to-[#FFD231] bg-gradient-[120deg] rounded-lg">
                </div>
                <div className="w-[56px] h-[70px] bg-gradient-to-r from-[#FFD231] via-[#FFFFFF] to-[#FFD231] bg-gradient-[120deg] rounded-lg">
                </div>
            </div>
            <h1 className="text-[18px] text-center leading-6 mt-4 font-bold">Total Prize Pool</h1>
            <h1 className="text-center text-[#F9C71D] text-[40px] font-bold">~$100 000</h1>
            <div className="flex justify-center items-center -mt-1">
                <h1 className="text-[#5D5D5D] text-[9px] leading-3 font-bold text-center">16 666.67 GOLD</h1>
                <img
                    src={Safemoon}
                    alt="safemoonss"
                    className="w-[12px]"
                />
            </div>
            <h1 className="text-[14px] text-center font-normal">You have 0 tickets this round</h1>
            <div className="items-center justify-center flex">
            <button
                onClick={handleButtonClick}
                className="text-[14px] text-[#159AC9]"
            >
                View your tickets
            </button>
            {isComponentVisible && <Buymoreticket />}
            </div>
            <BuyButton></BuyButton>
        </div>
    )
}

export default Round
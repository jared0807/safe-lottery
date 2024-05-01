"use client"

import Coin from "../../assets/ticket bez tla 5.png"
import Coins from "../../assets/ticket bez tla 6.png"

const Winner = () => {
    return (
        <div className="bg-[#000000] bg-opacity-20">
            <h1 className="text-[18px] font-bold text-[#000000] text-center mt-10 pt-6">Are you winner?</h1>
            <div className="justify-center items-center flex mt-5 gap-4">
                <img
                    src={Coin}
                    alt="coin"
                    className="w-"
                />
                <button className="bg-gradient-to-t from-[#0088CB] to-[#80d4ff] rounded px-10 py-3  text-[12px] leading-3 text-[#FFFFFF] font-medium">
                    Check Now
                </button>
                <img
                    src={Coins}
                    alt="coins"
                    className=""
                />
            </div>
        </div>
    )
}

export default Winner
"use client"

import BuyButton from "../../components/Buttons/BuyButton"

const Gold = () => {
    return (
        <div className="py-3">
            <h1 className="text-[24px] text-center font-semibold mt-7">Here is your chance to catch<br/><span className="text-[#F9C71D] font-bold">GOLD</span> from the stars! Try your<br/>luck and see if you are the one<br/> who will win the prize!</h1>
            <h1 className="text-center text-[24px] text-semibold">Get your tickets to<br/>join next round!</h1>
            <div className="justify-center items-center flex mt-3">
                <BuyButton></BuyButton>
            </div>
        </div>
    )
}

export default Gold
"use client"
import Safemoon from "../../assets/safemoon.png"
import Stone from "../../assets/stone.png"
import BuyButton from "../../components/Buttons/BuyButton"

const Win = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-[18px] text-center mt-2 font-medium" >
                in Total Prize Pool
            </h1>
            <div className="relative h-full py-20 gap-5 flex bg-contain bg-no-repeat bg-center bg-[url('./assets/moon.png')] flex-col">
                <BuyButton></BuyButton>
                <div className="bg-[#FFFFFF] flex-col border-2 rounded-md ml-[8px] mr-[8px] border-[#000000]/[.20] h-full">
                    <div className="flex gap-4">
                    <div className="flex-1 flex-col bg-[#FDC541] bg-opacity-15 border-2 border-[#FDC541] ml-2 mt-2 rounded-[6px] px-1">
                        <div className="w-full h-[26px] bg-[#FDC541] rounded-[6px] mt-1 ">
                        </div>
                        <h1 className="text-[14px] text-center font-medium text-[#000000]">GOLD POT</h1>
                        <p className="text-[9px] text-center font-normal">Match 3 digits<br/>in the same order<br/>to win 60% of<br/>Total Prize Pool</p>
                        <h1 className="text-[18px] text-center font-medium mt-2">Win</h1>
                        <h1 className="text-[18px] text-center font-bold -mt-2">~$60 000</h1>
                        <div className="flex justify-center items-center -mt-1">
                            <h1 className="text-[#5D5D5D] text-[9px] leading-3 font-medium text-center">10 000 GOLD</h1>
                            <img
                                src={Safemoon}
                                alt="safemoon"
                                className="w-[12px]"
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex-col bg-[#000000] bg-opacity-15 border-2 border-[#000000] mt-2 rounded-[6px] px-1">
                        <div className="w-full h-[26px] bg-[#000000] rounded-[6px] mt-1 ">
                        </div>
                        <h1 className="text-[14px] text-center font-medium text-[#000000]">GOLD POT</h1>
                        <p className="text-[9px] text-center font-normal">Match 3 digits<br/>in the same order<br/>to win 60% of<br/>Total Prize Pool</p>
                        <h1 className="text-[18px] text-center font-medium mt-2">Win</h1>
                        <h1 className="text-[18px] text-center font-bold -mt-2">~$60 000</h1>
                        <div className="flex justify-center items-center -mt-1">
                            <h1 className="text-[#5D5D5D] text-[9px] leading-3 font-medium text-center">10 000 GOLD</h1>
                            <img
                                src={Safemoon}
                                alt="safemoon"
                                className="w-[12px]"
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex-col bg-[#7E7E7E] bg-opacity-15 border-2 border-[#7E7E7E] mr-2 mt-2 rounded-[6px] px-1">
                        <div className="w-full h-[26px] bg-[#7E7E7E] rounded-[6px] mt-1 ">
                        </div>
                        <h1 className="text-[14px] text-center font-medium text-[#000000]">GOLD POT</h1>
                        <p className="text-[9px] text-center font-normal">Match 3 digits<br/>in the same order<br/>to win 60% of<br/>Total Prize Pool</p>
                        <h1 className="text-[18px] text-center font-medium mt-2">Win</h1>
                        <h1 className="text-[18px] text-center font-bold -mt-2">~$60 000</h1>
                        <div className="flex justify-center items-center -mt-1 py-1">
                            <h1 className="text-[#5D5D5D] text-[9px] leading-3 font-medium text-center">10 000 GOLD</h1>
                            <img
                                src={Safemoon}
                                alt="safemoon"
                                className="w-[12px]"
                            />
                        </div>
                    </div>
                    </div>
                    <div className="border-2 bg-[#0088CB] bg-opacity-15 border-[#0088CB] mt-2 ml-2 rounded-[6px] flex mr-2 mb-2">
                        <img
                            src={Stone}
                            alt="stone"
                            className="w-[141px] border-[#0088CB] mt-1 ml-1 mb-1"
                        />
                        <div className="flex-1 mt-2">
                            <h1 className="text-[14px] leading-6 text-center font-medium">GOLD BAR NFT POT</h1>
                            <p className="text-[9px] text-center ">Hold Gold Bar NFT to join raffle to win<br/>1% of total prize pool every round.</p>
                            <h1 className="text-[18px] text-center leading-6 font-medium mt-1">Win</h1>
                            <h1 className="text-[18px] text-center font-bold -mt-1">~$1 000</h1>
                            <div className="flex items-center justify-center ">
                                <h1 className="text-[9px] text-[#5D5D5D] text-center">166.67 GOLD</h1>
                                <img 
                                    src={Safemoon}
                                    alt="safemoons"
                                    className="w-[12px]"
                                />
                            </div>
                            <div className="justify-center items-center flex mb-1 mt-1 ml-1 mr-1">
                                <button className="bg-gradient-to-t from-[#0088CB] to-[#80d4ff] rounded w-full py-3 mt-5 text-[12px] leading-3 text-[#FFFFFF]">
                                    Buy GOLD BAR
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Win
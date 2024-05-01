"use client"

import Play from "../../assets/Vector.png"
import Safemoon from "../../assets/safemoon.png"
import Stone from "../../assets/stone.png"
import Prev from "../../assets/bx_up-arrow.png"
import Next from "../../assets/Vector.png"
import AnimatedButton from "../Buttons/AnimatedButton"
import { useState } from "react"
import Skip from "../../assets/up-arrow.png"

const History = () => {
    
  const [isClicked, setIsClicked] = useState(false);

  
    return (
        <div className="bg-[#000000] bg-opacity-20 px-2 pb-2">
            <h1 className="text-center font-bold text-[18px] pt-5">Previous rounds</h1>
            <div className="justify-center items-center flex">
                <AnimatedButton isClicked = {isClicked} setIsClicked={setIsClicked}/>
            </div>
            { !isClicked?
            <div className="border-2 bg-[#FFFFFF] border-[#000000] border-opacity-40 flex flex-col rounded-[6px] pb-3 pt-1 mt-3">
                <div className="flex justify-center items-center gap-3">
                    <img 
                        src={Prev}
                        alt="prev"
                        className=""
                    />
                    <h1 className="text-[24px] font-semibold">Round 98</h1>
                    <img 
                        src={Next}
                        alt="next"
                        className=""
                    />
                    <img src={Skip} alt="skip" />
                </div>
                <h1 className="font-bold text-[18px] text-center">Winning numbers</h1>
                <div className="flex justify-center items-center gap-4 mt-2">
                    <div className="w-[56px] h-[70px] bg-gradient-to-r from-[#FFD231] via-[#FFFFFF] to-[#FFD231] bg-gradient-[120deg] rounded-[8px] text-[40px] text-center pt-2 font-semibold">2
                    </div>
                    <div className="w-[56px] h-[70px] bg-gradient-to-r from-[#FFD231] via-[#FFFFFF] to-[#FFD231] bg-gradient-[120deg] rounded-[8px] text-[40px] text-center pt-2 font-semibold">5
                    </div>
                    <div className="w-[56px] h-[70px] bg-gradient-to-r from-[#FFD231] via-[#FFFFFF] to-[#FFD231] bg-gradient-[120deg] rounded-[8px] text-[40px] text-center pt-2 font-semibold">4
                </div>
            </div>
            <h1 className="font-bold text-center text-[18px] mt-4">Total Prize Pool</h1>
            <h1 className="text-[#F9C71D] text-center text-[40px] font-bold">~$200 000</h1>
            <div className="flex justify-center items-center -mt-1">
                <h1 className="text-[#5D5D5D] text-[12px] leading-3 font-semibold text-center">333 333.33 GOLD</h1>
                    <img
                        src={Safemoon}
                        alt="safemoon"
                        className="w-[12px]"
                    />
            </div>
            <h1 className="text-[12px] text-center text-[#5D5D5D]">Total players this round: 96</h1>
            <div className="bg-[#FFFFFF] flex-col border-1 rounded-md ml-[8px] mr-[8px] border-[#000000]/[.20] h-full">
                    <div className="flex gap-4">
                    <div className="flex-1 flex-col bg-[#FDC541] bg-opacity-15 border-2 border-[#FDC541] ml-2 mt-2 rounded-[6px] px-1">
                        <div className="w-full h-[26px] bg-[#FDC541] rounded-[6px] mt-1 ">
                        </div>
                        <h1 className="text-[14px] text-center font-medium text-[#000000] mt-1">GOLD POT</h1>
                        <h1 className="text-[18px] text-center font-bold mt-1">~$60 000</h1>
                        <div className="flex justify-center items-center ">
                            <h1 className="text-[#5D5D5D] text-[9px] leading-3 font-medium text-center">10 000 GOLD</h1>
                            <img
                                src={Safemoon}
                                alt="safemoon"
                                className="w-[12px]"
                            />
                        </div>
                        <h1 className="text-[9px] text-[#5D5D5D] text-center mt-1">1 Winning Tickets</h1>
                        <h1 className="text-[9px] text-[#5D5D5D] text-center mt-1 pb-5">20 000 GOLD each</h1>
                    </div>
                    <div className="flex-1 flex-col bg-[#000000] bg-opacity-15 border-2 border-[#000000] mt-2 rounded-[6px] px-1">
                        <div className="w-full h-[26px] bg-[#000000] rounded-[6px] mt-1 ">
                        </div>
                        <h1 className="text-[14px] text-center font-medium text-[#000000] mt-1">GOLD POT</h1>
                        <h1 className="text-[18px] text-center font-bold mt-1">~$60 000</h1>
                        <div className="flex justify-center items-center ">
                            <h1 className="text-[#5D5D5D] text-[9px] leading-3 font-medium text-center">10 000 GOLD</h1>
                            <img
                                src={Safemoon}
                                alt="safemoon"
                                className="w-[12px]"
                            />
                        </div>
                        <h1 className="text-[9px] text-[#5D5D5D] text-center mt-1">1 Winning Tickets</h1>
                        <h1 className="text-[9px] text-[#5D5D5D] text-center mt-1">20 000 GOLD each</h1>
                    </div>
                    <div className="flex-1 flex-col bg-[#7E7E7E] bg-opacity-15 border-2 border-[#7E7E7E] mr-2 mt-2 rounded-[6px] px-1">
                        <div className="w-full h-[26px] bg-[#7E7E7E] rounded-[6px] mt-1 ">
                        </div>
                        <h1 className="text-[14px] text-center font-medium text-[#000000] mt-1">GOLD POT</h1>
                        <h1 className="text-[18px] text-center font-bold mt-1">~$60 000</h1>
                        <div className="flex justify-center items-center mb-1">
                            <h1 className="text-[#5D5D5D] text-[9px] leading-3 font-medium text-center">10 000 GOLD</h1>
                            <img
                                src={Safemoon}
                                alt="safemoon"
                                className="w-[12px]"
                            />
                        </div>
                        <h1 className="text-[9px] text-[#5D5D5D] text-center mt-1">1 Winning Tickets</h1>
                        <h1 className="text-[9px] text-[#5D5D5D] text-center mt-1">20 000 GOLD each</h1>
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
                            <h1 className="text-[18px] text-center font-bold -mt-1">~$2 000</h1>
                            <div className="flex items-center justify-center">
                                <h1 className="text-[9px] text-[#5D5D5D] text-center">333.33 GOLD</h1>
                                <img 
                                    src={Safemoon}
                                    alt="safemoons"
                                    className="w-[12px]"
                                />
                            </div>
                            <h1 className="text-[9px] text-[#5D5D5D] text-center mt-1">Landed in the wallet of one of the</h1>
                            <h1 className="text-[9px] text-[#5D5D5D] text-center mt-1">Gold Bar NFT holders</h1>
                            <div className="justify-center items-center flex mb-1 mt-1 ml-1 mr-1">
                                <button className="bg-gradient-to-t from-[#0088CB] to-[#80d4ff] rounded w-full py-3 mt-5 text-[12px] leading-3 text-[#FFFFFF]">
                                    Buy GOLD BAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>:
            <div className="rounded-[6px] bg-white px-2 py-2 mt-4">
                <div className="rounded-[9px] bg-[#F8F8F8] justify-between py-2 px-3">
                    <h1 className="text-[24px] font-semibold text-center">Your Round History</h1>
                    <table className="table-fixed flex justify-between flex-col ">
                        <thead>
                            <tr className="flex justify-between">
                                <th>Round</th>
                                <th>Date</th>
                                <th>Your tickets</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="flex justify-between">
                                <td>98</td>
                                <td>Apr 25, 2024 11:00</td>
                                <td>1</td>
                                <td><img src={Play} alt="play"/></td>
                            </tr>
                            <tr className="flex justify-between">
                                <td>90</td>
                                <td>Apr 25, 2024 11:00</td>
                                <td>1</td>
                                <td><img src={Play} alt="play" /></td>
                            </tr>
                            <tr className="flex justify-between">
                                <td>88</td>
                                <td>Apr 25, 2024 11:00</td>
                                <td>100</td>
                                <td><img src={Play} alt="play" /></td>
                            </tr>
                            <tr className="flex justify-between">
                                <td>78</td>
                                <td>Apr 25, 2024 11:00</td>
                                <td>5</td>
                                <td><img src={Play} alt="play" /></td>
                            </tr>
                            <tr className="flex justify-between">
                                <td>79</td>
                                <td>Apr 25, 2024 11:00</td>
                                <td>2</td>
                                <td><img src={Play} alt="play" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bg-[#FFFFFF] flex-col border-1 rounded-md border-[#000000]/[.20] h-full">
                    <div className="flex gap-4">
                    <div className="flex-1 flex-col bg-[#FDC541] bg-opacity-15 border-2 border-[#FDC541] ml-2 mt-2 rounded-[6px] px-1 pb-3">
                        <div className="w-full h-[26px] bg-[#FDC541] rounded-[6px] mt-1 ">
                        </div>
                        <h1 className="text-[14px] text-center font-medium text-[#000000] mt-1">GOLD POT</h1>
                        <h1 className="text-[9px] text-[#5D5D5D] text-center font-semibold mt-1">Winnings:</h1>
                        <h1 className="text-[18px] text-[#000000] text-center font-bold mt-1">0</h1>
                        <h1 className="text-[8px] text-[#000000] text-center font-bold">You won overall:</h1>
                        <div className="flex justify-center items-center ">
                            <h1 className="text-[#5D5D5D] text-[9px] leading-3 font-medium text-center">0 GOLD</h1>
                            <img
                                src={Safemoon}
                                alt="safemoon"
                                className="w-[12px]"
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex-col bg-[#000000] bg-opacity-15 border-2 border-[#000000] mt-2 rounded-[6px] px-1 ">
                        <div className="w-full h-[26px] bg-[#000000] rounded-[6px] mt-1 ">
                        </div>
                        <h1 className="text-[14px] text-center font-medium text-[#000000] mt-1">BLACK POT</h1>
                        <h1 className="text-[9px] text-[#5D5D5D] text-center font-semibold mt-1">Winnings:</h1>
                        <h1 className="text-[18px] text-[#000000] text-center font-bold mt-1">3</h1>
                        <h1 className="text-[8px] text-[#000000] text-center font-bold">You won overall:</h1>
                        <div className="flex justify-center items-center ">
                            <h1 className="text-[#5D5D5D] text-[9px] leading-3 font-medium text-center">2030 GOLD</h1>
                            <img
                                src={Safemoon}
                                alt="safemoon"
                                className="w-[12px]"
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex-col bg-[#7E7E7E] bg-opacity-15 border-2 border-[#7E7E7E] mr-2 mt-2 rounded-[6px] px-1 ">
                        <div className="w-full h-[26px] bg-[#7E7E7E] rounded-[6px] mt-1 ">
                        </div>
                        <h1 className="text-[14px] text-center font-medium text-[#000000] mt-1">GRAY POT</h1>
                        <h1 className="text-[9px] text-[#5D5D5D] text-center font-semibold mt-1">Winnings:</h1>
                        <h1 className="text-[18px] text-[#000000] text-center font-bold mt-1">1</h1>
                        <h1 className="text-[8px] text-[#000000] text-center font-bold">You won overall:</h1>
                        <div className="flex justify-center items-center ">
                            <h1 className="text-[#5D5D5D] text-[9px] leading-3 font-medium text-center">30 GOLD</h1>
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
                            className="w-[130px] border-[#0088CB] mt-1 ml-1 mb-1"
                        />
                        <div className="flex-1 mt-2">
                            <h1 className="text-[14px] leading-6 text-center font-medium">GOLD BAR NFT POT</h1>
                            <h1 className="text-[9px] text-[#5D5D5D] text-center font-semibold ">Winnings:</h1>
                            <h1 className="text-[18px] text-[#000000] text-center font-bold ">0</h1>
                            <h1 className="text-[8px] text-[#000000] text-center font-bold">You won overall:</h1>
                            <div className="flex items-center justify-center">
                                <h1 className="text-[9px] text-[#5D5D5D] text-center">0 GOLD</h1>
                                <img 
                                    src={Safemoon}
                                    alt="safemoons"
                                    className="w-[12px]"
                                />
                            </div>
                            <h1 className="text-[9px] text-[#5D5D5D] text-center mt-1">Landed in you wallet</h1>
                            <div className="justify-center items-center flex mb-1 ml-1 mr-1 -mt-4">
                                <button className="bg-gradient-to-t from-[#0088CB] to-[#80d4ff] rounded w-full py-3 mt-5 text-[12px] leading-3 text-[#FFFFFF]">
                                    Buy GOLD BAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default History
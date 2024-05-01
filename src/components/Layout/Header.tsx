"use client"

import { useTonWallet} from "@tonconnect/ui-react";
import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png"
import Menu from "../../assets/Menu.png"
// import HeaderButton from "../Buttons/HeaderButton"
import { TonConnectButton } from "@tonconnect/ui-react"
import Safemoon from "../../assets/safemoon.png"
import Mintgold from "./Mintgold";

const Header = () => {
    const wallet = useTonWallet();
    const [ isComponentVisible, setIsComponentVisible ] = useState(false);
	// const [tonConnectUI] = useTonConnectUI();
    const [walletAddr, setWalletAddr] = useState<string>();
    console.log(walletAddr);
    useEffect(()=>{
       setWalletAddr(wallet?.account.address!)
    }, [wallet])

    const handleButtonClick = () => {
        setIsComponentVisible(!isComponentVisible);
    };

    return (
        <header className="mx-auto sticky top-2 my-6 z-20 px-4 bg-white">
            <div className="flex container mx-auto justify-between items-center p-2">
                <img
                    src={Logo}
                    alt="logo"
                    className="w-[36px]"
                />
                <div className="flex gap-1">
                <div className="flex">
                {wallet? 
                    <div className="flex-col">
                        <div className="flex">
                            <h1 className="text-[9px] font-bold text-black mt-1">100 000 GOLD</h1>
                            <img src={Safemoon} alt="safemoon" className="w-[14px] h-[15px] mt-0.5"/>
                        </div>
                        <button className="bg-yellow-500 rounded-[12px] border-1px border-yellow-700 text-[10px] text-black w-[70px] h-[17px]" onClick={handleButtonClick} >
                            Mint GOLD                            
                        </button>
                        
                        {isComponentVisible && <Mintgold />}
                    </div>:
                    <button className="bg-yellow-500 rounded-[12px] border-1px border-yellow-700 text-[10px] text-black w-[70px] h-[19px] hidden" >
                        Mint GOLD
                    </button>
                }
                
                <TonConnectButton/>
                </div>
                    {/* <TonConnectButton className="bg-[#0088CB] text-[12px] text-[#FFFFFF] rounded px-4 py-3" /> */}
                    {/* <button className="bg-[#0088CB] text-[12px] text-[#FFFFFF] rounded px-4 py-3" >
                        Connect Wallet
                    </button> */}
                    
                <div className="bg-white border-2 border-[#000000] border-opacity-10 px-2 py-2 rounded-[6px] w-[32px] h-[32px] mt-1" >
                    <img
                        src={Menu}
                        alt="menu"
                        className="w-[18.67px] h-[13.33px]"
                    />
                </div>
                </div>
                </div>
            <div className="h-[1px] bg-[#000000] bg-opacity-20">
            </div>
        </header>
    )
}

export default Header
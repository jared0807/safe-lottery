"use client"

import {useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";
import { useEffect, useState } from "react";
import Buytickets from "../Layout/Buytickets";

const HeaderButton = () => {

    const wallet = useTonWallet();
    const [ isComponentVisible, setIsComponentVisible ] = useState(false);
	const [tonConnectUI] = useTonConnectUI();
    const [walletAddr, setWalletAddr] = useState<string>();
    console.log(walletAddr);
    useEffect(()=>{
       setWalletAddr(wallet?.account.address!)
    }, [wallet])
    const handleButtonClick = () => {
        setIsComponentVisible(!isComponentVisible);
    };


    return (
        <div className="justify-center items-center flex mt-3 relative 10px">
            {!wallet?
                <button className="px-4 py-3 bg-gradient-to-t from-[#0088CB] to-[#80d4ff] text-[#FFFFFF] rounded-md w-[270px] text-[12px]" onClick={()=>{tonConnectUI.openModal()}}>
                   {/* {!wallet ? "Connect Wallet" : walletAddr} */}
                   Connect Wallet
                </button>:
                <div>
                <button className="px-4 py-3  bg-gradient-to-t from-[#FDC541] to-[#fee8b3] text-[#000000] font-medium rounded-md w-[270px] text-[12px]" onClick={handleButtonClick}>
                   Buy tickets
                </button>
                {isComponentVisible && <Buytickets />}
                </div>
            }
        </div>
    )
}

export default HeaderButton  
"use client"
import {useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";
import { useEffect, useState } from "react";
import Safemoon from "../../assets/safemoon.png"

const HeaderButton = () => {

    const wallet = useTonWallet();
	const [tonConnectUI] = useTonConnectUI();
    const [walletAddr, setWalletAddr] = useState<string>();
    useEffect(()=>{
       setWalletAddr(wallet?.account.address!)
    }, [wallet])


    return (
        <div className="justify-center items-center flex mt-3 relative 10px">
            {wallet?    
                <div className="flex">
                    <div className="flex-col gap-1">
                        <div className="flex">
                            <h1 className="text-[11.67px] font-bold text-black">100 000 GOLD</h1>
                            <img src={Safemoon} alt="safemoon" className="w-[14px] h-[15px]"/>
                        </div>
                        <button className="bg-yellow-500 rounded-[12px] border-1px border-yellow-700 text-[10px] text-black w-[70px] h-[19px]" >
                            Mint GOLD
                        </button>
                    </div>
                    <button className="px-4 py-1 bg-slate-100 text-[#000000] w-[117px] text-[12px] rounded-[50px] h-[40px] whitespace-nowrap" onClick={()=>{tonConnectUI.disconnect()}}>
                        {walletAddr}
                    </button>
                </div>:
                <button className=" hover:bg-blue-700 bg-blue-500 text-[#FFFFFF] rounded-md px-6 text-[12px] h-[32px] mt-1" onClick={()=>{tonConnectUI.openModal()}}>
                    Connect Wallet
                </button>
            }
        </div>
    )
}

export default HeaderButton  

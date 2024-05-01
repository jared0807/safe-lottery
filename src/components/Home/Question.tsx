"use client"

import { useState } from "react"
import QuestionItem from "../QuestionItem"
import { title } from "process"
import { text } from "stream/consumers"

const Question = () => {
    const items = [
        {
            title: "How to play?",
            text: "If the digits on your tickets match the winning numbers, you win a portion of Total Prize Pool. Simple!"
        },
        {
            title: "What are the winning criteria?",
            text: "You can win one of the 4 pots:",
        },
        {
            title: "What does the total prize pool come from?",
            text: "The prizes for each lottery round come from three sources:",
        },
        {
            title: "What happens if more that one person wins one of the pots?",
            text: "if more than one person wins one of the pots, the winnings from this pot are divided in proportion to the winning tickets held.",
        },
        {
            title: "If I match 3 digits in the same order, do I win the gold pot and the black pot?",
            text: "No. If you match 3 digits in the same order as in draw, you only participate in the gold pot division.You can't win two pots with one ticket. Excluding GOLD BAR NFT POT. If you own an GOLD BAR NFT , you can win both GOLD POT and GOLD BAR NFT POT in one round, if you're lucky enough!.",
        },
        {
            title: "Can I use SafemoonTon to buy tickets?",
            text: "You can swap your SAFET for GOLD on ston.fi",
        },
    ]

    const [active, setActive] = useState<number | undefined>(0)

    return (
        <div className="px-3 pb-32">
            <h1 className="text-center text-[40px] text-[#151515] font-bold pt-3">Frequently asked <br/> questions</h1>
            <div className="flex flex-col space-y-0.5 md:space-y-1.5 bg-white rounded-[12px] md:rounded-[30px] p-1.5 md:py-3.5 md:px-3 lg:ml-[60px] max-lg:mt-8 lg:max-w-[780px]">
                {items.map((item, i) => (
                    <QuestionItem
                        key={i}
                        title={item.title}
                        text={item.text}
                        open={active === i}
                        onOpen={() => setActive(i)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Question
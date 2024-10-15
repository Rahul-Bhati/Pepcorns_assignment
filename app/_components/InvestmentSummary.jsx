import React from 'react'
import InvestSidebar from './InvestSidebar'
import Link from 'next/link'
import Pitch from './Pitch'
import Leadership from './Leadership'

const InvestmentSummary = () => {
    return (
        <div className='mt-14 flex justify-between'>
            <main className="w-[70%]">
                <h1 className='text-2xl text-gray-500 font-bold my-3'>Investment summary</h1>
                <hr className='w-14 my-3' />
                <div className='pl-7 text-gray-600' >
                    <ul style={{ listStyle: "disc" }}>
                        <li>$4.5M+ funding raised, including $2.3M+ R&D funding from US Defense</li>
                        <li>The US Air Force and Army are using our technology</li>
                        <li>Beta launch of GENIE: Key to Precision & Efficiency in AI/ML Model Training</li>
                        <li>Q2 '24 FALCON: Trustworthy AI and ML for Robot Teams</li>
                        <li>The current Sales Pipeline is over $16M</li>
                        <li>The AI market is predicted to reach $1.07Trillion by 2027</li>
                        <li>The global Robotic market is predicted to reach $141B by 2027</li>
                    </ul>
                    <div className='mt-10 text-[12px] font-thin italic flex flex-col gap-5 items-center justify-center text-center'>
                        <p className=''>OpenDeal Broker LLC charges you a two percent (2%) administrative fee on the gross principal transaction with a minimum fee of $5 and a maximum of $300. The fee is added to the total amount of your investment at checkout.</p>
                        <p>Past financial results are no guarantee of future performance. <Link href={"https://republic.com/help/forward-looking-financial-projections-disclaimer-bda22d32-4ea8-4f51-8920-2d89729e29c8"} className='text-blue-600'>Click here for important information regarding Financial Projections</Link> which are not guaranteed.</p>
                        <p>Investments in private companies are particularly risky and may result in total loss of invested capital.</p>
                        <p><Link href={"https://republic.co/risks"} className='text-blue-600'>Risks of early stage investment.</Link> Not an offer to buy or sell securities. This is a long-term speculative illiquid investment. Investment is not FDIC or SiPC insured.</p>
                        <p>There may be other available opportunities that are similar to this investment but have different… <Link href={"https://republic.com/avawatz#"} className='text-blue-600'>Read more</Link></p>

                    </div>
                </div>

                <Pitch />
                <Leadership />
            </main>
            <InvestSidebar className="w-[30%]" />
        </div>
    )
}

export default InvestmentSummary
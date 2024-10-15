import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FileText, Info } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"


const InvestSidebar = () => {
    const items = [
        {
            accTitle: 'Funds Raised',
            accContent: 'Funds raised publicly & privately on and off Republic on the same terms',
            accValue: '$163,247'
        },
        {
            accTitle: 'Allocation',
            accContent: 'The total investment amount in Avawatz being offered to investors.',
            accValue: '$5M'
        },
        {
            accTitle: 'Valuation',
            accContent: 'The value of the company before investments from the current financing round.',
            accValue: '$80.85M'
        },
        {
            accTitle: 'Share price',
            accContent: 'Price per share',
            accValue: '$3 $4'
        },
        {
            accTitle: 'Security type',
            accContent: 'Class of ownership that has a higher claim on assets and earnings than common shares.',
            accValue: 'Preferred Shares'
        },
        {
            accTitle: 'Minimum investment',
            accContent: 'The smallest investment amount the issuer is accepting in this offering.',
            accValue: '$2,500'
        },
        {
            accTitle: 'Deadline',
            accContent: 'Avawatz campaign will end on October 1, 2024 at 12:29 PM IST.',
            accValue: 'October 1, 2024'
        },

    ]
    return (
        <div className='flex flex-col w-[25%]'>
            <div>
                <h1 className='font-bold text-2xl'>Deal terms</h1>
                <hr className='w-14 my-3' />
                {items.map((item, index) => (
                    <Accordion type="single" collapsible key={index}>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="flex items-center text-sm gap-3 justify-between w-full">
                                <div>{item.accTitle}</div>
                                <div className='flex items-center justify-center gap-1 font-bold'>
                                    {item.accValue} <Info size="12px" /></div>
                            </AccordionTrigger>
                            <AccordionContent className="flex w-full">
                                {item.accContent}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}

            </div>
            <div className="mt-10">
                <h1 className='font-bold text-2xl'>Documents</h1>
                <hr className='w-14 my-3' />
                <Card>
                    <CardHeader>
                        <CardDescription>Capital R (OpenDeal Broker LLC, CRD #291387) is hosting this Reg S securities offering by AvaWatz Company.</CardDescription>
                        <hr />
                    </CardHeader>
                    <CardContent>
                        <h3 className='text-gray-500'>Company documents</h3>
                        <ul className="mt-5 flex flex-col gap-2 justify-center">
                            <li className='flex gap-2 justify-center'><FileText size="20px" className='w-[10%]' />
                                <span className='w-[90%]'>Subscription Agreement</span>
                            </li>
                            <li className='flex gap-2 justify-center'><FileText size="20px" className='w-[10%]' />
                                <span className='w-[90%]'>AvaWatz IOM Supplement #3 .pdf</span>
                            </li>
                            <li className='flex gap-2 justify-center'><FileText size="20px" className='w-[10%]' />
                                <span className='w-[90%]'>AvaWatz IOM Supplement #2 .pdf</span>
                            </li>
                            <li className='flex gap-2 justify-center'><FileText size="20px" className='w-[10%]' />
                                <span className='w-[90%]'>AvaWatz Reg S IOM Supplement #1 (05.28.24).pdf</span>
                            </li>
                            <li className='flex gap-2 justify-center'><FileText size="20px" className='w-[10%]' />
                                <span className='w-[90%]'>AvaWatz Company IOM.pdf</span>
                            </li>
                            <li className='flex gap-2 justify-center'><FileText size="20px" className='w-[10%]' />
                                <span className='w-[90%]'>Form CRS.pdf</span>
                            </li>
                            <li className='flex gap-2 justify-center'><FileText size="20px" className='w-[10%]' />
                                <span className='w-[90%]'>Disclosures & Disclaimers.pdf</span>
                            </li>
                            <li className='flex gap-2 justify-center'><FileText size="20px" className='w-[10%]' />
                                <span className='w-[90%]'>Additional Risk Disclosures.pdf</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

            </div>
            <div className="mt-10">
                <h1 className='font-bold text-2xl'>Bonus perks</h1>
                <h4 className="text-gray-500">In addition to your shares, you'll receive perks for investing in Avawatz.</h4>
                <hr className='w-14 my-3' />
                <Card>
                    <CardContent>
                        <ul className="mt-5 flex flex-col gap-2 justify-center" >
                            <li className='flex flex-col gap-2 justify-center'>
                                <h3 className='text-gray-500'>Invest</h3>
                                <h1 className='font-bold text-3xl text-blue-600'>$20,000</h1>
                                <h3 className='text-gray-500'>Receive</h3>
                                <ul className="pl-6" style={{ listStyle: "disc" }}>
                                    <li>5% Additional Bonus Share</li>
                                </ul>
                                <hr />
                            </li>
                            <li className='flex flex-col gap-2 justify-center'>
                                <h3 className='text-gray-500'>Invest</h3>
                                <h1 className='font-bold text-3xl text-blue-600'>$50,000</h1>
                                <h3 className='text-gray-500'>Receive</h3>
                                <ul className="pl-6" style={{ listStyle: "disc" }}>
                                    <li>10% Additional Bonus Share</li>
                                </ul>
                                <hr />
                            </li>
                            <li className='flex flex-col gap-2 justify-center'>
                                <h3 className='text-gray-500'>Invest</h3>
                                <h1 className='font-bold text-3xl text-blue-600'>$100,000</h1>
                                <h3 className='text-gray-500'>Receive</h3>
                                <ul className="pl-6" style={{ listStyle: "disc" }}>
                                    <li>15% Additional Bonus Share</li>
                                </ul>
                                <hr />
                            </li>
                            <li className='flex flex-col gap-2 justify-center'>
                                <h3 className='text-gray-500'>Invest</h3>
                                <h1 className='font-bold text-3xl text-blue-600'>$250,000</h1>
                                <h3 className='text-gray-500'>Receive</h3>
                                <ul className="pl-6" style={{ listStyle: "disc" }}>
                                    <li>25% Additional Bonus Share</li>
                                </ul>
                                <hr />
                            </li>
                        </ul>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}

export default InvestSidebar
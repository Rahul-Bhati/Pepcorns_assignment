"use client";
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link";
import Image from 'next/image';

const CarouselComponent = () => {
    const items = [
        {
            img: "https://uploads.republic.com/p/offerings/card_images/default/000/009/442/9442-1719373054-b0448e4dc9db013a3155c46617d3e9cc61c1b9a1.jpg",
            title: "IP3",
            description: "Copper Cow Coffee is a specialty coffee company that makes...",
            raised: "Republic Funding Portal- Reg F",
        },
        {
            img: "https://uploads.republic.com/p/offerings/card_images/default/000/006/891/6891-1725543819-820d2f2e96fb5ea108a62906eea6b1eb65f5e33b.jpg",
            title: "SharpMed",
            description: "Copper Cow Coffee is a specialty coffee company that makes...",
            raised: "Republic Funding Portal- Reg F",
        },
        {
            img: "https://uploads.republic.com/p/offerings/card_images/default/000/007/883/7883-1714753116-07857bccdf3feb8ce1d8c14e9595274641fdc9ae.jpg",
            title: "Coign",
            description: "Copper Cow Coffee is a specialty coffee company that makes...",
            raised: "Republic Funding Portal- Reg F",
        },
        {
            img: "https://uploads.republic.com/p/offerings/card_images/default/000/010/305/10305-1724776687-7cd03cbe0085b5fbfc070642943d061d52f24256.jpg",
            title: "Zero Gravity",
            description: "Copper Cow Coffee is a specialty coffee company that makes...",
            raised: "Republic Funding Portal- Reg F",
        },
        {
            img: "https://uploads.republic.com/p/offerings/card_images/default/000/002/897/2897-1714745845-652673d8e1dd8a2a0b7bef1b56584a8480c676fc.jpg",
            title: "Sorbi Force",
            description: "Copper Cow Coffee is a specialty coffee company that makes...",
            raised: "Republic Funding Portal- Reg F",
        },
        {
            img: "https://uploads.republic.com/p/offerings/card_images/default/000/010/537/10537-1725504518-0645548cfacc2c26446e086b42fb9e38a3d4bf24.jpg",
            title: "Groma REOIT",
            description: "Copper Cow Coffee is a specialty coffee company that makes...",
            raised: "Republic Funding Portal- Reg F",
        },
        {
            img: "https://uploads.republic.com/p/offerings/card_images/default/000/004/767/4767-1720634512-f3d0af3d9b02ff4422691e9a076b2212d608d0cb.jpg",
            title: "Toast",
            description: "Copper Cow Coffee is a specialty coffee company that makes...",
            raised: "Republic Funding Portal- Reg F",
        },
    ];
    return (
        <>
            <div className="flex justify-between md:px-[13%] items-center mb-6">
                <h1 className="font-bold text-3xl">Open for investment</h1>
                <p>Investors in Avawatz also invested in these companies. <Link className="text-blue-500" href={"https://republic.com/companies"}>View more</Link></p>
            </div>
            <Carousel className="w-full md:px-[13%]"
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent className="-ml-1">
                    {items.map((item, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                            <Card>
                                <CardContent className="p-0 flex flex-col">
                                    <img src={item.img} alt="company" className='w-full object-contain' />
                                    <div className='flex flex-col w-full justify-center gap-1 m-4'>
                                        <h2 className='font-bold text-2xl'>{item.title}</h2>
                                        <h4 className='text-gray-500'>{item.description}</h4>
                                        <span className="text-[12px] text-gray-500">{item.raised}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
        </>

    )
}

export default CarouselComponent
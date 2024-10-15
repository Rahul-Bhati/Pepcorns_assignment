"use client";
import { Info, Lock, Share, Star } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { Badge } from "@/components/ui/badge"

const Hero = () => {
    const [showControl, setShowControl] = useState(false);
    return (
        <div className='flex flex-col'>
            <div className='flex py-14 items-center'>
                <hr className='h-0.3 bg-slate-500 w-full' />
                <div className='flex justify-center gap-3 w-full text-gray-500'><Lock /> <h3 className=''> Campaign ended</h3></div>
                <hr className='h-0.3 bg-slate-500 w-full' />
            </div>

            <div className='mb-10'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <Image src="https://uploads.republic.com/p/offerings/hierarchical_offerings/logos/small/000/007/717/7717-1706912407-d30bb81eff1885a766825f78ca98af1da48b4550.png" width={40} height={40} />
                        <h1 className='text-5xl font-bold'>Avawatz</h1>
                    </div>
                    <ul className='flex gap-5'>
                        <li><Star className='text-gray-500' /></li>
                        <li><Share className='text-gray-500' /></li>
                    </ul>
                </div>
                <h1 className='pl-2 py-2 text-lg text-gray-500'>Trusted AI Robotics: Transforming Safety Across High-Risk and Tedious Tasks</h1>
                <div className='flex gap-2 pl-2 py-2'>
                    <Badge variant="outline" className="bg-yellow-100">AAPI Founders</Badge>
                    <Badge variant="outline" className="bg-red-200">Immigrant Founders</Badge>
                    <Badge variant="outline" className="bg-blue-200" >Women Founders</Badge>
                    <Badge variant="secondary">Security & Defense</Badge>
                    <Badge variant="secondary">B2B</Badge>
                    <Badge variant="secondary">B2G</Badge>
                    <Badge variant="secondary">Robotics</Badge>
                    <Badge variant="secondary">Deep Tech</Badge>
                </div>
                <div className='flex mt-5 gap-20 justify-between'>
                    <video className="w-[65%]" src="https://uploads.republic.com/p/offerings/slider_media_items/contents/original/000/027/248/27248-1714582093-4218547aeab8d05f13d0ff48676f6c0f67f0fa69.mp4" controls={showControl} poster="https://uploads.republic.com/p/offerings/slider_media_items/previews/default/000/027/248/27248-1714582181-e3c6ee14e95c09c7d0d75c26d4b48f49351ff74a.jpeg" onClick={() => setShowControl(!showControl)} />
                    <div className='flex flex-col w-[35%] justify-between'>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-4xl'>$385,384</h1>
                            <p className='text-lg text-gray-500 flex justify-between'>Committed <Info /></p>
                            <hr className='my-5' />
                            <h2 className='font-bold text-4xl text-gray-500'>26</h2>
                            <p className='text-lg text-gray-500'>Investors</p>
                            <hr className='my-5' />
                            <p className='text-lg text-gray-500'>Successfully funded and closed on October 1, 2024.</p>

                        </div>
                        <button className='flex justify-center gap-3 font-bold text-gray-200 bg-blue-400 p-5 rounded-lg'>
                            <Lock size={20} /> Invest in Avawatz</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
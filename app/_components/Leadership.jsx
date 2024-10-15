import Link from 'next/link'
import React from 'react'

const Leadership = () => {
    return (
        <>
            <h1 className='text-2xl text-gray-500 font-bold my-3'>Leadership</h1>
            <hr className='w-14 my-3' />
            <div className=' text-gray-600' >
                <h1 className='text-2xl text-gray-500 font-bold my-3'>Meet the Minds Behind AvaWatz: A Team Built for AI Robotics Brilliance</h1>
                <img src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/129/468/129468-1713375773-c656b2263c540b9a75a0b6a227271fedd6389d99.jpg" alt="why-2" className='object-contain' />
                <h1 className='text-xl text-gray-500 my-4'>
                    AvaWatz isn't just about the future of robotics. It's about the visionary minds making that future a reality. Led by a diverse group of seasoned innovators, entrepreneurs, and AI experts, this team possesses the firepower to revolutionize collaborative robots.
                </h1>
                <h1 className='text-xl text-gray-500 my-4'>
                    <span className='font-bold'>Dr. Rajini Anachi, Founder & CEO:</span> A serial innovator in AI and robotics, Rajini has conquered challenges across industries, from defense to mining to cybersecurity. With a passion for empowering robots to work like teams, her vision is to redefine safety and efficiency with intelligent collaboration.
                </h1>
                <h1 className='text-xl text-gray-500 my-4'>
                    <span className='font-bold'>Bala Jana, Co-Founder & Board Member:</span> A seasoned investor and veteran of start-up success, Bala brings a track… <Link className='text-blue-600' href={"https://republic.com/avawatz#"}>Read more</Link>
                </h1>
            </div>
        </>
    )
}

export default Leadership
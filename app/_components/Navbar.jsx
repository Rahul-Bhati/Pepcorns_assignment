import { Globe, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between py-5 shadow-sm md:px-[13%] items-center'>
            <div className='flex gap-14 items-center '>
                <Image src="https://assets.republic.com/assets/logo/full/black/logo-2c113fd1a194abf7fa3c5809c1470ca753c7a8dda7c2a3e86544990495e3056e.svg" alt="logo" width={120} height={120} />
                <Link href="/">Investors</Link>
                <Link href="/">Businesses</Link>
                <div className='flex gap-2 items-center'>
                    <input type="text" placeholder="Search" className='bg-slate-200 p-1.5 rounded-2xl pl-10' />
                    <Search className='absolute text-slate-500 pl-2' />
                </div>
            </div>
            <ul className='flex gap-4'>
                <li className='flex gap-2'><Globe /> US</li>
                <li>Log in</li>
                <li>Sign up</li>
            </ul>
        </nav>
    )
}

export default Navbar
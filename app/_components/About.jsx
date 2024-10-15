import { Facebook, Instagram, X, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div>

            <div className="">
                <h1 className='font-extrabold text-2xl text-center '>
                    <span className='border-b-2 border-blue-600'>
                        About Avawatz
                    </span></h1>
                <div className="flex gap-4 my-10">
                    <div className='w-1/3'>
                        <h4 className="text-gray-500">Legal Name</h4>
                        <h4 className="text-gray-500">AvaWatz Company</h4>
                        <br />
                        <h4 className="text-gray-500">Founded</h4>
                        <h4 className="text-gray-500">Feb 2019</h4>
                        <br />
                        <h4 className="text-gray-500">Form</h4>
                        <h4 className="text-gray-500">Texas Corporation</h4>
                        <br />
                    </div>
                    <div className='w-1/3'>
                        <h4 className="text-gray-500">Employees</h4>
                        <h4 className="text-gray-500">17</h4>
                        <br />
                        <h4 className="text-gray-500">Website</h4>
                        <h4 className="text-gray-500">
                            <Link href={"https://avawatz.com/"} className='text-blue-700'> avawatz.com</Link></h4>
                        <br />
                        <h4 className="text-gray-500">Social Media</h4>
                        <ul className="flex gap-3 mt-2 items-center">
                            <li><Facebook className='text-blue-700' /></li>
                            <li><X className='text-black' /></li>
                            <li><Instagram className='text-red-500' /></li>
                            <li><Youtube className='text-red-700' /></li>
                        </ul>
                    </div>

                    <div className='w-1/3'>
                        <h4 className="text-gray-500"></h4>
                        <h4 className="text-gray-500">Headquarters</h4>

                        <div className="flex flex-col gap-4">
                            <h1 className='font-bold text-2xl'>Google Map location of of Avawatz</h1>
                            <h4 className="text-gray-500">3662 West Camp Wisdom Road Suite 2044 , Dallas, TX</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
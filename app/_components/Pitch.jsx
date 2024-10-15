import Link from 'next/link'
import React from 'react'

const Pitch = () => {
    return (
        <div>
            <h1 className='text-2xl text-gray-500 font-bold my-3'>Pitch</h1>
            <hr className='w-14 my-3' />
            <div className=' text-gray-600' >
                <h1 className='text-2xl text-gray-500 font-bold my-3'>AvaWatz: Unlocking the Power of AI Robotics</h1>
                <h2 className='text-xl text-gray-500 font-medium my-3'>At AvaWatz, we aim to unlock the true potential of robotics with our trusted AI platform. Our AI empowers robots to work together like teammates in harsh, unpredictable environments, freeing humans from danger and high-risk tasks. We aim to make robots smarter and safer, boosting efficiency and keeping humans out of harm's way. Think advanced AI for robotics that tackles inspections, maintenance, and more, all delivered through our easy-to-use platform.</h2>
                <img src="https://republic.com/cdn-cgi/image/width=680,dpr=2/https://uploads.republic.com/p/images/attachments/original/000/117/816/117816-1706917520-5d2b172ad3b931c2bce2d919031d65ad9f8dbb81.png" alt="why-2" className='object-contain' />

                <h1 className='text-2xl font-bold my-3'>Transforming Robots Into Cooperative Teams with Trusted AI</h1>
                <ul style={{ listStyle: "disc" }} className='pl-7 text-xl'>
                    <li>Share information and make joint decisions: Robots analyze data, assess situations, and adapt their actions like a cohesive unit.</li>
                    <li>Handle the hard stuff: From hazardous inspections to disaster... <Link className='text-blue-600' href={"https://republic.com/avawatz#"}>Read more.</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Pitch
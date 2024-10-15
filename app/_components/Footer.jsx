import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 md:px-[13%]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="text-gray-500">
                        <Link href="/" className="flex items-center mb-4">
                            <Image src="https://assets.republic.com/assets/logo/full/black/logo-2c113fd1a194abf7fa3c5809c1470ca753c7a8dda7c2a3e86544990495e3056e.svg" alt="Republic Logo" width={40} height={40} />
                            <span className="ml-2 text-xl font-bold text-white">Republic</span>
                        </Link>
                        <p className="text-sm mb-4">Giving everyone access to early-stage startup investing</p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-white"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-white"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-white"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:text-white"><Linkedin size={20} /></Link>
                            <Link href="#" className="hover:text-white"><MessageCircle size={20} /></Link>
                        </div>
                    </div>
                    <div className="font-bold">
                        <h3 className="text-gray-500 font-semibold mb-4 border-b-2 border-gray-500 pb-3">For investors</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white">Why invest</Link></li>
                            <li><Link href="#" className="hover:text-white">How it works</Link></li>
                            <li><Link href="#" className="hover:text-white">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-white">Risks</Link></li>
                            <li><Link href="#" className="hover:text-white">Privacy policy</Link></li>
                            <li><Link href="#" className="hover:text-white">Accessibility</Link></li>
                            <li><Link href="#" className="hover:text-white">Cookie Preferences</Link></li>
                            <li><Link href="#" className="hover:text-white">Form CRS</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-gray-500 font-semibold mb-4 border-gray-500 pb-3">For startups</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white">Why raise</Link></li>
                            <li><Link href="#" className="hover:text-white">Learn</Link></li>
                            <li><Link href="#" className="hover:text-white">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-white">Instruments</Link></li>
                            <li><Link href="#" className="hover:text-white">Crowd SAFE</Link></li>
                            <li><Link href="#" className="hover:text-white">Tokenized assets</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-gray-500 font-semibold mb-4 border-gray-500 pb-3">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white">About</Link></li>
                            <li><Link href="#" className="hover:text-white">Journal</Link></li>
                            <li><Link href="#" className="hover:text-white">Events</Link></li>
                            <li><Link href="#" className="hover:text-white">Contact</Link></li>
                            <li><Link href="#" className="hover:text-white">We're hiring!</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
                    <div className="flex items-center mb-4 md:mb-0">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">Refer a startup, get $2,500</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <span className="text-sm">Invest in the app</span>
                        <Link href="#" className="inline-block">
                            <Image src="https://assets.republic.com/assets/layouts/play-store-0d44180dd0587978e08f2ac3eb53b810461ff33756799fef2981667aee24dd2a.png" alt="Get it on Google Play" width={135} height={40} />
                        </Link>
                        <Link href="#" className="inline-block">
                            <Image src="https://assets.republic.com/assets/layouts/app-store-9101bc9fe34a6cdc55e4436229c0ba5125905ec10aa243ce3346ab6e36e8d5c6.png" alt="Download on the App Store" width={135} height={40} />
                        </Link>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                            Support
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
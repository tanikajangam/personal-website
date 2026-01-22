"use client";

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import "../app/globals.css";
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={montserrat.className}>
            <nav className="p-4 mt-4">
                <div className="mx-auto my-1 px-4 flex flex-row justify-between items-center">
                    {/* Logo with Hover Animation */}
                    <div className="logo basis-2/3">
                        <div className="text-purple-400 text-5xl font-normal transition-transform duration-300 ease-in-out">
                            <Link href="/" > TJ </Link>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex lg:flex basis-1/3 space-x-8 navbar w-full text-base justify-between">
                        <Link href="/" className="text-white relative group">
                            Home
                            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/portfolio" className="text-white relative group">
                            Projects
                            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/resume.pdf" className="text-white relative group">
                            Resume
                            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown with Slide & Fade Animation */}
                <div
                    className={`md:hidden flex flex-col rounded-md overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >

                    <div className="text-right py-2 px-4 transform transition-all duration-300 hover:translate-x-2">
                        <Link href="/" className="text-white hover:text-purple-400">Home</Link>
                    </div>

                    <div className="text-right py-2 px-4 transform transition-all duration-300 hover:translate-x-2">
                        <Link href="/portfolio" className="text-white hover:text-purple-400">Projects</Link>
                    </div>
                    <div className="text-right py-2 px-4 transform transition-all duration-300 hover:translate-x-2">
                        <Link href="/resume.pdf" className="text-white hover:text-purple-400">Resume</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

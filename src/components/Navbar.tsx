"use client";

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import "../app/globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

        return (
            <div className={montserrat.className}>

            <nav className="p-4 title">
                <div className="container mx-auto my-1 px-4 flex flex-row justify-between items-center">
                    <div className="logo basis-2/3">
                        <div className="text-purple-400 text-5xl font-normal">
                            TJ
                        </div>

                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex lg:flex basis-1/3 space-x-8 navbar w-full text-base justify-between">
                        <a href="#projects" className="text-white hover:text-purple-400">Projects</a>
                        <a href="#resume" className="text-white hover:text-purple-400">Resume</a>
                        <a href="#blog" className="text-white hover:text-purple-400">Blog</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden flex flex-col">
                        <div className="block object-right text-right py-2 px-4 ">
                            <a href="#projects" className="text-white hover:text-purple-400">Projects</a>
                        </div>
                        <div className="block object-right text-right py-2 px-4 ">
                            <a href="#resume" className="text-white hover:text-purple-400">Resume</a>
                        </div>
                        <div className="block object-right text-right py-2 px-4 ">
                            <a href="#blog" className="text-white hover:text-purple-400">Blog</a>
                        </div>



                    </div>
                )}
            </nav>

        </div>
    );
}

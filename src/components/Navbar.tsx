"use client";

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-purple-400 text-2xl font-bold">
                    TJ
                    <div className="h-1 w-8 bg-purple-400 mt-1"></div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
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
                <div className="md:hidden">
                    <a href="#projects" className="block py-2 px-4 text-white hover:bg-gray-800">Projects</a>
                    <a href="#resume" className="block py-2 px-4 text-white hover:bg-gray-800">Resume</a>
                    <a href="#blog" className="block py-2 px-4 text-white hover:bg-gray-800">Blog</a>
                </div>
            )}
        </nav>
    );
}

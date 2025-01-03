"use client";

import { Montserrat } from 'next/font/google';
import "../app/globals.css";

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function Footer() {
    return (
        <div className=" relative w-full">

            <h1 className={`text-5xl mb-2 bold text-center text-[#808082] ${montserrat.className}`}>
                TJ
            </h1>
            <h2 className="text-center text-md text-[#A7AECA]">
                <a
                    href="https://www.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A36BC0] transition"
                >
                    Netlify
                </a>
                {' | '}
                <a
                    href="https://www.buymeacoffee.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A36BC0] transition"
                >
                    Buy me a Coffee
                </a>
                {' | '}
                <a
                    href="https://github.com/tanikajangam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A36BC0] transition"
                >
                    Github
                </a>
            </h2>

            <p className="text-center text-xs text-[#6C6E8C] text-gray-400 my-1">
                Website made by Tanika Jangam | All rights reserved 2024
            </p>
        </div>
    );
}

"use client";

import "../app/globals.css";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function LandingSection() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 100);
    }, []);

    return (
        <div
            className={`p-4 px-6 lg:max-w-6xl min-h-80 mx-auto flex mt-11 md:flex-row flex-col justify-between content-center transition-all duration-700 ease-in-out transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {/* Left Section - Heading */}
            <div className={`flex h-4/5 flex-col basis-1/2 text-center md:text-left ml-3 ${montserrat.className}`}>
                <h1 className="text-7xl light-gray my-2">
                    <span className="fade-in-text">Hi,</span>
                </h1>
                <h1 className="text-7xl light-gray mb-3">
                    I'm <span className="white fade-in-text delay-150">Tanika</span>.
                </h1>
                <h2 className="text-4xl my-2 light-gray">
                    I build <span className="white fade-in-text delay-300">software</span>.
                </h2>

                {/* Call to Action Button with Fixed Hover Effect */}
                <Link
                    href="#blog"
                    className="w-48 mx-auto md:mx-0 purple text-center border-box rounded my-5 outline p-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#A36BC0] hover:text-white"
                >
                    Check out my blog!
                </Link>
            </div>

            {/* Right Section - Blurb */}
            <div className="basis-1/2 h-4/5 md:text-right text-center flex justify-end mr-3">
                <div className="xl:w-3/4 lg:w-5/6 md:w-full md:m-0 mx-auto">
                    <p className="light-gray mb-3">Math & Computer Science @ UMD</p>
                    <p className="blurb fade-in-text delay-500">
                        Throughout my college career I’ve developed an increasing passion for software development and problem-solving,
                        and cloud computing. I developed this website as a way to streamline my creativity and flow of thoughts.
                    </p>
                    <br />
                    <p className="blurb fade-in-text delay-700">
                        Recently, I worked as a cloud engineering intern at
                        <span className="purple"> Vanguard</span>, where I work on innovative solutions that enhance efficiency and scalability.
                    </p>
                </div>
            </div>
        </div>
    );
}

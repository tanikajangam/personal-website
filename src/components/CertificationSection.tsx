"use client";

import "../app/globals.css";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function CertificationSection() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 100);
    }, []);

    return (
        <div className={`p-4 px-6 min-h-72 mx-auto flex mt-11 md:flex-row flex-col justify-center items-center content-center transition-all duration-700 ease-in-out transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            <div>

            </div>
            {/* Text Section */}
            <div className={`flex h-4/5 flex-col basis-1/2 text-center content-center md:text-left ml-3 ${montserrat.className}`}>
                <h1 className="text-4xl my-2 opacity-0 animate-fade-in-left">2x Certified</h1>
                <div>
                    <Link
                        href="https://www.credly.com/users/tanika-jangam"
                        className="mx-auto sm:mx-0 purple text-xl border-box underline hover:text-[#A36BC0] transition-all"
                        passHref
                    >
                        Check out my credly!
                    </Link>
                </div>
            </div>

            {/* Certificate Images Section (Hover Effect Only) */}
            <div className="w-full basis-1/2 flex flex-row mt-4 justify-center md:justify-end">
                <div className="transition-transform duration-700 ease-out">
                    <Image
                        src="/dev-cert.png"
                        alt="AWS Developer Certification - Associate Level"
                        width={170}
                        height={170}
                        className="hover:scale-105 transition-all duration-300"
                    />
                </div>

                <div className="ml-6 transition-transform duration-700 ease-out">
                    <Image
                        src="/solarch-cert.png"
                        alt="AWS Solutions Architect Certification - Associate Level"
                        width={170}
                        height={170}
                        className="hover:scale-105 transition-all duration-300"
                    />
                </div>
            </div>
        </div>
    );
}

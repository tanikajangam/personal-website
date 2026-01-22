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
        <div className={`p-4 px-6 min-h-72 mx-auto flex mt-11 lg:flex-row flex-col justify-center items-center content-center transition-all duration-700 ease-in-out transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            <div>

            </div>
            {/* Text Section */}
            <div className={`flex h-4/5 flex-col basis-1/2 text-center content-center md:text-left ml-3 ${montserrat.className}`}>
                <h1 className="text-4xl my-2 opacity-0 animate-fade-in-left">4x Certified</h1>
                <div>
                    <Link
                        href="https://www.credly.com/users/tanika-jangam" target="_blank" rel="noopener noreferrer"
                        className="mx-auto sm:mx-0 purple text-xl border-box underline hover:text-[#A36BC0] transition-all"
                        passHref
                    >
                        Check out my credly!
                    </Link>
                </div>
            </div>

            {/* Certificate Images Section (Hover Effect Only) */}
            <div className="w-full basis-1/2 flex flex-row flex-wrap justify-center items-center gap-6 mt-4">


                <div className="transition-transform duration-700 ease-out">
                    <Link
                        href="/AWS Certified Solutions Certificate.pdf" target="_blank" rel="noopener noreferrer"
                        passHref
                    >
                        <Image
                            src="/AWS-ML-Engineer.png"
                            alt="AWS Machine Learning Engineer Certification - Associate Level"
                            width={170}
                            height={170}
                            className="hover:scale-105 transition-all duration-300"
                        />
                    </Link>
                </div>

                <div className="transition-transform duration-700 ease-out">
                    <Link
                        href="/AWS Certified Developer - Associate certificate.pdf" target="_blank" rel="noopener noreferrer"
                        passHref
                    >
                        <Image
                            src="/dev-cert.png"
                            alt="AWS Developer Certification - Associate Level"
                            width={170}
                            height={170}
                            className="hover:scale-105 transition-all duration-300"
                        />
                    </Link>
                </div>

                <div className="transition-transform duration-700 ease-out">
                    <Link
                        href="/AWS Certified Solutions Architect - Associate certificate.pdf" target="_blank" rel="noopener noreferrer"
                        passHref
                    >
                        <Image
                            src="/solarch-cert.png"
                            alt="AWS Solutions Architect Certification - Associate Level"
                            width={170}
                            height={170}
                            className="hover:scale-105 transition-all duration-300"
                        />
                    </Link>
                </div>

                <div className="transition-transform duration-700 ease-out">
                    <Link
                        href="/AWS Certified Solutions Certificate.pdf" target="_blank" rel="noopener noreferrer"
                        passHref
                    >
                        <Image
                            src="/AWS-ML-Engineer.png"
                            alt="AWS Machine Learning Engineer Certification - Associate Level"
                            width={170}
                            height={170}
                            className="hover:scale-105 transition-all duration-300"
                        />
                    </Link>
                </div>

                <div className="transition-transform duration-700 ease-out">
                    <Link
                        href="/AWS Certified Solutions Certificate.pdf" target="_blank" rel="noopener noreferrer"
                        passHref
                    >
                        <Image
                            src="/AWS-AI-Practitioner.png"
                            alt="AWS AI Practitioner Certification"
                            width={170}
                            height={170}
                            className="hover:scale-105 transition-all duration-300"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

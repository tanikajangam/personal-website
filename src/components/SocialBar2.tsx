"use client";
import Image from 'next/image';
import "../app/globals.css"
import Link from 'next/link';

export default function SocialBar2() {
    return (
        <div className="group fixed sm:flex hidden right-4 flex-row space-y-6 transition-all duration-300 overflow-visible">


            <div className="relative group-hover:bottom-0 bottom-[-8px] transition-all duration-300">
                <Link href="mailto:tanikajangam03@gmail.com" className=" absolute bottom-50 rotated-text text-[#7E7F81] hover:text-[#A36BC0] tracking-wide text-right mb-2">
                    tanikajangam03@gmail.com
                </Link>
                <Image
                    src="/vertical-line.svg"
                    width={12}
                    height={350}
                    alt="line"
                    className="w-[12px] h-[350px]"
                />
            </div>

        </div>
    );
}

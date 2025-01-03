"use client";
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function SocialBar() {
    return (
        <div className="group absolute sm:flex hidden -bottom-1 -left-16 flex-row items-start place-items-start space-y-6 ">
            {/* Vertical Line */}
            <div className="relative">
                <Image
                    src="/vertical-line.svg"
                    width={8}  // Increased width
                    height={300}  // Increased height
                    alt="line"
                    className="w-[7px] h-72"
                />
            </div>

            {/* Social Icons */}
            <div className="flex flex-col space-y-6 ml-1.5 relative ">
                <a href="https://linkedin.com/in/tanikajangam" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-[#7E7F81] hover:text-[#A36BC0] transition" size={30} />
                </a>
                <a href="mailto:tanika@example.com">
                    <FaEnvelope className="text-[#7E7F81] hover:text-[#A36BC0] transition" size={30} />
                </a>
                <a href="https://github.com/tanikajangam" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-[#7E7F81] hover:text-[#A36BC0] transition" size={30} />
                </a>
            </div>
        </div>
    );
}

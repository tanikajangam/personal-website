import { FaGithub, FaYoutube, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';

import Link from 'next/link';
import { useState } from 'react';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

interface ProjectCardProps {
    title: string;
    description: string;
    githubUrl: string;
    youtubeUrl: string;
    imageUrl: string;
    websiteUrl: string;
    skills: string[];
    year: string;
    isAwardWinner?: boolean;
}

export default function ProjectCard2({
    title,
    description,
    githubUrl,
    youtubeUrl,
    imageUrl,
    websiteUrl,
    skills,
    year,
    isAwardWinner = false,
}: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-[#33363B] shadow-lg shadow-gray-900/50 rounded-lg overflow-hidden relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full max-w-3xl mx-auto">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full object-cover rounded-t-lg  duration-500 ease-in-out group-hover:brightness-50"
                />

                {websiteUrl && (
                    <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
                        <div
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 z-10 transform ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="flex flex-col justify-center text-xl items-center space-x-2 text-white px-5 py-2 ">
                                <h2 className={`text-center mb-2 ${montserrat.className}`}>View Site</h2>

                                <FaExternalLinkAlt />
                            </div>
                        </div>

                    </Link>
                )}

            </div>

            <div className="px-5 pt-2 pb-4">
                <div className="flex flex-row justify-between items-center mt-3 mb-4">
                    <h2 className={`text-2xl text-[#c3c7cb] ${montserrat.className}`}>{title}</h2>
                    <div className="flex space-x-4">
                        <a
                            href={youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c084fc] hover:text-[#a855f7] transition"
                        >
                            <FaYoutube size={28} />
                        </a>
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c084fc] hover:text-[#a855f7] transition"
                        >
                            <FaGithub size={28} />
                        </a>

                        {isAwardWinner && (
                            <span
                            >
                                <FaTrophy size={28}
                                    className="text-[#D9C362] hover:text-[#D1B848] transition" />
                            </span>

                        )}
                    </div>
                </div>

                <p className="text-[#c3c7cb] mb-4 mt-3 leading-relaxed">{description}</p>

                <div className="text-gray-400 text-sm mb-1 mt-4">
                    {skills.join('  •  ')}
                </div>
            </div>
        </div>
    );
}

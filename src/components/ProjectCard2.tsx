import { FaGithub, FaYoutube, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

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
                    className="w-full object-cover rounded-t-lg transition-all duration-500 ease-in-out group-hover:brightness-75"
                />

                {websiteUrl && (
                    <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
                        <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <div className="flex items-center space-x-2 bg-[#A36BC0] text-white px-5 py-2 rounded-md shadow-lg">
                                <FaExternalLinkAlt />
                                <span>View Site</span>
                            </div>
                        </div>
                    </Link>
                )}

                {/* Trophy Icon for Awards */}
                {isAwardWinner && (
                    <div
                        className="absolute top-4 right-4 bg-[#A36BC0] text-white p-2 rounded-full flex items-center justify-center group"
                        title="2nd Place Winner"
                    >
                        <FaTrophy size={20} />
                        <span className="absolute -top-8 right-0 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-all">
                            2nd Place Winner
                        </span>
                    </div>
                )}
            </div>

            <div className="px-5 pt-2 pb-4">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
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
                    </div>
                </div>

                <p className="text-[#c3c7cb] mb-4 leading-relaxed">{description}</p>

                <div className="text-gray-400 text-sm mb-2">
                    {skills.join(' • ')} • {year}
                </div>
            </div>
        </div>
    );
}

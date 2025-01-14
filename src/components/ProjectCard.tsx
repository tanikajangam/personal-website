import Image from 'next/image';
import { FaGithub, FaYoutube } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    githubUrl: string;
    youtubeUrl: string;
    imageUrl: string;
}

export default function ProjectCard({
    title,
    description,
    githubUrl,
    youtubeUrl,
    imageUrl,
}: ProjectCardProps) {
    return (
        <div className="flex lg:flex-row flex-col mx-auto min-h-32 gap-4">

            {/* Image Section */}
            <div className="h-full basis-5/12">
                <div className="w-full mx-auto">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="shadow-lg w-full object-cover "
                    />
                </div>
            </div>

            {/* Project Card Section */}
            <div className="bg-[#33363B] basis-7/12 p-6 shadow-lg shadow-gray-900/50 col-span-12 lg:col-start-5 lg:col-end-13">
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-[#c3c7cb]">{title}</h2>
                        <div className="flex space-x-4">
                            <a
                                href={youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#c084fc] hover:text-[#a855f7] transition"
                            >
                                <FaYoutube size={32} />
                            </a>
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#c084fc] hover:text-[#a855f7] transition"
                            >
                                <FaGithub size={32} />
                            </a>
                        </div>
                    </div>
                    <p className="text-[#c3c7cb] mt-4 leading-relaxed">{description}</p>
                </div>
            </div>
        </div>


    );
}

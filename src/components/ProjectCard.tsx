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
        <div className="flex flex-col xl:flex-row justify-center items-center max-w-6xl min-h-64 mx-auto p-6">

            {/* Image Section */}
            <div className="basis-5/12 mx-3 flex justify-center md:justify-start">
                <div className="h-full">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>

            {/* Project Card Section */}
            <div className="basis-7/12 bg-[#33363B] mx-3 p-6 rounded-lg shadow-lg shadow-gray-900/50">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-[#c3c7cb]">{title}</h2>
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
                <p className="text-[#c3c7cb] leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

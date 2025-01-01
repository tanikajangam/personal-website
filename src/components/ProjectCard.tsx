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
        <div className="grid grid-cols-12 gap-4 mx-auto">

            {/* Image Section */}
            <div className="col-span-12 lg:col-start-1 lg:col-end-5">
                <div className="w-full max-w-3xl mx-auto">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="shadow-lg w-full object-cover "
                    />
                </div>
            </div>

            {/* Project Card Section */}
            <div className="bg-[#33363B] p-6 shadow-lg shadow-gray-900/50 col-span-12 lg:col-start-5 lg:col-end-13">
                <div className="max-w-3xl mx-auto">
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
        </div>


    );
}

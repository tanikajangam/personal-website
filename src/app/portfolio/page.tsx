"use client";

import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard2 from '@/components/ProjectCard2';
import "../globals.css";
import { useState, useEffect, useRef } from 'react';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function Portfolio() {
    const [visibleCards, setVisibleCards] = useState<{ [key: number]: boolean }>({});
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');


    const projects = [
        {
            title: "This Website",
            description: `I know, a bit of inception here, but trust me, it's worth looking at how I made it!`,
            githubUrl: "https://github.com/tanikajangam/personal-website",
            youtubeUrl: "https://www.youtube.com/watch?v=1sIYiyakO28",
            imageUrl: "/my-website.png",
            websiteUrl: "https://www.tanikajangam.com",
            skills: ["TypeScript", "Next.js", "Vercel"],
            year: "2025",
        },

        {
            title: "Notifly",
            description: `Why take notes when Notifly lets you focus on learning and leaves the frantic typing to someone else?`,
            githubUrl: "https://github.com/tanikajangam/notifly",
            youtubeUrl: "https://www.youtube.com/watch?v=-2hijdgaPiI",
            imageUrl: "/project-notifly.png",
            websiteUrl: "https://www.tanikajangam.com",
            skills: ["React", "MongoDB", "Express.js"],
            year: "2021",
            isAwardWinner: true,
        },
        {
            title: "HabitTracker",
            description: "Catch your bad habits red-handed (literally) with real-time hand detection that keeps you in check!",
            githubUrl: "https://github.com/tanikajangam/habittracker",
            youtubeUrl: "https://www.youtube.com/watch?v=VXwmXKu6QxA",
            imageUrl: "/project-habittracker.png",
            websiteUrl: "https://www.tanikajangam.com",
            skills: ["Tensorflow", "Python", "ES6"],
            year: "2021",
        },

        {
            title: "Plantify",
            description: `Snap a photo of your plant, and let Plantify diagnose its drama – because even leaves deserve a check-up!`,
            githubUrl: "https://github.com/tanikajangam/plantify",
            youtubeUrl: "https://www.youtube.com/watch?v=1sIYiyakO28",
            imageUrl: "/project-plantify.png",
            websiteUrl: "https://www.tanikajangam.com",
            skills: ["PyTorch", "Flask", "Figma"],
            year: "2021",
        },

        {
            title: "KodaHacks",
            description: "A Hackathon Website that I made that turned out to be really cool. But never happened.",
            githubUrl: "https://github.com/tanikajangam/Hackathon-Website",
            youtubeUrl: "https://www.youtube.com/watch?v=VXwmXKu6QxA",
            imageUrl: "/project-kodahacks.png",
            websiteUrl: "https://www.tanikajangam.com",
            skills: ["HTML/CSS", "SVG Animations", "Netlify"],
            year: "2021",
        },
    ];



    const tags = ["Winner", "Next.js", "AWS", "MongoDB", "HTML/CSS", "Pytorch"];

    const groupedProjects = projects.reduce((acc, project) => {
        const year = project.year;
        if (!acc[year]) acc[year] = [];
        acc[year].push(project);
        return acc;
    }, {} as Record<string, typeof projects>);

    // Filter projects based on tags and search query
    const filteredProjects = projects.filter((project) => {
        const matchesFilters =
            activeFilters.length === 0 ||
            activeFilters.every(
                (filter) =>
                    project.skills.includes(filter) ||
                    (filter === "Winner" && project.isAwardWinner)
            );

        const matchesSearch =
            searchQuery === "" ||
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.skills.some((skill) =>
                skill.toLowerCase().includes(searchQuery.toLowerCase())
            ) ||
            project.year.includes(searchQuery);

        return matchesFilters && matchesSearch;
    });

    const toggleFilter = (filter: string) => {
        if (activeFilters.includes(filter)) {
            setActiveFilters(activeFilters.filter((f) => f !== filter));
        } else {
            setActiveFilters([...activeFilters, filter]);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = cardRefs.current.findIndex(
                        (card) => card === entry.target
                    );
                    if (entry.isIntersecting && index !== -1) {
                        setVisibleCards((prev) => ({ ...prev, [index]: true }));
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <Navbar />
            <div className=" py-7">
                <h1 className={`text-5xl text-[#A36BC0] mb-4 light-gray ${montserrat.className}`} >My <span className="white">Portfolio</span>.</h1>
                <p className={`text-xl mt-3 text-gray-300 mb-6 ${montserrat.className}`}>
                    Here are some of the projects I’ve worked on.
                </p>

                {/* Search Bar */}s
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search by project, skills, or year..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 mt-4 mb-0 sm:mb-4 rounded-full bg-[#2C2F34] text-white border border-[#575757] focus:outline-none focus:ring-2 focus:ring-[#A36BC0]"
                    />
                </div>

                <div className="flex flex-col md:flex-row">

                    <div className="flex md:hidden flex-row mr-1.5 mb-1 sm:m-0 flex-wrap">
                        {tags.map((tag) => (
                            <button
                                key={tag}
                                className={`px-4 py-2 mr-1.5 my-1.5 border ${montserrat.className} text-sm rounded-full  ${activeFilters.includes(tag)
                                    ? 'border-[#A36BC0] text-[#A36BC0]'
                                    : 'border-gray-500 text-gray-400 hover:border-[#A36BC0] hover:text-[#A36BC0]'
                                    }`}
                                onClick={() => toggleFilter(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* project cards */}

                    <div className="basis-9/12 w-full ">
                        {Object.keys(groupedProjects)
                            .sort((a, b) => parseInt(b) - parseInt(a))
                            .map((year) => (
                                <div className="mr-2" key={year}>
                                    <h2 className={`text-4xl ${montserrat.className} purple mt-10 mb-6`}>{year}</h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:max-w-2xl lg:max-w-6xl">
                                        {filteredProjects
                                            .filter((project) => project.year === year)
                                            .map((project, index) => (
                                                <div
                                                    key={index}
                                                    ref={(el) => {
                                                        cardRefs.current[index] = el;
                                                    }}
                                                    className={`transition-all duration-700 ease-in-out transform `}
                                                >
                                                    <ProjectCard2
                                                        title={project.title}
                                                        description={project.description}
                                                        githubUrl={project.githubUrl}
                                                        youtubeUrl={project.youtubeUrl}
                                                        imageUrl={project.imageUrl}
                                                        websiteUrl={project.websiteUrl}
                                                        skills={project.skills}
                                                        year={project.year}
                                                        isAwardWinner={project.isAwardWinner}
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                    </div>


                    {/* Filter Bar */}
                    <div className="basis-3/12 w-full hidden  mb-10 md:flex flex-row justify-start items-start">
                        <svg width="30%" height="30%" viewBox="0 0 16 708" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM6.5 8V698.5H9.5V8H6.5Z" fill="#A36BC0" />
                        </svg>


                        <div className="ml-1.5 w-full">

                            <h2 className={`text-2xl my-2 ${montserrat.className}`}>Filters</h2>
                            {tags.map((tag) => (
                                <button
                                    key={tag}
                                    className={`px-4 py-2 mr-1.5 my-1.5 border ${montserrat.className} text-sm rounded-full  ${activeFilters.includes(tag)
                                        ? 'border-[#A36BC0] text-[#A36BC0]'
                                        : 'border-gray-500 text-gray-400 hover:border-[#A36BC0] hover:text-[#A36BC0]'
                                        }`}
                                    onClick={() => toggleFilter(tag)}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>

            </div>


            <Footer />
        </div>
    );
}

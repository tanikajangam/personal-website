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
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
            description: "A Hackathon Website that I made that turned out to be really cool.But never happened.",
            githubUrl: "https://github.com/tanikajangam/Hackathon-Website",
            youtubeUrl: "https://www.youtube.com/watch?v=VXwmXKu6QxA",
            imageUrl: "/project-kodahacks.png",
            websiteUrl: "https://www.tanikajangam.com",
            skills: ["HTML/CSS", "SVG Animations", "Netlify"],
            year: "2021",
        },
    ];


    const tags = ["Winner", "Next.js", "AWS", "MongoDB", "HTML/CSS", "PyTorch"];

    const groupedProjects = projects.reduce((acc, project) => {
        const year = project.year;
        if (!acc[year]) acc[year] = [];
        acc[year].push(project);
        return acc;
    }, {} as Record<string, typeof projects>);

    // Filter projects based on tags and search query
    const filteredProjects = projects.filter((project) => {
        const matchesFilters = activeFilters.length === 0 || activeFilters.every(
            (filter) =>
                project.skills.includes(filter) || (filter === "Winner" && project.isAwardWinner)
        );

        const matchesSearch = searchQuery === "" ||
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.skills.some((skill) =>
                skill.toLowerCase().includes(searchQuery.toLowerCase())
            ) ||
            project.year.includes(searchQuery);

        return matchesFilters && matchesSearch;
    });

    // Handle Filter Toggle
    const toggleFilter = (filter: string) => {
        if (activeFilters.includes(filter)) {
            setActiveFilters(activeFilters.filter((f) => f !== filter));
        } else {
            setActiveFilters([...activeFilters, filter]);
        }
    };

    // Intersection Observer for Animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardRefs.current.findIndex((card) => card === entry.target);
                        if (index !== -1) {
                            setVisibleCards((prev) => ({ ...prev, [index]: true }));
                            observer.unobserve(entry.target);
                        }
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
        <div className="container mx-auto px-4 ">
            <Navbar />
            <div className="flex-1 p-8">
                <h1 className="text-5xl text-[#A36BC0] mb-4">My Portfolio</h1>
                <p className="text-xl text-gray-300 mb-6">
                    Here are some of the projects I’ve worked on.
                </p>

                {/* Search Bar */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search by project, skills, or year..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 rounded-md bg-[#2C2F34] text-white border border-[#575757] focus:outline-none focus:ring-2 focus:ring-[#A36BC0]"
                    />
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap gap-4 mb-10">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            className={`px-4 py-2 border rounded-full ${activeFilters.includes(tag)
                                ? 'border-[#A36BC0] text-[#A36BC0]'
                                : 'border-gray-500 text-gray-400 hover:border-[#A36BC0] hover:text-[#A36BC0]'
                                }`}
                            onClick={() => toggleFilter(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {Object.keys(groupedProjects)
                    .sort((a, b) => parseInt(b) - parseInt(a))
                    .map((year) => (
                        <div key={year}>
                            <h2 className="text-4xl text-[#c3c7cb] mt-10 mb-6">{year}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProjects
                                    .filter((project) => project.year === year)
                                    .map((project, index) => (
                                        <div
                                            key={index}
                                            ref={(el) => {
                                                cardRefs.current[index] = el;
                                            }}
                                            className={`transition-all duration-700 ease-in-out transform ${visibleCards[index]
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-20"
                                                }`}
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
            <Footer />
        </div>
    );
}

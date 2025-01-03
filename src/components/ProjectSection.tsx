"use client";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import "../app/globals.css";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function ProjectSection() {
    const [visibleCards, setVisibleCards] = useState<{ [key: number]: boolean }>({});
    const [isSectionVisible, setIsSectionVisible] = useState(false);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    // Observe the heading
                    if (entry.target === sectionRef.current && entry.isIntersecting) {
                        setIsSectionVisible(true);
                    }

                    // Observe project cards
                    const cardIndex = cardRefs.current.findIndex((card) => card === entry.target);
                    if (entry.isIntersecting && cardIndex !== -1) {
                        setVisibleCards((prev) => ({ ...prev, [cardIndex]: true }));
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            title: "Plantify",
            description: `Plantify is a deep learning-powered application that identifies and classifies plant leaf diseases with 95% accuracy. By uploading a photo, users receive real-time diagnoses, disease descriptions, prevention tips, and supplement recommendations – with direct purchase links for remedies.`,
            githubUrl: "https://github.com/tanikajangam/plantify",
            youtubeUrl: "https://www.youtube.com/watch?v=1sIYiyakO28",
            imageUrl: "/project-plantify.png",
        },
        {
            title: "Notifly",
            description: `Notifly is a website that aims to improve the student's learning experience, whether in a traditional or virtual setting, by providing a tool for students to use. Instead of frantically writing down all notes in a lecture, students can focus more time understanding content.`,
            githubUrl: "https://github.com/tanikajangam/notifly",
            youtubeUrl: "https://www.youtube.com/watch?v=-2hijdgaPiI",
            imageUrl: "/project-notifly.png",
        },
        {
            title: "HabitTracker",
            description: `HabitTracker can record the number of stress symptoms or "bad habits" you exhibit (for example, biting your nails, scratching your head until the blood oozes out – all symptoms of mental stress). HabitTracker uses real-time hand detection directly from your browser.`,
            githubUrl: "https://github.com/tanikajangam/habittracker",
            youtubeUrl: "https://www.youtube.com/watch?v=VXwmXKu6QxA",
            imageUrl: "/project-habittracker.png",
        },
    ];

    return (
        <div ref={sectionRef} className="p-4 px-6 min-h-72 mx-auto mt-5 mb-16">

            <div className="flex flex-col md:flex-row justify-between max-w-7/12 mx-auto mb-8 md:items-end items-center">
                <h1 className={`text-4xl ${montserrat.className}`}>{`Featured Projects`} </h1>

                <Link
                    href="/portfolio"
                    className={`mx-auto mt-2 sm:text-right md:m-0 purple text-xl border-box hover:text-[#c084fc] transition-all group ${montserrat.className} flex flex-row items-center`}
                >
                    VIEW FULL PORTFOLIO <FaArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-all" />
                </Link>
            </div>

            <div className="min-h-48 mx-auto space-y-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            cardRefs.current[index] = el;
                        }}
                        className={`transition-all duration-700 ease-in-out transform ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                            }`}
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            githubUrl={project.githubUrl}
                            youtubeUrl={project.youtubeUrl}
                            imageUrl={project.imageUrl}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

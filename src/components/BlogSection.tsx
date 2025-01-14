"use client";
import { useState, useEffect, useRef } from "react";
import BlogCard from "./BlogCard";
import "../app/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function BlogSection() {
    const [visibleSection, setVisibleSection] = useState(false);
    const [visibleCards, setVisibleCards] = useState<{ [key: number]: boolean }>({});
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Observer for the whole section
    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisibleSection(true);
                    sectionObserver.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        return () => sectionObserver.disconnect();
    }, []);

    // Observer for individual blog cards
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = cardRefs.current.findIndex((card) => card === entry.target);
                    if (entry.isIntersecting && index !== -1) {
                        setVisibleCards((prev) => ({ ...prev, [index]: true }));
                        observer.unobserve(entry.target); // Unobserve after animation
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

    const blogs = [
        {
            title: "AWS Solutions Architect Professional Exam",
            date: "December 2024",
            url: "#",
        },
        {
            title: "POS Tagging in NLP using Markov Chains",
            date: "December 2024",
            url: "/markov-research-paper.pdf",
        },
        {

            title: "My First Post",
            date: "December 2024",
            url: "#",
        },
    ];

    return (
        <div
            ref={sectionRef}
            className={`p-4 px-6 min-h-96 mx-auto transition-all duration-700 ease-in-out transform ${visibleSection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            <h1
                className={`text-4xl text-center md:text-left mb-4 transition-all duration-700 ease-in-out ${visibleSection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    } ${montserrat.className}`}
            >
                Latest Blog (Tech/Productivity) Posts
            </h1>

            <div className="space-y-6 flex flex-col justify-start w-full items-start h-full">
                <p>Nothing here yet...</p>
                {/* {blogs.map((blog, index) => (<div
                    key={index}
                    ref={(el) => {
                        cardRefs.current[index] = el;
                        return undefined;  // Ensures the callback returns void
                    }}
                    className={`transition-all duration-700 ease-in-out w-full transform ${visibleCards[index]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                        }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                >

                    <BlogCard title={blog.title} date={blog.date} url={blog.url} />
                </div>
                ))} */}
            </div>
        </div>
    );
}

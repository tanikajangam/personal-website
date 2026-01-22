"use client";

import "../app/globals.css";
import { useState, useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

interface Job {
    company: string;
    title: string;
    description: string[];
}

const jobs: Job[] = [

    {
        company: 'Appian',
        title: 'Software Engineering Intern @ Appian',
        description: [
            'Automated AWS resource deployment by developing Lambda functions for custom authorizers and pre- validation scripts, enhancing security and deployment efficiency using Python and CloudFormation',
            'Provided technical support for client incidents hosted on AWS ECS, EKS, and CaaS, ensuring swift resolutions',
            'Led weekly meetings to optimize GitHub CI / CD pipelines, resulting in a 10 % boost in deployment speeds'
        ],
    },

    {
        company: 'Vanguard',
        title: 'Cloud Operations & Engineering Intern @ Vanguard',
        description: [
            'Automated AWS resource deployment by developing Lambda functions for custom authorizers and pre- validation scripts, enhancing security and deployment efficiency using Python and CloudFormation',
            'Provided technical support for client incidents hosted on AWS ECS, EKS, and CaaS, ensuring swift resolutions',
            'Led weekly meetings to optimize GitHub CI / CD pipelines, resulting in a 10 % boost in deployment speeds'
        ],
    },
    {
        company: 'HP',
        title: 'Business Analyst & Venture Capital Extern @ HP',
        description: [
            'Conducted market segmentation and financial modeling in RStudio to identify key drivers of start-up funding, presenting insights through impactful Tableau visualizations to guide investment decisions',
            'Analyzed large datasets using Excel and SQL to extract trends and derive actionable summary statistics',
            'Pitched and advocated for investment in an AI start-up specialized in presentation content generation, diversifying HP Tech Ventures’ AI portfolio'
        ],
    },
    {
        company: 'UMD IT',
        title: 'IT Support Assistant @ UMD IT',
        description: [
            'Troubleshooted classroom projector, audio, and camera issues to improve classroom learning experiences',
            'Created ServiceNow support tickets to update students & staff on technology issues and solutions',
            'Collaborated with AV technicians to respond quickly to 3-4 emergency computer malfunctions per shift'
        ],
    },
    {
        company: 'PMIT',
        title: 'Software Engineer @ PMIT',
        description: [
            'Maintained AWS cloud servers and organized backend/frontend of PMIT website with NodeJS and HTML/CSS',
            'Led collaborative conferences and monthly meetings for improvements on the website and database'
        ],
    }
];

export default function ExperienceSection() {
    const [selectedCompany, setSelectedCompany] = useState<string>('Vanguard');
    const [fadeOut, setFadeOut] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const handleSelect = (company: string) => {
        setFadeOut(true);

        // Wait for fade-out, then switch job and trigger fade-in
        setTimeout(() => {
            setSelectedCompany(company);
            setFadeOut(false);
            setFadeIn(true);

            // Reset fade-in after it finishes
            setTimeout(() => {
                setFadeIn(false);
            }, 300); // Duration for fade-in
        }, 300); // Duration for fade-out
    };

    const selectedJob = jobs.find(job => job.company === selectedCompany);

    const formatTitle = (title: string) => {
        const parts = title.split('@');
        return (
            <>
                {parts[0]}
                <span className="font-semibold"> @{parts[1]}</span>
            </>
        );
    };

    // Intersection Observer for Section Fade-In on Scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);


    return (
        <div
            ref={sectionRef}
            className={`p-4 px-6 mx-auto mt-11 transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >

            <div className="flex flex-col md:flex-row justify-between max-w-7/12 mx-auto mb-8 md:items-end items-center text-center md:text-left">
                <h1 className={`text-4xl ${montserrat.className}`}>{`Where I've Worked`} </h1>

                <Link
                    href="/resume.pdf"
                    className={`mx-auto mt-2 md:m-0 purple text-xl border-box hover:text-[#c084fc] transition-all group ${montserrat.className} flex flex-row items-center`}
                >
                    VIEW FULL RESUME <FaArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-all" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 lg:max-w-4xl md:max-w-2xl mx-auto ">

                {/* Sidebar - Company List */}
                <div className="col-span-2 flex flex-row md:flex-col justify-center md:justify-start relative md:border-0 border-b-2 md:mb-0 mb-6 md:border-0 border-[#575757]">
                    {jobs.map((job, index) => (
                        <div
                            key={job.company}
                            className={`p-4 md:pb-4 cursor-pointer transition-all duration-300 text-center md:text-left  ${selectedCompany === job.company
                                ? 'text-[#A36BC0] '
                                : 'text-gray-400 '
                                }`}
                            onClick={() => handleSelect(job.company)}
                        >
                            {job.company}
                        </div>
                    ))}

                    <div
                        className="absolute md:block hidden w-1 bg-[#A36BC0] top-1 left-0 right-0 z-10 transition-transform duration-300 ease-in-out"
                        style={{
                            height: '45px',
                            transform: `translateY(${jobs.findIndex(job => job.company === selectedCompany) * 55
                                }px)`,
                        }}
                    ></div>

                    <div className="absolute md:block hidden h-[265px] z-0 w-1 bg-[#575757] top-1 left-0 right-0"></div>
                </div>
                {/* Job Description Section */}
                <div
                    className={` col-span-10 px-6 transition-all duration-500 ${fadeOut
                        ? 'opacity-0'
                        : fadeIn
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-100'
                        }`}
                >
                    <h2 className="text-[#A36BC0] text-lg mb-4">
                        {selectedJob ? formatTitle(selectedJob.title) : ''}
                    </h2>
                    <ul className="text-[#D3D3D3] space-y-2">
                        {selectedJob?.description.map((desc, index) => (
                            <li key={index} className="list-disc ml-4">
                                {desc}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

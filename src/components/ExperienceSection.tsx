"use client"

import "../app/globals.css";
import { useState } from 'react';

interface Job {
    company: string;
    title: string;
    description: string[];
}

const jobs: Job[] = [
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
    // const [selectedCompany, setSelectedCompany] = useState<string>('Vanguard');

    // const handleSelect = (company: string) => {
    //     setSelectedCompany(company);
    // };

    // const selectedJob = jobs.find(job => job.company === selectedCompany);


    const [selectedCompany, setSelectedCompany] = useState<string>('Vanguard');

    const handleSelect = (company: string) => {
        setSelectedCompany(company);
    };

    const selectedJob = jobs.find(job => job.company === selectedCompany);

    const formatTitle = (title: string) => {
        const parts = title.split('@');
        return (
            <>
                {parts[0]}
                <span className="font-bold"> @{parts[1]}</span>
            </>
        );
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 lg:max-w-4xl md:max-w-2xl mx-auto sm:min-h-72">
            {/* Sidebar - Company List */}
            <div className="col-span-2 flex flex-row md:flex-col justify-start relative">
                {jobs.map((job, index) => (
                    <div
                        key={job.company}
                        className={`p-4 cursor-pointer transition-all duration-300 ${selectedCompany === job.company
                            ? 'text-[#A36BC0]'
                            : 'text-gray-400'
                            }`}
                        onClick={() => handleSelect(job.company)}
                    >
                        {job.company}
                    </div>
                ))}


                <div
                    className="absolute md:block hidden w-1 bg-[#A36BC0] top-1 left-0 right-0 z-10  transition-transform duration-300 ease-in-out"
                    style={{
                        height: '45px',
                        transform: `translateY(${jobs.findIndex(job => job.company === selectedCompany) * 60}px)`
                    }}
                ></div>

                <div className="absolute md:block hidden h-[225px] z-0 w-1 bg-[#575757] top-1 left-0 right-0" ></div>
            </div>
            {/* Job Description Section */}
            <div
                key={selectedCompany}
                className="col-span-10 px-6 animate-fade-in"
            >
                <h2 className="text-[#A36BC0] text-lg mb-4 transition-all duration-500 ease-in-out">
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

        </div >
    );
}



"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { useState, useEffect } from 'react';
import "../globals.css";

import { Montserrat } from 'next/font/google';
import Link from 'next/link';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

interface BlogPost {
    title: string;
    date: string;
    category: string;
    description: string;
    url: string;
}

const blogPosts: BlogPost[] = [
    {
        title: "AWS Solutions Architect Professional Exam",
        date: "December 2024",
        category: "Certifications",
        description: "A detailed breakdown of the AWS Solutions Architect exam and tips to pass it.",
        url: "/posts/aws-certification",
    },
    {
        title: "POS Tagging in NLP using Markov Chains",
        date: "November 2024",
        category: "AI/ML",
        description: "Exploring part-of-speech tagging in NLP with Markov Chains.",
        url: "/posts/pos-tagging",
    },
    {
        title: "Productivity Hacks for Engineers",
        date: "October 2024",
        category: "Productivity",
        description: "Boost your engineering productivity with these proven hacks.",
        url: "/posts/productivity-hacks",
    },
];

export default function BlogPage() {
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
    const [searchQuery, setSearchQuery] = useState<string>("");

    // Filter logic based on search query
    useEffect(() => {
        const query = searchQuery.toLowerCase();

        const filtered = blogPosts.filter(
            (post) =>
                post.title.toLowerCase().includes(query) ||
                post.category.toLowerCase().includes(query) ||
                post.description.toLowerCase().includes(query)
        );

        setFilteredPosts(filtered);
    }, [searchQuery]);

    return (
        <div className="container mx-auto px-4">
            <div className="min-h-screen">
                <Navbar />
                <div className="p-8 ">
                    <h1 className={`text-5xl text-[#A36BC0] mb-4 light-gray ${montserrat.className}`}>
                        My <span className="white">Blog</span>.
                    </h1>
                    <p className={`${montserrat.className} text-xl text-gray-300`}>
                        Technology, Productivity, and Math.
                    </p>

                    {/* Search Bar Section */}
                    {/* <div className="my-6">
                        <input
                            type="text"
                            className="w-full p-3 rounded-md bg-[#2C2F34] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#A36BC0]"
                            placeholder="Search by title, category, or description..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div> */}

                    {/* Blog List */}
                    <div>
                        {/* {filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => (
                                <Link href={post.url} key={post.url} passHref legacyBehavior>

                                    <BlogCard
                                        title={post.title}
                                        date={post.date}
                                        url={post.url}
                                    />

                                </Link>
                            ))
                        ) : (
                            <p>No posts found.</p>
                        )} */}
                        <p className="mt-5 light-gray">Nothing here yet.</p>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    );
}

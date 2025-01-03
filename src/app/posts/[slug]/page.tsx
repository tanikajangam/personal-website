// src/app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPost {
    title: string;
    content: string;
    date: string;
}

const blogPosts: Record<string, BlogPost> = {
    "aws-certification": {
        title: "AWS Solutions Architect Professional Exam",
        content: "Here's how I passed the AWS Solutions Architect Professional exam...",
        date: "December 2024",
    },
    "pos-tagging": {
        title: "POS Tagging in NLP using Markov Chains",
        content: "A detailed breakdown of POS tagging using HMMs...",
        date: "November 2024",
    },
    "productivity-hacks": {
        title: "Productivity Hacks for Engineers",
        content: "Top productivity tips to maximize efficiency...",
        date: "October 2024",
    },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug];

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4">
            <Navbar />
            <div className="p-8">
                <h1 className="text-5xl text-[#A36BC0] mb-4">{post.title}</h1>
                <p className="text-gray-400">{post.date}</p>
                <div className="mt-6 leading-relaxed text-gray-300">
                    {post.content}
                </div>
            </div>
            <Footer />
        </div>
    );
}

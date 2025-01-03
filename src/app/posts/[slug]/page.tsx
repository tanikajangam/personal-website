import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

interface BlogPost {
    title: string;
    content: string;
    date: string;
}

// Static data (replace with external fetch if needed)
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

// Dynamic route component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug];

    if (!post) {
        notFound();  // Show 404 page if post is not found
    }

    return (
        <div className="container mx-auto px-4 min-h-screen">
            <Navbar />
            <div className="p-8 min-h-screen">
                <h1 className={`text-5xl text-[#A36BC0] mb-4 ${montserrat.className}`}>{post.title}</h1>
                <p className="text-gray-400">{post.date}</p>
                <div className="mt-6 leading-relaxed text-gray-300">
                    {post.content}
                </div>
            </div>
            <Footer />
        </div>
    );
}

// Generate static paths for dynamic routes
export async function generateStaticParams() {
    return Object.keys(blogPosts).map((slug) => ({
        slug,
    }));
}

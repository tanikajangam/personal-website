import Link from "next/link";
import "../app/globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

interface BlogCardProps {
    title: string;
    date: string;
    url: string;
}

export default function BlogCard({ title, date, url }: BlogCardProps) {
    return (
        <div className="p-2 w-full ">
            <div className="flex flex-col text-left md:flex-row justify-between mx-auto group">
                <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xl mr-3 text-[#c084fc] text-center group-hover:text-[#d8b4fe] transition-colors duration-300 ease-in-out ${montserrat.className}`}
                >
                    {title}
                </ Link>
                <p className="text-gray-400 group-hover:text-gray-300 md:text-right text-center transition-colors duration-300 ease-in-out">
                    {date}
                </p>
            </div>
        </div>
    );
}

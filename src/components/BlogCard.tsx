
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

        <div className="p-2 px-6 w-full mx-auto ">
            <div className="flex flex-col text-left sm:flex-row  justify-between sm:max-w-2xl lg:max-w-4xl mx-auto">
                <a href={url} target="_blank" rel="noopener noreferrer" className={`text-xl text-[#c084fc] ${montserrat.className}`}>{title}</a>
                <p className="text-gray-400">{date}</p>
            </div>
        </div>
    );
}

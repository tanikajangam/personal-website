interface BlogCardProps {
    title: string;
    date: string;
    url: string;
}

export default function BlogCard({ title, date, url }: BlogCardProps) {
    return (

        <div className="p-2 px-6 w-full mx-auto ">
            <div className="flex flex-col text-left sm:flex-row max-w-10 items-start justify-between content-start lg:max-w-4xl mx-auto">
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-[#c084fc]">{title}</a>
                <p className="text-gray-400">{date}</p>
            </div>
        </div>
    );
}

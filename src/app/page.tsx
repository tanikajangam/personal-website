import Link from 'next/link';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import ExperienceSection from "../components/ExperienceSection";
import CertificationSection from "../components/CertificationSection";
import LandingSection from "../components/LandingSection";
import Image from 'next/image';

import "./globals.css";
import { Montserrat } from 'next/font/google';


const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (

    <div >
      < Navbar />
      < LandingSection />
      < CertificationSection />


      {/* Jobs Section */}
      <div className="p-4 px-6 md:max-w-6xl mx-auto mt-11">

        <div className="flex flex-col  sm:flex-row justify-between w-full mb-8 md:items-end items-center" >
          <h1 className={`text-4xl  ${montserrat.className}`}> Where I&apos;ve Worked </h1>

          <Link href="\resume" className="mx-auto sm:mx-0 purple text-xl border-box max-h-min" passHref>
            VIEW FULL RESUME
          </Link>
        </div>

        < ExperienceSection />

      </div>

      {/* Featured Projects */}
      <div className="p-4 px-6 md:max-w-6xl min-h-72 mb mx-auto mt-5 mb-11">

        <div className="flex flex-col sm:flex-row justify-between w-full mb-8 md:items-end items-center" >
          <h1 className={`text-4xl ${montserrat.className}`}> 2024 Featured Projects </h1>

          <Link href="\resume" className="mx-auto sm:mx-0 purple text-xl border-box max-h-min" passHref>
            VIEW FULL PORTFOLIO
          </Link>
        </div>


        <div className="min-h-48 mx-auto space-y-6">
          <ProjectCard
            title="Plantify"
            description={`Plantify is a deep learning-powered application that identifies and classifies plant leaf diseases with 95% accuracy. By uploading a photo, users receive real-time diagnoses, disease descriptions, prevention tips, and supplement recommendations – with direct purchase links for remedies.`}
            githubUrl="https://github.com/tanikajangam/plantify"
            youtubeUrl="https://www.youtube.com/watch?v=1sIYiyakO28"
            imageUrl="/project-plantify.png"
          />
          <ProjectCard
            title="Notifly"
            description={`Notifly is a website that aims to improve the student's learning experience, whether in a traditional or virtual setting, by providing a tool for students to use. Instead of frantically writing down all notes in a lecture, students can focus more time understanding content.`}
            githubUrl="https://github.com/tanikajangam/notifly"
            youtubeUrl="https://www.youtube.com/watch?v=-2hijdgaPiI"
            imageUrl="/project-notifly.png"
          />
          <ProjectCard
            title="HabitTracker"
            description={`HabitTracker can record the number of stress symptoms or "bad habits" you exhibit (for example, biting your nails, scratching your head until the blood oozes out – all symptoms of mental stress). HabitTracker uses real-time hand detection directly from your browser.`}
            githubUrl="https://github.com/tanikajangam/habittracker"
            youtubeUrl="https://www.youtube.com/watch?v=VXwmXKu6QxA"
            imageUrl="/project-habittracker.png"
          />

        </div>
      </div>


      <div className="p-4 px-6 min-h-96 lg:max-w-6xl mx-auto">
        <h1 className={`text-4xl text-center sm:text-left mb-4 max-h-min ${montserrat.className}`}> {`Latest Blog (Tech/Productivity) Posts`}</h1>

        <div className="space-y-6 flex flex-col justify-start items-start h-full">
          <BlogCard title="AWS Solutions Architect Professional Exam" date="December 2024" url="#" />
          <BlogCard title="POS Tagging in NLP using Markov Chains" date="December 2024" url="#" />
          <BlogCard title="My First Post" date="December 2024" url="#" />
        </div>
      </div>


      {/* Footer Section */}
      <div className="">
        <h1 className={`text-4xl mb-4 max-h-min text-center color-[#808082] ${montserrat.className}`}>TJ</h1>
        <h2 className="text-center">
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#A36BC0] transition">
            Netlify
          </a>
          {' | '}
          <a href="https://www.buymeacoffee.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#A36BC0] transition">
            Buy me a Coffee
          </a>
          {' | '}
          <a href="https://github.com/tanikajangam" target="_blank" rel="noopener noreferrer" className="hover:text-[#A36BC0] transition">
            Github
          </a>
        </h2>

        <p className="text-center">Website made by Tanika Jangam | All rights reserved 2024</p>
      </div>

    </div >
  );
}


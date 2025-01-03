import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import SocialBar from '../components/SocialBar';
import SocialBar2 from '../components/SocialBar2';
import Link from 'next/link';

import BlogSection from '../components/BlogSection';
import ExperienceSection from "../components/ExperienceSection";
import ProjectSection from "../components/ProjectSection";
import CertificationSection from "../components/CertificationSection";
import LandingSection from "../components/LandingSection";
import Image from 'next/image';

import { useState, useEffect, useRef } from "react";
import "./globals.css";
import { Montserrat } from 'next/font/google';


const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (

    <div className="container mx-auto px-4 w-full xl:max-w-7xl md:max-w-3xl lg:max-w-5xl sm:max-w-2xl max-w-xl " >
      < Navbar />
      < LandingSection />
      {/* < SocialBar2 /> */}
      < CertificationSection />
      < ExperienceSection />
      < ProjectSection />
      < BlogSection />
      < Footer />

      < SocialBar />
    </div >
  );
}


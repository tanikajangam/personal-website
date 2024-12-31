import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

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

    <div >
      < Navbar />
      < LandingSection />
      < CertificationSection />
      < ExperienceSection />
      < ProjectSection />
      < BlogSection />
      < Footer />
    </div >
  );
}


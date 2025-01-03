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
import LayoutWrapper from './LayoutWrapper';


import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (
    <>
      <LayoutWrapper>
        <div className="container min-height-100 mx-auto px-4 " >
          < Navbar />
          < LandingSection />
          {/* < SocialBar2 /> */}
          < CertificationSection />
          < ExperienceSection />
          < ProjectSection />
          < BlogSection />
          < Footer />

        </div >
      </ LayoutWrapper>
    </>
  );
}


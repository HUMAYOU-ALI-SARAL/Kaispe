"use client"
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "./Navbar"
import '../styles.css'
import { useRouter } from 'next/navigation';

export default function HeroSection({ mainHeading, subtext }) {
  const router = useRouter();

  return (
    <div className="h-[50vh] md:min-h-[80vh] overflow-hidden home_bg font-bricolage">
      <Navbar />

      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight md:leading-tight">
            {mainHeading}
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            {subtext}
          </p>
          {/* Vertical line */}
          <div className="h-[100px] w-[3px] bg-white mx-auto"></div>
        </div>
      </div>

    </div>
  )
}


"use client"
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "../common/Navbar"
import { useRouter } from 'next/navigation';
import '../styles.css'

export default function HeroSection() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/core-offerings');
  };

  const handleContactNavigate = () => {
    router.push('/contact-us-now');
  };

  return (
    <div className="min-h-[80vh] relative overflow-hidden home_bg font-bricolage">
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight md:leading-tight">
          Rapidly Adapt & Automate to Achieve Business Resilience 
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Helping Organizations across all industries to build agile business processes to innovate
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <button
              onClick={handleNavigate}
              className="w-full sm:w-auto text-sm md:text-base group flex items-center justify-center gap-2 bg-[#4FF4F4] text-black px-6 py-3 rounded-full hover:bg-[#4FF4F4]/90 transition-colors"
            >
              View our services
              <FaArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={handleContactNavigate}
              className="w-full sm:w-[220px] text-sm md:text-base flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-[#4FF4F4]"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* Optional: Radial gradient for added depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black pointer-events-none"></div>
    </div>
  )
}


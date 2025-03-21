'use client'
import Navbar from "@/components/common/Navbar"
import HeroSection from "@/components/common/HeroSection"
import OfferingSection from "./OfferingSection"
import HelpSection from "@/components/Home_page/HelpSection"
import MarqueSection from "./MarqueSection"
import Footer from '@/components/common/Footer'

export default function CoreOfferings() {
  return (
    <div className="w-[100%] overflow-y-hidden">
    <HeroSection mainHeading="Our Services" subtext="We offer a broad range of services to help organizations maximizing value of technology investments & meet their digital transformation goals." />
    <OfferingSection />
    <HelpSection />
    <MarqueSection />
    <Footer />
    </div>
  );
}

'use client'
import Navbar from "@/components/common/Navbar"
import HeroSection from "@/components/common/HeroSection"
import MentionedSection from "./MentionedSection"
import BlogSection from "./BlogSection"
import Footer from '@/components/common/Footer'

export default function Press() {
  return (
    <div className="w-[100%] overflow-y-hidden">
    <HeroSection 
      mainHeading="Press" 
      subtext="We reunite market experts, leaders and entrepreneurs who are addressing the world's most relevant issues to leverage high impact technologies." 
    />
    <MentionedSection />
    <BlogSection />
    <Footer />
    </div>
  );
}

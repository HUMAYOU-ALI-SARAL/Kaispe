import Navbar from "@/components/common/Navbar"
import HeroSection from "@/components/Home_page/HeroSection";
import ServicesSection from "@/components/Home_page/ServicesSection";
import BlockchainSection from "@/components/Home_page/BlockchainSection";
import HelpSection from '@/components/Home_page/HelpSection'
import MarqueSection from './core-offerings/MarqueSection'
import Footer from '@/components/common/Footer'

export default function Home() {
  return (
    <div className="w-[100%] overflow-y-hidden">
    <HeroSection />
    <ServicesSection />
    <BlockchainSection />
    <HelpSection />
    <MarqueSection />
    <Footer />
    </div>
  );
}

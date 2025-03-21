'use client'
import HeroSection from "@/components/common/HeroSection"
import MarqueSection from "../core-offerings/MarqueSection"
import Footer from '@/components/common/Footer'

export default function ContactUsNow() {
    return (
        <div className="w-[100%] overflow-y-hidden">
            <HeroSection
                mainHeading="Get In Touch"
                subtext="Thank you for your interest in our services. In order to receive further information, we kindly ask you to provide us with your contact information."
            />
            
            <div className="max-w-[1200px] mx-auto px-4 py-12">
                <h1 className="text-5xl font-normal text-center mb-4">CONTACT US</h1>
                <p className="text-center mb-12">Fill in the below email, or reach us on: info@App Genix Solutions.com , +1 315 791 4472</p>
                
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                            type="text" 
                            placeholder="First Name*" 
                            className="p-4 rounded-lg bg-gray-50 w-full border border-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300" 
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Last Name*" 
                            className="p-4 rounded-lg bg-gray-50 w-full border border-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            required
                        />
                        <input 
                            type="email" 
                            placeholder="Email*" 
                            className="p-4 rounded-lg bg-gray-50 w-full border border-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            required
                        />
                        <input 
                            type="tel" 
                            placeholder="Phone" 
                            className="p-4 rounded-lg bg-gray-50 w-full border border-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                        <input 
                            type="text" 
                            placeholder="Company name" 
                            className="p-4 rounded-lg bg-gray-50 w-full border border-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                        <input 
                            type="text" 
                            placeholder="Country/Region*" 
                            className="p-4 rounded-lg bg-gray-50 w-full border border-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            required
                        />
                    </div>
                    <textarea 
                        placeholder="Message" 
                        className="p-4 rounded-lg bg-gray-50 w-full h-32 border border-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="flex justify-center">
                        <button 
                            type="submit" 
                            className="bg-teal-500 text-white px-16 py-4 rounded-full text-xl hover:bg-teal-600 transition-colors"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>

            <MarqueSection />
            <Footer />
        </div>
    );
}
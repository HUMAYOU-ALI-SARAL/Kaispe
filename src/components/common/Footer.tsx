'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter()

  return (
    <footer className="bg-[#1a1a1a] text-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex flex-col py-4 sm:py-6">
          <Image
            src="/logo.jpeg"
            alt="App Genix Solutions Logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Main Content Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Description */}
          <p className="text-sm sm:text-base lg:w-[90%]">
          App Genix Solutions is offering apps and services using Microsoft Power Platform, Dynamics, Azure, AI, Oracle NetSuite and Open-Source platform
          </p>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm sm:text-base">+1 315 791 4472</p>
              {/* <p className="text-sm sm:text-base">+971 6 7474978</p> */}
              <a href="mailto:info@App Genix Solutions.com" className="text-sm sm:text-base hover:text-[#4FF4F4] transition-colors">
                info@App Genix Solutions.com
              </a>
            </div>
            <div className="space-y-1 text-sm sm:text-base">
              <p>Dubai World Trade Centre FZF 385, 04, SHEIKH RASHID</p>
              <p>TOWER, DUBAI, UAE</p>
              <p>9450 Southwest Gemini Drive 97008-7105 Beaverton OR</p>
              <p>97008, United States</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full grid grid-cols-2 gap-8 sm:gap-12">
            <div className="flex flex-col space-y-3">
              <a 
                onClick={() => router.push('/core-offerings')}
                className="text-sm sm:text-base hover:text-[#4FF4F4] cursor-pointer transition-colors"
              >
                Our Services
              </a>
              <a 
                onClick={() => router.push('/press')}
                className="text-sm sm:text-base hover:text-[#4FF4F4] cursor-pointer transition-colors"
              >
                Press
              </a>
              <a 
                onClick={() => router.push('#')}
                className="text-sm sm:text-base hover:text-[#4FF4F4] cursor-pointer transition-colors"
              >
                Our Projects
              </a>
            </div>

            <div className="flex flex-col space-y-3">
              <a 
                onClick={() => router.push('/contact-us-now')}
                className="text-sm sm:text-base hover:text-[#4FF4F4] cursor-pointer transition-colors"
              >
                Contact
              </a>
              <a 
                onClick={() => router.push('/privacy-policy')}
                className="text-sm sm:text-base hover:text-[#4FF4F4] cursor-pointer transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


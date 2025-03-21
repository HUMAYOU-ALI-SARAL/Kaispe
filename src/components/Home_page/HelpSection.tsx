"use client"

import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import '../styles.css'
import { useRouter } from 'next/navigation';

const HelpSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className='home_bg rounded-[20px] sm:rounded-[30px] text-white w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex flex-col items-center justify-center p-6 sm:p-8 md:p-10'>
            <Image 
              src="/logo.jpeg" 
              alt="Company Logo" 
              width={100}
              height={100}
              className="mb-4 sm:mb-6 w-auto "
            />
            <h2 className='text-[32px] sm:text-[42px] md:text-[52px] font-extrabold text-center leading-tight'>
              how can we help you?
            </h2>
            <p className='text-white text-[12px] sm:text-[13px] md:text-[14px] max-w-[280px] sm:max-w-[350px] md:max-w-[400px] mx-auto mt-3 sm:mt-4 text-center'>
            Our App Genix Solutions support team is ready to calculate the cost according to the software and its underlying infrastructure, the extent of support and maintenance required, and the preferred pricing model.
            </p>
            <button 
              onClick={() => router.push('/contact-us-now')}
              className="text-sm group flex items-center gap-2 bg-[#4FF4F4] text-black px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#4FF4F4]/90 transition-colors mt-4 sm:mt-5 md:mt-6"
            >
              Get in touch
              <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;

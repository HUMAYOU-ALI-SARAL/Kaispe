import React from "react";

export default function BlogCard({ 
    link, 
    logoSrc, 
    bannerSrc, 
    title, 
    description  
}) {
    return (
        <div className="flex justify-center items-center h-[600px]">
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-full bg-white rounded-3xl shadow-lg px-6 pt-2 pb-6 max-w-md w-full hover:shadow-2xl transition-shadow duration-300"
            >
                <div className="flex flex-col items-center">
                    {/* Image */}
                    <div className="relative mb-4 hover:scale-105 transition-transform duration-300">
                        <img
                            src={bannerSrc}
                            alt="Banner Image"
                            className="rounded-2xl w-[100%] mx-auto mt-2"
                        />
                    </div>
                    {/* Title */}
                    <h2 className="text-xl font-semibold text-left mb-2">
                        {title} 
                    </h2>
                    {/* Description */}
                    <p className="text-left text-gray-600 leading-4 text-[12px]">
                        {description}
                    </p>
                    <button className="text-blue-500 text-sm border-2 border-[#002258] px-4 py-2 rounded-full mt-4 shadow-md hover:bg-[#002258] hover:text-white transition-colors duration-300">Read More</button>
                </div>
            </a>
        </div>
    );
}

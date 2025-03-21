import React from "react";

export default function MentionCard({ 
    link, 
    logoSrc, 
    bannerSrc, 
    title, 
    description 
}) {
    return (
        <div className="flex justify-center items-center">
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" // Security measure to prevent access to the window object
                className="bg-white rounded-3xl shadow-lg px-6 pt-2 pb-6 max-w-md w-full hover:shadow-2xl transition-shadow duration-300 h-[500px]" // Added fixed height
            >
                <div className="flex flex-col items-center h-full">
                    {/* Logo */}
                    <div className="mb-1 hover:scale-105 transition-transform duration-300">
                        <img
                            src={logoSrc}
                            alt="Logo image"
                            className="h-20"
                        />
                    </div>
                    {/* Image */}
                    <div className="relative mb-4 hover:scale-105 transition-transform duration-300">
                        <img
                            src={bannerSrc}
                            alt="Banner Image"
                            className="rounded-2xl w-[100%] mx-auto h-[200px] object-cover"
                        />
                    </div>
                    {/* Title */}
                    <h2 className="text-xl font-semibold text-center mb-2 line-clamp-2">
                        {title} 
                    </h2>
                    {/* Description */}
                    <p className="text-left text-gray-600 leading-4 text-[12px] line-clamp-4 w-full"> {/* Added line-clamp and w-full */}
                        {description} // Dynamic description
                    </p>
                </div>
            </a>
        </div>
    );
}

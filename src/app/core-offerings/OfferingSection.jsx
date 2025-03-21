import React from 'react';
import Image from 'next/image';


const offerings = [
    {
        icon: '/core-offering/3.png',
        title: 'Implementation',
        description: `Successful organizations equip their people with the right technology to do more! As a leading expert in software technologies, App Genix Solutions is helping out companies leverage the latest advancements to maximize their investments in technology.`
    },
    {
        icon: '/core-offering/4.png',
        title: 'Upgrade',
        description: `The decision to upgrade your current application version can be a difficult choice. App Genix Solutions can help you leverage the upgrade benefits. We can show you how upgrades deliver improved functionality and other important features that you shouldn’t ignore, at least not long term.`
    },
    {
        icon: '/core-offering/5.png',
        title: 'Custom Development',
        description: `The decision to upgrade your current application version can be a difficult choice. App Genix Solutions can help you leverage the upgrade benefits. We can show you how upgrades deliver improved functionality and other important features that you shouldn’t ignore, at least not long term.`
    },
    {
        icon: '/core-offering/3.png',
        title: 'Application Health Check',
        description: `In-depth analysis of your existing environment and generate a comprehensive report to identify the performance bottlenecks along with recommendations on how to resolve them.`
    },
    {
        icon: '/core-offering/4.png',
        title: 'Integration',
        description: `With businesses moving toward digitization, App Genix Solutions can help your business connect legacy, modern, and complex business applications more easily and quickly by providing integrations using standard and custom connectors.`
    },
    {
        icon: '/core-offering/5.png',
        title: 'Support',
        description: `Our App Genix Solutions support team is ready to calculate the cost according to the software and its underlying infrastructure, the extent of support and maintenance required, and the preferred pricing model.`
    }
];

export default function OfferingSection() {
    return (
        <div className="offering-section space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {offerings.map((offering, index) => (
                <div
                    key={index}
                    className={`p-6 bg-white px-12 py-12 flex flex-col md:flex-row ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center justify-center gap-6 ${
                        index !== offerings.length - 1 ? 'border-b-2 border-[#193c75]' : ''
                    }`}
                >
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                        {typeof offering.icon === 'string' && offering.icon.startsWith('/') ? (
                            <Image 
                                src={offering.icon}
                                alt={offering.title}
                                width={100}
                                height={100}
                                className="mb-4"
                            />
                        ) : (
                            <span className="text-2xl mb-4">{offering.icon}</span>
                        )}
                        <h3 className="w-full md:w-[300px] text-3xl font-thin mb-2 text-center">{offering.title}</h3>
                        <div className="w-[180px] text-sm font-thin text-center h-1 mt-4 bg-[#04a49c] rounded-full shadow-xl"></div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-6 md:mt-0">
                        <p className="text-gray-700 text-[14px] text-justify">{offering.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

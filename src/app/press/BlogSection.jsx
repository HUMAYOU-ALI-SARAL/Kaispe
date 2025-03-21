import BlogCard from "@/components/common/BlogCard";

export default function blogsSection() {
    const cardData = [
        {
            link: "#",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2025/02/8398790-480x380.jpg",
            title: "How An AI Agent Can Boost The Retail Commerce Experience",
            description: "Retail is evolving faster than ever, and businesses that embrace innovation are the ones staying ahead. Today's customers expect more than just a transaction—they want a seamless, personalized experience, whether they're shopping online or in-store. That's where AI agent for retail commerce come in, revolutionizing retail by providing smart recommendations, optimizing operations, and enhancing customer engageme"
        },
        {
            link: "#",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2025/02/8398786-480x380.jpg.webp",
            title: "How AI Is Transforming Healthcare And Patient Care?",
            description: "Artificial Intelligence (AI) and Machine Learning (ML) are driving a wave of innovation in healthcare, offering exciting opportunities to enhance patient care with advanced analytics. These technologies are being used in areas such as early disease detection, personalized treatments, drug development, and improving healthcare operations."
        },
        {
            link: "#",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2025/01/8372208-480x380.jpg.webp",
            title: "Connected Field Service: Predictive Maintenance Of Industry Assets",
            description: "In this blog post, we will walk you through the practical implementation of connected field service using KAISPE Field Service app, IoT Device Web Portal, Microsoft Azure IoT and Power BI. We will discuss how all of these components integrate and work together to achieve predictive maintenance for industrial assets."
        },
        {
            link: "#",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2025/01/BlogPost-Construction-Image-480x380.jpg.webp",
            title: "Defect Detection In Construction Quality Control Using AI",
            description: "The construction industry has always been at the forefront of innovation, embracing tools and technologies that enhance efficiency and precision. One of the most transformative innovations in recent years is AI Defect Detection, which has revolutionized Construction Quality Control. By leveraging the power of Artificial Intelligence (AI), construction professionals can ensure better project outcomes, reduce costs, and improve safety."
        },
        {
            link: "#",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2024/12/pexels-ron-lach-9783346-480x380.jpg.webp",
            title: "Software As A Service Vs Software As Autonomous Service – AI Leads The Paradigm Shift",
            description: "Well, we all are familiar with what Software As A Service or SaaS is and how it has taken the industry during the last decade. In SaaS paradigm, the software company delivering SaaS will just give the software app and the customer is responsible to enter their business data in, configure workflow processes and make the most efficient use of the app. In Software As Autonomous Service model, the app provider will also provide the relevant services, thanks to the AI era."
        },
        {
            link: "#",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2024/12/8372193-480x380.jpg.webp",
            title: "10 Easy Ways To Boost Your Child's Language Development At Home",
            description: "As a parent, you play a crucial role in your child's growth and development. You want to provide your child with the best possible opportunities to succeed in life. One of the most important skills that your child can develop is language. Language development is essential for communication, learning, and socialization. It is a critical tool that helps your child express their thoughts, feelings, and needs."
        },
        {
            link: "#",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2024/11/Therapy-Care-B1-Img-1-480x380.png.webp",
            title: "Understanding Speech And Language Development In Children",
            description: "Children's speech and language development is a crucial factor in their overall growth and development. It serves as the cornerstone for communication and social engagement, enabling them to interact with their surroundings in a meaningful way. As children mature, their speech and language abilities advance, enabling them to express their thoughts and comprehend others more efficiently. In this article, we will outline the various stages of speech and language development in children and offer advice to parents to help improve their child's communication skills."
        },
        {
            link: "#",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2024/11/8372188-480x380.jpg.webp",
            title: "How To Easily Implement UI Design In Microsoft PowerApps: A Comprehensive Guide",
            description: "Microsoft PowerApps provides a flexible platform to create powerful, low-code business applications. While its default UI controls and themes are functional, crafting a custom UI design elevates your powerapps, making it visually appealing and more user-friendly. Whether you're a designer with a polished vision or a beginner starting from scratch, this step-by-step guide will help you implement a UI design that aligns with your brand and user needs."
        }
    ];
    return (
        <div className="max-w-7xl mx-auto my-12">
            <div className="h-[100px] w-[3px] bg-black mx-auto"></div>
            <h2 className='text-[32px] sm:text-[42px] md:text-[52px] font-extrabold text-center leading-tight capitalize' >
                blogs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4">
                {cardData.map((card, index) => (
                    <BlogCard key={index} {...card} />
                ))}
            </div>
        </div>
    )
}
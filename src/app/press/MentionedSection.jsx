import MentionCard from "@/components/common/MentionCard"

export default function MentionedSection() {

    const cardData = [
        {
            link: "#",
            logoSrc: "/press/mention/1.png",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2024/09/VP-Press-Release-News-1-480x380.png",
            title: "App Genix Solutions's Vendor Portal Now Available On Microsoft AppSource",
            description: "New York, NY, USA — September 6, 2024 — App Genix Solutions, a leading business software and technology services provider and Microsoft Gold Partner, today announced the availability of their Vendor Portal on Microsoft AppSource, an online cloud marketplace providing tailored line-of-business solutions."
        },
        {
            link: "#",
            logoSrc: "/press/mention/2.png",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2024/08/AR_Free-Plan-Campaign-480x380.jpg.webp",
            title: "App Genix Solutions Announces Advanced AI Features In AutoRecruit App",
            description: "Chicago, IL – App Genix Solutions, a leading provider of innovative technology solutions, is thrilled to announce the availability of advanced Artificial Intelligence (AI) features in its AutoRecruit app. The new features aim to provide hyper automation, an enhanced user experience and streamline the recruitment process for businesses of all sizes."
        },
        {
            link: "#",
            logoSrc: "/press/mention/3.png",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2024/01/KAISPE-AWS-Marketplace-480x380.png.webp",
            title: "App Genix Solutions Apps Now Available On AWS Marketplace – Opening New Avenues For Businesses",
            description: "With the technology advancing every day, the need for easy integration and cloud-driven solutions is necessary to be a part of any organization. To help you with the transformative journey, the App Genix Solutions proudly announces the integration of its transformative suite of applications on the renowned AWS Marketplace. This strategic collaboration brings new possibilities for businesses seeking seamless, efficient, and cutting-edge solutions within the dynamic Amazon Web Services (AWS) ecosystem."
        },
        {
            link: "#",
            logoSrc: "/press/mention/4.png",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2023/07/MicrosoftTeams-image-12-480x380.png.webp",
            title: "App Genix Solutions Customer Portal Now Available In The Microsoft Azure Marketplace",
            description: "NEW YORK, NY, USA — May 22, 2023 — App Genix Solutions, a leading technology solutions provider and Microsoft Gold Partner, today announced the availability of its Customer Portal in the Microsoft Azure Marketplace, an online store providing applications and services for use on Azure. App Genix Solutions customers can now take advantage of the productive and trusted Azure cloud platform, with streamlined deployment and management."
        },
        {
            link: "#",
            logoSrc: "/press/mention/5.png",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2023/05/Kaispe-Chicagp-IL-office-location-News-480x380.png",
            title: "App Genix Solutions Expands To Chicago, IL | Expanding The Reach For Midwest Organizations",
            description: "After New York, with the launch of its second office in Chicago, Illinois, App Genix Solutions, the top provider of technology solutions, has increased the scope of its offerings in the country. App Genix Solutions assists its customers in integrating their devices and processes with their sophisticated business systems, such as CRM and ERPs, thanks to long-standing cooperation in Microsoft and Oracle technology."
        },
        {
            link: "#",
            logoSrc: "/press/mention/6.png",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2023/05/Kaispe-Crayon-Partnership-480x380.png",
            title: "App Genix Solutions And Crayon Join Forces To Revolutionize The Way Businesses Tackle Their Problems",
            description: "NEW YORK, May 08, 2023 — We are excited to announce that App Genix Solutions and Crayon join forces for a mutual venture. This partnership made to help organizations of all sizes get access to the cutting-edge App Genix Solutions software solutions. It will streamline their operations and boost their bottom line."
        },
        {
            link: "#",
            logoSrc: "/press/mention/9.png",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2023/02/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2021-06-23-114737-480x380.png.webp",
            title: "KPoD Is Available Now On Microsoft Azure Marketplace As A Transactable Offer",
            description: "NEW YORK, February 22, 2023 — App Genix Solutions today announced the availability of KPoD on Microsoft Azure Marketplace, as a Transactable solution that provides immediate operational and commercial benefits for Customers and Cloud Service Providers ('CSP's) buying through Microsoft Marketplace."
        },
        {
            link: "#",
            logoSrc: "/press/mention/8.png",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2023/01/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2021-06-23-114737-480x380.png.webp",
            title: "App Genix Solutions Delivers Oracle NetSuite GoLive!",
            description: "Customer replaced QuickBooks with Oracle NetSuite, and we are filling with excitement for their future growth on the platform fueled by unified data, robust analytics, and process automatio"
        },
        {
            link: "#",
            logoSrc: "/press/mention/9.png",
            bannerSrc: "https://www.kaispe.com/wp-content/uploads/2020/11/The_Top_35_IoT_Terms-480x380.jpg.webp",
            title: "The Top 35 IoT Terms",
            description: "The Internet of Things (IoT) continues to evolve rapidly. To help you navigate this complex landscape, we've compiled the top 35 IoT terms you should know."
        }
    ];



    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <h2 className='text-[32px] sm:text-[42px] md:text-[52px] font-extrabold text-center leading-tight capitalize' >
                we are mentioned in
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
                {cardData.map((card, index) => (
                    <MentionCard
                        key={index}
                        link={card.link}
                        logoSrc={card.logoSrc}
                        bannerSrc={card.bannerSrc}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    )
}
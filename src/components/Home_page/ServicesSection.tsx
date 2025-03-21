import Image from "next/image"

export default function ServicesSection() {
    const services = [
        {
            image: "/Vector1.png",
            title: "Microsoft Dynamics 365 Finance",
        },
        {
            image: "/Vector2.png",
            title: "Microsoft Dynamics 365 Supply Chain",
        },
        {
            image: "/Vector3.png",
            title: "Microsoft Dynamics Commerce",
        },
        {
            image: "/Vector4.png",
            title: "Microsoft Dynamics 365 Business Central",
        },
        {
            image: "/Vector5.png",
            title: "Microsoft Dynamics Customer Engagement",
        },
        {
            image: "/Vector6.png",
            title: "Microsoft Dynamics Customer Engagement",
        },
    ]

    return (
        <section className="py-8 sm:py-12 md:py-16 px-4 max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
                    Explore Our <span className="inline-block bg-[#43CAC5] text-[#fff] px-2 rounded">Solutions</span>
                </h2>

                <p className="text-sm sm:text-base text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                    Businesses are increasingly affected by new technologies at a growing pace, and investing in the future to
                    remain competitive has become critical.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group relative bg-[#F5FBFF] rounded-[20px] sm:rounded-[30px] p-4 sm:p-6 transition-all duration-300 hover:shadow-lg border border-gray-400"
                    >
                        {/* Icon */}
                        <div className="mb-3 sm:mb-4 bg-[#77E4E0] w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full">
                            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                                <Image 
                                    src={service.image}
                                    alt={service.title}
                                    width={24}
                                    height={24}
                                    className="object-contain w-5 h-5 sm:w-6 sm:h-6"
                                />
                            </div>
                        </div>
                        <h3 className="w-full md:w-[65%] font-light text-lg sm:text-xl md:text-2xl text-gray-900 leading-tight">{service.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}


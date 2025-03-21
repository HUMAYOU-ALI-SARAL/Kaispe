import { FaXTwitter, FaTelegram, FaLinkedinIn, FaDiscord } from "react-icons/fa6"

export default function BlockchainSection() {
  const socialLinks = [
    { icon: <FaXTwitter size={38} color="#4FF4F4"/>, href: "#" },
    { icon: <FaTelegram size={38} color="#4FF4F4"/>, href: "#" },
    { icon: <FaLinkedinIn size={38} color="#4FF4F4"/>, href: "#" },
    { icon: <FaDiscord size={38} color="#4FF4F4"/>, href: "#" },
  ]

  return (
    <div className="w-fulll py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Text Content */}
        <div className="space-y-4 md:space-y-6 w-full lg:w-2/3 px-4 lg:pl-12">
          <h2 className="text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
          Rapidly Adapt & Automate to Achieve Business Resilience
          </h2>
          <p className="text-center md:text-left text-sm sm:text-base text-gray-700 leading-relaxed max-w-prose">
          App Genix Solutions is one of the leading technology solutions provider in the world. Our experience and expertise gives us an award-winning edge to carefully listen to our customers’ needs and act in the most appropriate manner, so that they can adopt technology with ease and efficiency.
          </p>
        </div>

        {/* Social Icons */}
        <div className="w-full lg:w-auto">
          <div className="bg-[#4FF4F4] rounded-tl-[30px] rounded-bl-[30px] p-6 flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-black hover:opacity-75 transition-opacity bg-black rounded-full w-16 h-16 flex items-center justify-center "
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


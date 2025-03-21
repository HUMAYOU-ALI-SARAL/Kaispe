'use client'
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="w-full py-4 md:py-6 bg-transparent z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center px-2 sm:px-4 md:px-8 lg:px-12">
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-auto xs:h-10 sm:h-7 md:h-10 text-white cursor-pointer"
                            src="/logo-removebg-preview.png"
                            alt="Logo"
                            onClick={() => router.push('/')}
                        />
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                        <p 
                            onClick={() => router.push('/press')}
                            className="group flex items-center gap-1 sm:gap-2 text-white hover:text-[#4FF4F4] transition-colors text-[10px] xs:text-[11px] sm:text-[12px] md:text-[14px] font-medium cursor-pointer"
                        >
                            Press
                        </p>
                        <p 
                            onClick={() => router.push('/core-offerings')}
                            className="group flex items-center gap-1 sm:gap-2 text-white hover:text-[#4FF4F4] transition-colors text-[10px] xs:text-[11px] sm:text-[12px] md:text-[14px] font-medium cursor-pointer"
                        >
                            Services
                        </p>
                        <button 
                            onClick={() => router.push('/contact-us-now')}
                            className="group flex items-center gap-1 sm:gap-2 bg-[#ffffff] text-black px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full hover:bg-[#4FF4F4]/90 transition-colors text-[10px] xs:text-[11px] sm:text-[12px] md:text-[14px] font-medium"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 
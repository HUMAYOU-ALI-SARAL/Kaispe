import Marquee from 'react-fast-marquee';

export default function MarqueSection() {
    return (
        <div className="marque-section space-y-2 max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 py-20 md:py-12">
            <h2 className='text-[32px] sm:text-[42px] md:text-[52px] font-extrabold text-center leading-tight'>Strategic Partners</h2>
            <p className="text-gray-700 text-[14px] max-w-[80%] mx-auto text-center">
            App Genix Solutions always believe in building strategic business relationship with partners around the world. Together with our partners, we can provide the solutions our customers are looking for to grow their business and capture the market
            </p>

            <Marquee gradient={false} className="mt-20">
                <img src="https://www.Kaispe.com/wp-content/uploads/2022/05/Microsoft-1.png.webp" alt="Image 1" className="w-32 inline-block mx-12 my-12" />
                <img src="https://www.Kaispe.com/wp-content/uploads/2022/05/Oracle.png.webp" alt="Image 2" className="w-32 inline-block mx-12 my-12" />
                <img src="https://www.Kaispe.com/wp-content/uploads/2022/05/Crayon.png.webp" alt="Image 3" className="w-32 inline-block mx-12 my-12" />
                <img src="https://www.Kaispe.com/wp-content/uploads/2022/05/Velosio.png.webp" alt="Image 4" className="w-32 inline-block mx-12 my-12" />
                <img src="https://www.Kaispe.com/wp-content/uploads/2022/05/sana.jpg.webp" alt="Image 5" className="w-32 inline-block mx-12 my-12" />
                <img src="https://www.Kaispe.com/wp-content/uploads/2022/05/Solgari.png.webp" alt="Image 6" className="w-32 inline-block mx-12 my-12" />
                <img src="https://www.Kaispe.com/wp-content/uploads/2022/05/Stoneridge-1.png" alt="Image 7" className="w-32 inline-block mx-12 my-12" />
                <img src="https://www.Kaispe.com/wp-content/uploads/2022/05/Eemc-1.png.webp" alt="Image 8" className="w-32 inline-block mx-12 my-12" />
            </Marquee>
        </div>
    )
} 
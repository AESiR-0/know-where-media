import Image from "next/image";
import bg from '@/public/static/brands/bg.png'
import amazon from '@/public/static/brands/prime.png'
import netflix from '@/public/static/brands/netflix.png'
import mcdonalds from '@/public/static/brands/mcd.png'
import redbull from '@/public/static/brands/red bull.png'
const BigImpact = () => {
    const brands = [
        { name: "Prime", logo: amazon, alt: "Amazon Prime Logo" },
        { name: "Netflix", logo: netflix, alt: "Netflix Logo" },
        { name: "McDonald's", logo: mcdonalds, alt: "McDonald's Logo" },
        { name: "Red Bull", logo: redbull, alt: "Red Bull Logo" },
    ];

    return (
        <section style={{ backgroundImage: `url(${bg.src})` }} className=" bg-contain bg-no-repeat gap-8    h-[80vh] flex justify-center items-center  flex-col py-16 text-white text-center">
            {/* Title */}
            <h2 style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#000" }} className="text-6xl font-oswald font-bold uppercase tracking-tight  ">
                Big Names, Bigger Impact
            </h2>
            <p style={{ WebkitTextStrokeWidth: "0.4px", WebkitTextStrokeColor: "#000" }} className="text-3xl font-spaceGrotesk font-normal  tracking-tight ">
                We've helped global brands make bold statements
            </p>

            {/* Brand Logos */}
            <div className="flex flex-wrap justify-center gap-8 mt-10">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="w-[268px] hover:drop-shadow-xl hover:shadow-xl hover:scale-95 transition-all duration-300 p-[26px] bg-white rounded-[4px] shadow-custom flex justify-center items-center"
                    >
                        <Image src={brand.logo} alt={brand.alt} width={150} height={50} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BigImpact;

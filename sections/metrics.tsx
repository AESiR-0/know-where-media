import bg from '@/public/static/metrics/bg.png'
import Image from 'next/image'
import lines from '@/public/static/metrics/lines.png'
import leftSticker from '@/public/static/metrics/left_sticker.png'
import rightSticker from '@/public/static/metrics/right_sticker.png'

export default function Metrics() {
    return (
        <div
            style={{ backgroundImage: `url(${bg.src})` }}
            className="min-h-screen h-screen flex items-center justify-center bg-opacity-70 bg-center bg-no-repeat bg-cover">
            <div className="max-w-6xl mx-auto flex h-full flex-col lg:flex-row items-center lg:items-start">
                {/* Left Side Text */}
                <div className="lg:w-1/2 flex flex-col h-full justify-center space-y-4">
                    <div className="relative">
                        <div className="absolute -top-16 right-28 h-full animate-fade-in">
                            <Image src={lines} alt="bg" height={100} width={100} className="object-cover animate-scale-up" />
                        </div>
                        <div className="-bottom-20 -left-5 absolute animate-fade-in">
                            <Image src={leftSticker} alt="bg" height={100} width={100} className="object-cover" />
                        </div>
                        <h1 className="text-[120px] text-white font-oswald font-bold uppercase leading-[132px] tracking-tight stroke-black stroke-[2.4px]">
                            Louder.
                        </h1>
                        <h1 className="text-[120px] text-white font-oswald font-bold uppercase leading-[132px] tracking-tight stroke-black stroke-[2.4px]">
                            Bigger.
                        </h1>
                        <h1 className="text-[120px] metrics-typography font-oswald font-bold uppercase leading-[132px] tracking-tight stroke-black stroke-[2.4px] text-shadow-[5px_4px_0px_#FEC81E]">
                            Better.
                        </h1>
                    </div>
                </div>

                {/* Right Side Boxes */}
                <div className="lg:w-1/2 space-y-6">
                    {/* First Box */}
                    <div className="border-t-4 border-l-4 border-r-4 border-[#FEC81E]">
                        <div className="p-6 relative rounded-lg animate-fade-in">
                            <p className="text-5xl font-bold">8+</p>
                            <p className="text-xl">YEARS in media and marketing expertise</p>
                        </div>
                    </div>

                    {/* SVG Box */}
                    <div className="relative animate-fade-in">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="650"
                            height="178"
                            viewBox="0 0 650 178"
                            fill="none"
                            className="absolute -top-4 left-0 w-full"
                        >
                            <path
                                d="M3 62.4531L41.9741 7V32.526L321.5 53.9444L622 32.526L647 77.8568L619 165V141.5L340 176L41.9741 154.875L3 62.4531Z"
                                fill="#9747FF"
                                stroke="#FEC81E"
                                strokeWidth="4"
                            />
                        </svg>
                        <div className="relative p-6">
                            <p className="text-5xl font-bold">31M+</p>
                            <p className="text-xl">IMPRESSION driving visibility for brands and creators</p>
                        </div>
                    </div>

                    {/* Second Box */}
                    <div className="p-6 relative rounded-lg animate-fade-in">
                        <p className="text-5xl font-bold">50+</p>
                        <p className="text-xl">COLLABORATIONS with industry giants like Amazon, Netflix, and McDonald's.</p>
                    </div>

                    {/* SVG Box */}
                    <div className="relative animate-fade-in">
                        <svg xmlns="http://www.w3.org/2000/svg" width="650" height="160" viewBox="0 0 650 160" className="absolute -top-4 left-0 w-full"
                            fill="none">
                            <path d="M3 104.453L41.9741 154V131.193L189.519 144.169L625 154L647 90.6901L618.5 17.2453V47.8726L340 3L41.9741 21.875L3 104.453Z" fill="#9747FF" stroke="#FEC81E" strokeWidth="4" />
                        </svg>
                        <div className="relative p-6">
                            <p className="text-5xl font-bold">5M+</p>
                            <p className="text-xl">ENGAGEMENTS in 2023, setting benchmarks for audience interaction.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

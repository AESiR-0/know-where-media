// pages/index.tsx
import logo from "@/public/static/logo/nav_logo.png"
import building from "@/public/static/landing/building.png"
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      {/* Navigation bar */}
      <div className="absolute flex justify-between w-full top-5 left-0 px-4 md:px-10">
        <Image
          src={logo}
          alt="Knowhere Logo"
          className="h-8 md:h-10 w-auto"
          priority
        />
        <button className="border-purple-600 hover:bg-purple-600 transition-all duration-300 border-2 rounded-[4px] text-white px-3 py-1 md:px-4 md:py-2 text-sm md:text-base">
          Let's Talk
        </button>
      </div>

      {/* Main content */}
      <div className="mt-20 text-center px-4 md:px-0">
        <div className="gap-4 flex flex-col items-center md:space-y-3">
          <div className="">
            <h2 className="max-md:text-2xl md:text-5xl  font-spaceGrotesk font-semibold">
              From Nowhere  to Knowhere
            </h2>
            <h1 className="landig-css max-w-6xl max-md:max-w-8xl max-md:px-0 font-oswald uppercase px-4 md:px-20 lg:px-40 max-md:text-6xl md:text-8xl ">
              SHOW YOUR HIDDEN TALENT
            </h1>
          </div>
          <p className="text-3xl max-md:max-w-5xl max-md:px-10 max-md:text-xl landing-text max-w-3xl px-32  flex justify-center items-center ">
            We're redefining  how talent and brands connect, thrive, and shine
          </p>
          <button className="bg-custom-yellow hover:bg-custom-yellow/90 transition-all duration-300 text-black px-4 md:px-6 py-2 md:py-3 rounded font-bold text-sm md:text-base">
            GET KNOWHERE
          </button>
          <div className="mt-4 md:mt-6">
            <Image
              src={building}
              alt="Building"
              className="h-32  w-auto mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
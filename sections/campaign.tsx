"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import strike from '@/public/static/captivate/strike.png'
import underline from '@/public/static/captivate/underline.png'
import bg from '@/public/static/metrics/bg.png'
import Card1 from '@/public/static/captivate/Card-1.png'
import Card2 from '@/public/static/captivate/Card-2.png'
import Card3 from '@/public/static/captivate/Card.png'

export default function Campaign() {
    const sectionRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse"
            }
        });

        // Initial state
        gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], {
            opacity: 0,

            scale: 0,
            x: 0
        });

        // Animation
        tl.to(card1Ref.current, {
            opacity: 1,
            scale: 1,

            x: -700,
            duration: 1,
            ease: "power3.out"
        })
            .to(card2Ref.current, {
                opacity: 1,
                scale: 1,
                duration: 1,
                y: -420,
                ease: "power3.out"
            }, "-=0.8")
            .to(card3Ref.current, {
                opacity: 1,
                scale: 1,
                x: 400,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`min-h-screen h-[120vh] relative bg-top bg-no-repeat bg-cover flex-col flex items-center justify-center`}
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <div className="absolute opacity-100 bg-gradient-to-b from-[#270A40] to-transparent h-full w-full"></div>
            <div className="relative max-w-5xl py-10 text-center">
                <h1 className="campaign-typography">campaigns that captivate</h1>
                <div className="absolute top-2 left-12">
                    <Image src={strike} alt="campaign-1" width={75} height={75} />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-5">
                    <Image src={underline} alt="campaign-1" width={250} height={250} />
                </div>
            </div>
            <div className="absolute translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2  ">
                <div ref={card1Ref} className="w-64   absolute">
                    <Image src={Card1} alt="Card 1" />
                </div>
                <div ref={card2Ref} className="w-64   absolute">
                    <Image src={Card2} alt="Card 2" />
                </div>
                <div ref={card3Ref} className="w-64   absolute">
                    <Image src={Card3} alt="Card 3" />

                </div></div>
        </div>
    );
}
'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const navLinks = [
    { href: '#about', label: 'ABOUT' },
    { href: '#work', label: 'WORK' },
    { href: '#process', label: 'PROCESS' },
    { href: '#experience', label: 'EXPERIENCE' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'CONTACT' },
];

export default function Navbar() {
    const navRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const navElement = navRef.current;

        // Initial state
        gsap.set(navElement, {
            yPercent: 100,
            opacity: 0
        });

        // Create animation
        gsap.to(navElement, {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "500px top",
                toggleActions: "play none none reverse",
                scrub: false
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <nav ref={navRef} className="fixed left-1/2 z-10 font-spaceGrotesk -translate-x-1/2 bottom-10 pointer-events-auto">
            <div className="relative bg-[#323131]  h-16 backdrop-blur-sm text-[#EBE9E3] px-6 flex items-center rounded-md shadow-lg">
                <div className="flex justify-center items-center gap-8  uppercase text-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-white transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[url('/static/nav/arrows.png')] bg-repeat-x rounded-b-full"></div>
            </div>
        </nav>
    );
}

'use client';

import { MY_STACK } from '../lib/data';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

type My_STACKitem = {
    name: string;
    icon: string;
};

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Skills() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom 80%',
                scrub: 0.5,
            },
        });

        tl.from('.slide-up', {
            opacity: 0,
            y: 40,
            ease: 'none',
            stagger: 0.4,
        });
    }, { scope: containerRef });

    useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: 'bottom 50%',
            end: 'bottom 10%',
            scrub: 1,
        },
    });

    tl.to(containerRef.current, {
        y: -150,
        opacity: 0,
    });
}, { scope: containerRef });

    return (
        <section id="my-stack" ref={containerRef}>
            <div className="container space-y-20">
                <SectionTitle title="My Stack" />

                {Object.entries(MY_STACK).map(([Key, value]) => (
                    <div className="grid sm:grid-cols-12 mt-8" key={Key}>
                        <div className="slide-up sm:col-span-5 text-5xl font-anton leading-none uppercase">
                            {Key}
                        </div>

                        <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                            {value.map((data) => (
                                <div
                                    className="slide-up flex items-center gap-3.5 leading-none"
                                    key={data.name}
                                >
                                    <Image
                                        src={data.icon}
                                        alt={data.name}
                                        height={50}
                                        width={50}
                                        className="w-11 h-auto"
                                    />
                                    <div>{data.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
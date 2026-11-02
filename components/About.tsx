'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About () {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        ()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                id: 'about-me-in',
                trigger: container.current,
                start: 'top 70%',
                end: 'bottom bottom',
                scrub: 0.5,
            },
        });
    
        tl.from ('.slide-up-and-down',{
            y:150,
            opacity: 0,
            stagger: 0.05,
        });
    },{scope: container});

     useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-down', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );
    return (
        <section className='pb-section' id='about-me'>
            <div className="container mx-auto" ref = {container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-down">
                   I enjoy turning ideas into meaningful digital experiences
                    through thoughtful design and clean code.  
                </h2>
                <p className='pb-3 border-b text-muted-foreground slide-up-and-down'>
                    this is ne
                </p>
                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5 ">
                        <p className='text-5xl slide-up-and-down'>
                            Hi, I'm Rayan.
                        </p>
                    </div>
                    <div className="md:col-span-7 ">
                        <div className="text-lg max-w-[450px] ">
                            <p className='mb-3 slide-up-and-down'>
                                I'm a frontend developer with a background in Computer Science,
                                passionate about building responsive, intuitive, and interactive
                                web applications.
                            </p>
                            
                            <p className="slide-up-and-down">
                                  My approach focuses on creating scalable,
                                high-performing solutions tailored to both user
                                needs and business objectives. By prioritizing
                                performance, accessibility, and responsiveness,
                                I strive to deliver experiences that not only
                                engage users but also drive tangible results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
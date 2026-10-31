"use client";
import { useRef } from "react";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const array = Array.from ({length: 100});

export default function Background (){
    
    const particlesRef = useRef<HTMLDivElement[]>([]);
    useGSAP (()=>{
        particlesRef.current.forEach((particle)=>{
            gsap.set(particle,  
               { 
                width: Math.random()* 3 + 1,  
                height: Math.random()* 3 + 1,
                opacity: Math.random()* 1 ,
                top: Math.random() * window.innerHeight,
                left: Math.random() * window.innerWidth
               })
            
            gsap.to(particle,
                {
                 y: window.innerHeight,
                 duration: Math.random() * 10 + 10,   
                 repeat: -1,
                 ease: "none",
                 opacity: 0
            })   
               
            })
    },[])

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">

        {array.map((particles, index)=>(
            <div className="absolute rounded-full bg-[#A0430A]" key={index} ref={(element)=> { if(element){ particlesRef.current[index] = element }  }}></div>
        ))}
        </div>
    )
};
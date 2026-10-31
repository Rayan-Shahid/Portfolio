"use client";
import { useEffect, useState } from "react";


export default function Loader() {

    const [active, setactive] = useState(false);
    const [exit, setexit] = useState(false);

    const panels = [1, 2, 3, 4, 5,6,7,8,9,10];
    const name = ["R ", "A ","Y ","A ","N "];

    useEffect(()=>{
        setactive(true);
        const exittime = setTimeout (()=>{
            setexit(true);
            setactive(false);
        },2000) 

        return ()=>{
            clearTimeout(exittime)
        } 

    }, []);
 
    return (
    <div className="loader">

        <div >      
            <div className="fixed inset-0 z-[999] flex">
            {
                panels.map((panel, index)=>(
                    <div key={index} className={`fixed top-0 h-screen bg-black text-white transition-transform duration-1000 ease-in-out ${exit ? "translate-y-full" : "translate-y-0" }`} style={{
                        left: `${index * (100 / panels.length)}%`,
                        width: `${100 / panels.length}%`,
                        transitionDelay: `${index * 80}ms`
                    }}>
                   
                </div>
               ))
            }
            </div>
        
        <h1 className="absolute top-[40%] left-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2 text-white text-8xl">
            {
                name.map((names,index)=>(
                    <span key={index} className={`relative inline-block transition-all duration-500 ease-in-out ${active ? "bottom-0 opacity-100" : "-bottom-5 opacity-0" }`} style = {{transitionDelay : `${index * 80}ms`}} >{names}</span>
                ))
            }
        </h1>
    </div>
</div>  



  );
}
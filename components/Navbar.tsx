"use client";

import { useState } from "react";



export default function Navbar (){
    const [Open, setOpen] = useState(false)
    console.log(Open);
    return (
        <nav className="fixed top-6 right-6 z-50">
       
      <button type="button"
        className={`relative w-10 h-10 cursor-pointer flex flex-col items-center justify-center gap-2.5 transition-transform duration-1000 ease-in-out ${Open ? "rotate-180" : "rotate-0"}`}
        onClick={()=> setOpen((prev)=> !prev ) }
      >
        <div className={`transition-transform ease-in-out h-1 bg-[#A0430A] rounded-[4px] duration-500 ${Open ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-full" : "w-[70%]"}`} />
        <div className={`w-full h-1 bg-[#A0430A] rounded-[4px] duration-[800ms] ${Open ? "scale-x-0" : "scale-x-100"}`} />
        <div className={`transition-transform ease-in-out h-1 bg-[#A0430A] rounded-[4px] duration-500 ${Open ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full" : "w-[70%]"}`} />
      </button>
    
        </nav>
    )
}
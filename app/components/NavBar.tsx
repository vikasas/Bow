"use client"

import { Button } from "./Button";
import { FaRobot } from "react-icons/fa";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 
import Link from "next/link";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const callback = () => {
      const currScroll = window.scrollY;
      if (currScroll > lastScroll && currScroll > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScroll = currScroll;
    };
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, []);

  return (
    <div
      className={`w-full bg-background transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} shadow-xl fixed z-50`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 md:px-10">
        <Link href={"https://bow-beta.vercel.app/"}><div className="flex items-center gap-2">
          <FaRobot className="h-9 w-9 text-teal-500" />
          <h2 className="font-bold text-3xl text-white">BOW</h2>
        </div></Link>
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 list-none">
           <li className="cursor-pointer text-white hover:text-teal-600 transition-colors duration-300">Home</li>
           <Link href={"https://bow.chat/careers"}><li className="cursor-pointer text-white hover:text-teal-600 transition-colors duration-300">Careers</li></Link> 
           <Link href={"https://bow.chat/blog"}><li className="cursor-pointer text-white hover:text-teal-600 transition-colors duration-300">Blog</li></Link> 
          </ul>
          <Link href={"https://bow.chat/register"}><Button varient="primary" size="md" text="Register" /></Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className="h-8 w-8 text-white" />
            ) : (
              <HiMenu className="h-8 w-8 text-white" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-background w-full px-6 py-4 flex flex-col gap-4 border-t border-gray-800">
          <a href="#" className="text-white hover:text-teal-600 transition-colors">Home</a>
          <a href="https://bow.chat/careers" target="_blank" className="text-white hover:text-teal-600 transition-colors">Careers</a>
          <a href="https://bow.chat/blog" className="text-white hover:text-teal-600 transition-colors">Blog</a>
         <Link href={"https://bow.chat/register"}><Button varient="primary" size="md" text="Register" /></Link> 
        </div>
      )}
    </div>
  );
}

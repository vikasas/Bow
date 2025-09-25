import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-gray-800 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-br from-green-400 via-teal-600 to-green-500  bg-clip-text text-transparent">BOW</h2>
          <p className="text-sm mt-2 text-white">
            AI-powered conversation management platform for modern businesses.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-teal-400 transition">Home</a>
          <a href="https://bow.chat/careers" className="hover:text-teal-400 transition">Careers</a>
          <a href="https://bow.chat/blog" className="hover:text-teal-400 transition">Blog</a>
          <a href="https://bow.chat/register" className="hover:text-teal-400 transition">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition"><FaInstagram className="h-6 w-6 text-white"/></a>
          <a href="#" className="hover:text-white transition"><FaXTwitter className="h-6 w-6"/></a>
          <a href="https://github.com/vikasas/Bow" className="hover:text-white transition"><FaGithub className="h-6 w-6"/></a>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-6 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Bino. All rights reserved.
      </div>
    </footer>
  );
}

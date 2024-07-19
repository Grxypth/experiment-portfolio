"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <div className="w-full h-screen text-center" ref={ref} id="home">
      <motion.div
        className="max-w-[1200px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-4 text-gray-700">
            Hi, I'm <span className="text-[#ff9e2f]">İhsan</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-2 text-gray-700">
            A Full-Stack Software Engineer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-6" // added mt-6 for margin-top
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            href="/CV_ENG.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/ihsan-a-188b8b2b5/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Grxypth"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

"use client";

import Image from "next/image";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import Html from "@/public/skills/html.png";
import Css from "@/public/skills/css.png";
import Javascript from "@/public/skills/javascript.png";
import ReactImg from "@/public/skills/react.png";
import Tailwind from "@/public/skills/tailwind.png";
import Git from "@/public/skills/git.png";
import Golang from "@/public/skills/go.png";
import NextJS from "@/public/skills/nextjs.png";
import Vercel from "@/public/skills/vercel.png";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="w-full h-screen flex flex-col justify-center items-center text-center mb-28 sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={ReactImg} width={64} height={64} alt="React" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>React</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={Git} width={64} height={64} alt="Git" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Git</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={Javascript} width={64} height={64} alt="JavaScript" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>JavaScript</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={Golang} width={64} height={64} alt="Golang" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Golang</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={Tailwind} width={64} height={64} alt="Tailwind" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Tailwind</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={Html} width={64} height={64} alt="HTML" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>HTML</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={Css} width={64} height={64} alt="CSS" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>CSS</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={NextJS} width={64} height={64} alt="Next.js" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Next.js</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={Vercel} width={64} height={64} alt="Vercel" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Vercel</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

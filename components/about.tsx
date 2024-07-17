"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="w-full h-screen flex flex-col justify-center items-center text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="max-w-[45rem]">
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          I graduated with a degree in{" "}
          <span className="font-medium">
            Electrical-Electronics Engineering
          </span>
          , I've always had a passion for Software Development and the electives
          I picked during the last year of my degree were also focused on that{" "}
          <span className="font-medium">
            Im currently on the process of completing Full Stack Open aswell
          </span>
          . <span className="italic">My favorite part of programming</span> is
          the fact that we can build products that assist people without the
          need of capital, your only limitations are time and your imagination.
          I <span className="underline">love</span> the feeling of building
          things and seeing the fleshed out product at the end. My core stack is{" "}
          <span className="font-medium">
            React, Next.js, Golang, and SQLite
          </span>
          . I am also familiar with TypeScript and C++. I am always looking to
          learn new technologies. I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a software
          developer.
        </p>

        <p>
          <span className="italic">When I'm not coding</span>, I enjoy playing
          video games, reading novels, and hanging out with my friends. I also
          enjoy{" "}
          <span className="font-medium">
            learning new things and tinkering with Electronics
          </span>
        </p>
      </div>
    </motion.section>
  );
}

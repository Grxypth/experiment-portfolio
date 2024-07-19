import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  /*{
    name: "Projects",
    hash: "#projects",
  },
  */
  /*{
    name: "Experience",
    hash: "#experience",
  },
  */
  {
    name: "Contact",
    hash: "#contact",
  },
  
] as const;

export const experiencesData = [
  {
    title: "",
    location: "",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "",
  },
  {
    title: "",
    location: "",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "",
  },
] as const;

export const projectsData = [
  {
    title: "",
    description:
      "",
    tags: [""],
    imageUrl: corpcommentImg,
  },
  {
    title: "",
    description:
      "",
    tags: [""],
    imageUrl: rmtdevImg,
  },
  {
    title: "",
    description:
      "",
    tags: [""],
    imageUrl: wordanalyticsImg,
  },
] as const;


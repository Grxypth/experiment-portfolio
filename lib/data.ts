import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import{useTranslations} from "next-intl";


export const links = [
  {
    name: "homeLink",
    hash: "#home",
  },
  {
    name: "aboutLink",
    hash: "#about",
  },
  {
    name: "skillsLink",
    hash: "#skills",
  },
  {
    name: "contactLink",
    hash: "#contact",
  },
  
] as const;



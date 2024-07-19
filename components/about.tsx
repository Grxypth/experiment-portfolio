"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("aboutLink");
  const t = useTranslations();

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
        <SectionHeading>{t("about")}</SectionHeading>
        <p className="mb-3">
          {t("graduate")} <span className="font-medium">{t("degree")}</span>
          {t("passion")} <span className="font-medium">{t("certificate")}</span>
          <span className="italic">{t("programming")}</span> {t("enjoy")}
          <span className="underline">{t("love")}</span> {t("wlove")}{" "}
          <span className="font-medium">
            React, Next.js, Golang, and SQLite.
          </span>
          {t("looking")} <span className="font-medium">{t("position")}</span>
        </p>

        <p>
          <span className="italic">{t("empty")}</span>
          {t("hobbies")} <span className="font-medium">{t("hobbies2")}</span>
        </p>
      </div>
    </motion.section>
  );
}

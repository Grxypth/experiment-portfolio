"use client";

import React from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentLocale = useLocale();

  const handleLocaleChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}`);
    });
  };

  const isCurrentLocale = (locale: string) => currentLocale === locale;

  return (
    <div className=" space-x-3 p-1 bg-white border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <button
        onClick={() => handleLocaleChange("tr")}
        disabled={isPending}
        className={`px-3 py-1 text-xs font-medium ${
          isCurrentLocale("tr")
            ? "text-gray-900 dark:text-gray-100"
            : "text-gray-600 dark:text-gray-400"
        }`}
        aria-label="Switch to Turkish"
      >
        TR
      </button>
      <span className="text-gray-500 dark:text-gray-400">|</span>
      <button
        onClick={() => handleLocaleChange("en")}
        disabled={isPending}
        className={`px-3 py-1 text-xs font-medium ${
          isCurrentLocale("en")
            ? "text-gray-900 dark:text-gray-100"
            : "text-gray-600 dark:text-gray-400"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}

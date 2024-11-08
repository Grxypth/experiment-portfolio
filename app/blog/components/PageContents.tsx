import React from "react";
import { slugify } from "@/lib/helpers";

const PageContents = ({ headings }: any) => (
  <div className="max-w-2xl mx-auto mt-8  text-left border rounded-sm dark:border-purple-950 ">
    <h2 className="text-xl text-center font-bold p-2 mb-5 border-b dark:border-purple-950 bg:amber-50 dark:bg-slate-900/20">
      İçerik
    </h2>
    <nav>
    <ul className="ps-5">
        {headings?.map((heading: any) => (
          <li key={heading?._key} className="my-4 list-disc">
            <a
              className="hover:underline"
              href={`#${slugify(heading.children[0].text)}`}
            >
              {heading.children[0].text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default PageContents;
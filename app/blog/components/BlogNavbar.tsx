import Link from "next/link";
import React from "react";

function BlogNavbar() {
  return (
    <div className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-3xl">
        Ihsan<span className="text-primary">Erdem</span>
      </Link>
    </div>
  );
}

export default BlogNavbar;
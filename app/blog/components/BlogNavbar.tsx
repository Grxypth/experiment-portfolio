import Link from "next/link";
import React from "react";

function BlogNavbar() {
  return (
    <div className="w-full relative flex items-center justify-center max-w-2xl mx-auto  py-5">
      <Link href="/" className="font-bold text-3xl">
        Ihsan<span className="text-primary">Erdem</span>
      </Link>
    </div>
  );
}

export default BlogNavbar;
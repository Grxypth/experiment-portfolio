import "./blogpage.css";
import BlogNavbar from "./components/BlogNavbar";
import BlogFooter from "./components/BlogFooter";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: 'İhsan | Blog',
  description: 'İhsan is a new graduate Full-Stack Software Engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  <body className={inter.className}>
          <BlogNavbar />
          <main className="max-w-3xl mx-auto px-4">{children}</main>
          <BlogFooter />
      </body>    
      </html>
  )
}

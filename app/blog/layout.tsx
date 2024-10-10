import "./blogpage.css";
import BlogNavbar from "./components/BlogNavbar";
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
          <main className="max-w-2xl mx-auto px-4">{children}</main>
      </body>    
      </html>
  )
}

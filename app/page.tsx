import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
//import Skills from "@/components/skills2";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Skills />
    </main>
  );
}

import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function Home() {
  const messages = await getMessages();

  return (
    <main className="flex flex-col items-center px-4">
      <NextIntlClientProvider messages={messages}>
        <Intro />
        <About />
        <Skills />
        <Contact />
      </NextIntlClientProvider>
    </main>
  );
}

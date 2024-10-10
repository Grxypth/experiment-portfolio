import Header from "@/components/header";
import "../globals.css";
import { Raleway } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "İhsan | Portfolio",
  description: "İhsan is a new graduate Full-Stack Software Engineer.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${raleway.className} bg-[#ecf0f3] text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <NextIntlClientProvider messages={messages}>
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

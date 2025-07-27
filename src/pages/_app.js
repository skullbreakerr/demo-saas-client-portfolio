import "@/styles/globals.css";
import { Inter, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

import {
  Header,
  Footer
} from "#/sections";
import {
  header,
  footer,
} from "@/data";
const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <main
        className={`${display.variable} ${body.variable} flex min-h-screen flex-col font-body text-base-600 dark:text-base-500 bg-base-50 dark:bg-base-950`}
      >
        <Header
          logo={header.logo}
          links={header.links}
          buttons={header.buttons}
        />
        <Component {...pageProps} />
        <Footer
          id="footer"
          copyright={footer.copyright}
          logo={footer.logo}
          social={footer.social}
          links={footer.links}
        />      </main>
    </ThemeProvider>
  );
}

import { AppProps } from "next/app";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SmoothScrollProvider>
        <Navbar />
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </SmoothScrollProvider>
    </>
  );
};

export default App;

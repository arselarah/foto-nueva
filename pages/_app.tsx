import { AppProps } from "next/app";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;

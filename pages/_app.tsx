import { AppProps } from "next/app";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;

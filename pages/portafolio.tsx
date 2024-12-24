import React from "react";
import Page from "@/components/page";
import { motion } from "framer-motion";
import { Cinzel, Outfit, Playfair_Display } from "next/font/google";
import MasonryHome from "@/components/MasonryHome";

const outfit = Outfit({
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

export default function portafolio() {
  return (
    <>
      <Page>
        <motion.section
          className="hero relative w-full min-h-[500px] h-[50svh] overflow-hidden flex justify-center items-center border-b-[1px] border-stone-400 bg-[#f6f6f2] z-[1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-transparent opacity-25 z-[9]" />
          {/* Contenido Fijo (Título) */}
          <motion.div
            className="absolute bottom-[5rem] z-[9] text-black w-fit"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <h1
              className={`text-clamp-titles-innerpage mt-4 text-nowrap text-center ${playfairDisplay.className} font-light`}
            >
              Portafolio
            </h1>
          </motion.div>
        </motion.section>
        <section>
          <MasonryHome />
        </section>
      </Page>
    </>
  );
}

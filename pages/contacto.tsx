import React from "react";
import { motion } from "framer-motion";
import Page from "@/components/page";
import { Cinzel, Outfit, Playfair_Display } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

export default function Contacto() {
  return (
    <>
      <Page>
        <motion.section
          className="hero relative w-full min-h-[500px] h-[50svh] overflow-hidden bg-negro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-black opacity-25 z-[9]" />
          {/* Contenido Fijo (Título) */}
          <motion.div
            className="absolute bottom-8 z-[9] text-white w-full"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <h1
              className={`text-clamp-titles-innerpage mt-4 text-nowrap text-center ${cinzel.className} font-light uppercase tracking-[.5rem]`}
            >
              Contacto
            </h1>
          </motion.div>
        </motion.section>
      </Page>
    </>
  );
}

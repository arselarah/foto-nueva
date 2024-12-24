import React from "react";
import { Historia as HistoriaType, historia } from "../data/historias";
import Page from "@/components/page";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cinzel, Outfit, Playfair_Display } from "next/font/google";
import Link from "next/link";

const outfit = Outfit({
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

export default function historias() {
  return (
    <>
      <Page>
        <motion.section
          className="hero relative w-full min-h-[500px] h-[50svh] overflow-hidden flex justify-center items-center bg-[#f6f6f2] z-[1]"
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
              Historias
            </h1>
          </motion.div>
        </motion.section>

        <section className=" relative  ">
          <article className=" w-full h-auto grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 xl:max-w-[100rem] mx-auto px-6 xl:px-20 py-[5rem] xl:py-[10rem] gap-40">
            {historia.map((historia) => (
              <div
                key={historia.id}
                className="relative w-full flex flex-col items-center gap-4"
              >
                <div className="portada relative w-full aspect-2/3">
                  <Image
                    src={historia.imageUrl}
                    alt={historia.title}
                    fill
                    className="object-cover "
                  />
                </div>
                <div className="titulos relative w-full text-center">
                  <h3>{historia.title}</h3>
                </div>
                <Link
                  className="absolute inset-0"
                  href={`/historias/${historia.url}`}
                />
              </div>
            ))}
          </article>
        </section>
      </Page>
    </>
  );
}

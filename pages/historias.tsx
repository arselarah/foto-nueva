import React, { useState } from "react";
import { HistoriaAll as HistoriaType, historiaAll } from "../data/historiasAll";
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
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Page>
        <motion.section
          className="hero relative w-full min-h-[350px] h-[25svh] overflow-hidden flex justify-center items-center bg-[#f6f6f2] z-[1]"
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
          <article className=" w-full h-auto grid grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 pt-[5rem] md:pt-[10rem] pb-[2rem] md:pb-[5rem] gap-0">
            {historiaAll.map((historiaAll) => (
              <div
                key={historiaAll.id}
                className="relative w-full flex flex-col items-center gap-4 group overflow-hidden"
              >
                <div
                  // className={`portada relative w-full aspect-2/3 bg-center transition-all duration-1000 `}
                  className="portada relative w-full aspect-2/3 bg-center"
                  // style={{ backgroundImage: `url(${historia.imageUrl})` }}
                  // style={{
                  //   backgroundImage: `url(${hovered ? historia.imageUrl2 : historia.imageUrl})`,
                  // }}
                  // onMouseEnter={() => setHovered(true)}
                  // onMouseLeave={() => setHovered(false)}
                >
                  <Image
                    src={historiaAll.imageUrl}
                    alt={historiaAll.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                <Link
                  className="absolute inset-0 opacity-0 hover:opacity-100 bg-center bg-cover transition-all duration-700"
                  href={`/historias/${historiaAll.url}`}
                  style={{ backgroundImage: `url(${historiaAll.imageUrl2})` }}
                />
                <div className="titulos absolute bottom-8 w-full text-center mix-blend-difference pointer-events-none opacity-0 group-hover:opacity-100 group-hover:-translate-y-14 transition-all duration-700">
                  <h3 className="text-white text-clamp-titles">
                    {historiaAll.title}
                  </h3>
                </div>
              </div>
            ))}
          </article>
        </section>
      </Page>
    </>
  );
}

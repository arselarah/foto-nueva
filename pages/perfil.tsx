import Page from "@/components/page";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cinzel, Outfit, Playfair_Display } from "next/font/google";
import { useRef } from "react";
import { projects } from "@/data";
import Card from "@/components/Card";
//import Image from "next/image";

const outfit = Outfit({
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

export default function Perfil() {
  const container = useRef(null);
  const containerBridge = useRef(null);
  const containerHero = useRef(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: containerBridge,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress2, [0, 1], ["0%", "100%"]);

  const { scrollYProgress: scrollYProgressHero } = useScroll({
    target: containerHero,
    offset: ["start end", "start start"],
  });

  const backgroundYHero = useTransform(
    scrollYProgressHero,
    [0, 1],
    ["0%", "100%"]
  );
  // const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <Page>
      <motion.section
        className='hero relative w-full min-h-[500px] h-svh overflow-hidden bg-[url("/assets/me.jpg")] bg-cover bg-no-repeat'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ backgroundPositionY: backgroundYHero }}
      >
        <div className="absolute inset-0 bg-black opacity-25 z-[9]" />
        {/* Contenido Fijo (Título) */}
        <motion.div
          className="absolute bottom-[5rem] z-[9] text-white w-[90%] xl:w-fit left-1/2 -translate-x-1/2 xl:left-20 xl:-translate-x-0"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className={`text-clamp-titles-innerpage mt-4 text-nowrap text-center ${playfairDisplay.className} font-light`}
          >
            Arse Lara
          </h1>
          <div className="relative w-[full flex flex-row justify-around mx-auto">
            {["F", "O", "T", "O", "G", "R", "A", "F", "Í", "A"].map(
              (text, idx) => (
                <p
                  key={idx}
                  className={`${playfairDisplay.className} text-clamp-Subtitles-innerpage font-thin tracking-[] text-center`}
                >
                  {text}
                </p>
              )
            )}
            {/* <p >FOTOGRAFÍA</p> */}
          </div>
        </motion.div>
      </motion.section>
      <section ref={containerHero}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`
              text-clamp-titles-lg
              text-black
              text-center
              px-6 md:px-20
              pt-[5rem] md:pt-[10rem]
              pb-[2rem] md:pb-[5rem]
              mx-auto
              max-w-[1280px]
              ${playfairDisplay.className}
            `}
          >
            Hola, soy Arsenio Lara, fotógrafo mexicano
          </motion.h2>
        </div>
      </section>
      <article
        className="relative px-6 md:px-20
              pt-[5rem] md:pt-[10rem]
              pb-[2rem] md:pb-[5rem] max-w-[1920px] mx-auto"
      >
        <div
          className={`${outfit.className} font-extralight relative mx-auto 2xl:mx-0 2xl:sticky 2xl:top-1/2 2xl:-translate-y-1/2 max-w-[40rem] 2xl:pr-16 2xl:mt-[30vw] 2xl:mb-[11vw]`}
          // style={{ opacity: scrollYProgress }}
        >
          <p
            className="
              text-clamp-text-home
              text-gray-600
              leading-relaxed
              mb-4
            "
          >
            Licenciado en Administración de Empresas, diseñador y programador
            web de medio tiempo. Algo de documentalista, fotógrafo de retratos,
            bodas y otros eventos.
          </p>
          <p
            className="
              text-clamp-text-home
              text-gray-600
              leading-relaxed
              mb-4
              xl:max-w-[640px]
            "
          >
            Pero sobre todo me gusta mirar a los ojos a quien estoy
            fotografiando y sentir que puedo conocer más de la persona que tengo
            frente a mí.
          </p>
          <p
            className="
              text-clamp-text-home
              text-gray-600
              leading-relaxed
              xl:max-w-[640px]
            "
          >
            La historia que está detrás de tus fotografías...
          </p>
        </div>
        <main className="relative">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={i}
                i={i}
                {...project}
                progress={scrollYProgress1}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </main>
      </article>
      <motion.article
        ref={containerBridge}
        className="puente perfil
          relative
          w-full
          aspect-square md:aspect-video
          
          bg-no-repeat
          bg-cover
          bg-negro
          overflow-hidden
          
        "
        style={{ backgroundPositionY: backgroundY }}
      >
        {/* <motion.div className="w-full h-full">
          <Image
            src={"/assets/home/marlen-rafa-12.webp"}
            fill
            alt={"imagen top"}
            className="object-cover w-full h-full"
          />
        </motion.div> */}
        <div
          className="
          absolute
          inset-0
          top-0
          left-0
          bg-negro/55
          "
        ></div>
      </motion.article>
    </Page>
  );
}

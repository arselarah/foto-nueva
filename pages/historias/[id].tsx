import { useRef } from "react";
import { useRouter } from "next/router";
import {
  HistoriaAll as HistoriaType,
  historiaAll,
} from "../../data/historiasAll"; // Importa los datos de 'data/historias.ts'
import { GetStaticPaths, GetStaticProps } from "next";
import Page from "@/components/page";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { Outfit, Playfair_Display } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

type HistoriaProps = {
  historiaAll: HistoriaType | null; // Historia o null si no se encuentra
};

const HistoriaPage = ({ historiaAll }: HistoriaProps) => {
  const router = useRouter();

  // Si la página no tiene la historia correspondiente, mostramos un mensaje
  if (!historiaAll) {
    return <div>Historia no encontrada</div>;
  }

  const container = useRef(null);
  const { scrollYProgress: scrollYProgressHero } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const titles = useTransform(scrollYProgressHero, [0, 1], ["0%", "10%"]);

  const carruselRef = useRef(null);
  const { scrollYProgress: scrollCarrusel } = useScroll({
    target: carruselRef,
  });
  const x = useTransform(scrollCarrusel, [0, 1], ["0%", "-75%"]);

  const positionRef = useRef(null);
  const { scrollYProgress: scrollPositioning } = useScroll({
    target: positionRef,
    offset: ["start end", "end start"],
  });

  const positionChanger = useTransform(
    scrollPositioning,
    [0, 1],
    ["0%", "-10%"]
  );

  // const positionChanger2 = useTransform(
  //   scrollPositioning,
  //   [0, 1],
  //   ["0%", "5%"]
  // );

  const positionChanger3 = useTransform(
    scrollPositioning,
    [0, 1],
    ["0%", "10%"]
  );

  // const positionLetters = useTransform(scrollCarrusel, [0, 1], ["-25%", "55%"]);

  const scaleRange = (
    range: [string, string],
    factor: number
  ): [string, string] => {
    return range.map((value) => {
      const numericValue = parseFloat(value); // Convertir a número
      if (isNaN(numericValue)) {
        throw new Error(`El valor '${value}' no es un porcentaje válido.`);
      }
      return `${numericValue * factor}%`; // Multiplicar y volver a cadena con "%"
    }) as [string, string]; // Asegurar que el resultado sea del tipo [string, string]
  };

  const scaledRange: [string, string] = scaleRange(["-55%", "55%"], 0.25);

  const positionLetters = useTransform(scrollCarrusel, [0, 1], scaledRange);

  return (
    <>
      <Page>
        <header
          ref={container}
          className="relative w-full min-h-screen aspect-landscape overflow-hidden scroll-smooth"
        >
          <motion.div
            className="relative w-full h-full origin-bottom"
            initial={{
              scale: 1.05,
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            animate={{
              scale: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <Image
              src={historiaAll.imageUrl}
              alt={historiaAll.title}
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div className="absolute w-full bottom-[10%] text-center bg-transparent">
            <motion.div
              style={{ marginBottom: titles, mixBlendMode: "difference" }}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-clamp-titles-lg text-white">
                {historiaAll.title}
              </h1>
              {/* <p className="text-clamp-text-home-lg text-white mix-blend-difference">
                {historiaAll.shortText}
              </p> */}
            </motion.div>
          </motion.div>
        </header>
        <section>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`text-clamp-text-home-lg text-black text-center px-6 md:px-20 pt-[5rem] md:pt-[10rem] pb-[2rem] md:pb-[5rem] mx-auto max-w-[1920px] font-extralight ${outfit.className}`}
            >
              {historiaAll.shortText}
            </motion.h2>
          </div>
        </section>
        <section
          ref={positionRef}
          className={`relative px-6 md:px-20 pt-[5rem] md:pt-[10rem] pb-[2rem] md:pb-[5rem]`}
        >
          <div className="relative flex flex-nowrap gap-8 flex-col xl:flex-row w-full">
            <motion.div
              style={{ marginTop: positionChanger }}
              className="relative"
            >
              <Image
                src={historiaAll.imageUrl2}
                alt={`${historiaAll.title} 2`}
                width={1080}
                height={1920}
                className="aspect-2/3 object-cover relative"
              />
            </motion.div>
            <motion.div
              // style={{ marginTop: positionChanger2 }}
              className="relative "
            >
              <Image
                src={historiaAll.imageUrl3}
                alt={`${historiaAll.title} 3`}
                width={1080}
                height={1920}
                className="aspect-2/3 object-cover relative"
              />
            </motion.div>
            <motion.div
              style={{ marginTop: positionChanger3 }}
              className="relative "
            >
              <Image
                src={historiaAll.imageUrl4}
                alt={`${historiaAll.title} 4`}
                width={1080}
                height={1920}
                className="aspect-2/3 object-cover relative"
              />
            </motion.div>
          </div>
        </section>
        <section
          className="carrusel h-[300dvh] scroll-smooth will-change-auto snap-x snap-mandatory "
          ref={carruselRef}
        >
          <div className="contenedor h-[100dvh] sticky top-0 flex justify-start overflow-hidden">
            <motion.div
              className="imagenes relative grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr]"
              style={{ x }}
            >
              <div className="imagenItem flex justify-center items-center relative  snap-center">
                <Image
                  src={historiaAll.imageUrl5}
                  alt={`${historiaAll.title} 5`}
                  width={1920}
                  height={1080}
                  // fill
                  className=" object-cover max-w-[80%] aspect-landscape"
                />
              </div>
              <div className="imagenItem flex justify-center items-center relative  snap-center">
                <Image
                  src={historiaAll.imageUrl6}
                  alt={`${historiaAll.title} 6`}
                  width={1920}
                  height={1080}
                  // fill
                  className=" object-cover max-w-[80%] aspect-landscape"
                />
              </div>
              <div className="imagenItem flex justify-center items-center relative  snap-center">
                <Image
                  src={historiaAll.imageUrl7}
                  alt={`${historiaAll.title} 7`}
                  width={1920}
                  height={1080}
                  // fill
                  className=" object-cover max-w-[80%] aspect-landscape"
                />
              </div>
              <div className="imagenItem flex justify-center items-center relative  snap-center">
                <Image
                  src={historiaAll.imageUrl8}
                  alt={`${historiaAll.title} 8`}
                  width={1920}
                  height={1080}
                  // fill
                  className=" object-cover max-w-[80%] aspect-landscape"
                />
              </div>
            </motion.div>
            <div className="fixed w-full h-full inset-0 top-0 left-0 flex justify-start items-end mix-blend-difference">
              <motion.span
                className={`${playfairDisplay.className} text-clamp-xl text-negro z-10 opacity-10 leading-[1] text-nowrap inline`}
                style={{ marginLeft: positionLetters }}
              >
                {historiaAll.title}
              </motion.span>
            </div>
          </div>
        </section>
        <section
          className={`relative px-6 md:px-20 pt-[5rem] md:pt-[10rem] pb-[10%] `}
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-8">
            <div className="relative col-start-1 col-span-1 row-span-2">
              <Image
                src={historiaAll.imageUrl9}
                alt={`${historiaAll.title} 9`}
                width={1920}
                height={1080}
                // fill
                className=" object-cover aspect-2/3"
              />
            </div>
            <div className="relative row-start-3 lg:row-start-1 lg:col-start-2 row-span-1">
              <Image
                src={historiaAll.imageUrl10}
                alt={`${historiaAll.title} 10`}
                // width={1920}
                // height={1080}
                fill
                className=" object-cover aspect-landscape"
              />
            </div>
            <div className="relative row-start-4 lg:row-start-2 row-span-1 lg:col-start-2">
              <Image
                src={historiaAll.imageUrl11}
                alt={`${historiaAll.title} 11`}
                // width={1920}
                // height={1080}
                fill
                className=" object-cover aspect-landscape"
              />
            </div>
          </div>
        </section>
      </Page>
    </>
  );
};

// `getStaticPaths` para generar rutas estáticas para todas las historiaAlls
export const getStaticPaths: GetStaticPaths = async () => {
  // Creamos los paths usando el campo `url` de los objetos de `historiaAll`
  const paths = historiaAll.map((h) => ({
    params: { id: h.url }, // Usamos el campo `url` como parámetro dinámico
  }));

  return {
    paths,
    fallback: false, // Usamos `fallback: false` para no permitir rutas dinámicas
  };
};

// `getStaticProps` para obtener los datos de la historiaAll según el id
export const getStaticProps: GetStaticProps<
  HistoriaProps,
  { id: string }
> = async ({ params }) => {
  // Buscamos la historia usando el `id` que corresponde con el `url` de las historias
  const historiaSeleccionada =
    historiaAll.find((h) => h.url === params?.id) || null;

  return {
    props: {
      historiaAll: historiaSeleccionada, // Pasamos la historia encontrada como prop
    },
  };
};

export default HistoriaPage;

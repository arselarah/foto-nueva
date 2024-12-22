import { useRef } from "react";
import { useRouter } from "next/router";
import { Historia as HistoriaType, historia } from "../../data/historias"; // Importa los datos de 'data/historias.ts'
import { GetStaticPaths, GetStaticProps } from "next";
import Page from "@/components/page";
import Image from "next/image";
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
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

type HistoriaProps = {
  historia: HistoriaType | null; // Historia o null si no se encuentra
};

const HistoriaPage = ({ historia }: HistoriaProps) => {
  const router = useRouter();

  // Si la página no tiene la historia correspondiente, mostramos un mensaje
  if (!historia) {
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
              src={historia.imageUrl}
              alt={historia.title}
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
                {historia.title}
              </h1>
              {/* <p className="text-clamp-text-home-lg text-white mix-blend-difference">
                {historia.shortText}
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
              {historia.shortText}
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
                src={historia.imageUrl2}
                alt={`${historia.title} 2`}
                width={1080}
                height={1920}
                className="aspect-2/3 object-cover relative"
              />
            </motion.div>
            <motion.div
              // style={{ marginTop: positionChanger2 }}
              className="relative"
            >
              <Image
                src={historia.imageUrl3}
                alt={`${historia.title} 3`}
                width={1080}
                height={1920}
                className="aspect-2/3 object-cover relative"
              />
            </motion.div>
            <motion.div
              style={{ marginTop: positionChanger3 }}
              className="relative"
            >
              <Image
                src={historia.imageUrl4}
                alt={`${historia.title} 4`}
                width={1080}
                height={1920}
                className="aspect-2/3 object-cover relative"
              />
            </motion.div>
          </div>
        </section>
        <section
          className="carrusel h-[500dvh] scroll-smooth will-change-auto snap-x snap-mandatory "
          ref={carruselRef}
        >
          <div className="contenedor h-[100dvh] sticky top-0 flex justify-start overflow-hidden">
            <motion.div
              className="imagenes relative grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr]"
              style={{ x }}
            >
              <div className="imagenItem flex justify-center items-center relative  snap-center">
                <Image
                  src={historia.imageUrl5}
                  alt={`${historia.title} 5`}
                  width={1920}
                  height={1080}
                  // fill
                  className=" object-cover max-w-[80%] aspect-landscape"
                />
              </div>
              <div className="imagenItem flex justify-center items-center relative  snap-center">
                <Image
                  src={historia.imageUrl6}
                  alt={`${historia.title} 6`}
                  width={1920}
                  height={1080}
                  // fill
                  className=" object-cover max-w-[80%] aspect-landscape"
                />
              </div>
              <div className="imagenItem flex justify-center items-center relative  snap-center">
                <Image
                  src={historia.imageUrl7}
                  alt={`${historia.title} 7`}
                  width={1920}
                  height={1080}
                  // fill
                  className=" object-cover max-w-[80%] aspect-landscape"
                />
              </div>
              <div className="imagenItem flex justify-center items-center relative  snap-center">
                <Image
                  src={historia.imageUrl8}
                  alt={`${historia.title} 8`}
                  width={1920}
                  height={1080}
                  // fill
                  className=" object-cover max-w-[80%] aspect-landscape"
                />
              </div>
            </motion.div>
          </div>
        </section>
        <section
          className={`relative px-6 md:px-20 pt-[5rem] md:pt-[10rem] pb-[10%] `}
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-8">
            <div className="relative col-start-1 col-span-1 row-span-2">
              <Image
                src={historia.imageUrl9}
                alt={`${historia.title} 9`}
                width={1920}
                height={1080}
                // fill
                className=" object-cover aspect-2/3"
              />
            </div>
            <div className="relative row-start-3 lg:row-start-1 lg:col-start-2 row-span-1">
              <Image
                src={historia.imageUrl10}
                alt={`${historia.title} 10`}
                // width={1920}
                // height={1080}
                fill
                className=" object-cover aspect-landscape"
              />
            </div>
            <div className="relative row-start-4 lg:row-start-2 row-span-1 lg:col-start-2">
              <Image
                src={historia.imageUrl11}
                alt={`${historia.title} 11`}
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

// `getStaticPaths` para generar rutas estáticas para todas las historias
export const getStaticPaths: GetStaticPaths = async () => {
  // Creamos los paths usando el campo `url` de los objetos de `historia`
  const paths = historia.map((h) => ({
    params: { id: h.url }, // Usamos el campo `url` como parámetro dinámico
  }));

  return {
    paths,
    fallback: false, // Usamos `fallback: false` para no permitir rutas dinámicas
  };
};

// `getStaticProps` para obtener los datos de la historia según el id
export const getStaticProps: GetStaticProps<
  HistoriaProps,
  { id: string }
> = async ({ params }) => {
  // Buscamos la historia usando el `id` que corresponde con el `url` de las historias
  const historiaSeleccionada =
    historia.find((h) => h.url === params?.id) || null;

  return {
    props: {
      historia: historiaSeleccionada, // Pasamos la historia encontrada como prop
    },
  };
};

export default HistoriaPage;

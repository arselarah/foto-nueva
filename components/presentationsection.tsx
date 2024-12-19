import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { Outfit, Playfair_Display } from "next/font/google";
import MasonryHome from "./MasonryHome";
import HorizontalScroll from "./HorizontalScroll";
import { historia, Historia } from "@/data/historias";

const outfit = Outfit({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

const images: string[] = [
  "/assets/slider_home/foto_1.webp",
  "/assets/slider_home/foto_3.webp",
  "/assets/slider_home/foto_4.webp",
  "/assets/slider_home/foto_6.webp",
];

// const historias: string[] = [
//   "/Ana&Pepe",
//   "/assets/slider_home/foto_2.webp",
//   "/assets/slider_home/foto_3.webp",
//   "/assets/slider_home/foto_4.webp",
//   "/assets/slider_home/foto_5.webp",
//   "/assets/slider_home/foto_6.webp",
// ];

const PresentationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState("rgb(255, 255, 255)"); // Color inicial
  const changeColorRef = useRef<HTMLDivElement>(null); // Ref al div de cambio de color

  // Cambia al siguiente slide automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  // Función para manejar el cambio de color del fondo
  useEffect(() => {
    const handleScroll = () => {
      if (!changeColorRef.current) return;

      const { top, height } = changeColorRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculamos el porcentaje de visibilidad del elemento en el viewport
      const visibility = Math.min(
        Math.max((viewportHeight - top) / (0.125 * height), 0),
        1
      );

      // Interpolamos entre blanco y rgb(35, 35, 35) según la visibilidad
      const colorValue = Math.round(255 - visibility * (255 - 35));
      setBgColor(`rgb(${colorValue}, ${colorValue}, ${colorValue})`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerBridge = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: containerBridge,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress2, [0, 1], ["-50%", "100%"]);

  return (
    <>
      <section
        className="
      relative
      w-full
      min-h-[800px]
      h-auto
      flex
      flex-col xl:flex-row
      xl:max-w-[100rem]
      mx-auto
      px-6 xl:px-20 py-[5rem] xl:py-[10rem]
      justify-center
      items-center
      gap-40
    "
      >
        {/* Texto a la izquierda (30%) */}
        <div
          className="
        w-full xl:w-[50%]
        flex
        flex-col
        justify-center
      "
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }} // Estado inicial
            whileInView={{ opacity: 1, y: 0 }} // Cuando entra al viewport
            viewport={{ once: true, amount: 1 }} // Configuración del viewport
            transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de transición
            className={`
          text-clamp-titles-lg
          text-black
          leading-relaxed
          mb-4
          xl:max-w-[640px]
          ${playfairDisplay.className}
        `}
          >
            Las grandes historias son contadas de la mejor manera
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Estado inicial
            whileInView={{ opacity: 1, y: 0 }} // Cuando entra al viewport
            viewport={{ once: true, amount: 1 }} // Configuración del viewport
            transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de transición
            className={`${outfit.className} font-extralight`}
          >
            <p
              className="
              text-clamp-text-home
              text-gray-600
              leading-relaxed
              mb-4
              xl:max-w-[640px]
            "
            >
              La fotografía de boda no solo captura imágenes, sino emociones,
              miradas y detalles que cuentan la historia de uno de los días más
              importantes de tu vida. Cada foto revive la alegría, la conexión y
              los momentos únicos que perduran más allá del tiempo, para que
              siempre puedas volver a sentir ese día especial.
            </p>
            <p
              className="
              text-clamp-text-home
              text-gray-600
              leading-relaxed
              xl:max-w-[640px]
            "
            >
              Imágenes que resisten el paso del tiempo y vivirán para siempre...
            </p>
          </motion.div>
        </div>

        {/* Slider a la derecha (70%) */}
        <div
          className="
        relative
        w-full xl:w-[50%]
        flex
        justify-center
        max-h-[960px]
      "
        >
          <motion.div
            initial={{
              clipPath: "polygon(0 80%, 100% 80%, 100% 100%, 0% 100%)",
            }} // Estado inicial
            whileInView={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }} // Cuando entra al viewport
            transition={{ duration: 1, ease: "easeOut" }} // Duración y tipo de transición
            viewport={{ once: true }} // Configuración del viewport
            className="
          relative
          w-full xl:max-w-[640px]
          aspect-[2/3]
        "
          >
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="
            absolute
            w-full
            aspect-[2/3]
            overflow-hidden
            "
              >
                {/* <Link href={`/historias${historias[currentIndex]}`}> */}
                <Image
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  fill
                  className="
              relative
              inset-0
              w-full
              h-full
              object-cover
              hover:scale-105
              transition
              duration-700
              ease-in-out"
                  priority
                />
                {/* </Link> */}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <section
        id="change_color"
        ref={changeColorRef}
        className="
        relative
        w-full
        h-auto md:h-full
        scroll-section-outer
        "
        style={{ backgroundColor: bgColor }}
      >
        <HorizontalScroll />
        <MasonryHome />
      </section>
      <section>
        <article
          className="
          px-6 xl:px-20 pb-[5rem] xl:pb-[10rem]
        "
        >
          <div>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 50 }} // Estado inicial
                whileInView={{ opacity: 1, y: 0 }} // Cuando entra al viewport
                viewport={{ once: true, amount: 1 }} // Configuración del viewport
                transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de transición
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
                No dudes en comunicarte conmigo
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }} // Estado inicial
                whileInView={{ opacity: 1, y: 0 }} // Cuando entra al viewport
                viewport={{ once: true, amount: 1 }} // Configuración del viewport
                transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de transición
                className={`
            text-clamp-text-home-lg
            text-gray-600
            leading-relaxed
            mb-4
            xl:max-w-[640px]
            text-center
            mx-auto
            ${outfit.className}
            font-extralight
            `}
              >
                Ahora que me conoces un poco más y viste algo de lo que hago; me
                gustaría saber si puedo ayudarte.
              </motion.p>
            </div>
          </div>
        </article>
        {/* <motion.article
          ref={containerBridge}
          className="puente presentacion
          relative
          w-full
          aspect-square md:aspect-video
          bg-center
          bg-no-repeat
          bg-cover
          bg-negro
        "
          style={{ backgroundPositionY: backgroundY }}
        >
          <div
            className="
          absolute
          inset-0
          top-0
          left-0
          bg-negro/55
          "
          >
          </div>
        </motion.article> */}
      </section>
    </>
  );
};

export default PresentationSection;

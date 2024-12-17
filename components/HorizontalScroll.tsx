import { useState, useEffect, useRef, use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Outfit, Playfair_Display } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

type Article = {
  id: number; // Número de identificación único
  title: string; // Título del artículo
  shortText: string; // Texto breve
  imageUrl: string; // URL de la imagen
};

// Definir el array usando el tipo `Article`
const articles: Article[] = [
  {
    id: 1,
    title: "Ana & Pepe",
    shortText:
      '"Podrán cortar todas las flores, pero no podrán detener la primavera".',
    imageUrl: "/assets/home/ana-pepe-21.webp", // URL de la imagen
  },
  {
    id: 2,
    title: "Francisco & Mariana",
    shortText:
      '"Creo que lo bello no es una sustancia en sí sino tan sólo un dibujo de sombras, un juego de claroscuros producido por yuxtaposición de diferentes sustancias".',
    imageUrl: "/assets/home/mariana-francisco-2.webp", // URL de la imagen
  },
  {
    id: 3,
    title: "Naima & Julio",
    shortText: "“Estar contigo o no estar contigo es la medida de mi tiempo”.",
    imageUrl: "/assets/home/foto_5.webp",
  },
  {
    id: 4,
    title: "Marlen & Rafa",
    shortText:
      "“La fotografía toma un instante fuera del tiempo, alterando la vida manteniéndola quieta”.",
    imageUrl: "/assets/home/marlen-rafa-12.webp",
  },
  // Puedes agregar más artículos aquí
];

function HorizontalScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1080); // Cambia el umbral según el tamaño que definas como "móvil"
    };

    handleResize(); // Ejecuta la detección al cargar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Configuración de GSAP solo para escritorio
  useEffect(() => {
    if (!isMobile) {
      gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "power1.inOut",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "7000 top",
            scrub: 1,
            pin: true,
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [isMobile]); // Este efecto depende de si es móvil o no

  return (
    <>
      <article className="slider-horizontal_cabecera">
        <motion.h2
          initial={{ opacity: 0, y: 50 }} // Estado inicial
          whileInView={{ opacity: 1, y: 0 }} // Cuando entra al viewport
          viewport={{ once: true, amount: 1 }} // Configuración del viewport
          transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de transición
          className={`text-clamp-titles-lg text-white px-6 xl:px-20 py-[5rem] xl:py-[10rem] ${playfairDisplay.className} `}
        >
          Así inician
          <br /> las grandes historias
        </motion.h2>
      </article>

      <article className=" scroll-section-outer overflow-hidden">
        <div ref={triggerRef} className=" relative px-6 xl:px-20 triggerRef ">
          <div
            ref={sectionRef}
            className=" scroll-section-inner relative lgx:h-[100vh] lgx:w-[400vw] flex  flex-col lgx:flex-row gap-6 snap-both snap-mandatory "
          >
            {articles.map((article) => (
              <div
                key={article.id}
                className=" scroll-section relative lgx:h-[100%] lgx:w-[100vw] flex flex-col lgx:flex-row justify-center items-center gap-10 snap-start"
              >
                <div className=" relative flex flex-1 flex-col lgx:flex-row lg:gap-8 w-full h-[90%] items-center">
                  <motion.div
                    initial={{
                      opacity: 0,
                      clipPath: "polygon(0 80%, 100% 80%, 100% 100%, 0% 100%)",
                    }} // Estado inicial
                    whileInView={{
                      opacity: 1,
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    }} // Cuando entra al viewport
                    transition={{ duration: 1, ease: "easeOut" }} // Duración y tipo de transición
                    viewport={{ once: true }} // Configuración del viewport
                    className="relative flex items-center grow-1 px-0 xl:pr-5 w-[100%] xl:w-[40%] h-[100%] xl:h-auto aspect-[2/3]"
                  >
                    <Image
                      src={article.imageUrl} // Usa la URL de la imagen del artículo
                      alt={`Imagen de ${article.title}`} // Usa el título del artículo para el texto alternativo
                      width={640}
                      height={960}
                      className="
                        object-cover
                        w-full xl:w-[80%]
                        h-full xl:h-[80%]
                        aspect-[2/3]
                      "
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }} // Estado inicial
                    whileInView={{ opacity: 1, y: 0 }} // Cuando entra al viewport
                    viewport={{ once: true }} // Configuración del viewport
                    transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de transición
                    className="flex grow-0 md:grow flex-col max-w-[480px] px-0 md:pr-5 pt-4 md:pt-0 pb-8 md:pb-0"
                  >
                    <h3
                      className={`text-white text-clamp-titles ${playfairDisplay.className}`}
                    >
                      {article.title}
                    </h3>
                    <div className={`${outfit.className}`}>
                      <p className="text-white text-clamp-text-home font-extralight pt-4">
                        {article.shortText}
                      </p>
                      <Link
                        href={article.imageUrl}
                        className="relative text-white pt-4 font-extralight inline-block link-decorado text-xl"
                      >
                        Ver más
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}

export default HorizontalScroll;

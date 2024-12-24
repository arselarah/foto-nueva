import { useState, useEffect, useRef, use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Outfit, Playfair_Display } from "next/font/google";
import { historia, Historia } from "@/data/historias";

const outfit = Outfit({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

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
            end: "6000 top",
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
        <div ref={triggerRef} className=" relative triggerRef ">
          <div
            ref={sectionRef}
            className=" scroll-section-inner relative lgx:h-[100vh] lgx:w-[400vw] flex  flex-col lgx:flex-row gap-6 lgx:gap-0 snap-both snap-mandatory "
          >
            {historia.map((historia) => (
              <div
                key={historia.id}
                className=" scroll-section relative lgx:h-[100%] lgx:w-[100vw] flex flex-col lgx:flex-row justify-center items-center gap-10 snap-start"
              >
                <div className=" relative flex flex-col lgx:flex-row w-full h-full items-center">
                  <div
                    // initial={{
                    //   opacity: 0,
                    //   clipPath: "polygon(0 80%, 100% 80%, 100% 100%, 0% 100%)",
                    // }}
                    // whileInView={{
                    //   opacity: 1,
                    //   clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    // }}
                    // transition={{ duration: 1, ease: "easeOut" }}
                    // viewport={{ once: true }}
                    className="relative flex items-center w-full aspect-2/3 lgx:aspect-video"
                  >
                    <Link
                      href={`/historias/${historia.url}`}
                      className="absolute inset-0"
                    >
                      <Image
                        src={historia.imageUrl} // Usa la URL de la imagen del artículo
                        alt={`Imagen de ${historia.title}`} // Usa el título del artículo para el texto alternativo
                        fill
                        className="
                        object-cover                  "
                      />
                    </Link>
                    <motion.div
                      style={{ mixBlendMode: "difference" }}
                      initial={{ opacity: 0, y: 30 }} // Estado inicial
                      whileInView={{ opacity: 1, y: 0 }} // Cuando entra al viewport
                      viewport={{ once: true }} // Configuración del viewport
                      transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de transición
                      className="absolute bottom-[5%] lg:bottom-[10%] left-[5%] lg:left-[10%] flex flex-col max-w-[480px] px-0 md:pr-5 pt-4 md:pt-0 pb-8 md:pb-0 bg-transparent pointer-events-none"
                    >
                      <h3
                        className={`text-white text-clamp-titles  ${playfairDisplay.className}`}
                      >
                        {historia.title}
                      </h3>
                      <div className={`${outfit.className}`}>
                        <p className="text-white text-clamp-text-home font-extralight pt-4">
                          {historia.shortText}
                        </p>
                        <Link
                          href={`/historias/${historia.url}`}
                          className="relative text-white pt-4 font-extralight inline-block link-decorado text-xl"
                        >
                          Ver más
                        </Link>
                      </div>
                    </motion.div>
                  </div>
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

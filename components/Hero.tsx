import { useState, useEffect, FC } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Outfit, Playfair_Display } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

type Slider = {
  src: string; // Título del artículo
  position: string; // Texto breve
};
// Arreglo de imágenes
const images: Slider[] = [
  {
    src: "/assets/foto_11.webp",
    position: "object-[70%_50%]",
  },
  {
    src: "/assets/foto_7.webp",
    position: "object-[55%_50%]",
  },
  {
    src: "/assets/foto_8.webp",
    position: "object-[70%_50%]",
  },
  {
    src: "/assets/foto_9.webp",
    position: "object-[25%_50%]",
  },
  {
    src: "/assets/foto_3.webp",
    position: "object-[70%_50%]",
  },
  {
    src: "/assets/foto_10.webp",
    position: "object-[35%_50%]",
  },
];

const Hero: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Limpiar el intervalo
  }, []);

  // Detecta el scroll para el efecto parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para cambiar la imagen al hacer clic en un punto
  const goToSlide = (index: number) => setCurrentIndex(index);

  // Estilo parallax con Framer Motion (escala y desplazamiento vertical)
  const getParallaxStyle = (index: number) => {
    // const scale = 1 + scrollY * 0.00001; // Escala basado en el scroll
    const translateY = scrollY * -0.18; // Movimiento vertical basado en el scroll

    return {
      // scale: index === currentIndex ? scale : 1,
      y: index === currentIndex ? -translateY : 0,
    };
  };

  return (
    <div className="hero relative w-full min-h-[500px] h-svh overflow-hidden bg-negro">
      {/* Fondo Oscuro */}
      <div className="absolute inset-0 bg-black opacity-25 z-[9]" />

      {/* Contenido Fijo (Título) */}
      <div className="absolute bottom-[5rem] z-[9] text-white w-[90%] xl:w-fit left-1/2 -translate-x-1/2 xl:left-auto xl:right-20 xl:-translate-x-0">
        <motion.h2
          className={`${outfit.className} tracking-wider text-xl uppercase font-light text-center`}
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        >
          Arse Lara Fotografía
        </motion.h2>
        <motion.h1
          className={`${outfit.className} tracking-wider uppercase font-light text-center`}
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        >
          Fotógrafo de bodas
        </motion.h1>
        <motion.h2
          className={`text-clamp-titles-lg mt-4 w-fit mx-auto ${playfairDisplay.className} font-light`}
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          La historia detrás
          <br />
          de tus fotografías
        </motion.h2>
      </div>

      {/* Slider de Imágenes con Framer Motion */}
      <AnimatePresence>
        {images.map(
          (
            image,
            index // Cambié "src" por "image"
          ) =>
            index === currentIndex ? (
              <motion.div
                key={index}
                className="absolute w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                style={{ zIndex: 5 }}
              >
                <motion.div
                  className="w-full h-full"
                  style={{ position: "relative" }}
                  animate={getParallaxStyle(index)} // Aplica el efecto parallax
                  transition={{ type: "tween", duration: 0.1, ease: "linear" }}
                >
                  <Image
                    src={image.src} // Aquí accedemos a "image.src" en lugar de "src" directamente
                    alt={`Imagen ${index + 1}`}
                    fill
                    priority
                    className={`object-cover ${image.position}`} // Usa la posición personalizada de cada imagen
                  />
                </motion.div>
              </motion.div>
            ) : null
        )}
      </AnimatePresence>

      {/* Puntos de Navegación */}
      <motion.div
        className="absolute bottom-8 xl:bottom-20 left-1/2 transform -translate-x-1/2 xl:-translate-x-0 xl:left-20 flex gap-2 z-10"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-[#d3b3b8]" : "bg-white"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;

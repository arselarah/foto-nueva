import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

// Define el tipo para las imágenes
type GalleryImage = {
  src: string;
  id: number; // Número de identificación único
  title: string; // Título del artículo
  urlHistoria: string;
};
const imagesMasonry: GalleryImage[] = [
  {
    id: 1,
    src: "/assets/masonry/610_0060.webp",
    title: "Mónica & gerardo",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 2,
    src: "/assets/masonry/610_0175.webp",
    title: "Mariana & Mario",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 3,
    src: "/assets/masonry/610_0269.webp",
    title: "Alejandra & Daniel",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 4,
    src: "/assets/masonry/610_0435.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 5,
    src: "/assets/masonry/610_0713.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 6,
    src: "/assets/masonry/610_3215.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 7,
    src: "/assets/masonry/610_3453.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 8,
    src: "/assets/masonry/610_9533.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 9,
    src: "/assets/masonry/123364404_3555276891161452_2640680105358984914_n.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 10,
    src: "/assets/masonry/123466343_3555279594494515_2716573274705517690_n.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 11,
    src: "/assets/masonry/305480220_787524242597512_3628593751552011758_n.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 12,
    src: "/assets/masonry/337692537_1235358620404783_1416640606424536262_n.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 13,
    src: "/assets/masonry/307314332_790947682255168_979465778643567647_n.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 14,
    src: "/assets/masonry/flores-208.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 15,
    src: "/assets/masonry/318941632_861058258577443_4681273073615154753_n.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 16,
    src: "/assets/masonry/FXT25992.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 17,
    src: "/assets/masonry/321961048_828379238268406_5589336757741639372_n.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 18,
    src: "/assets/masonry/339750937_1885817945129861_1959838802923634466_n.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 19,
    src: "/assets/masonry/70302808_2510264278996057_7746424696060510208_n.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },
  {
    id: 20,
    src: "/assets/masonry/betty-hbcolor-2017-1956.webp",
    title: "Ana & Pepe",
    urlHistoria: "/ana-pepe",
  },

  // Agrega más imágenes aquí
];

function MasonryHome() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const showNextImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % imagesMasonry.length);
    }
  }, [selectedImageIndex]);

  const showPrevImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + imagesMasonry.length) % imagesMasonry.length
      );
    }
  }, [selectedImageIndex]);

  // Evento para detectar las teclas de flecha en escritorio
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === "ArrowRight") {
          showNextImage();
        } else if (e.key === "ArrowLeft") {
          showPrevImage();
        } else if (e.key === "Escape") {
          closeLightbox();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, showNextImage, showPrevImage]);

  // Manejo de eventos de touch para dispositivos móviles
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX) return;
    const touchEndX = e.touches[0].clientX;

    if (touchStartX - touchEndX > 50) {
      showNextImage();
      setTouchStartX(null);
    }
    if (touchEndX - touchStartX > 50) {
      showPrevImage();
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 50 }} // Estado inicial
        whileInView={{ opacity: 1, y: 0 }} // Cuando entra al viewport
        viewport={{ once: true, amount: 1 }} // Configuración del viewport
        transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de transición
        className="
    slider-horizontal_cabecera
    masonry-gallery-main-container_title
  "
      >
        <h2
          className={`
      text-clamp-titles-lg
      text-white
      px-6 md:px-20 pt-[5rem] md:pt-[10rem]
      ${playfairDisplay.className}
      mix-blend-difference
    `}
        >
          Momentos
          <br />
          que inspiran
        </h2>
      </motion.article>
      <article className="masonry-gallery-main-container w-full px-6 md:px-20 pb-[5rem] md:pb-[10rem]">
        <div className="masonry-gallery-main-container_gallery w-full py-[5rem] md:py-[10rem]">
          <div className="w-full">
            <div className="relative columns-2 md:columns-3 lg:columns-4 gap-4">
              {imagesMasonry.map((image, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    clipPath: "polygon(0 80%, 100% 80%, 100% 100%, 0% 100%)",
                  }} // Estado inicial
                  whileInView={{
                    opacity: 1,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                  }} // Cuando entra al viewport
                  transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de transición
                  viewport={{ once: true }} // Configuración del viewport
                  key={index}
                  className="relative mb-4 overflow-hidden group"
                  onClick={() => openLightbox(index)} // Abre el lightbox con la imagen seleccionada
                >
                  <Image
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    width={400}
                    height={600}
                    className="w-full h-full group-hover:scale-105 transition duration-700 ease-in-out"
                    quality={80}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <Link href={image.urlHistoria} passHref>
                    <span
                      className="
                  absolute inset-0 top-0 left-0 opacity-0
                  group-hover:backdrop-blur-md group-hover:opacity-100
                  transition-all duration-500 text-center text-white
                  flex justify-center items-center cursor-pointer pointer-events-none
                "
                    >
                      {image.title}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Superposición del lightbox con AnimatePresence */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={closeLightbox} // Cierra el lightbox al hacer clic
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Animación al cambiar de imagen */}
            <motion.div
              key={selectedImageIndex} // Cambia la animación cuando cambia el índice
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center items-center"
            >
              <Image
                src={imagesMasonry[selectedImageIndex].src}
                alt="Lightbox Image"
                width={800}
                height={600}
                className="object-contain"
              />
            </motion.div>
            <button
              className="absolute left-5 text-white text-3xl p-4 lg:p-40 h-[70%]"
              onClick={(e) => {
                e.stopPropagation();
                showPrevImage();
              }}
            >
              ‹
            </button>
            <button
              className="absolute right-5 text-white text-3xl p-4 lg:p-40 h-[70%]"
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MasonryHome;

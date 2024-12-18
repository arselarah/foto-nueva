import React, { useRef } from "react";
import Image from "next/image";
import { motion, useTransform, MotionValue } from "framer-motion";

export type CardProps = {
  i: number; // Índice para manejar la posición
  title: string; // Título de la tarjeta
  imageUrl: string; // URL de la imagen
  progress: MotionValue<number>; // MotionValue del progreso del scroll
  range: [number, number]; // Rango para la animación de transformación
  targetScale: number; // Escala objetivo para la animación
};

export default function Card({
  i,
  title,
  imageUrl,
  progress,
  range,
  targetScale,
}: CardProps) {
  const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "start start"],
  // });
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <>
      <div
        ref={container}
        className="h-screen flex flex-col justify-center items-end sticky top-0"
      >
        <motion.div
          style={{ scale, top: `calc(-5% + ${i * 25}px)` }}
          className="relative w-full 2xl:max-w-[50%] flex flex-col justify-center bg-white px-8 pt-8 pb-8 shadow-[0_.5rem_1rem_rgba(0,0,0,0.15)]"
        >
          <Image
            src={imageUrl}
            alt={title}
            width={960}
            height={640}
            className="aspect-video  object-cover"
          />
          <p className="mt-4 text-xl text-center italic">{title}</p>
        </motion.div>
      </div>
    </>
  );
}

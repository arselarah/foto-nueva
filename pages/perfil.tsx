import Page from "@/components/page";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cinzel, Outfit, Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { projects } from "@/data";
import Card from "@/components/Card";

const outfit = Outfit({
  subsets: ["latin"],
});

const cinzel = Cinzel({
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

export default function Perfil() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <Page>
      <motion.section
        className='hero relative w-full min-h-[500px] h-svh overflow-hidden bg-[url("/assets/me.jpg")] bg-cover bg-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black opacity-25 z-[9]" />
        {/* Contenido Fijo (Título) */}
        <motion.div
          className="absolute bottom-8 z-[9] text-white w-full"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className={`text-clamp-titles-innerpage mt-4 text-nowrap text-center ${cinzel.className} font-light uppercase tracking-[.5rem]`}
          >
            Arse Lara
          </h1>
          <div className="relative w-[30%] max-w-[520px] flex flex-row justify-around mx-auto">
            {["F", "O", "T", "O", "G", "R", "A", "F", "Í", "A"].map(
              (text, idx) => (
                <p
                  key={idx}
                  className={`${outfit.className} text-clamp-Subtitles-innerpage font-thin tracking-[] text-center`}
                >
                  {text}
                </p>
              )
            )}
            {/* <p >FOTOGRAFÍA</p> */}
          </div>
        </motion.div>
      </motion.section>
      <section>
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
              max-w-[1024px]
              ${playfairDisplay.className}
            `}
          >
            Hola, soy Arsenio Lara, fotógrafo mexicano
          </motion.h2>
        </div>
      </section>
      {/* <section
        className="
      relative
      w-full
      min-h-[800px]
      h-auto
      flex
      flex-col xl:flex-row flex-wrap
      xl:max-w-[100rem]
      mx-auto
      px-6 xl:px-20 py-[5rem] xl:py-[10rem]
      justify-center
      items-center
      gap-40
    "
      >
        <div
          className="
        w-full xl:w-[50%]
        flex
        flex-col
        justify-center
      "
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
              Licenciado en Administración de Empresas, diseñador y programador
              web de medio tiempo. Algo de documentalista, fotógrafo de
              retratos, bodas y otros eventos.
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
              fotografiando y sentir que puedo conocer más de la persona que
              tengo frente a mí.
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
          </motion.div>
        </div>

        <div
          className="
        relative
        w-full xl:w-[50%]
        max-h-[960px]
      "
        ></div>
      </section> */}
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
        {/* <div ref={container}>
          {articles.map((article, index) => (
            <div className="main h-screen sticky top-0 flex justify-center 2xl:justify-end items-center 2xl:max-w-[50vw] left-1/2">
              <motion.div
                key={article.id}
                className="relative flex flex-col aspect-video bg-red-300"
                style={{
                  top: `calc( -1rem + ${index * 25}px)`,
                  transform: `rotate(${index * 5}deg)`,
                }}
              >
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  width={960}
                  height={640}
                  className="aspect-video  object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div> */}
        <main className="relative">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={i}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </main>
      </article>
      <article
        className="puente perfil
          relative
          w-full
          aspect-square md:aspect-video
          bg-center
          bg-no-repeat
          bg-cover
          bg-negro
        "
      >
        <div
          className="
          absolute
          inset-0
          top-0
          left-0
          bg-negro/55
          "
        ></div>
      </article>
    </Page>
  );
}

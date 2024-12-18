import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Page from "@/components/page";
import { Cinzel, Outfit, Playfair_Display } from "next/font/google";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const outfit = Outfit({
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

export default function Contacto() {
  const [status, setStatus] = useState<string | null>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Almacena una referencia al formulario
    const form = e.currentTarget;

    // FormData tipado
    const formData = new FormData(form);

    // Obtención de los valores
    const name = formData.get("name") as string | null;
    const event = formData.get("event") as string | null;
    const place = formData.get("place") as string | null;
    const date = formData.get("date") as string | null;

    // Validación para `instag`
    const instag = formData.get("instag") as string | null;
    if (instag && !instag.startsWith("@")) {
      throw new Error("El usuario de Instagram debe comenzar con @.");
    }
    // Validación para `whats`
    const whats = formData.get("whats") as string | null;
    // Expresión regular para validar el número

    // Validación opcional para mensaje
    const message = formData.get("message") as string | null;

    // Validación genérica para campos requeridos
    if (!name || !event || !place || !date) {
      throw new Error("Todos los campos obligatorios deben estar completos.");
    }

    emailjs
      .sendForm(
        "service_d07lmdb", // Reemplaza con tu Service ID
        "template_i8er5pd", // Reemplaza con tu Template ID
        form, // Usamos el formulario completo
        "9Nhr0oYcdiIcOpF6M" // Reemplaza con tu User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("¡Mensaje enviado exitosamente!");
          form.reset(); // Usa la referencia almacenada para resetear el formulario
        },
        (error) => {
          console.error(error.text);
          setStatus("Hubo un error al enviar el mensaje.");
        }
      );
  };
  const containerBridge = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: containerBridge,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress2, [0, 1], ["0%", "100%"]);

  const containerRotate = useRef(null);
  const { scrollYProgress: scrollYProgressRotate } = useScroll({
    target: containerRotate,
    offset: ["start end", "end start"],
  });

  const rotateLogo = useTransform(
    scrollYProgressRotate,
    [0, 1],
    ["0deg", "360deg"]
  );

  return (
    <>
      <Page>
        <motion.section
          className="hero relative w-full min-h-[500px] h-[50svh] overflow-hidden flex justify-center items-center border-b-[1px] border-stone-400 bg-[#f6f6f2] z-[1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-transparent opacity-25 z-[9]" />
          {/* Contenido Fijo (Título) */}
          <motion.div
            className="absolute bottom-[5rem] z-[9] text-black w-fit"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <h1
              className={`text-clamp-titles-innerpage mt-4 text-nowrap text-center ${playfairDisplay.className} font-light`}
            >
              Contacto
            </h1>
          </motion.div>
        </motion.section>

        <section className="relative">
          <div className="spinnin-logo absolute left-1/2 -translate-x-1/2 w-[6rem] h-[6rem] z-10 -translate-y-1/2 bg-[#f6f6f2] rounded-full p-2 flex justify-center items-center">
            <motion.div
              style={{ rotate: rotateLogo }}
              className="relative w-full h-auto flex justify-center items-center"
            >
              <Image
                className="w-3/4"
                width={320}
                height={320}
                src="/assets/logo-black.svg"
                alt="Arse Lara Fotografía Logo"
              />
            </motion.div>
          </div>
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
              Me encantará escuchar más sobre tu próximo evento
            </motion.h2>
          </div>
        </section>
        <section ref={containerRotate} className="bg-[#f6f6f2] z-[1]">
          <article
            className="
      relative
      w-full
      h-auto
      flex
      flex-col xl:flex-row
      xl:max-w-[100rem]
      mx-auto
      px-6 xl:px-20 py-[5rem] xl:py-[10rem]
      gap-40
    "
          >
            <form id="contact-form" className="space-y-4" onSubmit={sendEmail}>
              <div className="flex flex-row flex-wrap gap-8 place-content-center place-items-center">
                <div className="flex">
                  <label
                    htmlFor="name"
                    className="pr-2 block text-nowrap text-clamp-text-home text-gray-600 leading-relaxed mb-4 font-extralight"
                  >
                    Mi nombre es
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent  border-b border-t-0 border-r-0 border-l-0 rounded-none border-zinc-800"
                  />
                </div>
                <div className="flex">
                  <label
                    htmlFor="event"
                    className="pr-2 block text-nowrap text-clamp-text-home text-gray-600 leading-relaxed mb-4 font-extralight"
                  >
                    y mi evento será
                  </label>
                  <input
                    type="text"
                    id="event"
                    name="event"
                    required
                    className="w-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent  border-b border-t-0 border-r-0 border-l-0 rounded-none border-zinc-800"
                  />
                </div>
                <div className="flex">
                  <label
                    htmlFor="place"
                    className="pr-2 block text-nowrap text-clamp-text-home text-gray-600 leading-relaxed mb-4 font-extralight"
                  >
                    en
                  </label>
                  <input
                    type="text"
                    id="place"
                    name="place"
                    required
                    className="w-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent  border-b border-t-0 border-r-0 border-l-0 rounded-none border-zinc-800"
                  />
                </div>
                <div className="flex">
                  <label
                    htmlFor="date"
                    className="pr-2 block text-nowrap text-clamp-text-home text-gray-600 leading-relaxed mb-4 font-extralight"
                  >
                    el día
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent  border-b border-t-0 border-r-0 border-l-0 rounded-none border-zinc-800"
                  />
                </div>
                <div className="flex">
                  <label
                    htmlFor="instag"
                    className="pr-2 block text-nowrap text-clamp-text-home text-gray-600 leading-relaxed mb-4 font-extralight"
                  >
                    este es mi instagram
                  </label>
                  <input
                    type="text"
                    id="instag"
                    name="instag"
                    required
                    className="w-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent  border-b border-t-0 border-r-0 border-l-0 rounded-none border-zinc-800"
                  />
                </div>
                <div className="flex">
                  <label
                    htmlFor="whats"
                    className="pr-2 block text-nowrap text-clamp-text-home text-gray-600 leading-relaxed mb-4 font-extralight"
                  >
                    y este es mi WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whats"
                    name="whats"
                    required
                    className="w-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent  border-b border-t-0 border-r-0 border-l-0 rounded-none border-zinc-800"
                  />
                </div>
              </div>
              {/* <div>
                <label className="text-sm xl:text-xl pb-4 pt-6 block">
                  Estoy interesado en los servicios de:
                </label>
                <div className="flex flex-row justify-between flex-wrap gap-4">
                  {[
                    "Diseño Web",
                    "E-Commerce Diseño Web",
                    "Branding",
                    "Diseño Gráfico",
                    "Consultoría",
                    "Otros",
                  ].map((option, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center justify-center gap-4"
                    >
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        name="options[]" // Importante, asegúrate de que sea "options[]"
                        value={option}
                        className="w-8 h-8 appearance-none border-2 rounded-xl border-gray-500 checked:bg-black checked:border-black"
                      />
                      <label
                        htmlFor={`checkbox-${index}`}
                        className="text-sm xl:text-xl py-4 block"
                      >
                        {option}
                      </label>
                      <input
                        type="hidden"
                        name="selectedOptions"
                        value={option}
                      />
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="grow w-full text-center pt-8">
                <label
                  htmlFor="message"
                  className="pr-2 block text-clamp-text-home text-gray-600 leading-relaxed mb-4 font-extralight"
                >
                  Cuéntame más sobre el evento que planeas
                </label>
                <textarea
                  id="message"
                  name="message"
                  //rows="4"
                  required
                  className="w-full px-4 py-7 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent rounded border border-zinc-800"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-40 bg-black text-white font-medium py-[0.65rem] px-[1.4rem] rounded-[50vw] transition duration-300 border-black border-2 hover:bg-button-gradient hover:text-black"
                >
                  Enviar
                </button>
              </div>
            </form>
            {status && (
              <div className="fixed w-full h-screen inset-0 z-50 flex justify-center items-center">
                <div className="relative w-[80%] max-w-[40rem] bg-negro rounded-md p-8">
                  <button
                    className="absolute top-4 right-4 text-white text-2xl font-bold"
                    onClick={() => setStatus(null)} // Cierra el mensaje
                    aria-label="Cerrar mensaje"
                  >
                    &times;
                  </button>
                  <p className="text-center text-white text-clamp-titles-lg">
                    {status}
                  </p>
                </div>
              </div>
            )}
          </article>
          {/* <div className="spinnin-logo absolute left-1/2 -translate-x-1/2 w-[4rem] h-[4rem] z-10 -translate-y-1/2 bg-[#f6f6f2] rounded-full p-2 flex justify-center items-center">
            <motion.div
              style={{ rotate: rotateLogo }}
              className="relative w-full h-auto flex justify-center items-center"
            >
              <Image
                className="w-4/5"
                width={320}
                height={320}
                src="/assets/logo-black.svg"
                alt="Arse Lara Fotografía Logo"
              />
            </motion.div>
          </div> */}
        </section>
        {/* <motion.article
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
          
          <div
            className="
          absolute
          inset-0
          top-0
          left-0
          bg-negro/55
          "
          ></div>
        </motion.article> */}
      </Page>
    </>
  );
}

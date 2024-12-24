"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Outfit, Playfair_Display, Cinzel } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { container } from "webpack";

const outfit = Outfit({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
});

const links = [
  { text: "Inicio", href: "/" },
  { text: "Historias", href: "/historias" },
  { text: "Portafolio", href: "/portafolio" },
  { text: "Perfil", href: "/perfil" },
  { text: "Contacto", href: "/contacto" },
];

function Footer() {
  const containerFooter = useRef(null);
  const { scrollYProgress: scrollYProgressFooter } = useScroll({
    target: containerFooter,
    offset: ["start end", "end start"],
  });

  const scaleFooter = useTransform(scrollYProgressFooter, [0, 1], [0.9, 1.18]);
  return (
    <>
      <footer
        ref={containerFooter}
        className="
        relative
        px-6 xl:px-20
        pt-20 xl:pt-40
        pb-0 xl:pb-0
        h-screen xl:h-[70vh] max-h-[960px]
        bg-negro
        text-white
      "
      >
        <motion.div
          style={{ scale: scaleFooter, opacity: scaleFooter }}
          className="fixed left-0 bottom-0 px-6 xl:px-20 pt-20 xl:pt-40 pb-0 xl:pb-0 w-full origin-bottom"
        >
          <div className="logo_footer relative w-fit pt-[5rem] xl:pt-[10rem] pb-[2.5rem] xl:pb-[5rem] flex flex-col items-center mx-auto">
            <Image
              src="/assets/logo-white.svg" // Usa el color del logo según el estado del header
              alt="Logo Arse Lara"
              width={65}
              height={65}
              className="block text-center"
            />
            <h4
              className={`text-3xl uppercase tracking-[.65rem] pt-2 ${cinzel.className}`}
            >
              Arse Lara
            </h4>
            <p
              className={`text-[10px] uppercase font-extralight tracking-[.65rem] text-center ${outfit.className}`}
            >
              Fotografía
            </p>
          </div>
          <div
            className={`relative flex flex-col md:flex-row gap-10 md:gap-8 xl:gap-20 w-full pb-10 xl:pb-20 `}
          >
            <div
              className="
                relative
                w-full
                md:max-w-screen-lg
            "
            >
              <motion.p
                initial={{ opacity: 0, y: 30 }} // Estado inicial
                whileInView={{ opacity: 1, y: 0 }} // Cuando entra al viewport
                viewport={{ once: true, amount: 1 }} // Configuración del viewport
                transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de transición
                className={`
                    text-clamp-text-home-lg
                    leading-relaxed
                    mb-4
                    ${outfit.className}
                    font-extralight
                `}
              >
                Ahora que me conoces un poco más y viste algo de lo que hago; me
                gustaría saber si puedo ayudarte. No dudes en comunicarte
                conmigo
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }} // Estado inicial
              whileInView={{ opacity: 1, y: 0 }} // Cuando entra al viewport
              viewport={{ once: true, amount: 1 }} // Configuración del viewport
              transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de transición
              className="
                grow
                flex
                flex-row
                gap-20
            "
            >
              <div className="grow">
                <h3
                  className={`
                    text-clamp-text-home-lg
                    ${playfairDisplay.className}
                    pb-4
                    leading-relaxed
                `}
                >
                  Menú
                </h3>
                <div
                  className={`
                    relative
                    flex
                    flex-col
                    gap-2
                    ${outfit.className}
                    font-extralight
                `}
                >
                  {links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="text-clamp-vinculos-footer"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="grow">
                <h3
                  className={`
                    text-clamp-text-home-lg
                    ${playfairDisplay.className}
                    pb-4
                    leading-relaxed
                `}
                >
                  Contacto
                </h3>
                <div
                  className={`
                    relative
                    flex
                    flex-col
                    gap-2
                    ${outfit.className}
                    font-extralight
                `}
                >
                  <Link
                    className="
                    text-clamp-vinculos-footer
                    "
                    href={"/"}
                  >
                    info@arselara.com
                  </Link>
                  <Link
                    className="
                    text-clamp-vinculos-footer
                    "
                    href={"/"}
                  >
                    +52 871 235 2773
                  </Link>
                  <Link
                    className="
                    text-clamp-vinculos-footer
                    "
                    href={"https://www.facebook.com/ArseLaraFotografia/"}
                  >
                    Facebook
                  </Link>
                  <Link
                    className="
                    text-clamp-vinculos-footer
                    "
                    href={"https://www.instagram.com/arselarafotografia/"}
                  >
                    Instagram
                  </Link>
                  <Link
                    className="
                    text-clamp-vinculos-footer
                    "
                    href={"https://mywed.com/es/photographer/arselara/"}
                  >
                    My Wed
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          <div
            className={`
        copyright_footer
        relative
        w-full
        pt-[2.5rem] 
        pb-[2.5rem] 
        flex
        flex-row
        justify-center
        border-t-[1px] border-slate-200
        ${outfit.className}
        font-extralight
        `}
          >
            <div>
              <p>Diseñado por</p>
            </div>
            <div>
              <a href="https://webdesign.arselara.com">
                : webdesign.arselara.com
              </a>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

export default Footer;

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Outfit, Cinzel } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);

  const linkVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  useEffect(() => {
  if (menuOpen) {
    const scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add("menu-open");
  } else {
    const scrollY = document.body.style.top;
    document.body.classList.remove("menu-open");
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  return () => {
    document.body.classList.remove("menu-open");
    document.body.style.top = "";
  };
}, [menuOpen]);



  return (
    <>
      <motion.header
        className="fixed top-0 left-0 z-50 bg-transparent bg-clip-text  text-white w-full h-fit mix-blend-difference flex flex-row"
        initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-full px-6 xl:px-20 h-[60px] flex items-center justify-between">
          <div className="logo-prueba w-[250px] relative z-20 flex flex-row">
            <Link className="pr-4" href="/" passHref>
              <Image
                className=""
                width={40}
                height={40}
                src="/assets/logo-white.svg"
                alt="Arse Lara Fotografía Logo"
              />
            </Link>
            <div className="hidden md:block">
              <Link href="/" aria-label="Ir al inicio" className={``}>
                <h4
                  className={`text-xl uppercase tracking-[.5rem] ${cinzel.className}`}
                >
                  Arse Lara
                </h4>
                <p
                  className={`text-[7px] uppercase ${outfit.className} font-extralight text-center tracking-[.5rem]`}
                >
                  Fotografía
                </p>
              </Link>
            </div>
          </div>
          {/* <div className="reserve bg-white rounded-full px-4 py-2">
            <div>
              <Link
                href={"/contacto"}
                className="text-black uppercase font-semibold"
              >
                Reservación
              </Link>
            </div>
          </div> */}
          <div className="flex flex-row justify-end gap-8 w-36">
            <button
              className="relative h-[32px] flex flex-row items-center gap-4 z-20"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.p
                      key="cerrar"
                      className={`cursor-pointer font-semibold tracking-widest text-xl text-white`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      CERRAR
                    </motion.p>
                  ) : (
                    <motion.p
                      key="menu"
                      className={`cursor-pointer font-semibold tracking-widest text-xl text-white`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      MENÚ
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative w-[32px] h-[20px]">
                <motion.span
                  animate={{
                    width: menuOpen ? "32px" : "32px",
                    transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)",
                    top: menuOpen ? "10px" : "0",
                  }}
                  className={`absolute left-0 top-0 h-[3px] transition-colors duration-300 bg-white`}
                />
                <motion.span
                  animate={{
                    width: menuOpen ? "32px" : "28px",
                    opacity: menuOpen ? "0" : "1",
                  }}
                  className={`absolute left-0 top-2 h-[3px] transition-colors duration-600 bg-white `}
                />
                <motion.span
                  animate={{
                    width: menuOpen ? "32px" : "20px",
                    transform: menuOpen ? "rotate(-45deg)" : "rotate(0deg)",
                    top: menuOpen ? "10px" : "16px",
                  }}
                  className={`absolute left-0 top-4 h-[3px] transition-colors duration-300 bg-white`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Menú Desplegable */}
      <motion.div
        className={`fixed inset-0 backdrop-blur-3xl bg-black bg-opacity-40 z-[15] flex flex-col justify-center items-center px-8 md:px-[10vw] 
    ${
      menuOpen
        ? "pointer-events-auto opacity-100"
        : "pointer-events-none opacity-0"
    }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onAnimationComplete={() => setLinksVisible(menuOpen)}
      >
        {linksVisible &&
          ["Inicio", "Historias", "Portafolio", "Perfil", "Contacto"].map(
            (text, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                className="uppercase tracking-wide text-white text-clamp-menu leading-snug"
              >
                {text === "Inicio" ? (
                  <Link
                    href="/"
                    className={`${outfit.className} font-extralight`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {text}
                  </Link>
                ) : (
                  <Link
                    href={`/${text.toLowerCase()}`}
                    className={`${outfit.className} font-extralight`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {text}
                  </Link>
                )}
              </motion.div>
            )
          )}

        <div
          className={`absolute w-full bottom-0 text-white text-center ${outfit.className} font-extralight`}
        >
          <div
            className="
                    relative
                    lg:flex
                    flex-row
                    flex-wrap
                    py-2
                    justify-around
                    hidden
                "
          >
            <Link
              className="
                    text-clamp-vinculos-footer
                    grow
                    "
              href={"/"}
            >
              info@arselara.com
            </Link>
            <Link
              className="
                    text-clamp-vinculos-footer
                    grow
                    "
              href={"/"}
            >
              +52 871 235 2773
            </Link>
            <Link
              className="
                    text-clamp-vinculos-footer
                    grow
                    "
              href={"https://www.facebook.com/ArseLaraFotografia/"}
            >
              Facebook
            </Link>
            <Link
              className="
                    text-clamp-vinculos-footer
                    grow
                    "
              href={"https://www.instagram.com/arselarafotografia/"}
            >
              Instagram
            </Link>
            <Link
              className="
                    text-clamp-vinculos-footer
                    grow
                    "
              href={"https://mywed.com/es/photographer/arselara/"}
            >
              My Wed
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;

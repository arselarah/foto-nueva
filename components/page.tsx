import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface PageProps {
  children: ReactNode;
}

export default function Page({ children }: PageProps) {
  const anim = (variants: Variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity: Variants = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0.5,
      transition: {
        duration: 1.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const slide: Variants = {
    initial: {
      y: "100vh",
    },
    enter: {
      y: "100vh",
    },
    exit: {
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  const perspective: Variants = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0.1,
      transition: {
        duration: 1.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <div className="inner bg-negro">
      <motion.div
        className="slide h-screen w-screen fixed left-0 top-0 bg-[#f6f6f2] z-10"
        {...anim(slide)}
      />

      <motion.div
        className="page relative bg-[#f6f6f2] z-[1]"
        {...anim(perspective)}
      >
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  );
}

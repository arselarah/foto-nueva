export type Project = {
  title: string; // Título del artículo
  imageUrl: string; // URL de la imagen
};

export const projects: Project[] = [
  {
    title: "Ana & Pepe",
    imageUrl: "/assets/home/ana-pepe-21.webp", // URL de la imagen
  },
  {
    title: "Francisco & Mariana",
    imageUrl: "/assets/home/mariana-francisco-2.webp", // URL de la imagen
  },
  {
    title: "Naima & Julio",
    imageUrl: "/assets/home/foto_5.webp",
  },
  {
    title: "Marlen & Rafa",
    imageUrl: "/assets/home/marlen-rafa-12.webp",
  },
  // Puedes agregar más artículos aquí
];

export type Historia = {
  titleHc: string; // Título del artículo
  imageUrlHc: string; // URL de la imagen
};

export const historiasCompletas: Historia[] = [
  {
    titleHc: "Ana & Pepe",
    imageUrlHc: "/assets/historias/ana-pepe/ana-pepe-1.jpg", // URL de la imagen
  },
  {
    titleHc: "Francisco & Mariana",
    imageUrlHc: "/assets/home/mariana-francisco-2.webp", // URL de la imagen
  },
  {
    titleHc: "Naima & Julio",
    imageUrlHc: "/assets/home/foto_5.webp",
  },
  {
    titleHc: "Marlen & Rafa",
    imageUrlHc: "/assets/home/marlen-rafa-12.webp",
  },
  // Puedes agregar más artículos aquí
];

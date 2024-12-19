// data/historias.ts

// export type Historia = {
//   id: string;
//   titulo: string;
//   portadaIndex: string;
// };

// export const historias: Historia[] = [
//   {
//     id: "bodas-ana-pepe",
//     titulo: "Boda de Ana y Pepe",
//     portadaIndex: "/assets/slider_home/foto_1.webp",
//   },

//   {
//     id: "bodas-francisco-mariana",
//     titulo: "Boda de Francisco y Mariana",
//     portadaIndex: "/assets/slider_home/foto_3.webp",
//   },
//   {
//     id: "bodas-naima-julio",
//     titulo: "Boda de Naima y Julio",
//     portadaIndex: "/assets/slider_home/foto_4.webp",
//   },
//   {
//     id: "bodas-marlen-rafa",
//     titulo: "Boda de Marlen y Rafa",
//     portadaIndex: "/assets/slider_home/foto_6.webp",
//   },
// ];

export type Historia = {
  id: number; // Número de identificación único
  title: string; // Título del artículo
  shortText: string; // Texto breve
  imageUrl: string; // URL de la imagen
  url: string; // URL
};

// Definir el array usando el tipo `Article`
export const historia: Historia[] = [
  {
    id: 1,
    title: "Ana & Pepe",
    shortText:
      '"Podrán cortar todas las flores, pero no podrán detener la primavera".',
    imageUrl: "/assets/historias/ana&pepe/ana-pepe-1.jpeg", // URL de la imagen
    url: "boda-ana-pepe",
  },
  {
    id: 2,
    title: "Francisco & Mariana",
    shortText:
      '"Creo que lo bello no es una sustancia en sí sino tan sólo un dibujo de sombras, un juego de claroscuros producido por yuxtaposición de diferentes sustancias".',
    imageUrl: "/assets/historias/francisco&mariana/mariana-francisco-5.jpg", // URL de la imagen
    url: "boda-francisco-mariana",
  },
  {
    id: 3,
    title: "Naima & Julio",
    shortText: "“Estar contigo o no estar contigo es la medida de mi tiempo”.",
    imageUrl: "/assets/historias/naima&julio/naima-julio-4.jpeg",
    url: "boda-naima-julio",
  },
  {
    id: 4,
    title: "Marlen & Rafa",
    shortText:
      "“La fotografía toma un instante fuera del tiempo, alterando la vida manteniéndola quieta”.",
    imageUrl: "/assets/home/marlen-rafa-12.webp",
    url: "boda-marlen-rafa",
  },
  // Puedes agregar más artículos aquí
];

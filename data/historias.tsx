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
  imageUrl2: string; // URL de la imagen
  imageUrl3: string; // URL de la imagen
  imageUrl4: string; // URL de la imagen
  imageUrl5: string; // URL de la imagen
  imageUrl6: string; // URL de la imagen
  imageUrl7: string; // URL de la imagen
  imageUrl8: string; // URL de la imagen
  imageUrl9: string; // URL de la imagen
  imageUrl10: string; // URL de la imagen
  imageUrl11: string; // URL de la imagen
  url: string; // URL
};

// Definir el array usando el tipo `Article`
export const historia: Historia[] = [
  {
    id: 1,
    title: "Ana & Pepe",
    shortText:
      '"Podrán cortar todas las flores, pero no podrán detener la primavera".',
    imageUrl: "/assets/historias/ana&pepe/ana-pepe-1.webp", // URL de la imagen
    imageUrl2: "/assets/historias/ana&pepe/ana-pepe-11.webp", // URL de la imagen
    imageUrl3: "/assets/historias/ana&pepe/ana-pepe-21.webp", // URL de la imagen
    imageUrl4: "/assets/historias/ana&pepe/ana-pepe-14.webp", // URL de la imagen
    imageUrl5: "/assets/historias/ana&pepe/ana-pepe-16.webp", // URL de la imagen
    imageUrl6: "/assets/historias/ana&pepe/ana-pepe-13.webp", // URL de la imagen
    imageUrl7: "/assets/historias/ana&pepe/ana-pepe-9.webp", // URL de la imagen
    imageUrl8: "/assets/historias/ana&pepe/ana-pepe-19.webp", // URL de la imagen
    imageUrl9: "/assets/historias/ana&pepe/ana-pepe-15.webp", // URL de la imagen
    imageUrl10: "/assets/historias/ana&pepe/ana-pepe-6.webp", // URL de la imagen
    imageUrl11: "/assets/historias/ana&pepe/ana-pepe-8.webp", // URL de la imagen
    url: "boda-ana-pepe",
  },
  {
    id: 2,
    title: "Francisco & Mariana",
    shortText:
      '"Creo que lo bello no es una sustancia en sí sino tan sólo un dibujo de sombras, un juego de claroscuros producido por yuxtaposición de diferentes sustancias".',
    imageUrl: "/assets/historias/francisco&mariana/mariana-francisco-5.webp", // URL de la imagen
    imageUrl2: "/assets/historias/francisco&mariana/mariana-francisco-2.webp", // URL de la imagen
    imageUrl3: "/assets/historias/francisco&mariana/mariana-francisco-01.webp", // URL de la imagen
    imageUrl4: "/assets/historias/francisco&mariana/mariana-francisco-12.webp", // URL de la imagen
    imageUrl5: "/assets/historias/francisco&mariana/mariana-francisco-7.webp", // URL de la imagen
    imageUrl6: "/assets/historias/francisco&mariana/mariana-francisco-3.webp", // URL de la imagen
    imageUrl7: "/assets/historias/francisco&mariana/mariana-francisco-4.webp", // URL de la imagen
    imageUrl8: "/assets/historias/francisco&mariana/mariana-francisco-5.webp", // URL de la imagen
    imageUrl9: "/assets/historias/francisco&mariana/mariana-francisco-10.webp", // URL de la imagen
    imageUrl10: "/assets/historias/francisco&mariana/mariana-francisco-11.webp", // URL de la imagen
    imageUrl11: "/assets/historias/francisco&mariana/mariana-francisco-6.webp", // URL de la imagen
    url: "boda-francisco-mariana",
  },
  {
    id: 3,
    title: "Naima & Julio",
    shortText: "“Estar contigo o no estar contigo es la medida de mi tiempo”.",
    imageUrl: "/assets/historias/naima&julio/naima-julio-4.webp",
    imageUrl2: "/assets/historias/naima&julio/naima-julio-8.webp", // URL de la imagen
    imageUrl3: "/assets/historias/naima&julio/naima-julio-1.webp", // URL de la imagen
    imageUrl4: "/assets/historias/naima&julio/naima-julio-3.webp", // URL de la imagen
    imageUrl5: "/assets/historias/naima&julio/naima-julio-2.webp", // URL de la imagen
    imageUrl6: "/assets/historias/naima&julio/naima-julio-4.webp", // URL de la imagen
    imageUrl7: "/assets/historias/naima&julio/naima-julio-6.webp", // URL de la imagen
    imageUrl8: "/assets/historias/naima&julio/naima-julio-7.webp", // URL de la imagen
    imageUrl9: "/assets/historias/naima&julio/naima-julio-1.webp", // URL de la imagen
    imageUrl10: "/assets/historias/naima&julio/naima-julio-6.webp", // URL de la imagen
    imageUrl11: "/assets/historias/naima&julio/naima-julio-2.webp", // URL de la imagen
    url: "boda-naima-julio",
  },
  {
    id: 4,
    title: "Marlen & Rafa",
    shortText:
      "“La fotografía toma un instante fuera del tiempo, alterando la vida manteniéndola quieta”.",
    imageUrl: "/assets/historias/marlen&rafa/marlen-rafa-2.webp", // URL de la imagen
    imageUrl2: "/assets/historias/marlen&rafa/marlen-rafa-8.webp", // URL de la imagen
    imageUrl3: "/assets/historias/marlen&rafa/marlen-rafa-1.webp", // URL de la imagen
    imageUrl4: "/assets/historias/marlen&rafa/marlen-rafa-11.webp", // URL de la imagen
    imageUrl5: "/assets/historias/marlen&rafa/marlen-rafa-3.webp", // URL de la imagen
    imageUrl6: "/assets/historias/marlen&rafa/marlen-rafa-4.webp", // URL de la imagen
    imageUrl7: "/assets/historias/marlen&rafa/marlen-rafa-5.webp", // URL de la imagen
    imageUrl8: "/assets/historias/marlen&rafa/marlen-rafa-6.webp", // URL de la imagen
    imageUrl9: "/assets/historias/marlen&rafa/marlen-rafa-7.webp", // URL de la imagen
    imageUrl10: "/assets/historias/marlen&rafa/marlen-rafa-9.webp", // URL de la imagen
    imageUrl11: "/assets/historias/marlen&rafa/marlen-rafa-10.webp", // URL de la imagen
    url: "boda-marlen-rafa",
  },
  // Puedes agregar más artículos aquí
];

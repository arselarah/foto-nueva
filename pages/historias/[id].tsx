import { useRouter } from "next/router";
import { Historia as HistoriaType, historia } from "../../data/historias"; // Importa los datos de 'data/historias.ts'
import { GetStaticPaths, GetStaticProps } from "next";
import Page from "@/components/page";

type HistoriaProps = {
  historia: HistoriaType | null; // Historia o null si no se encuentra
};

const HistoriaPage = ({ historia }: HistoriaProps) => {
  const router = useRouter();

  // Si la página no tiene la historia correspondiente, mostramos un mensaje
  if (!historia) {
    return <div>Historia no encontrada</div>;
  }

  return (
    <>
      <Page>
        <h1>{historia.title}</h1>
        <p>{historia.shortText}</p>
        <img src={historia.imageUrl} alt={historia.title} />
        {/* Aquí puedes agregar más detalles como una galería de fotos si lo deseas */}
      </Page>
    </>
  );
};

// `getStaticPaths` para generar rutas estáticas para todas las historias
export const getStaticPaths: GetStaticPaths = async () => {
  // Creamos los paths usando el campo `url` de los objetos de `historia`
  const paths = historia.map((h) => ({
    params: { id: h.url }, // Usamos el campo `url` como parámetro dinámico
  }));

  return {
    paths,
    fallback: false, // Usamos `fallback: false` para no permitir rutas dinámicas
  };
};

// `getStaticProps` para obtener los datos de la historia según el id
export const getStaticProps: GetStaticProps<
  HistoriaProps,
  { id: string }
> = async ({ params }) => {
  // Buscamos la historia usando el `id` que corresponde con el `url` de las historias
  const historiaSeleccionada =
    historia.find((h) => h.url === params?.id) || null;

  return {
    props: {
      historia: historiaSeleccionada, // Pasamos la historia encontrada como prop
    },
  };
};

export default HistoriaPage;

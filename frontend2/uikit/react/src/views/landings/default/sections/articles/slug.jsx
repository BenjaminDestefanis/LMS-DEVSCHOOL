import { useRouter } from "next/router";
import articles from "@/views/landings/default/data/articles";


// pagina de cada articulo individual
export default function ArticuloDetalle() {
  const router = useRouter();
  const { slug } = router.query;

  const article = articles.find((a) => a.slug === slug);

  if (!article) return <p>Cargando...</p>;

  return (
    <div className="container mx-auto py-12">
      <h1>{article.title}</h1>
      <img src={article.image} style={{ width: "100%", borderRadius: 8 }} />
      <p>{article.content}</p>
    </div>
  );
}

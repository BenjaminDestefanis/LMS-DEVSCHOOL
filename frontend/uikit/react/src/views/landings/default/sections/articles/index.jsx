import articles from "@/views/landings/default/data/articles";

export default function ArticulosPage() {
  return (
    <div className="container mx-auto py-12">
      <h1>Artículos</h1>

      <div style={{ display: "grid", gap: "2rem", marginTop: "2rem" }}>
        {articles.map((a) => (
          <a key={a.slug} href={`/articulos/${a.slug}`}>
            <div>
              <img src={a.image} style={{ width: "100%", borderRadius: 8 }} />
              <h2>{a.title}</h2>
              <p>{a.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

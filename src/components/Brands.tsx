const brands = [
  "LFP",
  "FFF",
  "Red Star FC",
  "Paris FC",
  "SPORTFIVE",
  "Havas Sports",
  "RMC Sport",
  "L'Équipe",
  "Canal+ Sport",
  "beIN Sports",
  "Webedia Sports",
  "But! Football Club",
];

export default function Brands() {
  return (
    <section className="brands" id="brands">
      <div className="brands-inner">
        <h2 className="brands-h2 sr">
          Ces structures <span>m&apos;inspirent.</span>
        </h2>
        <div className="brands-grid sr">
          {brands.map((brand) => (
            <div className="brand-item" key={brand}>
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

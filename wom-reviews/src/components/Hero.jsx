export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-4xl font-extrabold">
          Maska Peanut Butter – Chatpata
        </h1>
        <p className="text-gray-600 mt-4">
          A bold desi twist on classic peanut butter. Protein-packed and full of flavour.
        </p>
        <button className="mt-6 bg-black text-white px-6 py-3 rounded">
          Buy Now
        </button>
      </div>

      <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
        Product Image
      </div>
    </section>
  );
}

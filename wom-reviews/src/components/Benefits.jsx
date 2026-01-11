export default function Benefits() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {["High Protein", "No Added Sugar", "Bold Chatpata Taste"].map(
          (item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold">{item}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Short benefit description goes here.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

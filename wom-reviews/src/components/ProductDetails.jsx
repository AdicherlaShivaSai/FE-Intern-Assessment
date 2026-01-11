export default function ProductDetails() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
      {/* Product Images */}
      <div>
        <div className="bg-gray-100 h-80 rounded-xl flex items-center justify-center">
          Product Image
        </div>

        <div className="flex gap-4 mt-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="w-20 h-20 bg-gray-100 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold">Maska Peanut Butter – Chatpata</h1>

        {/* Rating */}
        <div className="flex items-center gap-4 mt-2">
          <span className="text-orange-500">★★★★★</span>
          <span className="text-sm text-gray-600">(2,431 reviews)</span>
          <span className="text-sm text-green-600">10,000+ sold</span>
        </div>

        {/* Price */}
        <p className="text-2xl font-semibold mt-4">₹349</p>

        {/* Quantity */}
        <div className="mt-6">
          <p className="text-sm font-medium">Quantity</p>
          <div className="flex gap-3 mt-2">
            {[1, 2, 3].map((qty) => (
              <button key={qty} className="border px-4 py-2 rounded">
                {qty}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="flex-1 border px-6 py-3 rounded">
            Add to Cart
          </button>
          <button className="flex-1 bg-black text-white px-6 py-3 rounded">
            Buy Now
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 text-sm text-center">
          <div className="border rounded-lg p-3">Lab Tested</div>
          <div className="border rounded-lg p-3">Fast Shipping</div>
          <div className="border rounded-lg p-3">Secure Checkout</div>
        </div>
      </div>
    </section>
  );
}

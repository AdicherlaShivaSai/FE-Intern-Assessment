export default function Navbar() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">MASKA</div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <span className="cursor-pointer hover:text-black">Home</span>
          <span className="cursor-pointer hover:text-black">Products ▾</span>
          <span className="cursor-pointer hover:text-black">Blogs</span>
          <span className="cursor-pointer hover:text-black">Contact</span>
          <span className="cursor-pointer hover:text-black">
            Track My Order
          </span>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-700">
          {/* Search */}
          <span className="cursor-pointer">🔍</span>

          {/* Account */}
          <span className="cursor-pointer">👤</span>

          {/* Wishlist */}
          <span className="cursor-pointer">♡</span>

          {/* Cart */}
          <span className="cursor-pointer">🛒</span>
        </div>
      </div>
    </header>
  );
}

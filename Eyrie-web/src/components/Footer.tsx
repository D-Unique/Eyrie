export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Eyrie</h3>
          <p>
            Explore premium properties and find your dream home with Eyrie.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/properties" className="hover:underline">
                Properties
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded mb-4 text-black"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
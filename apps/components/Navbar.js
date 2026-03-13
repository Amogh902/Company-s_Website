import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">

        <h1 className="text-xl font-bold text-gray-900">
          OffshoreMitra
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <li className="hover:text-blue-600 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Services
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Solutions
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Contact
          </li>

        </ul>

        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

      </div>
    </nav>
  );
}
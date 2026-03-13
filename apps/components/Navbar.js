import Button from "./Button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          OffshoreMitra
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>

          <li>
            <Link href="/services" className="hover:text-blue-600 transition-colors">
              Services
            </Link>
          </li>

          <li>
            <Link href="/solutions" className="hover:text-blue-600 transition-colors">
              Careers
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </li>

        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

      </div>

    </nav>
  );
}

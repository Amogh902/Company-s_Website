import Button from "./Button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">

        <Link href="/" className="text-xl font-bold text-gray-900">
          OffshoreMitra
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>

          <li>
            <Link href="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
          </li>

          <li>
            <Link href="/careers" className="hover:text-blue-600 transition">
              Careers
            </Link>
          </li>

          

          <li>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>

        </ul>

        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

      </div>
    </nav>
  );
}

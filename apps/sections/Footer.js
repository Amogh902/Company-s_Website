export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            OffshoreMitra
          </h3>

          <p>
            DevOps and cloud consulting services helping businesses
            scale infrastructure and automate development workflows.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Solutions</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <p>Pune, India</p>
          <p>info@offshoremitra.com</p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-16">
        © 2026 OffshoreMitra. All rights reserved.
      </div>
    </footer>
  );
}
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-4">OffshoreMitra</h3>
          <p className="text-gray-400">
            DevOps and cloud consulting services helping businesses
            scale infrastructure and automate development workflows.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Services</li>
            <li>Solutions</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">
            Pune, India
          </p>
          <p className="text-gray-400">
            info@offshoremitra.com
          </p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-12">
        © 2026 OffshoreMitra. All rights reserved.
      </div>
    </footer>
  )
}
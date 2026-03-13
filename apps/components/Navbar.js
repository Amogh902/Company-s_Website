export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-blue-600">
          OffshoreMitra
        </h1>

        <ul className="flex gap-6 font-medium">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Services</li>
          <li className="cursor-pointer hover:text-blue-600">Solutions</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
        </ul>

      </div>
    </nav>
  )
}
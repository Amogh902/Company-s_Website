export default function Hero() {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl font-bold text-gray-800">
          DevOps & Cloud Solutions
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          OffshoreMitra helps businesses accelerate their digital
          transformation with modern DevOps practices, cloud
          infrastructure, and automation.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Explore Services
          </button>

          <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  )
}
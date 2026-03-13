export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              DevOps Engineering
            </h3>
            <p className="text-gray-600">
              Automate and streamline development pipelines for faster delivery.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Cloud Solutions
            </h3>
            <p className="text-gray-600">
              Build scalable infrastructure using AWS, Azure and GCP.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              FinOps Optimization
            </h3>
            <p className="text-gray-600">
              Reduce cloud spending with cost optimization strategies.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              DevSecOps
            </h3>
            <p className="text-gray-600">
              Integrate security into the development lifecycle.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
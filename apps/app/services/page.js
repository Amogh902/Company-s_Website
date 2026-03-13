export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-32">

      <h1 className="text-5xl font-bold mb-8">
        Our Services
      </h1>

      <p className="text-lg text-gray-600 mb-12">
        OffshoreMitra provides DevOps consulting, cloud infrastructure
        architecture, automation, and FinOps optimization services.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            DevOps Engineering
          </h2>
          <p className="text-gray-600">
            CI/CD pipeline design, automation, and infrastructure as code.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Cloud Solutions
          </h2>
          <p className="text-gray-600">
            Scalable infrastructure architecture across AWS, Azure and GCP.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            FinOps Optimization
          </h2>
          <p className="text-gray-600">
            Cloud cost management and infrastructure optimization strategies.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            DevSecOps
          </h2>
          <p className="text-gray-600">
            Security integration within CI/CD pipelines and infrastructure.
          </p>
        </div>

      </div>

    </div>
  );
}
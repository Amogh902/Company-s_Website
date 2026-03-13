import PageHero from "../../components/PageHero";

export default function ServicesPage() {
  return (
    <div>

      <PageHero
        title="Our Services"
        description="OffshoreMitra provides DevOps consulting, cloud infrastructure solutions, and automation to help businesses scale efficiently."
      />

      <div className="max-w-6xl mx-auto px-4 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              DevOps Engineering
            </h3>
            <p className="text-gray-600">
              CI/CD pipelines, automation, and infrastructure as code
              to accelerate software delivery.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Cloud Solutions
            </h3>
            <p className="text-gray-600">
              Design scalable cloud infrastructure across AWS,
              Azure, and Google Cloud.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              FinOps Optimization
            </h3>
            <p className="text-gray-600">
              Reduce cloud costs through monitoring,
              optimization, and efficient architecture.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              DevSecOps
            </h3>
            <p className="text-gray-600">
              Integrate security practices into your DevOps
              pipelines and infrastructure workflows.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

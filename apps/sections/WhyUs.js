export default function WhyUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose OffshoreMitra
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">
              DevOps Expertise
            </h3>
            <p className="text-gray-600">
              Deep experience implementing CI/CD pipelines and DevOps culture.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">
              Cloud Infrastructure
            </h3>
            <p className="text-gray-600">
              Design scalable and resilient infrastructure on AWS, Azure, and GCP.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">
              Automation
            </h3>
            <p className="text-gray-600">
              Automate development workflows and infrastructure deployment.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">
              Cost Optimization
            </h3>
            <p className="text-gray-600">
              Reduce operational costs with efficient cloud and FinOps strategies.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
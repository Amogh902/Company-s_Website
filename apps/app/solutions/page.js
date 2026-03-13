import PageHero from "../../components/PageHero";

export default function SolutionsPage() {
  return (
    <div>

      <PageHero
        title="Our Solutions"
        description="OffshoreMitra delivers practical solutions for modern infrastructure challenges using DevOps and cloud technologies."
      />

      <div className="max-w-6xl mx-auto px-4 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">
              DevOps Transformation
            </h3>
            <p className="text-gray-600">
              Implement CI/CD pipelines, automation, and modern DevOps
              practices to accelerate development cycles and improve
              software reliability.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">
              Cloud Migration
            </h3>
            <p className="text-gray-600">
              Transition legacy infrastructure to scalable cloud platforms
              such as AWS, Azure, and Google Cloud with minimal disruption.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">
              Infrastructure Automation
            </h3>
            <p className="text-gray-600">
              Automate infrastructure provisioning using Infrastructure
              as Code tools like Terraform to improve consistency
              and reduce operational overhead.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">
              Cloud Cost Optimization
            </h3>
            <p className="text-gray-600">
              Implement FinOps strategies to optimize cloud spending,
              improve resource efficiency, and reduce unnecessary costs.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

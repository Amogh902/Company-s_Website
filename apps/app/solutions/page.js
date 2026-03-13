export default function SolutionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-32">

      <h1 className="text-5xl font-bold mb-8">
        Solutions
      </h1>

      <p className="text-lg text-gray-600 mb-12">
        OffshoreMitra helps organizations solve complex infrastructure
        and DevOps challenges through scalable cloud solutions and
        automation strategies.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            DevOps Transformation
          </h2>
          <p className="text-gray-600">
            Implement CI/CD pipelines, automation, and modern DevOps
            practices to accelerate software delivery.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Cloud Migration
          </h2>
          <p className="text-gray-600">
            Move legacy infrastructure to scalable cloud platforms
            such as AWS, Azure, and Google Cloud.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Infrastructure Automation
          </h2>
          <p className="text-gray-600">
            Automate infrastructure provisioning using Infrastructure
            as Code tools like Terraform and CloudFormation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Cloud Cost Optimization
          </h2>
          <p className="text-gray-600">
            Reduce cloud spending by implementing FinOps practices and
            infrastructure efficiency strategies.
          </p>
        </div>

      </div>

    </div>
  );
}
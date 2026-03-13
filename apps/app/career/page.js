import PageHero from "../../components/PageHero";

export default function CareersPage() {
  return (
    <div>

      <PageHero
        title="Careers at OffshoreMitra"
        description="Join our team of DevOps and cloud engineers building modern infrastructure solutions for companies worldwide."
      />

      <section className="max-w-6xl mx-auto px-4 py-20">

        <div className="text-center mb-16">

          <h2 className="text-3xl font-bold text-gray-900">
            Work With Us
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are always looking for talented engineers passionate about
            DevOps, cloud infrastructure, and automation.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">

            <h3 className="text-xl font-semibold mb-3">
              DevOps Engineer
            </h3>

            <p className="text-gray-600 mb-4">
              Work with modern CI/CD pipelines, Kubernetes, and cloud platforms.
            </p>

            <button className="text-blue-600 font-medium hover:underline">
              Apply Now →
            </button>

          </div>

          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">

            <h3 className="text-xl font-semibold mb-3">
              Cloud Engineer
            </h3>

            <p className="text-gray-600 mb-4">
              Design and manage scalable infrastructure across AWS and Azure.
            </p>

            <button className="text-blue-600 font-medium hover:underline">
              Apply Now →
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

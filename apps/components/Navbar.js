import PageHero from "../../components/PageHero";
import Link from "next/link";

export default function CareersPage() {
  return (
    <div>

      <PageHero
        title="Careers at OffshoreMitra"
        description="Join our team of DevOps and cloud engineers building modern infrastructure solutions for companies worldwide."
      />

      {/* Why Work With Us */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Work With OffshoreMitra
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We believe in empowering engineers to build modern cloud
            infrastructure, work with cutting-edge technologies, and solve
            real-world scalability challenges.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">
                Work With Modern Tech
              </h3>
              <p className="text-gray-600">
                Kubernetes, Terraform, CI/CD, Cloud Platforms and modern
                DevOps tooling.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">
                Flexible Work Environment
              </h3>
              <p className="text-gray-600">
                Remote-friendly culture with flexible collaboration across
                engineering teams.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">
                Growth & Learning
              </h3>
              <p className="text-gray-600">
                Continuous learning through real-world DevOps and cloud
                infrastructure projects.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Open Positions */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-3xl font-bold text-gray-900">
              Open Positions
            </h2>

            <p className="text-gray-600 mt-4">
              We are always looking for talented engineers passionate about
              DevOps and cloud infrastructure.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">

              <h3 className="text-xl font-semibold mb-3">
                DevOps Engineer
              </h3>

              <p className="text-gray-600 mb-6">
                Work with CI/CD pipelines, Kubernetes, and cloud platforms to
                help companies scale their infrastructure.
              </p>

              <Link
                href="/contact"
                className="text-blue-600 font-medium hover:underline"
              >
                Apply Now →
              </Link>

            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">

              <h3 className="text-xl font-semibold mb-3">
                Cloud Engineer
              </h3>

              <p className="text-gray-600 mb-6">
                Design and manage scalable infrastructure across AWS, Azure,
                and modern cloud environments.
              </p>

              <Link
                href="/contact"
                className="text-blue-600 font-medium hover:underline"
              >
                Apply Now →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

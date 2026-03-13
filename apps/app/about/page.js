import PageHero from "../../components/PageHero";

export default function AboutPage() {
  return (
    <div>

      <PageHero
        title="About OffshoreMitra"
        description="Helping organizations accelerate digital transformation through DevOps, cloud infrastructure, and automation."
      />

      <div className="max-w-6xl mx-auto px-4 py-20">

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed">
              OffshoreMitra empowers engineering teams by building
              scalable infrastructure and modern DevOps workflows.
              Our mission is to help companies deliver software
              faster, more reliably, and at lower operational cost.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our Expertise
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our team specializes in DevOps engineering, cloud
              architecture, infrastructure as code, and automation.
              We help businesses design resilient infrastructure
              and optimize cloud operations.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

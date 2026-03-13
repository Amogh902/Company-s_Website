export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-32">

      <h1 className="text-5xl font-bold mb-8">
        About OffshoreMitra
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        OffshoreMitra helps organizations accelerate their digital
        transformation through DevOps practices, cloud infrastructure,
        and automation. Our mission is to simplify modern infrastructure
        and enable teams to deliver software faster and more reliably.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600">
            We aim to empower engineering teams with scalable
            infrastructure, efficient automation, and reliable
            deployment pipelines.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Our Expertise
          </h2>
          <p className="text-gray-600">
            Our team specializes in DevOps engineering, cloud
            architecture, infrastructure as code, and cost
            optimization strategies.
          </p>
        </div>

      </div>

    </div>
  );
}
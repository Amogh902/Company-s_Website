export default function WhyUs() {
  const features = [
    {
      title: "DevOps Expertise",
      description:
        "Extensive experience implementing CI/CD pipelines and DevOps best practices.",
      icon: "⚡",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Scalable and resilient infrastructure built on AWS, Azure and GCP.",
      icon: "☁️",
    },
    {
      title: "Automation",
      description:
        "Automate development workflows and infrastructure provisioning.",
      icon: "🤖",
    },
    {
      title: "Cost Optimization",
      description:
        "Reduce operational costs through efficient cloud architecture.",
      icon: "📉",
    },
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose OffshoreMitra
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition"
            >

              <div className="text-4xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
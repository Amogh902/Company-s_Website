export default function Services() {
  const services = [
    {
      title: "DevOps Engineering",
      description:
        "Automate and streamline development pipelines for faster delivery.",
      icon: "⚙️",
    },
    {
      title: "Cloud Solutions",
      description:
        "Build scalable infrastructure using AWS, Azure and GCP.",
      icon: "☁️",
    },
    {
      title: "FinOps Optimization",
      description:
        "Reduce cloud spending with cost optimization strategies.",
      icon: "💰",
    },
    {
      title: "DevSecOps",
      description:
        "Integrate security into the development lifecycle.",
      icon: "🔐",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition"
            >

              <div className="text-4xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
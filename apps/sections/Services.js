"use client";

import Link from "next/link";

import {
  Server,
  Cloud,
  Shield,
  DollarSign,
  Activity,
  UploadCloud
} from "lucide-react";

export default function Services() {

  const services = [
    {
      title: "DevOps",
      description:
        "Automate development pipelines and accelerate software delivery with modern DevOps practices.",
      icon: Server,
    },
    {
      title: "Cloud",
      description:
        "Design scalable cloud infrastructure across AWS, Azure and Google Cloud platforms.",
      icon: Cloud,
    },
    {
      title: "DevSecOps",
      description:
        "Integrate security into your CI/CD pipelines and infrastructure workflows.",
      icon: Shield,
    },
    {
      title: "FinOps",
      description:
        "Optimize cloud spending and improve cost efficiency with FinOps strategies.",
      icon: DollarSign,
    },
    {
      title: "SRE",
      description:
        "Improve reliability, scalability and performance using Site Reliability Engineering.",
      icon: Activity,
    },
    {
      title: "Cloud Migration",
      description:
        "Seamlessly migrate legacy applications and infrastructure to modern cloud environments.",
      icon: UploadCloud,
    },
  ];

  return (
    <section className="py-28 bg-white">

      <div className="max-w-6xl mx-auto px-4">

        {/* Section Title */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            OffshoreMitra helps organizations modernize infrastructure,
            improve deployment speed, and optimize cloud operations.
          </p>

        </div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (

              <div
                key={index}
                className="p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <Icon className="text-blue-600 mb-4" size={32} />

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

              </div>

            );
          })}

        </div>

        {/* View All Services Button */}

        <div className="text-center mt-16">

          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View All Services →
          </Link>

        </div>

      </div>

    </section>
  );
}

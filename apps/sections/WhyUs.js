"use client";

import {
  Zap,
  Cloud,
  Bot,
  TrendingDown
} from "lucide-react";

export default function WhyUs() {

  const features = [
    {
      title: "DevOps Expertise",
      description:
        "Extensive experience implementing CI/CD pipelines and modern DevOps practices.",
      icon: Zap,
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Design scalable, resilient infrastructure across AWS, Azure and Google Cloud.",
      icon: Cloud,
    },
    {
      title: "Automation First",
      description:
        "Automate infrastructure provisioning and development workflows.",
      icon: Bot,
    },
    {
      title: "Cost Optimization",
      description:
        "Reduce operational costs through efficient cloud architecture and FinOps practices.",
      icon: TrendingDown,
    },
  ];

  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-6xl mx-auto px-4">

        {/* Section Title */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose OffshoreMitra
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We help organizations modernize infrastructure, accelerate
            software delivery, and optimize cloud operations with
            proven DevOps and cloud engineering expertise.
          </p>

        </div>

        {/* Feature Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <Icon className="text-blue-600 mb-4" size={32} />

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

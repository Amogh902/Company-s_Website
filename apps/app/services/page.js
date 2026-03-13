"use client";

import Link from "next/link";

import {
  Server,
  Cloud,
  DollarSign,
  Shield,
  Activity,
  Brain,
  GitBranch,
  UploadCloud,
  Users,
  LifeBuoy,
  GraduationCap,
  Globe
} from "lucide-react";

import { motion } from "framer-motion";
import PageHero from "../../components/PageHero";

const services = [
  {
    title: "DevOps",
    desc: "Implement CI/CD pipelines, infrastructure automation, and scalable deployment strategies.",
    icon: Server
  },
  {
    title: "Cloud",
    desc: "Design and manage secure cloud infrastructure across AWS, Azure, and Google Cloud.",
    icon: Cloud
  },
  {
    title: "FinOps",
    desc: "Optimize cloud spending and improve cost efficiency with financial operations practices.",
    icon: DollarSign
  },
  {
    title: "DevSecOps",
    desc: "Integrate security into DevOps pipelines to ensure continuous compliance and protection.",
    icon: Shield
  },
  {
    title: "SRE",
    desc: "Improve reliability and scalability through site reliability engineering principles.",
    icon: Activity
  },
  {
    title: "AIOps & MLOps",
    desc: "Leverage AI and machine learning to automate infrastructure monitoring and operations.",
    icon: Brain
  },
  {
    title: "GitOps",
    desc: "Use Git-based workflows to manage infrastructure and deployments efficiently.",
    icon: GitBranch
  },
  {
    title: "Cloud Migration",
    desc: "Seamlessly migrate legacy systems to modern cloud platforms with minimal downtime.",
    icon: UploadCloud
  },
  {
    title: "Outsourcing",
    desc: "Extend your engineering team with experienced DevOps and cloud specialists.",
    icon: Users
  },
  {
    title: "DevOps & Cloud Support",
    desc: "24/7 operational support for cloud infrastructure and DevOps pipelines.",
    icon: LifeBuoy
  },
  {
    title: "DevOps & Cloud Training",
    desc: "Hands-on training programs to help teams adopt modern DevOps practices.",
    icon: GraduationCap
  },
  {
    title: "Web Development",
    desc: "Build modern, scalable web applications with secure and optimized architectures.",
    icon: Globe
  }
];

export default function ServicesPage() {
  return (
    <div>

      <PageHero
        title="Our Services"
        description="OffshoreMitra provides DevOps consulting, cloud infrastructure solutions, and automation to help businesses scale efficiently."
      />

      {/* Technical Services Grid */}

      <div className="max-w-6xl mx-auto px-4 py-20">

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
              >

                <Icon className="text-blue-600 mb-4" size={32} />

                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.desc}
                </p>

                <Link
                  href="/contact"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn More →
                </Link>

              </div>
            );
          })}

        </motion.div>

      </div>

      {/* Custom Staffing Section */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Custom Staffing Solutions
            </h2>

            <p className="text-gray-600 mb-6">
              OffshoreMitra provides flexible staffing solutions to help
              organizations scale engineering teams quickly with skilled
              DevOps, cloud, and development professionals.
            </p>

            <p className="text-gray-600 mb-6">
              Whether you need short-term specialists or long-term
              engineering support, our staffing solutions integrate
              seamlessly with your internal teams.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Request Staffing →
            </Link>

          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">

            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Why Companies Choose Our Staffing
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li>✔ Experienced DevOps engineers</li>
              <li>✔ Cloud architecture specialists</li>
              <li>✔ Flexible engagement models</li>
              <li>✔ Rapid onboarding</li>
              <li>✔ Dedicated technical support</li>

            </ul>

          </div>

        </div>

      </section>

    </div>
  );
}

"use client";

import { Cloud, Server, Shield, Activity } from "lucide-react";
import { motion } from "framer-motion";

import PageHero from "../../components/PageHero";

export default function ServicesPage() {
  return (
    <div>

      <PageHero
        title="Our Services"
        description="OffshoreMitra provides DevOps consulting, cloud infrastructure solutions, and automation to help businesses scale efficiently."
      />

      <div className="max-w-6xl mx-auto px-4 py-20">

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          {/* DevOps */}
          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">

            <Server size={36} className="text-blue-600 mb-4" />

            <h3 className="text-xl font-semibold mb-3">
              DevOps Engineering
            </h3>

            <p className="text-gray-600">
              CI/CD pipelines, automation, and infrastructure as code
              to accelerate software delivery.
            </p>

          </div>

          {/* Cloud */}
          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">

            <Cloud size={36} className="text-blue-600 mb-4" />

            <h3 className="text-xl font-semibold mb-3">
              Cloud Solutions
            </h3>

            <p className="text-gray-600">
              Design scalable cloud infrastructure across AWS,
              Azure, and Google Cloud.
            </p>

          </div>

          {/* FinOps */}
          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">

            <Activity size={36} className="text-blue-600 mb-4" />

            <h3 className="text-xl font-semibold mb-3">
              FinOps Optimization
            </h3>

            <p className="text-gray-600">
              Reduce cloud costs through monitoring,
              optimization, and efficient architecture.
            </p>

          </div>

          {/* DevSecOps */}
          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">

            <Shield size={36} className="text-blue-600 mb-4" />

            <h3 className="text-xl font-semibold mb-3">
              DevSecOps
            </h3>

            <p className="text-gray-600">
              Integrate security practices into your DevOps
              pipelines and infrastructure workflows.
            </p>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

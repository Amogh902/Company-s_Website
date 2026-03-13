"use client";

import { motion } from "framer-motion";
import PageHero from "../../components/PageHero";

export default function AboutPage() {
  return (
    <div>

      <PageHero
        title="About OffshoreMitra"
        description="Empowering businesses through modern DevOps and cloud engineering."
      />

      {/* About Intro */}

      <section className="py-24">

        <motion.div
          className="max-w-5xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-relaxed">
            OffshoreMitra is a DevOps and cloud consulting company dedicated to
            helping organizations modernize their infrastructure and accelerate
            software delivery. By combining cloud technologies with modern
            DevOps practices, we help businesses improve scalability,
            reliability, and operational efficiency.
          </p>

        </motion.div>

      </section>

      {/* Mission */}

      <section className="bg-gray-50 py-24">

        <motion.div
          className="max-w-5xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our mission is to be a trusted technology partner for businesses
            adopting cloud and DevOps. We provide tailored solutions that help
            organizations harness the full potential of cloud-native
            technologies and modern engineering practices.
          </p>

        </motion.div>

      </section>

      {/* Values */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-4">

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-bold text-gray-900">
              Our Values
            </h2>

            <p className="text-gray-600 mt-4">
              The principles that guide everything we do.
            </p>

          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {[
              {
                title: "Agility",
                desc: "We continuously adapt to the evolving DevOps and cloud ecosystem."
              },
              {
                title: "Customer Focus",
                desc: "Our clients’ success is our top priority."
              },
              {
                title: "Expertise",
                desc: "Deep experience in DevOps automation and cloud architecture."
              },
              {
                title: "Partnership",
                desc: "We work closely with clients as long-term technology partners."
              }
            ].map((value, i) => (

              <div
                key={i}
                className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <h3 className="font-semibold text-lg mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-600">
                  {value.desc}
                </p>

              </div>

            ))}

          </motion.div>

        </div>

      </section>

    </div>
  );
}

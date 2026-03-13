"use client";

import { motion } from "framer-motion";

export default function Testimonials() {

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "CTO, FinTech Startup",
      text: "OffshoreMitra helped us redesign our DevOps pipelines and significantly improved deployment speed.",
      avatar: "https://i.pravatar.cc/100?img=3"
    },
    {
      name: "Ananya Mehta",
      role: "Head of Engineering",
      text: "Their cloud optimization strategy reduced our infrastructure costs by nearly 30%.",
      avatar: "https://i.pravatar.cc/100?img=5"
    },
    {
      name: "Daniel Clark",
      role: "VP Technology",
      text: "Professional, reliable, and extremely knowledgeable in modern DevOps practices.",
      avatar: "https://i.pravatar.cc/100?img=8"
    }
  ];

  return (
    <section className="bg-gray-50 py-24">

      <div className="max-w-6xl mx-auto px-4">

        {/* Section Heading */}

        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Engineering Teams
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Companies rely on OffshoreMitra to modernize infrastructure,
            accelerate DevOps adoption, and optimize cloud operations.
          </p>

        </div>

        {/* Testimonials Grid */}

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {testimonials.map((testimonial, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              <p className="text-gray-600 mb-6">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4">

                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>

                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>

              </div>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

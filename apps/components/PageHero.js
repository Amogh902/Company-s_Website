"use client";

import { motion } from "framer-motion";

export default function PageHero({ title, description }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-28 text-white">

      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 flex justify-center">

        <div className="w-[700px] h-[700px] bg-white rounded-full blur-3xl opacity-10"></div>

      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h1>

        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          {description}
        </p>

      </motion.div>

    </section>
  );
}

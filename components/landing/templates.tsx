"use client";

import { motion } from "framer-motion";

const templates = [
  {
    title: "Developer",
    category: "Full Stack",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Student",
    category: "College",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Designer",
    category: "Creative",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Business",
    category: "Professional",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Minimal",
    category: "Modern",
    color: "from-slate-500 to-slate-700",
  },
  {
    title: "Cyberpunk",
    category: "Premium",
    color: "from-indigo-500 to-violet-500",
  },
];

export default function Templates() {
  return (
    <section className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Choose Your Portfolio Style
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Professionally designed templates powered by AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {templates.map((template, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900"
            >

              <div
                className={`h-56 bg-gradient-to-br ${template.color} flex items-center justify-center`}
              >
                <h3 className="text-3xl font-bold text-white">
                  {template.title}
                </h3>
              </div>

              <div className="p-6">

                <span className="text-blue-400 text-sm">
                  {template.category}
                </span>

                <h4 className="text-2xl font-bold mt-2 text-white">
                  {template.title} Portfolio
                </h4>

                <p className="text-slate-400 mt-4">
                  AI optimized portfolio template for modern professionals.
                </p>

                <div className="flex gap-3 mt-6">

                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition">
                    Use Template
                  </button>

                  <button className="flex-1 border border-slate-700 hover:bg-slate-800 py-3 rounded-xl transition">
                    Preview
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
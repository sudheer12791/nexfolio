"use client";

import { motion } from "framer-motion";

export default function AIDemo() {
  return (
    <section className="py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-400 font-semibold">
            AI Portfolio Builder
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Let AI Build Everything
          </h2>

          <p className="text-slate-400 mt-6 text-lg leading-8">
            Simply answer a few questions and Nexfolio AI generates your
            portfolio, resume, bio, skills section, and personal website.
          </p>

          <ul className="mt-8 space-y-4 text-slate-300">
            <li>✅ AI writes professional content</li>
            <li>✅ AI suggests modern templates</li>
            <li>✅ AI improves your resume</li>
            <li>✅ AI publishes your portfolio</li>
          </ul>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl"
        >
          <div className="space-y-4">

            <div className="bg-blue-600 rounded-xl p-4 w-fit">
              👋 Hi! I'm Nexfolio AI.
            </div>

            <div className="bg-slate-800 rounded-xl p-4 ml-10">
              My name is Sudheer.
            </div>

            <div className="bg-blue-600 rounded-xl p-4">
              Great! What technologies do you know?
            </div>

            <div className="bg-slate-800 rounded-xl p-4 ml-10">
              React, Next.js, Python and VLSI.
            </div>

            <div className="bg-green-600 rounded-xl p-4">
              🎉 Portfolio Generated Successfully!
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for students getting started.",
    features: [
      "1 Portfolio",
      "Basic AI Builder",
      "5 Free Templates",
      "Portfolio Hosting",
      "Community Support",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$9",
    description: "Best for professionals and job seekers.",
    features: [
      "Unlimited Portfolios",
      "Unlimited AI",
      "Premium Templates",
      "Custom Domain",
      "Resume Builder",
      "Portfolio Analytics",
      "Priority Support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For colleges and companies.",
    features: [
      "Everything in Pro",
      "College Dashboard",
      "Recruiter Portal",
      "Team Management",
      "Dedicated Support",
      "Custom Integrations",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Simple Pricing
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Start for free and upgrade when you're ready.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.03 }}
              className={`rounded-3xl border p-8 ${
                plan.featured
                  ? "border-blue-500 bg-slate-950"
                  : "border-slate-800 bg-slate-950"
              }`}
            >
              {plan.featured && (
                <div className="mb-6 inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-2 text-slate-400">
                {plan.description}
              </p>

              <div className="mt-8 text-5xl font-bold text-white">
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className="text-lg text-slate-400">/month</span>
                )}
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <Check className="h-5 w-5 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-3 font-semibold transition ${
                  plan.featured
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                {plan.name === "Enterprise"
                  ? "Contact Sales"
                  : "Get Started"}
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
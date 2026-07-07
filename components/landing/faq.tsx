"use client";

const faqs = [
  {
    question: "Is Nexfolio free?",
    answer: "Yes! You can create your first portfolio for free.",
  },
  {
    question: "Can AI build my portfolio?",
    answer: "Yes. Simply answer a few questions and AI generates your portfolio automatically.",
  },
  {
    question: "Can I use my own domain?",
    answer: "Yes. Pro users can connect a custom domain.",
  },
  {
    question: "Does it generate ATS resumes?",
    answer: "Yes. Nexfolio creates ATS-friendly resumes with AI.",
  },
];

export default function FAQ() {
  return (
    <section className="py-28 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-white">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {faq.question}
              </h3>

              <p className="mt-3 text-slate-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
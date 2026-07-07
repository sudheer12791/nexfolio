export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 max-w-xl w-full">

        <h1 className="text-4xl font-bold text-white">
          📄 AI Resume Generator
        </h1>

        <p className="mt-6 text-slate-400">
          Generate an ATS-friendly resume from your portfolio.
        </p>

        <button className="mt-8 w-full rounded-xl bg-green-600 py-4 hover:bg-green-700 transition">
          Generate Resume
        </button>

        <button className="mt-4 w-full rounded-xl bg-blue-600 py-4 hover:bg-blue-700 transition">
          Download PDF
        </button>

      </div>

    </main>
  );
}
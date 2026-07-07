export default function PublishPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 max-w-xl w-full">

        <h1 className="text-4xl font-bold text-white">
          🎉 Publish Portfolio
        </h1>

        <p className="mt-5 text-slate-400">
          Your portfolio is ready to go live.
        </p>

        <div className="mt-8 bg-slate-800 rounded-xl p-5">
          https://nexfolio.app/u/yourusername
        </div>

        <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 hover:bg-blue-700 transition">
          Publish Portfolio
        </button>

      </div>

    </main>
  );
}
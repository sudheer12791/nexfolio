export default function AIAssistantCard() {
  return (
    <div className="rounded-3xl border border-blue-500 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        🤖 Nexfolio AI
      </h2>

      <p className="text-slate-400 mt-4">
        Hello! I'm your AI assistant.

        I can:

        • Build your portfolio

        • Generate resumes

        • Improve project descriptions

        • Prepare interview answers

      </p>

      <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700 transition">
        Start AI Chat
      </button>

    </div>
  );
}
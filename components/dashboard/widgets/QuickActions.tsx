export default function QuickActions() {
  const actions = [
    "Create Portfolio",
    "Generate Resume",
    "Chat with AI",
    "Publish Website",
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-bold text-white">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {actions.map((action) => (
          <button
            key={action}
            className="rounded-xl bg-blue-600 py-4 hover:bg-blue-700 transition"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
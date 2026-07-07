export default function ChatSidebar() {
  return (
    <aside className="w-72 border-r border-slate-800 bg-slate-950 p-6">

      <h2 className="text-2xl font-bold text-white">
        AI Chats
      </h2>

      <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 hover:bg-blue-700">
        + New Chat
      </button>

      <div className="mt-8 space-y-3">

        <div className="rounded-xl bg-slate-900 p-4">
          Portfolio Creation
        </div>

        <div className="rounded-xl bg-slate-900 p-4">
          Resume Builder
        </div>

      </div>

    </aside>
  );
}
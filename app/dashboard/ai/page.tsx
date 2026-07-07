import ChatSidebar from "@/components/ai/ChatSidebar";
import ChatEngine from "@/components/ai/ChatEngine";

export default function AIPage() {
  return (
    <main className="flex h-screen bg-slate-950">

      <ChatSidebar />

      <section className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-white mb-8">
          Nexfolio AI Portfolio Builder
        </h1>

        <ChatEngine />

      </section>

    </main>
  );
}
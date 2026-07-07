import Sidebar from "@/components/dashboard/layout/Sidebar";
import Topbar from "@/components/dashboard/layout/Topbar";
import StatCard from "@/components/dashboard/cards/StatCard";
import QuickActions from "@/components/dashboard/widgets/QuickActions";
import RecentActivity from "@/components/dashboard/widgets/RecentActivity";
import AIAssistantCard from "@/components/dashboard/widgets/AIAssistantCard";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-slate-950">

      <Sidebar />

      <section className="flex-1">

        <Topbar />

        <div className="p-8">

          <div className="grid lg:grid-cols-3 gap-6">

            <StatCard title="Portfolios" value="1" />
            <StatCard title="Resume Score" value="96%" />
            <StatCard title="Visitors" value="125" />

          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-8">

            <QuickActions />

            <RecentActivity />

          </div>

          <div className="mt-8">

            <AIAssistantCard />

          </div>

        </div>

      </section>

    </main>
  );
}
const activities = [
  "Portfolio created",
  "Resume generated",
  "AI updated About Me",
  "Portfolio published",
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h3 className="text-xl font-bold text-white">
        Recent Activity
      </h3>

      <div className="mt-6 space-y-4">
        {activities.map((activity) => (
          <div
            key={activity}
            className="rounded-xl bg-slate-800 p-4"
          >
            {activity}
          </div>
        ))}
      </div>

    </div>
  );
}
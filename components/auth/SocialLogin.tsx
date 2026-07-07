export default function SocialLogin() {
  return (
    <div className="mt-6 space-y-3">
      <button className="w-full rounded-xl border border-slate-700 py-3 hover:bg-slate-800 transition">
        Continue with Google
      </button>

      <button className="w-full rounded-xl border border-slate-700 py-3 hover:bg-slate-800 transition">
        Continue with GitHub
      </button>
    </div>
  );
}
type ProgressProps = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: ProgressProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-slate-400 mb-2">
        <span>
          Question {current} of {total}
        </span>

        <span>
          {Math.round(percentage)}%
        </span>
      </div>

      <div className="h-2 bg-slate-800 rounded-full">
        <div
          className="h-2 bg-blue-600 rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}
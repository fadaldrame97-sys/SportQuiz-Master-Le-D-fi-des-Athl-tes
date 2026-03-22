export default function ProgressBar({ current, total }) {
    const percentage = (current / total) * 100;
  
    return (
      <div className="mb-4">
        <p className="text-sm text-gray-400 mb-2">
          Question {current} / {total}
        </p>
  
        <div className="w-full h-2 bg-gray-700 rounded">
          <div
            className="h-full bg-blue-500 rounded"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  }
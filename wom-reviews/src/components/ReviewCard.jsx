import { useState } from "react";

export default function ReviewCard({ name, rating, comment }) {
  const [expanded, setExpanded] = useState(false);

  const shortText =
    comment.length > 80 ? comment.slice(0, 80) + "..." : comment;

  return (
    <div className="bg-white border rounded-xl p-5 hover:shadow-md transition">
      <div className="flex justify-between">
        <h4 className="font-semibold">{name}</h4>
        <span className="text-orange-500">{"★".repeat(rating)}</span>
      </div>

      <p className="mt-3 text-gray-700 text-sm">
        {expanded ? comment : shortText}
      </p>

      {comment.length > 80 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-orange-600 mt-2 font-medium"
        >
          {expanded ? "View less" : "View more"}
        </button>
      )}

      <span className="text-xs text-green-600 mt-3 inline-block">
        ✔ Verified Buyer
      </span>
    </div>
  );
}

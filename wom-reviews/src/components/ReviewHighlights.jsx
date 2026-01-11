import { reviewHighlights } from "../data/reviews";

export default function ReviewHighlights() {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-8">
      {reviewHighlights.map((text, i) => (
        <span
          key={i}
          className="bg-orange-100 text-orange-700 text-sm px-4 py-2 rounded-full font-medium"
        >
          {text}
        </span>
      ))}
    </div>
  );
}

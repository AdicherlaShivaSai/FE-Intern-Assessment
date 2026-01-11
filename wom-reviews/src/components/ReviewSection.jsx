import { useState } from "react";
import RatingSummary from "./RatingSummary.jsx";
import StatsBar from "./StatsBar.jsx";
import ReviewCard from "./ReviewCard.jsx";
import { reviews } from "../data/reviews.js";
import ReviewHighlights from "./ReviewHighlights.jsx";

export default function ReviewSection() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="bg-[#FFF7ED] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <RatingSummary />
        <StatsBar />
        <ReviewHighlights />

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {reviews.slice(0, visibleCount).map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>

        {/* Load More */}
        {visibleCount < reviews.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 border rounded-full font-medium hover:bg-black hover:text-white transition"
            >
              Load more reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

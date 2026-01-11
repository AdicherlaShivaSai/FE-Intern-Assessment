import { stats } from "../data/reviews";
import useCountUp from "../hooks/useCountUp";

export default function StatsBar() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {stats.map((item, i) => {
        const value = useCountUp(item.value);
        return (
          <div
            key={i}
            className="bg-orange-50 border rounded-xl p-6 text-center"
          >
            <h3 className="text-3xl font-bold text-orange-600">
              {value}{item.suffix}
            </h3>
            <p className="text-gray-700 mt-1">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}

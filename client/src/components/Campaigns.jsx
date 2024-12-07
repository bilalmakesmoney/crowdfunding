import { GiStarSwirl } from "react-icons/gi";
import { Link } from "react-router";

const Campaigns = () => {
  const campaigndata = [
    {
      id: 1,
      img: "",
      title: "Making a car from scratch.",
      description: "Help me make a car from scratch.",
      category: "Art",
      target: 0.1,
      amountCollected: 0.002,
      days: 16,
      owner: "bilalprovidesvalue",
    },
    {
      id: 2,
      img: "",
      title: "Making a car from scratch.",
      description: "Help me make a car from scratch.",
      category: "Art",
      target: 0.1,
      amountCollected: 0.002,
      days: 16,
      owner: "bilalprovidesvalue",
    },
    {
      id: 3,
      img: "",
      title: "Making a car from scratch.",
      description: "Help me make a car from scratch.",
      category: "Art",
      target: 0.1,
      amountCollected: 0.002,
      days: 16,
      owner: "bilalprovidesvalue",
    },
    {
      id: 4,
      img: "",
      title: "Making a car from scratch.",
      description: "Help me make a car from scratch.",
      category: "Art",
      target: 0.1,
      amountCollected: 0.002,
      days: 16,
      owner: "bilalprovidesvalue",
    },
    {
      id: 5,
      img: "",
      title: "Making a car from scratch.",
      description: "Help me make a car from scratch.",
      category: "Art",
      target: 0.1,
      amountCollected: 0.002,
      days: 16,
      owner: "bilalprovidesvalue",
    },
    {
      id: 6,
      img: "",
      title: "Making a car from scratch.",
      description: "Help me make a car from scratch.",
      category: "Art",
      target: 0.1,
      amountCollected: 0.002,
      days: 16,
      owner: "bilalprovidesvalue",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
      {campaigndata.map((data) => (
        <Link
          className="w-full h-full relative"
          to={`/campaigns/${data.id}`}
          key={data.id}
        >
          <div className="bg-slate-300 w-full h-40 rounded-xl"></div>
          <div className="px-6 py-6 -translate-y-4 rounded-b-xl bg-secondary mb-8">
            <div className="flex items-center gap-3">
              <GiStarSwirl className="text-xl text-white/40" />
              <span className="text-white/40">{data.category}</span>
            </div>
            <h4 className="my-2 text-white font-bold">{data.title}</h4>
            <p className="text-xs text-white/40">{data.description}</p>
            <div className="w-full flex justify-between items-center mt-3">
              <div className="flex flex-col items-center">
                <span className="text-white/70">{data.amountCollected}</span>
                <span className="text-white/40 text-xs">
                  Raised of {data.target}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white/70">{data.days}</span>
                <span className="text-white/40 text-xs">Days left</span>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-4">
              <div className="bg-slate-300 w-10 h-10 rounded-full"></div>
              <span className="text-sm text-white/40">By {data.owner}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Campaigns;

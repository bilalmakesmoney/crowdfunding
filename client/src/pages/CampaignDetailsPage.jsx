import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const CampaignDetailsPage = () => {
  const { id } = useParams();

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
      totalDonators: 2,
    },
    {
      id: 2,
      img: "",
      title: "Making a car from scratch.",
      description: "Help me make a car from scratch.",
      totalDonators: 2,
      category: "Art",
      target: 0.1,
      amountCollected: 0.002,
      days: 16,
      owner: "bilalprovidesvalue",
      totalDonators: 2,
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
      totalDonators: 2,
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
      totalDonators: 2,
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
      totalDonators: 2,
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
      totalDonators: 2,
    },
  ];

  const campaign = campaigndata.find((item) => item.id === parseInt(id));

  if (!campaign) return <div>Campaign not found</div>;

  return (
    <div className="w-screen min-h-screen px-12">
      <header className="w-full flex flex-row justify-between items-center z-50 py-3">
        <h1 className="text-3xl gradient font-black cursor-pointer">Fundra</h1>
        <SearchBar />
        <div className="flex items-center gap-4">
          <div className="py-2 px-4 bg-primary rounded-md">Start Campaign</div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
            <div className="h-2 w-full bg-secondary rounded-full"></div>
          </div>
        </div>
      </header>
      <div className="flex w-full mt-6 justify-between items-center">
        <div className="flex flex-col justify-between gap-5 w-[75%] h-full">
          <div className="bg-slate-300 w-full h-60 rounded-xl"></div>
          <div className="h-1 w-full bg-secondary rounded-full">
            <div className="w-[30%] h-full bg-primary rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col w-[20%] gap-4">
          {/* Card 1 */}
          <div className="flex flex-col">
            <div className="w-full h-10 bg-[#555]/40 rounded-md flex justify-center items-center text-lg">
              {campaign.days}
            </div>
            <div className="w-full bg-secondary h-10 -translate-y-1 rounded-b-md text-lg flex justify-center items-center">
              days left
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col">
            <div className="w-full h-10 bg-[#555]/40 rounded-md flex justify-center items-center text-lg">
              {campaign.amountCollected}
            </div>
            <div className="w-full bg-secondary h-10 -translate-y-1 rounded-b-md text-lg flex justify-center items-center">
              Raised of {campaign.target}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full h-10 bg-[#555]/40 rounded-md flex justify-center items-center text-lg">
              {campaign.totalDonators}
            </div>
            <div className="w-full bg-secondary h-10 -translate-y-1 rounded-b-md text-lg flex justify-center items-center">
              Total donators
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between mt-4">
        <div className="w-[60%]">
          <h4 className="mt-2">CREATOR</h4>
          <div className="flex gap-3 mt-3 items-center">
            <div className="bg-slate-300 w-10 h-10 rounded-full"></div>
            <span className="flex flex-col">
              <span className="text-white/70">{campaign.owner}</span>
              <span className="text-white/40 text-xs">1 Campaign</span>
            </span>
          </div>
          <h4 className="mt-4">STORY</h4>
          <p className="text-white/40">{campaign.description}</p>
          <h4 className="mt-4">DONATORS</h4>
          <div className="flex flex-col ">
            <span className="text-white/40">1. CHAD</span>
            <span className="text-white/40">2. GIGACHAD</span>
          </div>
        </div>
        <div className="w-[40%] h-full">
          <h4 className="mb-4">FUND</h4>
          <div className="w-full h-full bg-secondary rounded-xl pt-3 pb-6 px-6 flex flex-col items-center mb-6">
            <h5 className="text-white/40 mb-4">Plege without Reward</h5>
            <input
              type="text"
              className="w-full h-12 rounded-md bg-transparent border-2 px-6 mb-3 border-[#454545]/40"
              placeholder="ETH0.1"
            />
            <div className="w-full px-4 py-1 bg-background/50 rounded-md mb-4">
              <h6>Back it because you believe in it.</h6>
              <span className="text-xs text-white/40">
                Support the project for no reward. just because it speak for
                you.
              </span>
            </div>
            <button className="w-full rounded-md py-2 bg-primary ">FUND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailsPage;

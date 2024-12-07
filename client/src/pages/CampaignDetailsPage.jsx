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
      totalDonators: 6,
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
      totalDonators: 6,
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
      totalDonators: 6,
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
      totalDonators: 6,
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
      totalDonators: 6,
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
      totalDonators: 6,
    },
  ];

  const campaign = campaigndata.find((item) => item.id === parseInt(id));

  if (!campaign) return <div>Campaign not found</div>;

  return (
    <div className="w-full min-h-screen px-6 sm:px-12">
      <header className="w-full flex justify-between items-center py-4 shadow-md">
        {/* Logo */}
        <h1 className="text-3xl sm:text-4xl font-black gradient cursor-pointer mb-4 sm:mb-0">
          Fundra
        </h1>

        {/* SearchBar: hidden on mobile, visible on larger screens */}
        <div className="hidden new:block mb-4 sm:mb-0">
          <SearchBar />
        </div>

        {/* Buttons & Avatar */}
        <div className="flex justify-between items-center gap-4">
          <div
            className="py-2 px-4 text-sm flex justify-center items-center bg-primary text-white rounded-md cursor-pointer text-center bad:hidden" // add onClick handler
          >
            Launch
          </div>
          <div
            className="py-2 px-4 sm:text-md text-sm justify-center items-center bg-primary text-white rounded-md cursor-pointer text-center hidden bad:flex" // add onClick handler
          >
            Start Campaign
          </div>
          <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
        </div>
      </header>

      <div className="new:hidden  my-4">
        <SearchBar />
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-6 mt-6">
        <div className="flex flex-col sm:w-[75%] w-full gap-5">
          <div className="bg-slate-300 w-full h-60 rounded-xl"></div>
          <div className="h-1 w-full bg-secondary rounded-full">
            <div className="w-[30%] h-full bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col sm:w-[20%] w-full gap-6 sm:gap-4">
          <div className="flex flex-col">
            <div className="w-full h-10 bg-[#555]/40 rounded-md flex justify-center items-center text-lg">
              {campaign.days}
            </div>
            <div className="w-full bg-secondary h-10 -translate-y-1 rounded-b-md text-lg flex justify-center items-center">
              days left
            </div>
          </div>

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

      <div className="flex flex-col sm:flex-row justify-between mt-4 gap-6">
        <div className="w-full sm:w-[60%]">
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
          <div className="flex flex-col">
            <span className="text-white/40">1. CHAD</span>
            <span className="text-white/40">2. GIGACHAD</span>
          </div>
        </div>

        <div className="w-full sm:w-[40%] h-full">
          <h4 className="mb-4">FUND</h4>
          <div className="w-full h-full bg-secondary rounded-xl pt-3 pb-6 px-6 flex flex-col items-center mb-6">
            <h5 className="text-white/40 mb-4">Pledge without Reward</h5>
            <input
              type="text"
              className="w-full h-12 rounded-md bg-transparent border-2 px-6 mb-3 border-[#454545]/40"
              placeholder="ETH0.1"
            />
            <div className="w-full px-4 py-1 bg-background/50 rounded-md mb-4">
              <h6>Back it because you believe in it.</h6>
              <span className="text-xs text-white/40">
                Support the project for no reward, just because it speaks for
                you.
              </span>
            </div>
            <button className="w-full rounded-md py-2 bg-primary">FUND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailsPage;

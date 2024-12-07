import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Campaigns from "../components/Campaigns";

const CampaignsPage = () => {
  return (
    <div className="w-screen min-h-screen px-6 sm:px-12">
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

      <Categories />
      <Campaigns />
    </div>
  );
};

export default CampaignsPage;

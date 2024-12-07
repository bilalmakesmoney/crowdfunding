import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Campaigns from "../components/Campaigns";

const CampaignsPage = () => {
  return (
    <div className="w-screen min-h-screen px-12">
      <header className="w-full flex flex-row justify-between items-center z-50 py-3">
        <h1 className="text-3xl gradient font-black cursor-pointer">Fundra</h1>
        <SearchBar />
        <div className="flex items-center gap-4">
          <div className="py-2 px-4 bg-primary rounded-md">Start Campaign</div>
          <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
        </div>
      </header>
      <Categories />
      <Campaigns />
    </div>
  );
};
export default CampaignsPage;

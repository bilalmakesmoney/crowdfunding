import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="w-96 h-12 bg-secondary rounded-full relative">
      <input
        type="text"
        className="w-[72%] h-full rounded-full border-none outline-none bg-transparent px-8"
        placeholder="Search campaigns"
      />
      <button className="w-[28%] flex justify-center items-center gap-2 absolute top-0 right-0 h-full text-white bg-primary rounded-full text-center ">
        <span>Search</span>
        <IoSearch className="text-xl" />
      </button>
    </div>
  );
};
export default SearchBar;

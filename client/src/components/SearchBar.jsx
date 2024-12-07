import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="w-full new:w-96 h-12 bg-secondary rounded-full relative mx-auto">
      <input
        type="text"
        className="w-[65%] sm:w-[72%] h-full rounded-full border-none outline-none bg-transparent px-4 sm:px-8"
        placeholder="Search campaigns"
      />
      <button className="w-[35%] sm:w-[28%] flex justify-center items-center gap-2 absolute top-0 right-0 h-full text-white bg-primary rounded-full text-sm sm:text-base">
        <span>Search</span>
        <IoSearch className="text-lg sm:text-xl" />
      </button>
    </div>
  );
};

export default SearchBar;

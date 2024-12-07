const Categories = () => {
  return (
    <div className="flex items-center gap-4 my-3 overflow-x-auto whitespace-nowrap">
      <div className="px-5 py-1 rounded-full bg-primary shrink-0 cursor-pointer">
        Art
      </div>
      <div className="px-5 py-1 rounded-full bg-secondary shrink-0 cursor-pointer">
        Tech
      </div>
      <div className="px-5 py-1 rounded-full bg-secondary shrink-0 cursor-pointer">
        Comics
      </div>
      <div className="px-5 py-1 rounded-full bg-secondary shrink-0 cursor-pointer">
        Education
      </div>
      <div className="px-5 py-1 rounded-full bg-secondary shrink-0 cursor-pointer">
        Health
      </div>
      <div className="px-5 py-1 rounded-full bg-secondary shrink-0 cursor-pointer">
        Sports
      </div>
    </div>
  );
};

export default Categories;

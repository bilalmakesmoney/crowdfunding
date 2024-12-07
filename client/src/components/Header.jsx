import { CiLogin } from "react-icons/ci";

const Header = () => {
  return (
    <div className="w-full py-3 flex flex-col md:flex-row justify-between items-center px-4">
      <h1 className="text-2xl md:text-3xl gradient font-black cursor-pointer">
        Fundra
      </h1>
      <div className="flex items-center gap-3 mt-3 md:mt-0">
        <div className="flex justify-center items-center px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-transparent border border-primary rounded-md cursor-pointer">
          Register
        </div>
        <div className="flex justify-center items-center px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-primary rounded-md gap-1 cursor-pointer">
          <span>Login</span>
          <CiLogin className="text-lg md:text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;

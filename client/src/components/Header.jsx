import { CiLogin } from "react-icons/ci";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="w-full py-2 flex flex-col md:flex-row justify-between items-center px-4">
      <Link to="/" className="text-3xl sm:text-4xl gradient font-black logo">
        Fundra
      </Link>
      <div className="flex items-center gap-2 sm:gap-3 mt-2 md:mt-0">
        <Link
          to="/signup"
          className="flex justify-center items-center px-3 py-1.5 md:px-4 md:py-2 text-xs sm:text-sm md:text-base bg-transparent border border-primary rounded-md cursor-pointer"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="flex justify-center items-center px-3 py-1.5 md:px-4 md:py-2 text-xs sm:text-sm md:text-base bg-primary rounded-md gap-1 cursor-pointer"
        >
          <span>Login</span>
          <CiLogin className="text-base sm:text-lg md:text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Header;

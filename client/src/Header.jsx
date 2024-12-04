import { CiLogin } from "react-icons/ci";

const Header = () => {
  return (
    <div className="w-full py-3 flex justify-between items-center">
      <h1 className="text-3xl gradient font-black cursor-pointer">Fundra</h1>
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="flex justify-center items-center px-4 py-2 bg-transparent border border-primary rounded-md">
          Register
        </div>
        <div className="flex justify-center items-center px-4 py-2 bg-primary rounded-md gap-1 cursor-pointer">
          <span>Login</span>
          <CiLogin className="text-2xl" />
        </div>
      </div>
    </div>
  );
};
export default Header;

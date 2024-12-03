import { RxArrowTopRight } from "react-icons/rx";
import image from "../public/hero.png";

const Hero = () => {
  return (
    <div className="w-full flex mt-28 relative">
      <div className="">
        <h1 className="text-[60px] leading-[75px]">
          <span>Your Vision,</span> <br />
          <span className="font-bold">
            Backed by the <span className="gradient">World.</span>
          </span>
        </h1>
        <p className="text-white/50 mt-3 text-md">
          Unite passion and support to create something extraordinary. Start
          your journey today.
        </p>
        <div className="flex mt-5 w-fit justify-center items-center px-4 py-2 bg-primary rounded-md gap-1 cursor-pointer">
          <span>Start Fundraising</span>
          <RxArrowTopRight className="text-2xl" />
        </div>
      </div>
      <img
        src={image}
        alt=""
        className="h-[500px] absolute -top-[40%] left-[43%]"
      />
    </div>
  );
};
export default Hero;

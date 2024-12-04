import { RxArrowTopRight } from "react-icons/rx";
import image from "../public/hero.png";

const Hero = () => {
  return (
    <div className="w-full flex mt-20 relative">
      <div className="">
        <h1 className="text-[60px] leading-[75px] font-bold">
          <span className="text-primary">Trust</span> shouldn’t be a <br />{" "}
          battle when <span className="text-primary">life</span> is on <br />{" "}
          the <span className="text-primary">line.</span>
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
        className="h-[500px] absolute -top-[25%] left-[43%]"
      />
    </div>
  );
};
export default Hero;

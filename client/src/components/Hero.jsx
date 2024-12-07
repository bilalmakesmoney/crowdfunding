import { RxArrowTopRight } from "react-icons/rx";
import image from "../../public/hero.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row mt-20 relative items-center lg:items-start max-w-[1200px] mx-auto px-4">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-[50px] xl:text-[60px] leading-tight lg:leading-[60px] xl:leading-[75px] font-bold">
          <span className="text-primary">Trust</span> shouldn’t be a{" "}
          <br className="hidden lg:block" /> battle when{" "}
          <span className="text-primary">life</span> is on{" "}
          <br className="hidden lg:block" /> the{" "}
          <span className="text-primary">line.</span>
        </h1>
        <p className="text-white/50 mt-3 text-sm lg:text-md max-w-[500px] mx-auto lg:mx-0">
          Unite passion and support to create something extraordinary. Start
          your journey today.
        </p>
        <div className="flex mt-5 w-fit justify-center items-center px-4 py-2 bg-primary rounded-md gap-1 cursor-pointer mx-auto lg:mx-0">
          <span>Start Fundraising</span>
          <RxArrowTopRight className="text-2xl" />
        </div>
      </div>
      <img
        src={image}
        alt="hero"
        className="h-64 md:h-80 lg:h-[500px] mt-8 lg:mt-0 lg:absolute lg:-top-10 lg:right-20 lg:translate-x-[20%] -z-50 max-w-full"
      />
    </div>
  );
};

export default Hero;

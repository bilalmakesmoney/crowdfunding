import Background from "../../public/background.png";
import Hero from "../components/Hero";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div className="w-screen min-h-screen md:px-12">
      <img
        src={Background}
        alt=""
        className="absolute w-full h-full -top-[0px] left-0 object-cover opacity-5"
      />
      <Header />
      <Hero />
    </div>
  );
};
export default LandingPage;

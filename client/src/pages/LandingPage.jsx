import Background from "../../public/background.png";
import Hero from "../components/Hero";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div className="w-screen min-h-screen md:px-12 background relative">
      <img
        src={Background}
        className="w-full h-full absolute top-0 left-0 opacity-5"
        alt=""
      />
      <Header />
      <Hero />
    </div>
  );
};
export default LandingPage;

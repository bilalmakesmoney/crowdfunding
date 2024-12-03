import Background from "../public/background.png";
import Header from "./Header";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="w-screen min-h-screen px-12 ">
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
export default Home;

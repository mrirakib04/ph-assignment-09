import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import Banner from "./HomeElements/Banner";
import PopularSkills from "./HomeElements/PopularSkills";
import TopRatedProviders from "./HomeElements/TopRatedProviders";
import HowItWorks from "./HomeElements/HowItWorks";

const Home = () => {
  const { name } = useContext(MainContext);
  console.log(name);
  return (
    <div className="flex flex-col items-center w-full">
      <Banner></Banner>
      <PopularSkills></PopularSkills>
      <TopRatedProviders></TopRatedProviders>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;

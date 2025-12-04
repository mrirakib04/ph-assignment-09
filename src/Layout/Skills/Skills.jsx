import { Rating } from "@mui/material";
import Loader from "../../Components/Loader";
import useSkillsFetch from "../../Hooks/useSkillsFetch";
import { Link } from "react-router";
import { HeadProvider, Title } from "react-head";

const Skills = () => {
  const { data, dataLoader, errorMessage } = useSkillsFetch();

  if (dataLoader) return <Loader></Loader>;
  if (errorMessage)
    return (
      <p className="text-center text-red-500 py-20">Error: {errorMessage}</p>
    );

  return (
    <div className="py-10 bg-gray-50 w-full px-5 flex flex-col items-center gap-5">
      <HeadProvider>
        <Title>Skills || SkillSwap</Title>
      </HeadProvider>
      <div className="text-center flex flex-col items-center gap-2">
        <h2 className="md:text-3xl text-2xl font-bold text-sky-800 animate__animated animate__pulse animate__infinite">
          All Skills
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore today's most in-demand digital skills and boost your career
          potential with trending technologies and expert-led learning.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {data.map((skill) => (
          <div
            key={skill.skillId}
            data-aos="zoom-in"
            className="bg-linear-to-br from-cyan-300 to-white rounded-2xl shadow-md hover:shadow-lg p-4 transition-all duration-300 flex flex-col gap-2"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-40 sm:h-60 object-cover rounded-xl shadow-md"
            />
            <h3 className="text-xl font-semibold mt-2">{skill.skillName}</h3>
            <div className="flex items-center justify-between w-full">
              <Rating value={skill.rating} precision={0.5} readOnly />
              <p className="text-lg font-bold text-cyan-600">${skill.price}</p>
            </div>
            <Link
              to={`/skill/${skill.skillId}`}
              className="rounded-md border-2 text-lg font-semibold text-white bg-linear-to-br hover:shadow-md from-sky-700 to-black hover:from-sky-950 duration-300 transition py-2 text-center mt-4 w-full "
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

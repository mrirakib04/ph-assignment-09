import { FiCode, FiPenTool, FiTrendingUp } from "react-icons/fi";

const Categories = () => {
  const categories = [
    { id: 1, title: "Web Development", icon: <FiCode size={55} /> },
    { id: 2, title: "Graphics Design", icon: <FiPenTool size={55} /> },
    { id: 3, title: "Digital Marketing", icon: <FiTrendingUp size={55} /> },
  ];

  return (
    <section className="py-10 bg-gray-50 w-full px-5 flex flex-col items-center gap-5">
      <div className="text-center flex flex-col items-center gap-2">
        <h2 className="md:text-3xl text-2xl font-bold text-purple-800 animate__animated animate__pulse animate__infinite">
          Categories
        </h2>
        <p className="text-gray-600 text-lg md:text-xl font-medium">
          Explore the top categories chosen by our users
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl my-5">
        {categories.map((cat) => (
          <div
            key={cat.id}
            data-aos="zoom-in-up"
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-300 p-7 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="text-purple-700 mb-3">{cat.icon}</div>

            <h3 className="text-xl font-semibold">{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

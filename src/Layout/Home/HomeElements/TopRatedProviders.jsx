import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import "animate.css";

const TopRatedProviders = () => {
  const providers = [
    {
      id: 1,
      name: "Md. Rakibul Islam Rakib",
      image: "https://i.ibb.co.com/nsFKqLPR/58-2.png",
      rating: 4.5,
      specialty: "MERN Stack Developer",
      projects: 65,
    },
    {
      id: 2,
      name: "Kushbula Ahmed",
      image: "https://i.ibb.co.com/hR29BXJP/s4.jpg",
      rating: 4.5,
      specialty: "Graphics Design Specialist",
      projects: 58,
    },
    {
      id: 3,
      name: "Sabbir Rahman",
      image:
        "https://i.ibb.co.com/8nsN3G8X/portrait-confident-young-businessman-with-his-arms-crossed-23-2148176206.jpg",
      rating: 4,
      specialty: "React & Node Specialist",
      projects: 52,
    },
  ];

  return (
    <section className="py-10 bg-gray-50 w-full px-5 flex flex-col items-center gap-5">
      <div className="text-center flex flex-col items-center gap-2">
        <h2 className="md:text-3xl text-2xl font-bold text-purple-800 animate__animated animate__pulse animate__infinite">
          Top Rated Providers
        </h2>
        <p className="text-gray-600 text-lg md:text-xl font-medium">
          Meet our most skilled and trusted professionals delivering top-quality
          results
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl my-5">
        {providers.map((provider) => (
          <Card
            data-aos="zoom-in-up"
            key={provider.id}
            className={`rounded-xl! shadow-md hover:shadow-xl transition-all duration-300 ${
              (provider.name === "Md. Rakibul Islam Rakib" &&
                "border-2 border-blue-600") ||
              (provider.name === "Kushbula Ahmed" &&
                "border-2 border-purple-600") ||
              "border-2 border-gray-600"
            }`}
          >
            <CardMedia
              component="img"
              image={provider.image}
              alt={provider.name}
              className="h-56 object-cover"
            />
            <CardContent className="flex flex-col items-center text-center">
              <Typography variant="h6" className="font-semibold mt-2">
                {provider.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className="italic text-gray-600"
              >
                {provider.specialty}
              </Typography>
              <Rating
                value={provider.rating}
                precision={0.1}
                readOnly
                className="mt-1"
              />
              <Typography
                variant="body2"
                color="textSecondary"
                className="mt-1"
              >
                Projects Completed: {provider.projects}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProviders;

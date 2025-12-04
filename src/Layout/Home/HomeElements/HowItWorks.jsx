import { Card, CardContent, Typography } from "@mui/material";
import "animate.css";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Search Skills",
      description:
        "Browse and discover top skills and experts in your desired category easily.",
    },
    {
      id: 2,
      title: "Hire Experts",
      description:
        "Select the best-rated providers and hire them to get your work done efficiently.",
    },
    {
      id: 3,
      title: "Get Results",
      description:
        "Receive high-quality work, provide feedback, and rate the service for future users.",
    },
  ];

  return (
    <section className="py-12 bg-white w-full px-5 flex flex-col items-center gap-6">
      <div className="text-center flex flex-col items-center gap-3">
        <h2 className="md:text-3xl text-2xl font-bold text-purple-800 animate__animated animate__pulse animate__infinite">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg md:text-xl font-medium animate__animated animate__fadeInDown animate__slow">
          Follow these simple steps to get started and hire top-rated providers
          easily
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-4/5 my-5">
        {steps.map((step) => (
          <Card
            key={step.id}
            data-aos="fade-up"
            className="rounded-xl shadow-md hover:shadow-lg! transition! duration-300! p-5 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-200 text-purple-800 font-bold text-xl mb-4 animate__animated animate__jello animate__slow animate__infinite">
              {step.id}
            </div>
            <CardContent>
              <Typography variant="h6" className="font-semibold mb-2">
                {step.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className="text-gray-600"
              >
                {step.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

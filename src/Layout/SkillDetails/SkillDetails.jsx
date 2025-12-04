import { useParams } from "react-router";
import useSkillsFetch from "../../Hooks/useSkillsFetch";
import { useState } from "react";
import Loader from "../../Components/Loader";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { HeadProvider, Title } from "react-head";

const SkillDetails = () => {
  const { data, dataLoader } = useSkillsFetch();
  const { id } = useParams();
  const skill = data.find((item) => item.skillId == id);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
    setFormData({ name: "", email: "" });
  };

  if (dataLoader) return <Loader></Loader>;

  return (
    <div className="flex justify-center items-center py-10 bg-gray-100 px-5 w-full">
      <HeadProvider>
        <Title>Skill || SkillSwap</Title>
      </HeadProvider>

      <Card
        sx={{
          maxWidth: 800,
          width: "100%",
          p: 3,
          boxShadow: 5,
          borderRadius: 3,
        }}
      >
        <CardMedia
          component="img"
          image={skill.image}
          alt={skill.skillName}
          sx={{
            height: 300,
            objectFit: "cover",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
        <CardContent>
          <Typography
            variant="h5"
            className="lg:text-3xl! sm:text-2xl! text-xl!"
            fontWeight="bold"
            color="primary"
          >
            {skill.skillName}
          </Typography>
          <Rating
            value={skill.rating}
            readOnly
            precision={0.1}
            className="mt-1"
          />
          <Typography variant="body1" color="text.secondary" className="mt-2">
            <strong>Provider:</strong> {skill.providerName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Email:</strong> {skill.providerEmail}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Price:</strong> ${skill.price}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Slots Available:</strong> {skill.slotsAvailable}
          </Typography>

          {/* Book Session Form */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <Typography variant="h6" fontWeight="bold">
              Book a Session
            </Typography>
            <TextField
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ py: 1.2, fontWeight: "bold" }}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillDetails;

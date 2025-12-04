import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 2000,
      closeButton: true,
      pauseOnHover: true,
      draggable: true,
    });

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-5">
      <h1 className="md:text-4xl text-2xl font-bold text-center mb-1 animate__animated animate__fadeIn">
        Contact Us
      </h1>

      <p className="text-gray-700 text-center max-w-xl mx-auto mb-5">
        Have questions about SkillSwap? Need help with your account or training
        options? Feel free to reach out — we are here to support your learning
        journey.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md shado p-4 rounded-xl flex flex-col gap-3"
      >
        <div className="flex md:flex-row flex-col items-center gap-3">
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          name="message"
          multiline
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ paddingY: 1.2 }}
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-5 space-y-6">
      <h1 className="md:text-4xl text-2xl font-bold text-center mb-4 animate__animated animate__fadeIn">
        About SkillSwap
      </h1>

      <p className="text-lg leading-relaxed text-gray-700">
        SkillSwap is a modern skill-sharing and training platform designed to
        connect learners with top-rated instructors across various fields. The
        goal is simple — help people learn, grow, and upgrade their abilities
        through trusted providers and interactive skill experiences.
      </p>

      <h2 className="text-2xl font-semibold mt-8">What We Offer</h2>
      <p className="text-gray-700 leading-relaxed">
        The platform allows learners to explore trending skills, view detailed
        information about each skill, and book sessions with expert providers.
        With Firebase authentication, secure user accounts, and protected
        routes, SkillSwap ensures a seamless and safe learning experience.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Key Features</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Browse popular skills with ratings and categories.</li>
        <li>View top-rated providers and their specialties.</li>
        <li>Access detailed skill pages (protected for logged-in users).</li>
        <li>Book learning sessions through an easy form system.</li>
        <li>User authentication with Email/Password and Google Sign-In.</li>
        <li>Profile updates for name and photo in real-time.</li>
        <li>Forgot password support for quick account recovery.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Why SkillSwap?</h2>
      <p className="text-gray-700 leading-relaxed">
        SkillSwap focuses on making learning accessible and enjoyable. Whether
        someone wants to pick up a new skill or level up professionally, the
        platform provides a simple, clean, and secure environment to connect
        with the right trainer.
      </p>

      <p className="text-gray-700 leading-relaxed">
        With animations powered by AOS and Animate.css, a smooth UI built using
        Tailwind and DaisyUI, and responsive components with Material UI,
        SkillSwap delivers a fast and modern user experience.
      </p>

      <p className="font-medium text-center mt-10 text-gray-800">
        SkillSwap — Learn. Grow. Improve.
      </p>
    </div>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ChooseRole = () => {
  return (
    <div>
      <div className="p-4 py-20 md:p-8 bg-tertiary">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-10 w-full max-w-screen-2xl mx-auto">
          <Link to="/swipe-settings">
            <Card
              title="Click to Hire Your Star!"
              description="Explore skilled professionals waiting to contribute to your company's growth, and bring your business needs to the next level!"
              imgSrc="/src/assets/For_Employers.jpg"
            />
          </Link>
          <Card
            title="Find Your Perfect Career Match!"
            description="Explore a variety of job openings that match your career goals. Don’t miss out on your next great opportunity!"
            imgSrc="/src/assets/For_Employees.jpg"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, description, imgSrc }) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="w-full h-[650px] md:h-[420px] bg-tertiary overflow-hidden cursor-pointer group relative rounded-lg"
    >
      <div
        className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 lg:saturate-0 lg:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500 h-full"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="p-4 relative z-20 h-full text-primary group-hover:primary transition-colors duration-500 flex flex-col justify-end rounded-lg">
        <div>
          <h4 className="md:break-normal">
            {title.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p className="text-primary md:whitespace-wrap">{description}</p>
        </div>
        <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 md:mt-2" />
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-2xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default ChooseRole;

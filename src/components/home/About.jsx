import React from "react";
import { motion } from "motion/react";

const stats = [
  { value: "04", text: "Internships Completed" },
  { value: "07+", text: "Projects Completed" },
  { value: "06+", text: "Certifications" },
];

const About = () => {
  return (
  <section
  id="about"
  className="relative scroll-mt-24 pt-12 sm:pt-16 lg:pt-20 pb-20"
>




      {/* Title */}
      <motion.div
        className="flex justify-center group"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-center uppercase text-[#fff] text-[20px] sm:text-[22px] lg:text-[25px] font-semibold pb-5 transition-colors duration-300 group-hover:text-[#ffd2a9] cursor-default">
          About Me
        </p>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="max-w-2xl mx-auto text-center flex flex-col gap-4 px-4 sm:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-[#DDD] text-[14px] sm:text-[15px] lg:text-[16px]">
          I’m <span className="font-semibold text-[#ffd2a9]">EL OUALFI Meriem</span>, a final-year AI & Data Science engineering student at EMSI, passionate about turning data into concrete decisions.
        </p>
        <p className="text-[#fff] text-[14px] sm:text-[15px] lg:text-[16px]">
          I build intelligent solutions, from machine learning and NLP models to full-stack applications that put them to work, with a focus on rigor and clean, maintainable code.
        </p>
        <p className="text-[#DDD] text-[14px] sm:text-[15px] lg:text-[16px]">
          Curiosity, problem-solving, and real-world impact drive my work. I’m currently looking for a PFE internship in AI & Data Science.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="mt-12 flex flex-col sm:flex-row justify-center items-stretch gap-6 px-4 sm:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-[#111111] border border-[#DDD]/30 hover:border-[#ffd2a9] p-6 rounded-xl flex flex-col items-center justify-center shadow-lg hover:shadow-[#ffd2a9]/40 transition-transform duration-300 w-full sm:w-48 lg:w-52 flex-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-[#ffd2a9] text-2xl sm:text-2xl lg:text-3xl font-bold">{stat.value}</p>
            <p className="text-[#DDD] text-center mt-2 text-[14px] sm:text-[15px] lg:text-[16px]">{stat.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
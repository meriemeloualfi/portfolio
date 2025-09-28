
import React from 'react';
import { FaBootstrap, FaReact, FaSass, FaGithub, FaLaravel, FaJava } from 'react-icons/fa';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiPython, SiDjango, SiFigma, SiC, SiCplusplus, SiPhp } from "react-icons/si";
import { motion } from "motion/react";

const skills = [
  { name: "HTML", icon: IoLogoHtml5, color: "#F16529" },
  { name: "CSS", icon: IoLogoCss3, color: "#244bdc" },
  { name: "SASS", icon: FaSass, color: "#CD6799" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#8310f3" },
  { name: "React Js", icon: FaReact, color: "#61dbfb" },
  { name: "Tailwind", icon: RiTailwindCssFill, color: "#02afc9" },
  { name: "Laravel", icon: FaLaravel, color: "#F05340" },
  { name: "JavaScript", icon: IoLogoJavascript, color: "#f0db4f" },
  { name: "GitHub", icon: FaGithub, color: "#111" },
  { name: "Python", icon: SiPython, color: "#306998" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "PHP", icon: SiPhp, color: "#8892be" },
  { name: "Java", icon: FaJava, color: "#f89820" },
];

const Skills = () => (
  <section id="skills" className="lg:pt-[20vh] pt-14">
    <motion.p
      className="uppercase text-center text-[#fff] text-[25px] font-semibold lg:pb-5 pb-2 transition-colors duration-300 hover:text-[#ffd2a9]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      My Skills
    </motion.p>

    <motion.p
      className="text-[#DDD] text-[14px] text-center lg:w-[50vw] m-auto mb-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      Where your ideas meet code to create unforgettable digital experiences.
    </motion.p>

    <div className="flex flex-wrap lg:px-[4vw] gap-6 justify-center">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={index}
            className="flex flex-col justify-center items-center pt-[2vh]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="bg-[#1a121f] border border-transparent lg:p-10 p-6 rounded-3xl hover:border-[#ffd2a9] hover:bg-gradient-to-br hover:from-[#ffd2a9]/20 hover:to-[#fff]/10 shadow-md hover:shadow-[#ffd2a9]/50 transition duration-500 cursor-pointer group">
              <div className="transform group-hover:scale-110 transition-transform duration-500">
                <Icon
                  className="lg:text-[70px] text-[50px] text-[#DDD]/70 transition-colors duration-500"
                  style={{ transition: "color 0.5s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = skill.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#DDD")}
                />
              </div>
            </div>
            <p className="text-[#ffd2a9] lg:text-[16px] text-[13px] pt-3 font-semibold">
              {skill.name}
            </p>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Skills;


import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { motion } from "motion/react";
import image from '../../constants/image';

const Hero = () => {
    return (
        <>
   <div 
  id="hero" 
  className="flex flex-col md:flex-row items-start md:items-center justify-start min-h-[calc(100vh-110px)] pt-10 md:pt-0 pl-6 md:pl-16 gap-8 md:gap-0"
>


                {/* Left Section */}
                <motion.div
                    className="w-full md:w-[50%] text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                >
                    <p className="text-[18px] md:text-[20px] text-[#fff]">
                        <Typewriter
                            options={{
                                strings: ['Hi, I am Meriem'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                        />
                    </p>
                    <p className="text-[#fff] text-[30px] md:text-[40px] font-semibold pb-4">
                        AI & Data Science Engineering Student
                    </p>
                    <p className="text-[16px] md:text-[18px] text-[#DDD] w-full md:w-[500px] mx-auto md:mx-0 pb-4">
                        I turn complex data into concrete decisions by building intelligent and reliable
                        AI and machine learning solutions. Currently looking for a PFE internship.
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <a href="#contact">
                            <motion.button
                                className="relative flex items-center px-6 py-3 bg-[#ffd2a9] rounded-full border border-[#feb273] overflow-hidden group"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="relative z-10 text-sm font-medium text-black">Contact Me</span>
                                <span className="absolute inset-0 bg-[#feb273] rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                <span className="relative z-10 ml-3 text-black">
                                    <FaLongArrowAltRight className="w-4 h-4" />
                                </span>
                            </motion.button>
                        </a>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className="w-full lg:block md:w-[50%]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                >
                    <img 
    src={image.meriem} 
    alt="Code Illustration" 
    className="animate-up-down w-[200px] md:w-[290px] mx-auto rounded-full md:mb-6" 
/>

                </motion.div>
            </div>
        </>
    );
};

export default Hero;
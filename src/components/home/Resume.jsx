import React from 'react';

import { PiGraduationCapThin } from "react-icons/pi";
import { PiMedalThin } from "react-icons/pi";

import { motion, useScroll, useTransform } from "motion/react"


const Resume = () => {
    return (
        <>
            <section id="resume" className="lg:pt-[20vh] pt-10 overflow-hidden">
                <motion.div
                    className="flex flex-col lg:flex-row gap-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    {/* My Experience Section */}
                    <motion.div
                        className="lg:w-[50vw] w-[100%] group"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <div className="flex items-center gap-3 lg:pb-14 pb-4">
                            <p>
                                <PiMedalThin size={35} className="text-[#bdd9d8]" />
                            </p>
                            <p className="uppercase text-[#fff] text-[25px] font-semibold transition-colors duration-300 group-hover:text-[#ffd2a9]">
                                My Experience
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <motion.div
                                className="border-b-[1px] border-[#bdd9d8] py-3"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <p className="text-[#feb273] lg:text-[17px] text-[15px]  font-bold pb-2">Jul – Aug 2025</p>
                                <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff] ">
                                    Implementation of a database replication
                                </p>
                                <p className="text-[#ddd] lg:text-[14px] text-[12px]">ISICOD</p>
                            </motion.div>

                            <motion.div
                                className="border-b-[1px] border-[#bdd9d8] py-3"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <p className="text-[#feb273] lg:text-[17px] text-[15px]  font-bold pb-2">May - Nov 2024</p>
                                <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff] ">
                                    Developing technical skills during the training
                                </p>
                                <p className="text-[#ddd] lg:text-[14px] text-[12px]">LionsGeek</p>
                            </motion.div>
                            <motion.div
                                className="border-b-[1px] border-[#bdd9d8] py-3"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <p className="text-[#feb273] lg:text-[17px] text-[15px]  font-bold pb-2">Mar – Jun 2023</p>
                                <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff] ">
                                    Design and development of a business management web application
                                </p>
                                <p className="text-[#ddd] lg:text-[14px] text-[12px]">SOCHID Maroc</p>
                            </motion.div>
                            <motion.div
                                className="border-b-[1px] border-[#bdd9d8] py-3"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <p className="text-[#feb273] lg:text-[17px] text-[15px]  font-bold pb-2">Apr – Jun 2021</p>
                                <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff] ">
                                    Development of an inventory management application
                                </p>
                                <p className="text-[#ddd] lg:text-[14px] text-[12px]">Soteb Computer</p>
                            </motion.div>
                        </div>

                    </motion.div>

                    {/* My Education Section */}
                    <motion.div
                        className="lg:w-[50vw] w-[100%] group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <div className="flex items-center gap-3 lg:pb-14 pb-4">
                            <p>
                                <PiGraduationCapThin size={35} className="text-[#bdd9d8]" />
                            </p>
                            <p className="uppercase text-[#fff] text-[25px] font-semibold transition-colors duration-300 group-hover:text-[#ffd2a9]">
                                My Education
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <motion.div
                                className="border-b-[1px] border-[#bdd9d8] py-3"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <p className="text-[#feb273] lg:text-[17px] text-[15px]  font-bold pb-2">2025 – 2026</p>
                                <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff] ">
                                   4th Year in Computer and Network Engineering 
                                </p>
                                <p className="text-[#ddd] lg:text-[14px] text-[12px]">Moroccan School of Engineering Sciences</p>
                            </motion.div>
                            <motion.div
                                className="border-b-[1px] border-[#bdd9d8] py-3"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <p className="text-[#feb273] lg:text-[17px] text-[15px] font-bold pb-2">2022 – 2023</p>
                                <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff]">
                                    Professional Bachelor’s Degree in Applied Computer Methods for Business Management
                                </p>
                                <p className="text-[#ddd] lg:text-[14px] text-[12px]">Faculty of Legal, Economic and Social Sciences of Ain Sebâa</p>
                            </motion.div>

                            <motion.div
                                className="border-b-[1px] border-[#bdd9d8] py-3"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <p className="text-[#feb273] lg:text-[17px] text-[15px] font-bold pb-2">2019 – 2021</p>
                                <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff]">
                                    University Diploma of Technology in Computer Engineering
                                </p>
                                <p className="text-[#ddd] lg:text-[14px] text-[12px]">Higher School of Technology of Sidi Bennour</p>
                            </motion.div>

                            <motion.div
                                className="border-b-[1px] border-[#bdd9d8] py-3"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <p className="text-[#feb273] lg:text-[17px] text-[15px] font-bold pb-2">2018 - 2019</p>
                                <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff]">
                                    Baccalauréat in Physical Sciences
                                </p>
                                <p className="text-[#ddd] lg:text-[14px] text-[12px]">Al Qods High School</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export default Resume;
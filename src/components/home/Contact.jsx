import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

import { motion, useScroll, useTransform } from "motion/react"


const Contact = () => {

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const infoVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: -100, opacity: 0 },
    };

    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    // Add this new function
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        emailjs.sendForm(
            'service_x4kyhlm', // Replace with your Service ID
            'template_nq23v0q', // Replace with your Template ID
            form.current,
            '7xiwHCClqJxpBhupZ' // Replace with your Public Key
        )
            .then((result) => {
                setSubmitStatus('Message sent successfully!');
                // Clear form
                form.current.reset();
            })
            .catch((error) => {
                setSubmitStatus('Failed to send message. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <>
            <motion.section
                id='contact'
                className='lg:pt-[20vh] pt-14 overflow-hidden  '
                variants={sectionVariants}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
            >
                <div className='flex flex-col lg:flex-row lg:items-center gap-10 group'>
                    <motion.div
                        className=' lg:w-[60vw]'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.p
                            className='lg:pl-1  p-1 uppercase text-[#fff] text-[25px] font-semibold  pb-2 transition-colors duration-300 group-hover:text-[#ffd2a9]'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >From idea to innovation
                        </motion.p>
                        <motion.p
                            className='lg:w-[90%] text-[#DDD] text-[14px] lg:pl-1  p-1'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >I build clean and modern applications, always focused on simplicity and impact. Share your idea and let’s make it real!
                        </motion.p>
                        <form ref={form} onSubmit={sendEmail} className='lg:pl-1 p-1'>
                            <div className='w-[100%] flex gap-5 pt-8'>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder='First name'
                                    className='w-[50%] bg-transparent rounded-md p-3 border-[#DDD]/25 border-[1px] text-[14px] text-[#DDD]'
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder='Last name'
                                    className='w-[50%] bg-transparent rounded-md p-3 border-[#DDD]/25 border-[1px] text-[14px] text-[#DDD]'
                                    required
                                />
                            </div>
                            <div className='w-[100%] flex gap-5 pt-3'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email address'
                                    className='w-[50%] bg-transparent rounded-md p-3 border-[#DDD]/25 border-[1px] text-[14px] text-[#DDD]'
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder='Phone number'
                                    className='w-[50%] bg-transparent rounded-md p-3 border-[#DDD]/25 border-[1px] text-[14px] text-[#DDD]'
                                />
                            </div>
                            <div className='w-[100%] pt-3'>
                                <textarea
                                    name="message"
                                    rows={8}
                                    placeholder='Message'
                                    className='w-[100%] bg-transparent rounded-md p-3 border-[#DDD]/25 border-[1px] text-[14px] text-[#DDD]'
                                    required
                                ></textarea>
                            </div>
                            {submitStatus && (
                                <div className={`mt-3 text-sm ${submitStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                                    {submitStatus}
                                </div>
                            )}
                            <div className='pt-3'>
                                <div className="flex md:justify-start">
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="relative flex items-center px-6 py-3 bg-[#ffd2a9] rounded-full border border-[#feb273] overflow-hidden group disabled:opacity-50"
                                        transition={{ duration: 0.3 }}
                                    >
                                        <span className="relative z-10 text-sm font-medium text-black">
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </span>
                                        <span className="absolute inset-0 bg-[#feb273] rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                        <span className="relative z-10 ml-3 text-black">
                                            <IoIosSend className="w-4 h-4" />
                                        </span>
                                    </motion.button>
                                </div>
                            </div>
                        </form>
                    </motion.div>

                    <motion.div
                        className='lg:w-[40vw] flex flex-col gap-5'
                        variants={infoVariants}
                        initial='hidden'
                        whileInView='visible'
                        exit='exit'
                        transition={{ duration: 2 }}
                    >
                        {/* <div className='flex gap-3 items-center'>
                                    <button className='border-[#ffd2a9] border-[1px] text-[#ffd2a9] rounded-full px-[10px] py-[10px] hover:bg-[#ffd2a9] hover:text-[#000] transition duration-300'>
                                        <IoPhonePortraitOutline />
                                    </button>
                                    <div>
                                        <p className='text-[#DDD]'>Phone</p>
                                        <p className='font-semibold text-[#fff] text-[14px]'>06 33 14 94 29</p>
                                    </div>
                                </div> */}

                        <div className='flex gap-3 items-center'>
                            <button className='border-[#ffd2a9] border-[1px] text-[#ffd2a9] rounded-full px-[10px] py-[10px] hover:bg-[#ffd2a9] hover:text-[#000] transition duration-300'>
                                <MdOutlineAlternateEmail />
                            </button>
                            <div>
                                <p className='text-[#DDD]'>Email</p>
                                <p className='font-semibold text-[#fff] text-[14px]'>meriem.eloualfi17@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex gap-3 items-center'>
                            <button className='border-[#ffd2a9] border-[1px] text-[#ffd2a9] rounded-full px-[10px] py-[10px] hover:bg-[#ffd2a9] hover:text-[#000] transition duration-300'>
                                <MdOutlineLocationOn />
                            </button>
                            <div>
                                <p className='text-[#DDD]'>Address</p>
                                <p className='font-semibold text-[#fff] text-[14px]'>Rabat</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default Contact;
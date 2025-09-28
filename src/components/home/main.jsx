import React, { useRef, useState } from 'react';
import image from '../../constants/image';
import emailjs from '@emailjs/browser';


import { FiArrowRight } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiMedalThin } from "react-icons/pi";
import { PiGraduationCapThin } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";



import Typewriter from 'typewriter-effect';
import { motion, useScroll, useTransform } from "motion/react"

// import Tabs from './tabs';
import { useNavigate } from 'react-router-dom';

const Main = () => {

    const navigate = useNavigate();

    const { scrollYProgress } = useScroll();
    // Animate based on scroll for the image rotation and scaling
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const infoVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: -100, opacity: 0 },
    };


    // Add these new state variables with your existing ones
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
            <div className='border-b-[1px] border-b-[#ddd]/25'>
                <div>

                    {/* hero section */}



                    {/* about me */}



                    {/* projects */}



                    {/* resume */}
         


                    {/* skills */}




                    {/* contact */}





                </div >

            </div >
        </>
    );
};

export default Main;

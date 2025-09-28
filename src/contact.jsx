import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { IoIosSend } from 'react-icons/io';
import { MdOutlineAlternateEmail, MdOutlineLocationOn } from 'react-icons/md';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_x4kyhlm', // Replace with your Service ID
            'template_qvp1v8s', // Replace with your Template ID
            form.current,
            '7xiwHCClqJxpBhupZ' // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log('Message Sent:', result.text);
          alert('Your message has been sent successfully!');
        },
        (error) => {
          console.error('Failed to send message:', error.text);
          alert('Failed to send your message. Please try again.');
        }
      );
  };

  return (
    <motion.section
      id='contact'
      className='lg:pt-[20vh] pt-14 overflow-hidden'
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-col lg:flex-row lg:items-center gap-10 group'>
        {/* Form Section */}
        <motion.div
          className='lg:w-[60vw]'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className='uppercase text-[#fff] text-[25px] font-semibold pb-2 transition-colors duration-300 group-hover:text-[#ffd2a9]'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let’s work together!
          </motion.p>
          <motion.p
            className='lg:w-[90%] text-[#DDD] text-[14px]'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I design and code beautifully simple things and I love what I do. Just simple like that!
          </motion.p>
          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className='w-[100%] flex gap-5 pt-8'>
              <input
                type="text"
                name="first_name"
                placeholder='First name'
                className='w-[50%] bg-transparent rounded-md p-3 border-[#DDD]/25 border-[1px] text-[14px] text-[#DDD]'
                required
              />
              <input
                type="text"
                name="last_name"
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
                type="text"
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
            <div className='pt-3'>
              <div className="flex md:justify-start">
                <motion.button
                  type="submit"
                  className="relative flex items-center px-6 py-3 bg-[#ffd2a9] rounded-full border border-[#feb273] overflow-hidden group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="relative z-10 text-sm font-medium text-black">Send Message</span>
                  <span className="absolute inset-0 bg-[#feb273] rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10 ml-3 text-black">
                    <IoIosSend className="w-4 h-4" />
                  </span>
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          className='lg:w-[40vw] flex flex-col gap-5'
          initial='hidden'
          whileInView='visible'
          exit='exit'
          transition={{ duration: 2 }}
        >
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
  );
};

export default ContactForm;

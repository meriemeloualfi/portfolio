import React from 'react';
import Navbar from '../components/home/Navbar';
import Footer from '../components/footer';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import Resume from '../components/home/Resume';
import Skills from '../components/home/Skills';
import Contact from '../components/home/Contact';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Home = () => {
    return (
        <>
            <Navbar />
            {/* body */}
            <div className="px-[8vw] py-[15vh] lg:py-[12vh] border-b-[1px] border-b-[#ddd]/25">
                <Hero />
                <About />
                <Projects />
                <Resume />
                <Skills />
                <Contact />
            </div>

            <Footer />

            {/*  fixed links  */}
            {/* fixed links */}
<section className='fixed lg:bottom-5 lg:right-5 bottom-8 right-5 z-50'>  {/* z-50 ajouté */}
    <div className='flex flex-col gap-3'>
        <a href="https://www.linkedin.com/in/meriemeloualfi/">
            <FaLinkedinIn className='text-[#bdd9d8] cursor-pointer lg:text-[16px] text-[22px]' />
        </a>
        <a href="https://github.com/meriemeloualfi">
            <FaGithub className='text-[#bdd9d8] cursor-pointer lg:text-[16px] text-[22px]' />
        </a>
    </div>
</section>

        </>
    );
};

export default Home;
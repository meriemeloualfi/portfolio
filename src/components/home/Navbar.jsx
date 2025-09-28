import React, { useState, useEffect } from 'react';
import image from '../../constants/image';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Trigger when 60% of section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id); // Update the active section
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        // Cleanup
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <nav className="px-[8vw] py-4 flex items-center justify-between fixed right-0 top-0 left-0 z-50 bg-[#0c0e0e] shadow-sm shadow-black">
                {/* Logo */}
                <div>
                    <img src={image.logo} alt="Logo" className="lg:w-[4vw] w-[15vw]" />
                </div>

                {/* Hamburger Menu for small screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-[#fff] text-2xl">
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Links */}
                <div
                    className={`absolute md:static top-[60px] right-0 w-full md:w-auto md:flex items-center gap-3 text-[#fff] text-[15px] bg-[#0c0e0e] md:bg-transparent md:translate-x-0 transition-transform duration-300 ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <a
                        href="#about"
                        className={`block md:inline-block py-2 px-4 transition-colors duration-300 ${
                            activeSection === 'about' ? 'text-[#ffd2a9] border-b-[2px] border-[#ffd2a9] ' : ''
                        }`}
                    >
                        About
                    </a>
                    <a
                        href="#works"
                        className={`block md:inline-block py-2 px-4 transition-colors duration-300 ${
                            activeSection === 'works' ? 'text-[#ffd2a9] border-b-[2px] border-[#ffd2a9]' : ''
                        }`}
                    >
                        Projects
                    </a>
                    <a
                        href="#resume"
                        className={`block md:inline-block py-2 px-4 transition-colors duration-300 ${
                            activeSection === 'resume' ? 'text-[#ffd2a9] border-b-[2px] border-[#ffd2a9]' : ''
                        }`}
                    >
                        Resume
                    </a>
                    <a
                        href="#skills"
                        className={`block md:inline-block py-2 px-4 transition-colors duration-300 ${
                            activeSection === 'skills' ? 'text-[#ffd2a9] border-b-[2px] border-[#ffd2a9]' : ''
                        }`}
                    >
                        Skills
                    </a>
                    <a
                        href="#contact"
                        className={`block md:inline-block py-2 px-4 transition-colors duration-300 ${
                            activeSection === 'contact' ? 'text-[#ffd2a9] border-b-[2px] border-[#ffd2a9]' : ''
                        }`}
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

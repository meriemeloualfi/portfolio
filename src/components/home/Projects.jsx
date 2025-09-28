import React from 'react'
import { FaGithub } from "react-icons/fa"
import { FaFigma } from "react-icons/fa"   // ajout du logo Figma
import { motion } from "motion/react"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

import image from '../../constants/image'

const Projects = () => {
  const projects = [
    { img: image.pr1, link: "https://github.com/meriemeloualfi/Delicious", type: "github" },
    { img: image.pr3, link: "https://github.com/meriemeloualfi/Yummy", type: "github" },
    { img: image.pr4, link: "https://github.com/meriemeloualfi/Fashe", type: "github" },
    { img: image.pr7, link: "https://github.com/meriemeloualfi/dyslexie", type: "github" },
    { img: image.pr6, link: "https://www.figma.com/proto/KhAlg8uTx4lFw5RVONxCg1/Healthy?node-id=0-1&t=SX4KwayVvnhhwwp0-1", type: "figma" },
    { img: image.pr5, link: "https://www.figma.com/proto/tF7LzH8YmAQOhPCaSiOf8u/Plant-Shop-E-Commerce-App-design?node-id=0-1&t=7hPfoMfQgnJPuA5L-1", type: "figma" },
    { img: image.pr2, link: "https://www.figma.com/proto/KXWigE9z867eawKQl1B2BN/Travel-App--Community-?node-id=0-1&t=Le1Z8iCHz73i9Jpw-1", type: "figma" },
    { img: image.pr8, link: "https://www.figma.com/proto/iHprB6AnnTJpLBp4GjhL9s/dream-job?node-id=0-1&t=0eRKqBmyRNxmIlgI-1", type: "figma" },
  ]

  return (
    <section id='works' className='lg:pt-[15vh] group'>
      {/* Titre */}
      <motion.p
        className="uppercase text-center text-[#fff] text-[25px] font-semibold pb-5 transition-colors duration-300 group-hover:text-[#ffd2a9]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        Explore Some Of My Projects
      </motion.p>

      {/* Carrousel */}
      <motion.div
        className="pt-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            el: ".custom-pagination",
            clickable: true
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={false}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          modules={[Pagination, Autoplay]}
          className="lg:w-[80vw] pb-6 relative z-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative group rounded-2xl border border-[#333] hover:border-[#ffd2a9] shadow-md shadow-black/60 overflow-hidden transition-all duration-500">
                {/* Image */}
                <img
                  src={project.img}
                  alt={`project-${index}`}
                  className="w-full h-auto rounded-2xl transition-transform duration-500 hover:scale-105"
                />

                {/* Icon conditionnelle */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-black/70 p-2 rounded-full text-white hover:bg-[#ffd2a9] hover:text-black transition"
                >
                  {project.type === "figma" ? (
                    <FaFigma size={20} />
                  ) : (
                    <FaGithub size={20} />
                  )}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="custom-pagination flex justify-center mt-2"></div>
      </motion.div>

      {/* Styles pagination */}
      <style>{`
        .custom-pagination .swiper-pagination-bullet {
          background-color: #fff !important;
          opacity: 1 !important;
          margin: 0 5px !important;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #ffd2a9 !important;
        }
      `}</style>
    </section>
  )
}

export default Projects

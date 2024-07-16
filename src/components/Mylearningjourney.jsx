import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EDUCATION, EXPERIENCES, SKILLS, CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const MyLearningJourney = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="border-b border-transparent pb-4">
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-3xl"
      >
        <div className="flex justify-center items-center">
          <h2 className="bg-gradient-to-r from-cyan-500 via-pink-500 to-sky-700 bg-clip-text tracking-tight text-transparent">
            My Learning Journey
          </h2>
        </div>
      </motion.div>

      {/* Education Carousel */}
      <div className="mb-8">
        <h3 className="text-xl font-normal mb-4 text-center text-gray-400">Education</h3>
        <Slider {...carouselSettings}>
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="px-4"
            >
              <div className="bg-gradient-to-r from-pink-200 via-slate-300 to-purple-300 rounded-lg shadow-lg p-4">
                <p className="mb-2 text-sm text-black">{edu.year}</p>
                <p className="text-lg font-bold text-black">{edu.degree}</p>
                <p className="text-sm text-black">{edu.institution}</p>
                <p className="mt-2 font-medium text-black">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Experiences Carousel */}
      <div className="mb-8">
        <h3 className="text-xl font-normal mb-4 text-center text-gray-400">Experiences</h3>
        <Slider {...carouselSettings}>
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="px-4"
            >
              <div className="bg-gradient-to-r from-pink-200 via-slate-300 to-purple-300 rounded-lg shadow-lg p-4">
                <p className="mb-2 text-sm text-black">{exp.year}</p>
                <p className="text-lg font-bold text-black">{exp.role}</p>
                <p className="text-sm text-black">{exp.company}</p>
                <p className="mt-2 text-black">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Skills Carousel */}
      <div className="mb-8">
        <h3 className="text-xl font-normal mb-4 text-center text-gray-400">Skills</h3>
        <Slider {...carouselSettings}>
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="px-4"
            >
              <div className="bg-gradient-to-r from-pink-200 via-slate-300 to-purple-300 rounded-lg shadow-lg p-4">
                <p className="text-lg font-bold text-black">{skill}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Certifications Carousel */}
      <div className="mb-8">
        <h3 className="text-xl font-normal mb-4 text-center text-gray-400">Certifications</h3>
        <Slider {...carouselSettings}>
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="px-4"
            >
              <div className="bg-gradient-to-r from-pink-200 via-slate-300 to-purple-300 rounded-lg shadow-lg p-4">
                <p className="mb-2 text-sm text-black">{cert.year}</p>
                <p className="text-lg font-bold text-black">{cert.title}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MyLearningJourney;

import aboutMe from "../assets/profilePic.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-transparent pb-4">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center items-center"
      >
        <h1 className="bg-gradient-to-r from-pink-500 via-slate-500 to-purple-400 bg-clip-text text-4xl tracking-tight text-transparent">
          Get to know me
        </h1>
      </motion.div>
      <div className="flex flex-wrap w-full">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 p-8 mt-10 lg:mt-0"
        >
          <div className="flex justify-center lg:justify-left">
            <img src={aboutMe} alt="aboutMe" className="max-w-full h-auto rounded-lg shadow-lg" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 p-8 mt-10 lg:mt-0"
        >
          <div className="flex flex-col items-center lg:items-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

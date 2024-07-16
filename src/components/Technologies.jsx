import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr"
import { motion } from "framer-motion";

const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
  transition:{
    duration:duration,
    ease:"linear",
    repeat:Infinity,
    repeatType:"reverse",
  }
}
})

const Technologies = () => {
  return (
    <div className="border-b border-transparent pb-24">
      <motion.div
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      
      className="my-20 text-center text-4xl">
        <div className="flex justify-center items-center">
          <h2 className="bg-gradient-to-r from-cyan-500 via-pink-500 to-sky-700 bg-clip-text tracking-tight text-transparent">
            Technologies
          </h2> 
        </div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
       
        
        className="flex flex-wrap items-center justify-center gap-4 mt-20">
          <motion.div 
           variants={iconVariants(2)}
           initial="initial"
           animate="animate"
          
          className="rounded-2xl border-4 border-transparent p-4">
            <RiReactjsLine className="text-7xl text-cyan-500" />
          </motion.div>
          <motion.div
           variants={iconVariants(2.5)}
           initial="initial"
           animate="animate" className="rounded-2xl border-4 border-transparent p-4">
            <TbBrandNextjs className="text-7xl" />
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-transparent p-4">
            <SiMongodb className="text-7xl text-green-500" />
            </motion.div>
            <motion.div  variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-transparent p-4">
            <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div 
             variants={iconVariants(4)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-transparent p-4">
            < FaJava  className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div 
             variants={iconVariants(4.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-transparent p-4">
            <GrMysql  className="text-7xl text-sky-700" />
            </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

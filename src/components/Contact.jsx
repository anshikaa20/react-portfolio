import { CONTACT } from "../constants"
import { motion } from "framer-motion"



const Contact = () => {
  return <div className="border-b border-transparent">
    <div className="my-10 text-center text-4xl" >
    <div className="flex justify-center items-center">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className=" bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent "> Get in Touch</motion.h2>
      </div>
      </div>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:100}}
      transition={{duration:1.}}
      className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="mailto:your-anshika.522375@gmail.com" className="border-b">{CONTACT.email}</a>
      </motion.div>
    </div>
  
}

export default Contact


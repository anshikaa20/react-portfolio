import logo from "../assets/blueLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import "../index.css"; // Correct path to your CSS file


const Navbar = () => {
  


  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
     <img  className="mx-2 w-10" src={logo} alt="logo" style={{ width: '100px', height: 'auto' }} />
     </div>
     <div className="m-8 flex items-center justify-center gap-4 text-2xl">
     <a href="https://www.linkedin.com/in/anshika-chowdhary/" target="_blank" rel="noopener noreferrer"  className="icon">
          <FaLinkedin />
        </a>
        <a href="https://github.com/anshikaa20" target="_blank" rel="noopener noreferrer"  className="icon">
          <FaGithub  />
        </a>
        <a href="mailto:anshika.522375@gmail.com" target="_blank" rel="noopener noreferrer "  className="icon">
          <SiGmail  />
        </a>
        <a href="https://www.instagram.com/__apoeticlife__/?__d=11" target="_blank" rel="noopener noreferrer"  className="icon">
          <FaInstagramSquare  />
        </a>
        
     </div>
    </nav>
    
}

export default Navbar

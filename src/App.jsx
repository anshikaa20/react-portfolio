import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Mylearningjourney from "./components/Mylearningjourney";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-white selection:text-black">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#ee82ee_100%)]"></div>
        </div>
          <Navbar />
          <Hero />
          <About/>
          <Technologies/>
          <Mylearningjourney/>
          <Projects/>
          <Contact/>
        </div>
      
  );
};

export default App;

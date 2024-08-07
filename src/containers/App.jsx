import React from "react";
import Header from "./Header"
import Home from "./Home";
import ParticlesContainer from "./ParticlesContainer";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { AnimatePresence, motion } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";

const App = () => {
  return (
    <div className="w-full xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">


      {/*particles container */}
      <ParticlesContainer/>
     
      {/*header */}
      <Header/>


      {/*home container*/}
     <Home/>


      {/*about container */}
      <About/>

      {/*skills container */}
      <Skills/>

      {/*projects container */}
      <Projects/>

      {/*contact container*/}
      <Contact/>

      {/*footer container */}
      <div className="w-full flex flex-col items-center justify-start mt-12 mb-12">
        <p className="text-3xl tracking-wide text-texlight">Shweta Jadhav</p>
        <div className="flex items-center justify-center gap-16 mt-16"><AnimatePresence>
            {Socials && Socials.map((item, index)=> (
              <HomeSocialLinks key={index} data={item} index={index}/>
            ))}
          </AnimatePresence>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
            <p className="text-texlight text-center">Sample para</p>
            <p className="text-texlight text-center">Sample para</p>
            <div className="w-full flex flex-col items-center justify-center gap-3">
              <p className="text-texlight text-center">shwetajadhav99255@gmail.com</p>
              <p className="text-texlight text-center">7486926260</p>
              <a href="#">
                <p className="text-primary text-center">Hire me</p>
              </a>
            </div>
          </div>
      </div>



    </div>
  );
};

export default App;

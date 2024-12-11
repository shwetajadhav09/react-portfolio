import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shweta } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";
import { resume } from "../assets";

const Home = () => {
  return <section id="home" className=" flex items-center justify-center flex-col gap-12 relative p-12 ">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full ">
      
    {/*content section */}

    <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
      <h2 className="text-3xl lg:text-4xl text-texlight">
        Hello, It's me 
        <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">Shweta Jadhav</span>
      </h2>

      {/*typewriter */}
      <h2 className="text-2xl lg:text-4xl text-texlight mt-4">And I'm a <HeroTypeWritter 
      speed={100}
      words={["Student..." , "Developer..."]} />
      </h2>


      <p className="text-base text-texlight mt-6 text-center lg:text-left"> Welcome to my portfolio! I'm Shweta,
         a final year student pursuing BTech in Computer Science and Engineering. I have a passion for technology and innovation, 
         with a keen interest in Web Development and software development.  Explore my portfolio to learn more about my projects, skills, and experiences. 
         Let's connect and explore opportunities to collaborate!
      </p>

      


        {/*social media links */}

        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials && Socials.map((item, index)=> (
              <HomeSocialLinks key={index} data={item} index={index}/>
            ))}
          </AnimatePresence>
        </div>

        {/*Hire me */}
        
        <a href={resume} target="_blank" rel="noopener noreferrer"
        style={{boxShadow : "inset 0px 0px 10px rgba(255, 255 ,255, 0.3)"}} 
        className="mt-12 border border-[rgba(255, 255,255, 0.3)] rounded-xl px-8 py-3 active:95 
        group hover:border-primary">
          <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"> View Resume</p>
        </a>

    </div>

    {/*hero image */}
     <div className="w-full h-full flex items-start justify-center lg:items-center">
     <motion.img
     initial={{ y: 0 }}
     animate={{ y: [-10,10,-10]}}
     transition={{
      repeat :Infinity,
      duration : 2,
      ease : "linear",
     }}
     src={Shweta} 
     className="object-cover w-64 h-96 rounded-lg rounded-full"
     style={{ position: 'relative' }}
     
     />
      
     </div>


    </div>
  </section>
};

export default Home; 

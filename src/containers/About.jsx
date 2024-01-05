import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import {shweta1} from "../assets"

const About = () => {
  return <section id="about" className=" flex items-center justify-center flex-col gap-12 my-12 ">

    {/*title */}
    <div className="w-full flex items-center justify-center py-24">
      <motion.div
      initial ={{ opacity : 0, width:0}}
      animate ={{ opacity : 1, width:200}}
      exit ={{ opacity : 0, width:0}}
      transition={{delay :0.4}}
      className="flex items-center justify-center py-24">
        <img src={Leaf1} className="w-6 h-auto object-contain" alt=""></img>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">About</p>
        <img src={Leaf2} className="w-6 h-auto object-contain" alt=""></img>
      </motion.div>
    </div>

    {/*main content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full ">
      {/*image section */}
      <div className="w-full flex items-center justify-center px-8">
        <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-r from bg-primary to-secondary relative">
          <img src={shweta1}
           className="w-full rounded-md h-auto object-contain"
           style={{ maxWidth: '100%' }}
            alt=""></img>

            <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-r from bg-primary to-secondary rounded-md blur[5px]
             -z-10"></div>
        </div>
      </div>


      {/*content section */}
      <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
        <p className="text-texlight text-base tracking-wide text-justify">
        As a pre-final year student in Computer Science and Engineering (CSE), 
        I find myself immersed in a thrilling journey of perpetual learning and exploration.
         Proficient in C++ programming, I am constructing a robust base in Data Structures and Algorithms (DSA), 
         approaching problem-solving with a methodical and analytical mindset.
        </p> <br/>
        <p className="text-texlight text-base tracking-wide text-justify">
        Presently, my primary focus revolves around immersing myself in the dynamic realm of web development, 
        where I am refining my expertise in the MERN stack – MongoDB, Express.js, React, and Node.js. I am enthusiastically 
        embracing novel challenges, seeking collaboration with like-minded individuals, and actively contributing to 
        projects and initiatives that hold significance. My ardent desire is to cultivate both professional and personal growth, 
        seizing every opportunity for the enhancement of knowledge and skills along this exciting journey.
        </p> <br/>
       

          
      </div>
      </div>


  </section>
};

export default About;

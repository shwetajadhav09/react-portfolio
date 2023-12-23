import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2, shweta1 } from "../assets";
import { SkillCard } from "../components";


const Skills = () => {
  return <section id="skills" className=" flex items-center justify-center flex-col gap-12 my-12 ">

  {/*title */}
  <div className="w-full flex items-center justify-center py-24">
    <motion.div
    initial ={{ opacity : 0, width:0}}
    animate ={{ opacity : 1, width:200}}
    exit ={{ opacity : 0, width:0}}
    transition={{delay :0.4}}
    className="flex items-center justify-center py-24">
      <img src={Leaf1} className="w-6 h-auto object-contain" alt=""></img>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">Skills</p>
      <img src={Leaf2} className="w-6 h-auto object-contain" alt=""></img>
    </motion.div>
  </div>

  {/*main content */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full ">
    {/*image section */}
   

    {/*content section */}
    <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
    <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">Skills and work experience</p>
      <p className="text-texlight text-base tracking-wide text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolorem sint repudiandae magni doloribus totam voluptatibus 
        tenetur sunt officiis. Optio numquam voluptatem quos pariatur aut possimus accusamus, inventore illo placeat!
      </p> <br/>
      <p className="text-texlight text-base tracking-wide text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolorem sint repudiandae magni doloribus totam voluptatibus 
        tenetur sunt officiis. Optio numquam voluptatem quos pariatur aut possimus accusamus, inventore illo placeat!
      </p> <br/>
      <p className="text-texlight text-base tracking-wide text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolorem sint repudiandae magni doloribus totam voluptatibus 
        tenetur sunt officiis. Optio numquam voluptatem quos pariatur aut possimus accusamus, inventore illo placeat!
      </p>

        
    </div>

    <div className="w-full flex flex-col items-center justify-center px-8">
      
      <SkillCard 
      skill={"HTML5"} 
      percentage={"95%"} 
      color={"#FF3F3F"} 
      move={true}/>
      <SkillCard skill={"CSS 3"} percentage={"80%"} color={"#008FFF"}/>
      <SkillCard skill={"Javascript"} percentage={"60%"} color={"#FFB900"} move={true}/>
      <SkillCard skill={"ReactJs"} percentage={"50%"} color={"#00FFF3"}/>
      <SkillCard skill={"NodeJs"} percentage={"30%"} color={"#14DB00"} move={true}/>
    </div>

    
    </div>


</section>
};

export default Skills;

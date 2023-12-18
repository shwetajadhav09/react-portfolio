import React from "react";
import Header from "./Header"
import Home from "./Home";
import ParticlesContainer from "./ParticlesContainer";
import ServiceCount from "./ServiceCount";
import About from "./About";

const App = () => {
  return (
    <div className="w-full xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">


      {/*particles container */}
      
     
      {/*header */}
      <Header/>


      {/*home container*/}
     <Home/>

     {/*services count card */}
     <ServiceCount/>

      {/*about container */}
      <About/>

      {/*skills container */}

      {/*projects container */}

      {/*contact container*/}

      {/*footer container */}



    </div>
  );
};

export default App;

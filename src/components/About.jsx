import React from "react";
import bus from "../Assets/images/bus.jpg";
import Navbar from "./NavbarComponent/Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div test-data="aboutComponent">
      <Navbar />
      {/* Start of Container */}
      <div className="grid grid-row-2">
        {/* Start of Row One */}
        <div className="bg-[#68C8D5] flex lg:flex-row flex-col">
          {/* Title Grid */}
          <div className="flex-2 lg:order-1 order-2 px-[0px] lg:mx-[100px] mx-[18px] lg:h-screen">
            <h1 className="lg:text-6xl text-5xl lg:leading-[65px] leading-[60px] text-primary font-bold flex lg:pt-[20vh] pt-8">
              Don’t wait on bus station. <br />
              Check your bus on the way.
            </h1>
            <div>
              <button className="bg-primary text-3xl hover:bg-[#232626] text-white px-6 py-4 lg:mb-0 mb-8 lg:mt-[80px] mt-[40px] rounded-md">
                View Bus
              </button>
            </div>
          </div>
          {/* Image Grid */}
          <div className="flex-1 lg:order-2 order-1 lg:mt-[15vh] mt-[20px] mb-4 pr-16">
            <img src={bus} alt="bus image" className="" />
          </div>
        </div>
        {/* End of Row One */}
        {/* Start of Rwo two */}
        <div className="bg-white">
          <div className="mp-about mb-8 mt-12">
            <h1 className="text-primary font-bold text-[30px] mb-2 lg:px-0 px-4">
              About Phantom
            </h1>
            <p className="text-[#9CA3AF] text-[20px] leading-[25px] lg:px-0 px-4">
              Movement is what powers us. It’s our lifeblood. It’s what gets us
              out of bed each morning. It pushes us to constantly reimagine how
              we can move better. For you. For all the places you want to go.
              For all the things you want to get. For all the ways you want to
              earn. Across the entire world. In real time. At the incredible
              speed of now. Phantom App will resolve the issue of waiting time
              that is unpredictable that you spend on bus stations waiting for
              the buses to arrive. It will give u details at your figuretips to
              when the buses will arrive, how many bus seats available, bus
              routes and bus stops.
            </p>
          </div>
          <div className="mp-about mb-8">
            <h1 className="text-primary font-bold text-[30px] mb-2 lg:px-0 px-4">
              Mission
            </h1>
            <p className="text-[#9CA3AF] text-[20px] leading-[25px] lg:px-0 px-4">
              Our core strategy is to help Rwandan citizens to manage their time
              well while making travel choices. In addition is to improving the
              customer experience with a focus on expanding our app features
              which are user friendly for all customers at different levels
              while staying within the parameters of our consolidated net income
              and operating segment contribution profit targets for everyone
              involved.
            </p>
          </div>
          <div className="mp-about mb-14">
            <h1 className="text-primary font-bold text-[30px] mb-2 lg:px-0 px-4">
              Vision
            </h1>
            <p className="text-[#9CA3AF] text-[20px] leading-[25px] lg:px-0 px-4">
              Being a dynamic and progressive transportation app service provide
              that leverages technology and impacts the lives of all people.
            </p>
          </div>
        </div>
        {/* End of Row two */}
      </div>
      {/* End of Container */}
      <Footer />
    </div>
  );
};

export default About;

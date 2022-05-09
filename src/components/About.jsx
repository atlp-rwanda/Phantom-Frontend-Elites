import React from "react";
import { useTranslation } from "react-i18next";

import bus from "../Assets/images/bus.jpg";
import Navbar from "./NavbarComponent/Navbar";
import Footer from "./Footer";
import { NavLink as Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  return (
    <div test-data="aboutComponent">
      <Navbar />
      {/* Start of Container */}
      <div className="grid grid-row-2 mt-10 lg:mt-0">
        {/* Start of Row One */}
        <div className="bg-[#68C8D5] flex lg:flex-row flex-col">
          {/* Title Grid */}
          <div className="flex-2 lg:order-1 order-2 lg:w-1/2 px-[0px] lg:mx-[100px] mx-[18px] lg:h-screen">
            <h1 className="lg:text-6xl text-5xl lg:leading-[65px] leading-[60px] text-primary font-bold flex lg:pt-[30vh] pt-8">
              {t("about.jumbotron1")} <br />
              {t("about.jumbotron2")}
            </h1>
            <div className="lg:mt-[85px] mt-[40px] lg:mb-0 mb-10">
              <Link
                to="/"
                className="bg-primary text-3xl hover:bg-[#232626] text-white px-6 py-4 rounded-md"
              >
                {t("about.buttonName")}
              </Link>
            </div>
          </div>
          {/* Image Grid */}
          <div className="flex-1 lg:order-2 lg:w-1/2 order-1 lg:mt-[25vh] mt-[20px] mb-4 pr-16">
            <img src={bus} alt="bus image" className="" />
          </div>
        </div>
        {/* End of Row One */}
        {/* Start of Rwo two */}
        <div className="bg-white">
          <div className="mp-about mb-8 mt-12">
            <h1 className="text-primary font-bold text-[30px] mb-2 lg:px-0 px-4">
              {t("about.title")}
            </h1>
            <p className="text-[#9CA3AF] text-[20px] leading-[25px] lg:px-0 px-4">
              {t("about.aboutStatement")}
            </p>
          </div>
          <div className="mp-about mb-8">
            <h1 className="text-primary font-bold text-[30px] mb-2 lg:px-0 px-4">
              {t("about.missionTitle")}
            </h1>
            <p className="text-[#9CA3AF] text-[20px] leading-[25px] lg:px-0 px-4">
              {t("about.missionStatement")}
            </p>
          </div>
          <div className="mp-about mb-14">
            <h1 className="text-primary font-bold text-[30px] mb-2 lg:px-0 px-4">
              {t("about.visionTitle")}
            </h1>
            <p className="text-[#9CA3AF] text-[20px] leading-[25px] lg:px-0 px-4">
              {t("about.visionStatement")}
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

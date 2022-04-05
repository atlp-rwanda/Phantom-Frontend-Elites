import React from "react";
import bus from "../Assets/images/bus.jpg";

const About = () => {
  return (
    <div>
      {/* Start of Container */}
      <div className="grid grid-row-2">
        {/* Start of Row One */}
        <div className="bg-[#68C8D5] lg:flex">
          {/* Title Grid */}
          <div className=" flex-2 sm-order-2 py-2 px-12 lg:mx-[100px] my-[50px]">
            <h1 className="text-5xl text-primary font-bold">
              Don’t wait on bus station. <br />
              Check your bus on the <br /> way.
            </h1>
            <div>
              <button className="bg-primary text-white font-bold px-8 py-2 mt-[50px] rounded-md">
                View Bus
              </button>
            </div>
          </div>
          {/* Image Grid */}
          <div className="flex-1 my-[50px]">
            <img src={bus} alt="bus image" className="lg:w-[80%] h-auto" />
          </div>
        </div>
        {/* End of Row One */}

        {/* Start of Rwo two */}
        <div className="bg-white">
          <div className=" py-2 px-8 lg:mx-[100px] my-auto">
            <h1 className="text-primary font-bold text-xl mb-2">
              About Phantom
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className=" py-2 px-8 lg:mx-[100px] my-auto">
            <h1 className="text-primary font-bold text-xl mb-2">Mission</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className=" py-2 px-8 lg:mx-[100px] my-auto">
            <h1 className="text-primary font-bold text-xl mb-2">Vision</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        {/* End of Row two */}
      </div>
      {/* End of Container */}
    </div>
  );
};

export default About;

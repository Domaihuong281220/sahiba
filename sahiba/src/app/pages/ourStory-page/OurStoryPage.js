/** @format */

import React from "react";
import StepperComponent from "../../components/Stepper/StepperComponent";

const OurStoryPage = () => {
  return (
    <div className="font-mar py-8">
      <div className="w-full h-auto flex flex-col items-center gap-y-2 pb-20">
        <p className=" text-3xl ">STORY BEHIND SAHIBA GLOBAL</p>
        <p className="w-8/12 text-lg">
          Saraswati Global has taken the rug manufacturing industry to the next
          level of artisanship. Over the course of time, SGPL had successfully
          built a strong and wide community of artisans and weavers, who were
          the greatest strength of the company. With the making of these rugs,
          we preserve culture and knowledge for the next generation of artisans.
        </p>
        <img
          src="https://d1aakab6fw0jox.cloudfront.net/assets/images/sgpl-story-1.jpg"
          className="w-8/12"
        ></img>
        <p className="text-2xl">WEAVING SINCE-1978</p>
      </div>

      <div className="w-full h-auto flex flex-col items-center gap-y-8">
        <p className=" text-3xl ">
          Our Journey began in 1978 in Churu Rajasthan, India
        </p>
        <p className="w-8/12 text-lg">
          Mr. M K Choudhary got attracted towards the carpet weaving business &
          started his job by establishing a small business house in Churu & got
          involved in weaving carpets. He learnt about all the nuances of carpet
          manufacturing & was inspired to take this business on a global
          platform. He was extremely humbled to see the hard work of artisans &
          wanted to create a better life for them.
        </p>
        <div className="w-full h-auto flex flex-col justify-center px-64">
          <StepperComponent />
        </div>
      </div>

      <div className="w-full h-auto flex flex-col items-center gap-y-8 pt-20">
        <p className=" text-3xl w-8/12">
          Today, the company has a production capacity of over 2250 looms and
          employs over 10,000 people with 500+ collections of carpets.
        </p>
        <img
          src="https://d1aakab6fw0jox.cloudfront.net/assets/images/our-story-behind-3.jpg"
          className="w-8/12"
        ></img>
      </div>
    </div>
  );
};

export default OurStoryPage;

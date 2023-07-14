/** @format */

import { message, Steps, theme } from "antd";
import { useState } from "react";
const steps = [
  {
    title: "1985",
    url: "https://d1aakab6fw0jox.cloudfront.net/assets/images/our-story-1985.jpg",
    description:
      "Mr Mahesh K. Choudhary moved to the Gujarat tribal area with the aim of starting the production of hand-knotted carpets.",
  },
  {
    title: "1994",
    url: "https://d1aakab6fw0jox.cloudfront.net/assets/images/our-story-1994.jpg",
    description:
      "Mr M.K. Choudhary, after understanding the way to his dream, returned to Jaipur to focus on exporting his carpets overseas and bringing his dreams to life",
  },
  {
    title: "1999",
    url: "https://d1aakab6fw0jox.cloudfront.net/assets/images/our-story-1999.jpg",
    description:
      'He set up his own dying and spinning plant in Jaipur, Rajasthan, and named it after his mother, "Saraswati Exports.',
  },
  {
    title: "2001",
    url: "https://d1aakab6fw0jox.cloudfront.net/assets/images/our-story-2001.jpg",
    description:
      "After seeing the rapid growth of carpets and the potential to be the market leader in the carpet industry, he launched AMER Rugs to capture the American marketplace.",
  },
  {
    title: "2007",
    url: "https://d1aakab6fw0jox.cloudfront.net/assets/images/our-story-2007.jpg",
    description:
      "Finally to rule the Carpet Industry, Mr M.K. Chaudary renamed the company Saraswati Exports to Saraswati Global Pvt Ltd.",
  },
];

const StepperComponent = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <Steps current={current} items={items} />
      <div className="w-full h-auto flex flex-col justify-center items-center py-4 gap-y-2">
        <img src={steps[current].url}></img>
        <p className="font-mar text-xl">{steps[current].description}</p>
      </div>
      <div>
        {current > 0 && (
          <button
            className="bg-orange-200 mr-5 px-5 py-1 rounded-md"
            onClick={() => prev()}
          >
            Previous
          </button>
        )}
        {current < steps.length - 1 && (
          <button
            className="bg-orange-200 mr-5 px-5 py-1 rounded-md"
            onClick={() => next()}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default StepperComponent;

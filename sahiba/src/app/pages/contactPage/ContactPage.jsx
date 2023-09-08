/** @format */

import React from "react";
import { Icon } from "@iconify/react";
import { Divider } from "antd";
// import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const ContactPage = () => {
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627,
  //   },
  //   zoom: 11,
  // };
  return (
    <>
      <div className="grid grid-cols-3 font-mar py-5">
        <div className="flex justify-center items-center flex-col w-full">
          <p className="text-2xl"> Corporate office</p>
          <div className="flex ">
            <Icon
              icon="bytesize:location"
              width={24}
              height={24}
              color="black"
            />
            <p className="">
              3 Ganesh Colony, Amer Road, Jaipur-302002, Rajasthan, INDIA
            </p>
          </div>
          <div className="flex gap-x-2">
            <Icon icon="ep:message" width={24} height={24} color="black" />
            <p className="">info@Cashmere house.com</p>
          </div>
          <div className="flex gap-x-2">
            <Icon icon="ph:phone" width={24} height={24} color="black" />
            <p className="">+91-141-2671890</p>
          </div>
          <div className="flex gap-x-2">
            <Icon icon="ph:phone" width={24} height={24} color="black" />
            <p className="">+91-141-2671890</p>
          </div>
          <div className="flex gap-x-2">
            <Icon icon="ph:phone" width={24} height={24} color="black" />
            <p className="">+91-141-2671890</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col w-full">
          <p className="text-2xl"> Delhi Store</p>
          <div className="flex ">
            <Icon
              icon="bytesize:location"
              width={24}
              height={24}
              color="black"
            />
            <p className="">
              3 Ganesh Colony, Amer Road, Jaipur-302002, Rajasthan, INDIA
            </p>
          </div>
          <div className="flex gap-x-2">
            <Icon icon="ep:message" width={24} height={24} color="black" />
            <p className="">info@Cashmere house.com</p>
          </div>
          <div className="flex gap-x-2">
            <Icon icon="ph:phone" width={24} height={24} color="black" />
            <p className="">+91-141-2671890</p>
          </div>
          <div className="flex gap-x-2">
            <Icon icon="ph:phone" width={24} height={24} color="black" />
            <p className="">+91-141-2671890</p>
          </div>
          <div className="flex gap-x-2">
            <Icon icon="ph:phone" width={24} height={24} color="black" />
            <p className="">+91-141-2671890</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col w-full">
          <p className="text-2xl"> Start a Conversation</p>
          <div className="flex ">
            <Icon
              icon="bytesize:location"
              width={24}
              height={24}
              color="black"
            />
            <p className="">
              3 Ganesh Colony, Amer Road, Jaipur-302002, Rajasthan, INDIA
            </p>
          </div>
          <div className="flex gap-x-2">
            <Icon icon="ep:message" width={24} height={24} color="black" />
            <p className="">info@Cashmere house.com</p>
          </div>
          <div className="flex gap-x-2">
            <Icon icon="ph:phone" width={24} height={24} color="black" />
            <p className="">+91-141-2671890</p>
          </div>
          <div className="flex gap-x-2">
            <Icon icon="ph:phone" width={24} height={24} color="black" />
            <p className="">+91-141-2671890</p>
          </div>
          <div className="flex gap-x-2">
            <Icon icon="ph:phone" width={24} height={24} color="black" />
            <p className="">+91-141-2671890</p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="grid grid-cols-2">
        {/* contact bottom left */}
        <div className="w-full h-auto py-20 pl-10">
          <div className="flex flex-col py-5">
            <p className="text-3xl font-mei">Our Store</p>
            <p className="font-mar text-lg">
              We believe that connecting with right people helps each other
              grow. Saraswatii Global Pvt Ltd has a hybrid and productive
              environment with an exclusive database of business and clients.
              Get in touch with us for business, or just to have a warm
              conversation.
            </p>
          </div>
          <div className="flex  justify-center gap-x-10 py-5">
            <img
              src="https://d1aakab6fw0jox.cloudfront.net/assets/images/stores/saraswati-global-jaipur.jpg"
              className="w-5/12 h-full object-fill"
            ></img>
            <div className="flex flex-col items-center justify-evenly">
              <p className="">Jaipur Showroom</p>
              <p className="">
                3 Ganesh Colony, Amer Road, Jaipur-302002, Rajasthan, INDIA
              </p>
              <div className="flex gap-x-2">
                <Icon icon="ph:phone" width={24} height={24} color="black" />
                <p className="">+91-141-2671890</p>
              </div>
              <div className="flex gap-x-2">
                <Icon icon="ph:phone" width={24} height={24} color="black" />
                <p className="">+91-141-2671890</p>
              </div>
              <div className="flex gap-x-2">
                <Icon icon="ph:phone" width={24} height={24} color="black" />
                <p className="">+91-141-2671890</p>
              </div>
            </div>
          </div>
          <div className="flex  justify-center gap-x-10 py-5">
            <img
              src="https://d1aakab6fw0jox.cloudfront.net/assets/images/stores/saraswati-global-jaipur.jpg"
              className="w-5/12 h-full object-fill"
            ></img>
            <div className="flex flex-col items-center justify-evenly">
              <p className="">Jaipur Showroom</p>
              <p className="">
                3 Ganesh Colony, Amer Road, Jaipur-302002, Rajasthan, INDIA
              </p>
              <div className="flex gap-x-2">
                <Icon icon="ph:phone" width={24} height={24} color="black" />
                <p className="">+91-141-2671890</p>
              </div>
              <div className="flex gap-x-2">
                <Icon icon="ph:phone" width={24} height={24} color="black" />
                <p className="">+91-141-2671890</p>
              </div>
              <div className="flex gap-x-2">
                <Icon icon="ph:phone" width={24} height={24} color="black" />
                <p className="">+91-141-2671890</p>
              </div>
            </div>
          </div>
        </div>
        {/* end contact bottom left */}

        {/* contact bottom right */}
        <div className="w-full  h-auto py-20 ">
          <div className="flex flex-col py-5">
            <p className="text-3xl font-mei">Got Any Questions?</p>
            <p className="font-mar text-lg pb-10 ">
              Use the form below to get in touch with our team
            </p>
          </div>
          <form className="w-full px-10 font-mar  ">
            <div className="border rounded-lg p-3 bg-slate-400">
              <div className="flex flex-wrap -mx-3 mb-6 pb-10">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-lg  font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 pb-10">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    E-mail
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                  />
                  <p className="text-gray-600 text-lg  italic">
                    Some tips - as long as needed
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 pb-10">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Message
                  </label>
                  <textarea
                    className=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="w-full">
                  <button
                    className="shadow bg-black hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* end contact bottom right */}
      </div>
      {/* <div className="w-full h-[400px]">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div> */}
    </>
  );
};

export default ContactPage;

/** @format */

import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div class="grid grid-cols-6 h-96 w-full bg-slate-500 font-mar">
      <div className="py-5">
        <div className="py-5">
          <p className="text-xl font-normal">INFOMATION</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a className="hover:font-medium" href="">
            Our Story
          </a>
          <a className="hover:font-medium" href="">
            Our Founder
          </a>
          <a className="hover:font-medium" href="">
            Our Foundation
          </a>
          <a className="hover:font-medium" href="">
            Contact Us
          </a>
          <a className="hover:font-medium" href="">
            Blog
          </a>
          <a className="hover:font-medium" href="">
            Carrer
          </a>
        </div>
      </div>
      <div className="py-5">
        <div className="py-5">
          <p className="text-xl font-normal">GUIDES & POLICIES </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a className="hover:font-medium" href="">
            FAQ
          </a>
          <a className="hover:font-medium" href="">
            Returns
          </a>
          <a className="hover:font-medium" href="">
            Shippings
          </a>
          <a className="hover:font-medium" href="">
            Privacy Policy
          </a>
          <a className="hover:font-medium" href="">
            Terms and conditions
          </a>
        </div>
      </div>
      <div className="py-5">
        <div className="py-5">
          <p className="text-xl font-normal">OUR SERVICE</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a className="hover:font-medium" href="">
            Warranty
          </a>
          <a className="hover:font-medium" href="">
            Repairs
          </a>
          <a className="hover:font-medium" href="">
            Washing
          </a>
          <a className="hover:font-medium" href="">
            Track You Order
          </a>
          <a className="hover:font-medium" href="">
            Media
          </a>
        </div>
      </div>
      <div className="py-5">
        <div className="py-5">
          <p className="text-xl font-normal">MY ACCOUNT</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a className="hover:font-medium" href="">
            Sign In
          </a>
          <a className="hover:font-medium" href="">
            View Cart
          </a>
          <a className="hover:font-medium" href="">
            My Wishlist
          </a>
        </div>
        <div className="py-5">
          <p className="text-xl font-normal">Contact Us</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-5">
          <a className="" href="">
            T:+91-141-2671890 Mon/Sat/ 10AM-7PM(IST) info@saraswatiglobal.com
          </a>
        </div>
        <div className="flex justify-evenly">
          <Icon icon="ic:baseline-whatsapp" />
          <Icon icon="ic:baseline-facebook" />
          <Icon icon="mdi:twitter" />
          <Icon icon="mdi:pinterest" />
          <Icon icon="ri:instagram-fill" />
          <Icon icon="mdi:linkedin" />
          <Icon icon="mdi:youtube" />
        </div>
      </div>
      <div className="py-5 col-span-2">
        <div className="py-5 flex px-10 ">
          <p className="">
            With a strong legacy of intricate patterns, technological
            innovations, and cultural heritage in rug making, Saraswatii Global
            has taken the rug manufacturing industry to the next level of
            artisanship.
          </p>
        </div>
        <div className="py-5 flex px-10 flex-col ">
          <p className="">PAYMENTS METHODS</p>
          <div className="flex items-center justify-evenly py-4">
            <Icon icon="ri:visa-fill" width={30} height={30} />
            <Icon icon="cib:cc-mastercard" width={30} height={30} />
            <Icon icon="fontisto:paypal" width={30} height={30} />
            <Icon icon="arcticons:momo" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

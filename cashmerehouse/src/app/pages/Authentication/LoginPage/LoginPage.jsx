/** @format */

import React, { useState } from "react";
import ImageLogo from "../../../../assets/image/logo/Logo.png";
import backgroudLogin from "../../../../assets/image/imglogin.jpg";

import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
const LoginPage = ({ setToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };

  const handleshowLoginPage = () => {
    navigate("/login");
  };
  const handleRegisterPage = () => {
    navigate("/register");
  };
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    if (
      loginData.email === "admin@gmail.com" &&
      loginData.password === "123456"
    ) {
      navigate("/userlist");
      toast.success("login with admin");
    } else if (
      loginData.email === "user@gmail.com" &&
      loginData.password === "123456"
    ) {
      navigate("/");
      toast.success("login with user");
    } else {
      toast.error(
        "The email or password you entered is not connected to any account"
      );
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-green-500  to-orange-500 w-full h-auto p-[10%] ">
      <div className="  grid grid-cols-2 w-full  h-auto shadow-2xl shadow-black rounded-2xl ">
        <div className="w-full h-auto ">
          <img
            src={backgroudLogin}
            className="w-full h-full rounded-l-2xl object-cover "
          ></img>
        </div>
        <div className="w-full h-auto rounded-r-2xl">
          <div className="m-8">
            <div className={``}>
              <div className="flex justify-center gap-x-2 items-center shadow-md shadow-black rounded-lg">
                <img src={ImageLogo} className="w-20 h-20 object-cover"></img>
                <p className="text-gray-300 font-mar text-4xl font-bold">
                  Cashmere House
                </p>
              </div>

              <div className="pt-4">
                <p className="text-gray-300 font-mar text-3xl font-bold">
                  Welcome back
                </p>
              </div>
              <div className="">
                <p className="text-white font-mar">
                  Welcome back ! please enter your details
                </p>
              </div>
              <div className="flex justify-around pt-4">
                <button
                  className="w-[40%] h-auto p-2 rounded-lg  bg-blue-300 shadow-md shadow-black hover:shadow-white "
                  onClick={handleshowLoginPage}
                >
                  LOGIN
                </button>
                <button
                  className="w-[40%] h-auto p-2 rounded-lg   shadow-md shadow-black hover:shadow-white"
                  onClick={handleRegisterPage}
                >
                  REGISTER
                </button>
              </div>
            </div>

            {/* Sign in form  */}
            <div className="">
              <div className="pt-4">
                <p className="font-mar text-white font-bold text-xl">
                  Sign In with
                </p>
                <div className="flex justify-center gap-x-5">
                  <button className="shadow-md shadow-black w-auto h-auto p-2 rounded-lg hover:shadow-white">
                    <Icon icon="logos:google-gmail" width={28} h={28}></Icon>
                  </button>
                  <button className="shadow-md shadow-black w-auto h-auto p-2 rounded-lg hover:shadow-white">
                    <Icon icon="devicon:facebook" width={28} h={28}></Icon>
                  </button>
                </div>
              </div>
              <div className="pt-3">
                <p className="font-mar text-white font-bold text-xl">OR</p>
              </div>

              <form className="" onSubmit={handleSubmit}>
                <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                  <p className="text-lg">Email</p>
                  <input
                    className="w-full h-auto border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200 bg-transparent placeholder-blue-500 placeholder:font-bold"
                    placeholder="Email"
                    type="text"
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                  />
                </div>
                <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                  <p className="text-lg">Password</p>
                  <input
                    className="w-full h-auto border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200 bg-transparent placeholder-blue-500 placeholder:font-bold"
                    placeholder="Password"
                    type="password"
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                  />
                </div>
              </form>

              <div className="flex  items-center justify-around gap-x-4">
                <div className="flex items-center justify-center gap-x-2 ">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-orange-500 bg-gray-100 border-gray-300  focus:ring-orange-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                  ></input>
                  <p className="">Remember me</p>
                </div>
                <button className="w-auto h-auto p-2   rounded-lg shadow-md shadow-black hover:shadow-white">
                  <p className="">Forgot Password</p>
                </button>
              </div>
              <div className="w-full pt-4">
                <button
                  className="w-full h-auto p-2  rounded-lg shadow-md shadow-black hover:shadow-green-700 "
                  onClick={handleLogin}
                >
                  <p className="text-xl text-white font-bold">SIGN IN</p>
                </button>
              </div>
              <div className="flex justify-center gap-x-2 pt-4 items-center">
                <p className="">Not a member?</p>
                <button
                  className="bg-blue-200 p-2 rounded-lg shadow-black shadow-md hover:shadow-white"
                  onClick={handleRegisterPage}
                >
                  <p className="">Register</p>
                </button>
              </div>
            </div>
            {/* bg-gradient-to-r from-orange-500  to-green-500  */}
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default LoginPage;

/** @format */

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout";
import { useStore } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./app/pages/Authentication/LoginPage/LoginPage";
import RegisterPage from "./app/pages/Authentication/RegisterPage/RegisterPage";
import useToken from "./helpers/token";
function App() {
  // const [token, setToken] = useToken();

  // if(!token){
  //   return <LoginPage
  // }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </Router>
      <ToastContainer position="bottom-center" autoClose={2000} />
    </div>
  );
}

export default App;

/** @format */

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./app/Layouts/DefaultLayout";
import { useStore } from "./store";
import { CartPage } from "./app/pages/CartPage/CartPage";
function App() {
  const [state, dispatch] = useStore();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

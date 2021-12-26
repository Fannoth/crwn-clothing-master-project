import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
const JacketsPage = () => (
  <div>
    <h1>Jackets Page</h1>
  </div>
);
const SneakersPage = () => (
  <div>
    <h1>Sneakers Page</h1>
  </div>
);
const WomensPage = () => (
  <div>
    <h1>Womens Page</h1>
  </div>
);
const MensPage = () => (
  <div>
    <h1>Mens Page</h1>
  </div>
);

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
        <Route path="/jackets" element={<JacketsPage />} />
        <Route path="/sneakers" element={<SneakersPage />} />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/mens" element={<MensPage />} />
      </Routes>
    </div>
  );
};

export default App;

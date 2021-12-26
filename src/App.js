import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import { ShopPage } from "./pages/Shop/Shop";
import { Header } from "./components/Header/Header";
import { SignInAndSingUp } from "./pages/SingInAndSingUp/SignInAndSingUp";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sign-in" element={<SignInAndSingUp />} />
      </Routes>
    </div>
  );
};

export default App;

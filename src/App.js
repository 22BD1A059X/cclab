import React from "react";
// import TodoListPlanner from "./components/todo";
import {useState} from "react";
import ProductList from "./components/ProductList";
import ContactUs from "./components/Contact";
import Herobanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import Navber from "./components/Navbar";
import Categories from "./components/Categories";
const App = () => {
  return (
    <div>
      <Navber/>
      <Herobanner/>
      <Categories/>
      <ProductList/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default App;

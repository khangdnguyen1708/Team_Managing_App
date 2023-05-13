import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Employees from "./Employees";
// import react

function App() {
  return (
    <>
      <Header />
      <Content />
      <Employees />
      <Footer />
    </>
  );
}

export default App;

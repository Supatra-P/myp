import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import HelloWorld from "./Component/Skill";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  return (
    <React.Fragment>
            <Navbar/>
            <Home/>
            <About/>
            <HelloWorld/>
            <Contact/>
            <Footer/>
    </React.Fragment>
  );
}

export default App;

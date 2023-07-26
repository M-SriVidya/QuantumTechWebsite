import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Members from "./Routes/Member";
import Publications from "./Routes/Publications";
import Gallery from "./Routes/Gallery";
import Projects from "./Routes/Projects";
import ResearchFacilities from "./Routes/ResearchFacilities";

function App() {
  useEffect(() => {
    document.title = "Quantamania"; // Change the title here
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/About" element = {<About/>} />
        <Route path = "/Members" element = {<Members/>} />
        <Route path = "/Publications" element = {<Publications/>} />
        <Route path = "/Gallery" element = {<Gallery/>} />
        <Route path = "/Projects" element = {<Projects/>} />
        <Route path = "/Facilities" element = {<ResearchFacilities/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

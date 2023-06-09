import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Members from "./Routes/Member";
import Publications from "./Routes/Publications";
import About from "./Routes/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/Members" element = {<Members/>} />
        <Route path = "/Publications" element = {<Publications/>} />
        <Route path = "/About" element = {<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Members from "./Routes/Members";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/Members" element = {<Members/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

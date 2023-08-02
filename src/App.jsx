import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Home/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from "./Pages/Contactpage";

function App() {
  return (
    <div className="">
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
    </div>
  );
}

export default App;

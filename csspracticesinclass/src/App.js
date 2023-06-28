import "./App.css";

import NavBar from "./components/navBar/NavBar";
import Boxes from "./components/boxes/Boxes";
import OrangeSky from "./components/orangeSky/OrangeSky";
import VerticalBackground from "./components/verticalBackground/VerticalBackground";
import CatFactsCard from "./components/catFacts/CatFactsCard";
// import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/boxes" element={<Boxes />} />
          <Route path="/orangesky" element={<OrangeSky />} />
          <Route path="/vertical" element={<VerticalBackground />} />
          <Route path="/catfacts" element={<CatFactsCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

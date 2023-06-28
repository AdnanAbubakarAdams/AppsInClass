import "./App.css";
import Boxes from "./components/boxes/Boxes";
import CatFactsCard from "./components/catFacts/CatFactsCard";
import NavBar from "./components/navBar/NavBar";
import OrangeSky from "./components/orangeSky/OrangeSky";
import VerticalBackground from "./components/verticalBackground/VerticalBackground"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
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

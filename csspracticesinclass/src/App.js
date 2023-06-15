import "./App.css";
import Boxes from "./components/boxes/Boxes";
import OrangeSky from "./components/orangeSky/OrangeSky";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/boxes" element={<Boxes />} />
          <Route path="/orangesky" element={<OrangeSky />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

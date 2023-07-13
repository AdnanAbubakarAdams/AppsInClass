import "./App.css";

import NavBar from "./components/navBar/NavBar";
import Boxes from "./components/boxes/Boxes";
import OrangeSky from "./components/orangeSky/OrangeSky";
import VerticalBackground from "./components/verticalBackground/VerticalBackground";
import CatFactsCard from "./components/catFacts/CatFactsCard";
import StudentList from "./components/studentList/StudentList";
import SignUpForm from "./components/signUp/SignUpForm";
// import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/recipe/RecipeList";
import Carrom from "./components/carrom/Carrom";

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
          <Route path="/students" element={<StudentList />} />
          <Route path="/recipe" element={<RecipeList />} />
          <Route path="/carrom" element={<Carrom />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar /> {/* import navbar compt */}
      <main className="main-content">
        <Routes>
          {/* set the routes to the pages */}
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

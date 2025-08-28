import "./App.css";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/footer/Footer";
import Newarrivals from "./pages/arrivals/Newarrivals";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/new-arrivals" element={<Newarrivals />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./Components/Nav/Navbar";
import Footer from "./Components/Footer/Footer";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Newarrivals from "./Pages/arrivals/Newarrivals";
import Shop from "./Pages/Shop/Shop";
import Foodscale from "./Pages/Food/Foodscale";
import Caloriesshop from "./Pages/Calorie Calc/Caloriesshop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals" element={<Newarrivals />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/foodscale" element={<Foodscale />} />
          <Route path="/calorieshop" element={<Caloriesshop />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

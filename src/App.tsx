import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />        
        <Route path="/contact" element={<Contact />} />        
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;


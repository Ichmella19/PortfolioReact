import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Layout from "./Layouts/Layout";
import Home from "./Composants/Home";
import About from "./Composants/About";
import Portfolio from "./Composants/Portfolio";
import Contact from "./Composants/Contact";
import Swipper from "./Composants/Swipper";
const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Swipper" element={<Swipper />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

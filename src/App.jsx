import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Composants/Home";
import About from "./Composants/About";

const App = () => {
  return (
    <Router> 
      <Routes >
        <Route path="/" element={<Layout />}>
         
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        
        </Route>

         {/* <Route path="/Inscription" element={<Inscription />}/> 
         <Route path="/Connexion" element={<Connexion />}/>  */}
      </Routes>
    </Router>
  );
};

export default App;

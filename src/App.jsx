import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Composants/Home";


const App = () => {
  return (
    <Router> 
      <Routes >
        <Route path="/" element={<Layout />}>
         
        <Route path="/" element={<Home />} />
       
        
        </Route>

         {/* <Route path="/Inscription" element={<Inscription />}/> 
         <Route path="/Connexion" element={<Connexion />}/>  */}
      </Routes>
    </Router>
  );
};

export default App;

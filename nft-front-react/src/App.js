import './styles/App.css';
import TopSection from './Components/TopSection';
import Footer from './Components/Footer';
import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Connect from './Components/Connect';
import OutdoorHome from './Components/OutdoorHome';




const App = () => {

  return (


      
      <Routes>
        <Route path="/" element={<Connect />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/courses/outdoor" element={<OutdoorHome />} />
      </Routes>
    
  );
};

export default App;

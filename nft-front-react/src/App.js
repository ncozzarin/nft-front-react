import './styles/App.css';
import TopSection from './Components/TopSection';
import Footer from './Components/Footer';
import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';




const App = () => {

  return (
    <div className="App">
      <TopSection ></TopSection>
      <Footer></Footer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
    
  );
};

export default App;

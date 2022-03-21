import './styles/App.css';
import TopSection from './Components/TopSection';
import Footer from './Components/Footer';
import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Connect from './Components/Connect';




const App = () => {

  return (
    <div className="App">
      <div className='content-wrap'>
      <TopSection ></TopSection>
      
      <Routes>
        <Route path="/" element={<Connect />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      </div>
      <Footer></Footer>
    </div>
    
  );
};

export default App;

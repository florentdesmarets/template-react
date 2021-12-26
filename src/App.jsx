import './App.css';
import {
  BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from "../src/components/home/Home"
import Footer from "../src/components/footer/Footer"
import Buttons from "../src/components/templates/buttons/Buttons"
import Footers from "../src/components/templates/footers/Footers"
import FooterSimple from './components/templates/footers/footer-simple/FooterSimple';
import FooterPro from './components/templates/footers/footer-pro/FooterPro'
import DesignFooter from './components/templates/footers/footer-design/FooterDesign'
import Navbars from './components/templates/navbars/Navbars'
import BasicNavbar from './components/templates/navbars/basic-navbar/Basicnavbar'
const App = () => {

  return (
    <div className="App">
      <Router>
        {/* <p className="">back to home</p> */}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/buttons" element={<Buttons/>}/>
          <Route path="/footers" element={<Footers/>}/>
          <Route path="/simple-footer" element={<FooterSimple/>}/>
          <Route path="/pro-footer" element={<FooterPro/>}/>
          <Route path="/design-footer" element={<DesignFooter/>}/>
          <Route path="/navbars" element={<Navbars/>}/>
          <Route path="/basicnav" element={<BasicNavbar/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

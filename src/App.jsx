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
import InterMaps from './components/templates/inter-map/InterMaps'
import InterMap from './components/templates/inter-map/inter-map/InterMap'
import Forms from './components/templates/forms/Forms'
import StyledForm from './components/templates/forms/styled-form/StyledForm'
import Marquees from './components/templates/marquees/Marquees'
import BasicMarquee from './components/templates/marquees/basic-marquee/BasicMarquee'
const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/buttons" element={<Buttons/>}/>
          <Route path="/footers" element={<Footers/>}/>
          <Route path="/simple-footer" element={<FooterSimple/>}/>
          <Route path="/pro-footer" element={<FooterPro/>}/>
          <Route path="/design-footer" element={<DesignFooter/>}/>
          <Route path="/navbars" element={<Navbars/>}/>
          <Route path="/basicnav" element={<BasicNavbar/>}/>
          <Route path="/intermaps" element={<InterMaps/>}/>
          <Route path="/intermap" element={<InterMap/>}/>
          <Route path="/forms" element={<Forms/>}/>
          <Route path="/styled-form" element={<StyledForm/>}/>
          <Route path="/marquees" element={<Marquees/>}/>
          <Route path="basic-marquee" element={<BasicMarquee/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

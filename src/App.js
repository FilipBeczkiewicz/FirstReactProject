import "./App.css";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import HomePage from "./components/HomePage";
import Careers from "./pages/Careers";
import Events from "./pages/Events";
import Products from "./pages/Products";
import Support from "./pages/Support";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
// imgs
import logo from "./assets/logo.svg";
import hamburger from "./assets/icon-hamburger.svg";
import close from "./assets/icon-close.svg";
import aboutImgMob from "./assets/image-interactive.jpg";
import aboutImgDesk from "./assets/image-interactive-desk.jpg";
import footbalDesc from "./assets/image-soccer-team-desk.jpg";
import footbalMob from "./assets/image-soccer-team.jpg";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              logo={logo}
              hamburger={hamburger}
              close={close}
              aboutImgMob={aboutImgMob}
              aboutImgDesk={aboutImgDesk}
              footbalDesc={footbalDesc}
              footbalMob={footbalMob}
            />
          }
        />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/events' element={<Events />} />
        <Route path='/products' element={<Products />} />
        <Route path='/support' element={<Support />} />
        <Route path='*' exact={true} component={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

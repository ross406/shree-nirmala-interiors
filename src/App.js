import React from "react";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "./views/Index.js";
import NucleoIcons from "./views/NucleoIcons.js";
import LoginPage from "./views/examples/LoginPage.js";
import LandingPage from "./views/examples/LandingPage.js";
import ProfilePage from "./views/examples/ProfilePage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Index />} /> */}
        {/* <Route path="/nucleo-icons" exact element={<NucleoIcons />} /> */}
        {/* <Route path="/landing-page" exact element={<LandingPage />} /> */}
        <Route path="/" exact element={<LandingPage />} />
        {/* <Route path="/profile-page" exact element={<ProfilePage />} /> */}
        {/* <Route path="/login-page" exact element={<LoginPage />} /> */}
        {/* <Redirect to="/index" />
        <Redirect from="/" to="/index" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

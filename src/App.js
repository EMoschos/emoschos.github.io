import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

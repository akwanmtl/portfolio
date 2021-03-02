import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container content">
        <Navbar />
        <Route exact path="/portfolio" component={Home} />
        <Route exact path="/portfolio/about" component={About} />
        <Route exact path="/portfolio/projects" component={Projects} />
        <Route path="/portfolio/contact" component={Contact} />
      <Footer/>
      </div>
      
    </Router>
  );
}

export default App;

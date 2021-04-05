import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Particles from './components/Particles'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      
    {/* <Particles /> */}
      <div className="container content">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      <Footer/>
      </div>
      
    </Router>
  );
}

export default App;

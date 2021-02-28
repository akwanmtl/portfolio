import React from 'react';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Card from '../../components/Card';
import test from '../../assets/burger.jpg';
import test2 from '../../assets/novelty-screenshot.jpg';
import Modal from '../../components/Modal';
import Header from '../../components/Header';

function Projects () {
  return(
    <div>
      <Header title="Projects"/>
      <div className="card-group">
        <Card id="test" img={test}/>
        <Modal id="test" img={test} title="test"/>
        <Card id="test2" img={test2}/>
        <Modal id="test2" img={test2} title="test2"/>
      </div>
    </div>
  )
}

export default Projects;
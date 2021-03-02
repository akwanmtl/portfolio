import React from 'react';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import './projects.css'
import ProjectList from '../../assets/projects.json';
import {Animated} from "react-animated-css";

function Projects () {
  return(
    <div>
      <Animated animationIn="pulse" isVisible={true}>

      <Header title="Projects"/>
      <div className="row justify-content-center"> 
      {ProjectList.map((project) => (
        <div className="col-md-5 col-lg-4 projectbox" key={project.image.split(".")[0]}>
          <Card id={project.image.split(".")[0]} img={project.image} title={project.name} tech={project.tech}/>
          <Modal id={project.image.split(".")[0]} img={project.image} title={project.name} github={project.github} website={project.website} description={project.description} />
        </div>
      ))}
      </div>
      </Animated>
    </div>
  )
}

export default Projects;
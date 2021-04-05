
import Particles from 'react-particles-js';
import './particles.css';

function ParticleBackground () {
  return (
  <Particles
    className="particles-canvas"
    params={{
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 900
          }
        },
        links:{
          opacity: 0
        },
        color: {
          value: "#ffffff"
        },
        size:{random:{enable:true},value:{min:1,max:5},animation:{speed:1,minimumValue:0.3}}
      }
    }}
  />
  )

}

export default ParticleBackground;
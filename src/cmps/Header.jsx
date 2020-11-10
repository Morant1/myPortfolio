import React from 'react'
import Particles from 'react-particles-js';

export default function Header() {

    
    return (
        <header>
            
            <ul className="info">
                        <li className="icon"><a href="https://www.linkedin.com/in/moran-turgeman-683636179" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                        <li className="icon"><a href="https://github.com/Morant1" target="_blank"><i
                            className="fab fa-github"></i></a></li>
                </ul>

        <h1><span className="open-tag tag">&#60;h1&#62;</span>Moran<span className="dot">.</span>
            <span className="close-tag tag">&#60;/h1&#62;</span>
        </h1>
        <h2 className="first">
            Front End / Full Stack Developer
        </h2>


        <div className="half-1-background">
            
        <Particles
          params={{
            particles: {
              "number": {
                "value": 30,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#08fdd8"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.2,
                  "sync": false
                }
              },
              "size": {
                "value": 5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.3,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true,
            "config_demo": {
              "hide_card": false,
              "background_color": "transparent",
              "background_image": "",
              "background_position": "50% 50%",
              "background_repeat": "no-repeat",
              "background_size": "cover"
            }
          }
          }




        />
        </div>
    </header>
    )
}

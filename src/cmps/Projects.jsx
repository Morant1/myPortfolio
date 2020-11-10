import React from 'react'

export default function Projects() {
    return (

    <section className="projects-section" id="projects">            
            <div className="projects">
                <img className="splash" src={require("../assets/img/splash.png")}/>
                <img className="splash splash2" src={require("../assets/img/splash.png")}/>
 

                <span className="tag">&#60;div&#62;</span>
            <div className="project">
                <img className="img" src={require("../assets/img/eventribe.png")}/>
                <div className="content">
                    <h3><img className="tech" src={require('../assets/img/react.png')}/>EvenTribe</h3>
                    <p>An online event platform where you can subscribe and create your own event</p>
                    <ul>
                        <li>FULL CRUDL</li>
                        <li>REACT</li>
                        <li>REACT REDUX</li>
                        <li>NODE JS</li>
                        <li>HTTP PROTOCOL</li>
                        <li>REST API's</li>
                        <li>MongoDB</li>
                        <li>SASS</li>
                        <li>JAVASCRIPT</li>
                    </ul>
                    <div className="btn">
                    <button><a href="https://github.com/Morant1/FullStackApp" target="_blank"><i className="fas fa-code"></i> CODE</a></button>
                    <button><a href="https://eventribeapp.herokuapp.com/" target="_blank"><i className="fas fa-link"></i> WEBSITE</a></button>
                </div>
            </div>
        </div>
        <span className="tag">&#60;/div&#62;</span>
        <span className="tag">&#60;div&#62;</span>
            <div className="project">
                <img className="img" src={require("../assets/img/appsus.png")}/>
                <div className="content">
            
                    <h3><img className="tech" src={require('../assets/img/react.png')}/>Apsus</h3>
                    <p>An Email, Keep & Books services, all in one place</p>
                    <ul>
                        <li>FULL CRUDL</li>
                        <li>REACT</li>
                        <li>JAVASCRIPT</li>
                        <li>EVENTBUS</li>
                        <li>SASS</li>
                    </ul>
                    <div className="btn">
                    <button><a href="https://github.com/Morant1/ReactApp" target="_blank"><i className="fas fa-code"></i> CODE</a></button>
                    <button><a href="https://morant1.github.io/ReactApp/" target="_blank"><i className="fas fa-link"></i> WEBSITE</a></button>
                </div>
                </div>
            </div>
            <span className="tag">&#60;/div&#62;</span>

            <span className="tag">&#60;div&#62;</span>
        <div className="project">
            <img className="img" src={require("../assets/img/weather.png")}/>
            <div className="content">
          
                <h3><img className="tech" src={require('../assets/img/react.png')}/>Weather Project</h3>
                <p>Displaying weather using geolocation API and storing favorites locations</p>
                <ul>
                    <li>REACT HOOKS</li>
                    <li>REACT REDUX</li>
                    <li>SASS</li>
                    <li>ACCUWEATHER API</li>
                    <li>GEOLOCATION API</li>
                </ul>
                <div className="btn">
                <button> <a href="https://github.com/Morant1/ReactHooksProject" target="_blank"><i className="fas fa-code"></i> CODE</a></button>
                <button><a href="https://morant1.github.io/weather" target="_blank"><i className="fas fa-link"></i> WEBSITE</a></button>
            </div>
            </div>
        </div>
        <span className="tag">&#60;/div&#62;</span>

            <span className="tag">&#60;div&#62;</span>
            <div className="project">
                <img className="img" src={require("../assets/img/vue2.png")}/>
                <div className="content">
               
                    <h3><img className="tech" src={require('../assets/img/vue.png')}/>Books project</h3>
                    <p>Create,update,remove and search books via google books api</p>
                    <ul>
                        <li>FULL CRUDL</li>
                        <li>VUE</li>
                        <li>VUEX</li>
                        <li>SASS</li>
                        <li>GOOGLE API</li>
                    </ul>
                    <div className="btn">
                    <button><a href="https://github.com/Morant1/VueProject" target="_blank"><i className="fas fa-code"></i> CODE</a></button>
                    <button><a href="https://morant1.github.io/VueProject" target="_blank"><i className="fas fa-link"></i> WEBSITE</a></button>
                </div>
                </div>
            </div>
            <span className="tag">&#60;/div&#62;</span>
        
            <span className="tag">&#60;div&#62;</span>
        <div className="project">
            <img className="img" src={require("../assets/img/angular2.png")}/>
            <div className="content">
        
                <h3><img className="tech" src={require('../assets/img/angular.png')}/>Bitcoin project</h3>
                <p>Create, update ,remove and transfer money from your bitcoin account</p>
                <ul>
                    <li>FULL CRUDL</li>
                    <li>ANGULAR</li>
                    <li>SASS</li>
                    <li>TYPESCRIPT</li>
                    <li>ANGULAR GOOGLE CHARTS</li>
                    <li>JSON SERVER</li>
                </ul>
                <div className="btn">
                <button><a href="https://github.com/Morant1/AngularProject" target="_blank"><i className="fas fa-code"></i> CODE</a></button>
                <button><a href="https://morant1.github.io/Angular_project" target="_blank"><i className="fas fa-link"></i> WEBSITE</a></button>
            </div>
            </div>
        </div>
        <span className="tag">&#60;/div&#62;</span>

        <span className="tag">&#60;div&#62;</span>
        <div className="project">
            <img className="img" src={require("../assets/img/meme.png")}/>
            <div className="content">
          
                <h3><img className="tech" src={require('../assets/img/js.png')}/>Meme generator</h3>
                <p>Create your own meme, download and save memes</p>
                <ul>
                    <li>CANVAS JS</li>
                    <li>VANILLA JS</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                </ul>
                <div className="btn">
                <button> <a href="https://github.com/Morant1/MemeGenerator" target="_blank"><i className="fas fa-code"></i> CODE</a></button>
                <button><a href="https://morant1.github.io/MemeGenerator" target="_blank"><i className="fas fa-link"></i> WEBSITE</a></button>
            </div>
            </div>
        </div>
        <span className="tag">&#60;/div&#62;</span>
    </div>


        </section>
    )
}

import React from 'react'



export default function About() {
    return (
        <React.Fragment>
        <section className="about-section" id="about">
        <img className="splash" src={require("../assets/img/splash.png")}/>

        <div className="about">



            <span className="tag">&#60;body&#62;</span>
            <h1><span className="tag">&#60;h1&#62;</span> ABOUT ME. <span className="tag">&#60;/h1&#62;</span></h1>
            <span className="tag">&#60;p&#62;</span>
            <p>Full-Stack / Frontend Web Developer with hands-on experience in advanced frameworks, including
                React.js, Vue.js, Angular/cli, Node.js and MongoDB.
            </p>
            <p>Holds a bachelor's degree in Economics & Management from Tel-Aviv University.
            </p>
            <p>Two years of experience as a Data Analyst.</p>
            <span className="tag">&#60;/p&#62;</span>
             <div className="btn">
                <button><a href={require('../assets/img/cv.pdf')} download="Moran's CV">DOWNLOAD MY CV</a></button>
             </div> 
            <span className="tag">&#60;body&#62;</span>
        </div>
        <section className="grid">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <img className="flip-card-front" src={require("../assets/img/js.png")} />

                    <div className="flip-card-back">
                        <p>JAVASCRIPT</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <img className="flip-card-front" src={require("../assets/img/jquery.png")}/>

                    <div className="flip-card-back">
                        <p className="color">JQUERY</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <img className="flip-card-front" src={require("../assets/img/html.png")}/>

                    <div className="flip-card-back">
                        <p>HTML5</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <img className="flip-card-front" src={require("../assets/img/css.png")}/>

                    <div className="flip-card-back">
                        <p className="color">CSS3</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <img className="flip-card-front" src={require("../assets/img/sass.png")}/>

                    <div className="flip-card-back">
                        <p>SASS</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <img className="flip-card-front" src={require("../assets/img/react.png")}/>

                    <div className="flip-card-back">
                        <p className="color">REACT</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <img className="flip-card-front" src={require("../assets/img/vue.png")}/>

                    <div className="flip-card-back">
                        <p>VUE</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <img className="flip-card-front" src={require("../assets/img/angular.png")}/>

                    <div className="flip-card-back">
                        <p className="color">ANGULAR</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <img className="flip-card-front" src={require("../assets/img/mongo.png")}/>

                    <div className="flip-card-back">
                        <p>MONGODB</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <img className="flip-card-front" src={require("../assets/img/sql.png")}/>

                    <div className="flip-card-back">
                        <p className="color">SQL</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <img className="flip-card-front" src={require("../assets/img/python.png")}/>

                    <div className="flip-card-back">
                        <p>PYTHON</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <img className="flip-card-front" src={require("../assets/img/nodejs.png")}/>

                    <div className="flip-card-back">
                        <p className="color">NODE.JS</p>
                    </div>
                </div>
            </div>
        </section>
        </section>
        
        </React.Fragment>
    )
}

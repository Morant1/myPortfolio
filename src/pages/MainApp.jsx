import React, { Component } from 'react';
import About from '../cmps/About.jsx';
import Footer from '../cmps/Footer.jsx';
import Header from '../cmps/Header.jsx'
import Projects from '../cmps/Projects.jsx';



export class MainApp extends Component {


  render() {

    return (
      <React.Fragment>
        <Header />
        <About />
        <Projects />
        <Footer/>
      </React.Fragment>

    )
  }
}

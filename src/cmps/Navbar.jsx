import React, { Component } from 'react';
import {  NavHashLink } from 'react-router-hash-link';


export class Navbar extends Component {


    state = {
        isActive:false
    }

    componentDidMount() {

        const navbar = document.querySelector('.menu-wrap .hamburger')
        console.log(navbar)
        window.onscroll = function () {
            if (window.pageYOffset > 650) {
                navbar.classList.add('scrolled')

            } else {
                navbar.classList.remove('scrolled')

            }
        }
    }

    toggleBtn = () => {
        this.setState({ isActive: !this.state.isActive })
    }



    render() {
        return (
            <React.Fragment>
            <nav id="nav" >
                <ul>
                    <li><NavHashLink  className="link"  to="/#" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><img className="logo" src={require('../assets/img/logo.jpg')} /></NavHashLink></li>
                        <li>
                            <h3><NavHashLink className="link"  smooth to="/#about"  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>ABOUT</NavHashLink></h3>
                        </li>
                        <li>
                            <h3><NavHashLink className="link" smooth to="/#projects" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} >PROJECTS</NavHashLink></h3>
                        </li>
                        <li className="icon"><a href="https://www.linkedin.com/in/moran-turgeman-683636179" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                        <li className="icon"><a href="https://github.com/Morant1" target="_blank"><i
                            className="fab fa-github"></i></a></li>
            </ul>
        </nav>

        <div className="menu-wrap">
        <div onClick={this.toggleBtn} className={`toggler ${this.state.isActive? 'active': ''}`}/>
        <div className="hamburger"><div></div></div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li><NavHashLink onClick={this.toggleBtn} to="/#" >Home</NavHashLink ></li>
                <li><NavHashLink onClick={this.toggleBtn} to="/#about">About</NavHashLink></li>
                <li><NavHashLink onClick={this.toggleBtn} to="/#projects">Projects</NavHashLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
        )
    }
}


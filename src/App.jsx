import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './cmps/About';
import { Navbar } from './cmps/Navbar'
import Projects from './cmps/Projects';

import { MainApp } from './pages/MainApp'




export function App() {
  return (
    <div className="App main-container">
      <Navbar/>
      <Switch>
        <Route component={MainApp} path='/' />
        <Route component={About} path='/about' />
        <Route component={Projects} path='/projects' />
      </Switch>

      
    </div>
  );
}

export default App;

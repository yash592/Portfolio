import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import ProfileImage from "./components/profileimage";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";



class App extends Component {

  render() {

    return (

    <div>
            <Navbar />
            <ProfileImage />
            <About />
            <Education />
            <Skills />
            <Portfolio />
            <Contact />

    </div>
  )
};
};
export default App;

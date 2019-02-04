import React, { Component } from 'react';
import { FaFacebookSquare, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";



class Landing extends Component {
  render() {
    return(
        <div className="container">
            <div className="header-logo">
                Portfolio
            </div>
            <div className="header-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Resume</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact me</a></li>
                </ul>
            </div>
            <div className="main">
                <h1>Sagar Yadav</h1>
                <h2>Software Engineer | Cloud Engineer | AWS | GCP</h2>
                <h3>I'm a software engineer based in Bangalore, India <br></br>
                 Specializing in developing scalable webapps with ExpressJS and ReactJS <br></br>
                 Currently working at PowerSchool as an Software Engineer working with Analytics team</h3>
                <a href="https://www.facebook.com/sagariitk"><FaFacebookSquare  className="facebook" /></a>
                <a href="https://www.instagram.com/sagariitk/"><FaInstagram className="instagram" /></a>
                <a href="https://github.com/sagarquantiphi"><FaGithub className="github" /></a>
                <a href="https://www.linkedin.com/in/sagariitk/"><FaLinkedinIn className="linkedin" /></a>

            </div>
            <div className="footer">
            &copy; Copyright 2019 Sagar Yadav  
            </div>
        </div>
    )
  }
}

export default Landing;
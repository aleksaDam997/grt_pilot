import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'animate.css';
import './Header.css'

export default function Header() {

function shakeIt() {
    
}

  return (
    // <header id="header" className="fixed-top d-flex align-items-center ">
        <header id="header" className="d-flex align-items-center ">

        <div className="container-fluid">

        <div className="row justify-content-center align-items-center">
            <div className="col-xl-11 d-flex align-items-center justify-content-between">
            <h1 className="logo"><a href="index.html" onClick={() => shakeIt()}>BizPage</a></h1>
            <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

            <nav id="navbar" className="navbar">
                <ul>
                <li><a className="nav-link scrollto " href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                <li><a className="nav-link scrollto" href="#team">Team</a></li>
                <li><a className="nav-link  " href="blog.html">Blog</a></li>
                <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                    <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                        <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Drop Down 2</a></li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                    </ul>
                </li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
            </div>
        </div>

        </div>
    </header>
  )
}

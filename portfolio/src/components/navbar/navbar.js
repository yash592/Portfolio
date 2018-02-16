// nav

import React from "react";
import "./navbar.css";

const Navbar = () => (
        <div className="nav" id="navID">
        <nav class="navbar navbar-light navbar-expand-md fixed-top navigation-clean">
            <div class="container-fluid"><img src = "https://i.imgur.com/c85pC5n.png" style={{width:"30px", height:"30px"}}/><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1" style={{color: '100%'}}><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse"
                    id="navcol-1">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#navID">About </a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#ed">Education </a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#skills">Skills </a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#port">Portfolio </a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#connect">Contact </a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Navbar;

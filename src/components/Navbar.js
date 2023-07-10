import React from "react";
import reactLogo from "../images/react-logo.png" /* Needed for styles and images with CRA when using "Create React App"*/

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} className="nav--icon" /> {/* Neede for styles and images with CRA when using "Create React App"*/}
            {/* This is how you comment in JSX*/}
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    );
}
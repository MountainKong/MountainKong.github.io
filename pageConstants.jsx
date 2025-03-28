import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()
return (
        <header id="webpageHeader">
            <h1 id="name" className="headerElement cursive"> Zachariah 'Kong' Ly </h1>
            {/* <!-- <h1 id="name", class="headerElement" onclick="window.location.href = 'index.html';">Zachariah 'Kong' Ly</h1> --> */}
            <nav id="headerButtons" className="headerElement">
                <button id = "aboutButton" className="headerElement button" onClick="window.location.href = 'about.html';"> About </button>
                <button className="headerElement button unfinishedButton"> Gallery </button>
                <a href="https://linktr.ee/mountainkong"><button class="headerElement button"> Links </button></a>
            </nav>
        </header>
    );
}
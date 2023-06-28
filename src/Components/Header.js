import React from "react";
import trollFace from '../images/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} className="header--image" />
            <h3 className="header--title">MemeGenerator</h3>
        </header>
    )
}
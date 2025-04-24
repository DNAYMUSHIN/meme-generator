import logo from "../assets/troll-face.svg";

import "./header.css"

export default function Header () {
    return (
        <header className="header">
            <img className="logo-img" src={logo} alt="logo"/>
            <h1 className="site-name">Meme Generator</h1>
        </header>
    )
}
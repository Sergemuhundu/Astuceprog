import React from 'react';
import {Link} from "react-router-dom";
import logo from "../Assets/logo.jpg";
import './header.css';

const Header=()=>{
    return(
        <header className="header">
                <nav className="navbar">
                    <Link className="nav-links"  to="/">
                        <img src={logo} className="navbar-logo" width="120" height="70" alt=""/>
                    </Link>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link className="nav-links" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-links" to="/Services" >Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-links" to="/Blog" >Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-links" to="/Contacts" >Contact</Link>
                        </li>
                        <li className="nav-item auth-item">
                            <Link className="nav-links" to="/Signin" >Se connecter</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-links" to="/Signup" >S'inscrire</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}


export default Header;
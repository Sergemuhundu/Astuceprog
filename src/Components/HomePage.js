import React from 'react';
import {Link } from "react-router-dom";
import coverHome from "../Assets/cover_home.jpeg";
import services from "../Assets/services.jpg";
import contacts from "../Assets/contacts.jpg";
import about from "../Assets/aboutus.jpg";
import blog from "../Assets/blog.jpg";
import pc from "../Assets/pc.jpg";
import founder from "../Assets/founder.png";

const Home=()=>{
    return(
        <div className="container">
            <div className="wrap-articles">
                <h1 className="title-home">Bienvenue dans AstuceProg</h1>
                <div className="content-groupe">
                <div className="card-content">
                        <Link to="/Blog" className="card-link">
                            <img src={blog} className="card-img-content"  width="80" height="50" alt="..."/>
                            <div className="card-content-body">
                                <h5 className="card-content-title">Notre Blog</h5>
                                <p className="card-content-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            </Link>
                        </div>
                       
                        <div className="card-content">
                        <Link to="/Services" className="card-link">
                            <img src={services} className="card-img-content"  width="80" height="50" alt="..."/>
                            <div className="card-content-body">
                                <h5 className="card-content-title">Nos Services</h5>
                                <p className="card-content-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            </Link>
                        </div>
                        <div className="card-content">
                        <Link to="/Contacts" className="card-link">
                            <img src={contacts} className="card-img-content"  width="80" height="50" alt="..."/>
                            <div className="card-content-body">
                                <h5 className="card-content-title">Contacts</h5>
                                <p className="card-content-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            </Link>
                        </div>
                </div>

            <div className="founder-info">
                <div className="wrap-founder-info">
                    <img src={founder} className="founder-image"  />
                    <div className="desc-founder">
                        <h2 className="name-founder">Serge Muhundu</h2>
                        <h4 className="founder-title">Founder and fullStack developper</h4>
                        <p>Un programme informatique fait tout ce que<br/> vous lui demandez de faire, mais pas forcément<br/> ce que vous voulez</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="wrap-image">
                <img src={coverHome} className="image_home"/>
            </div>
        </div>
    )
}
export default Home;
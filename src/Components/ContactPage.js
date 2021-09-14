import React from 'react';
import services from "../Assets/services.jpg";
import contacts from "../Assets/contacts.jpg";
import ic_youtube from "../Assets/youtube.png";
import ic_instragram from "../Assets/instagram.png";
import ic_twitter from "../Assets/twitter.png";
import ic_facebook from "../Assets/facebook.png";
import {Link} from "react-router-dom";

const Contact=()=>{
    return(
        <div className="container">
            <div className="wrap-contact-form">
                <h1>Contact</h1>
                <p>Veillez remplir le formulaire ci-dessous</p>
                <div className="wrap-contactform">
                    <form>
                        <div className="info-group">
                            <label className="contact-label">Votre Nom complet</label><br/>
                            <input type="text" placeholder="Entrez votre nom complet" className="input-contact" required/>
                        </div>
                        <div className="info-group">
                            <label className="contact-label">Votre adresse mail</label><br/>
                            <input type="text" placeholder="Entrez votre addresse mail" className="input-contact" required/>
                        </div>
                        <div className="info-group">
                            <label className="contact-label">Le sujet</label><br/>
                            <input type="email" placeholder="Objet du mail" className="input-contact" required/>
                        </div>
                        <div className="info-group">
                        <label className="contact-label">Votre message</label><br/>
                            <textarea className="input-message" placeholder="Le message..." required/>
                        </div>
                        <div className="info-group submit">
                            <input type="submit" title="Envoyer" className="button-submit"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="wrap-contacts">
           <div className="content-group">
               <div className="wrap-content-group">
                    <div className="card-contact">
                            <img src={ic_facebook} className="card-img-contact"  width="80" height="50" alt="..."/>
                            <div className="card-content-body">
                                <h5 className="card-content-title">@AstuceProg</h5>
                                <p className="card-content-text">Retrouvez-nous sur notre page facebook</p>
                                <a href="#" className="visite-page-link">Visiter notre page</a>
                            </div>
                    </div>
                    <div className="card-contact">
                            <img src={ic_twitter} className="card-img-contact"  width="80" height="50" alt="..."/>
                            <div className="card-content-body">
                            <h5 className="card-content-title">@AstuceProg</h5>
                                <p className="card-content-text">Retrouvez-nous sur notre page twitter</p>
                                <a href="#" className="visite-page-link">Visiter notre page</a>
                            </div>
                    </div>
                </div>
                <div className="wrap-content-group">
                    <div className="card-contact">
                            <img src={ic_youtube} className="card-img-contact"  width="80" height="50" alt="..."/>
                            <div className="card-content-body">
                            <h5 className="card-content-title">@AstuceProg</h5>
                                <p className="card-content-text">Retrouvez-nous sur notre chaine youtube</p>
                                <a href="#" className="visite-page-link">Visiter notre page</a>
                            </div>
                    </div>
                    <div className="card-contact">
                            <img src={ic_instragram} className="card-img-contact"  width="80" height="50" alt="..."/>
                            <div className="card-content-body">
                            <h5 className="card-content-title">@AstuceProg</h5>
                                <p className="card-content-text">Retrouvez-nous sur notre page sur instagram</p>
                                <a href="#" className="visite-page-link">Visiter notre page</a>
                            </div>
                    </div>
                </div>
        </div>
    </div>
            <div class="clear"></div>
        </div>
    )
}
export default Contact;
import React from 'react';
import founder from "../Assets/founder.png";

const Services=()=>{
    return(
        <div className="container">
            <div style={{width:"100%", flex:1}}>
            <div className="services-intro">
                <div className="wrap-intro">
                        <h1>êtes-vous entrain de chercher un développeur web fullStack qui travaille en freelance ?</h1>
                    <h3>Avez-vous besoin de:</h3><br/>
                    <div className="need-option">
                        <span className="checkmark"></span>
                        <p>Un développeur avec plus de 5 ans d'expérience dans le développement</p>
                    </div>
                    <div className="need-option">
                        <span className="checkmark"></span>
                        <p>Un développeur avec éxpérience aigue dans le développement mobile iOS et Android</p>
                    </div>
                    <div className="need-option">
                        <span className="checkmark"></span>
                        <p>Un développeur avec une connaissance avancée à la création de site web static et dynamic</p>
                    </div>
                    <div className="need-option">
                        <span className="checkmark"></span>
                        <p>Un développeur avec connaissance à la creation des applications de bureau et web</p>
                    </div>

                    <div className="need-option">
                        <span className="checkmark"></span>
                        <p>Un développeur qui maitrise la manipulation des bases de données</p>
                    </div>
                    <div className="need-option">
                        <span className="checkmark"></span>
                        <p>Un développeur qui maitrise l'integration des API</p>
                    </div>
                    <div className="hire">
                        <a href="#hire-section">M'engager aujourd'hui</a>
                    </div>
                </div>
                <div className="dev-intro">
                    <img src={founder} className="dev-intro-img" alt=".." width="400" height="250"/>
                    <p className="dev-intro-title">Développeur FullStack en Rép. démocratique du Congo</p>
                </div>
            </div>
            <div className="wrap-know">
                <div className="dev-interest">
                    <h1>Ce qu'un developpeur fullStack freelancer peut faire pour vous ?</h1>
                    <div className="interest-details">
                        <p>1. Votre projet nécessite d'être à la pointe de la téchnologie, besoin de conseils ou une assistance dans une étape de votre projet</p>
                        <p>2. Vous voulez changer le design de votre site web existant ou faire le réferencement</p>
                        <p>3. Création complète de votre site web statique ou dynamique</p>
                        <p>4. Création d'une application mobile Android & iOS</p>
                        <p>5. Création d'un logiciel spécifique (ex. logiciel de gestion)</p>
                        <p>6. Vous chercher à lancer un projet de eCommerce et vous chercher un professionnel pour le faire </p>
                        <p>7. vous voulez ajouter un CMS (content manager system) dans votre site web via Rest API, pour un frondt-end detaché utilisant React, Angular, Next.js ou un site statique</p>
                        <p>Si votre exigence est parmis les points cités ci-haut, vous êtes au bon endroit, alors <a href="#hire-section">engagez-moi aujourd'hui</a></p>
                    </div>
                </div>
                <div className="dev-skills">
                    <h1>My Skills</h1>
                    <div className="wrap-progress">
                        <div className="branch">
                        <p className="branch-title">HTML5</p>
                        </div>
                        <div className="progress-bar">
                            <div className="percent" style={{width:'70%'}}>
                            </div>
                            <p className="percent-number">70%</p>
                        </div>
                    </div>
                    <div className="wrap-progress">
                        <div className="branch">
                        <p className="branch-title">CSS</p>
                        </div>
                        <div className="progress-bar">
                            <div className="percent" style={{width:'80%'}}>
                            </div>
                            <p className="percent-number">80%</p>
                        </div>
                    </div>
                    <div className="wrap-progress">
                        <div className="branch">
                        <p className="branch-title">React</p>
                        </div>
                        <div className="progress-bar">
                            <div className="percent" style={{width:'92%'}}>
                            </div>
                            <p className="percent-number">92%</p>
                        </div>
                    </div>
                    <div className="wrap-progress">
                        <div className="branch">
                        <p className="branch-title">VB.NET</p>
                        </div>
                        <div className="progress-bar">
                            <div className="percent" style={{width:'60%'}}>
                            </div>
                            <p className="percent-number">60%</p>
                        </div>
                    </div>
                    <div className="wrap-progress">
                        <div className="branch">
                        <p className="branch-title">JAVA</p>
                        </div>
                        <div className="progress-bar">
                            <div className="percent" style={{width:'65%'}}>
                            </div>
                            <p className="percent-number">65%</p>
                        </div>
                    </div>
                    <div className="wrap-progress">
                        <div className="branch">
                        <p className="branch-title">Python</p>
                        </div>
                        <div className="progress-bar">
                            <div className="percent" style={{width:'40%'}}>
                            </div>
                            <p className="percent-number">40%</p>
                        </div>
                    </div>
                    <div className="wrap-progress">
                        <div className="branch">
                        <p className="branch-title">Boostrap</p>
                        </div>
                        <div className="progress-bar">
                            <div className="percent" style={{width:'70%'}}>
                            </div>
                            <p className="percent-number">70%</p>
                        </div>
                    </div>
                    <div className="wrap-progress">
                        <div className="branch">
                        <p className="branch-title">Jquery</p>
                        </div>
                        <div className="progress-bar">
                            <div className="percent" style={{width:'85%'}}>
                            </div>
                            <p className="percent-number">85%</p>
                        </div>
                    </div>
                    <div className="wrap-progress">
                        <div className="branch">
                        <p className="branch-title">React-native</p>
                        </div>
                        <div className="progress-bar" >
                            <div className="percent" style={{width:'80%'}}>
                            </div>
                            <p className="percent-number">80%</p>
                        </div>
                    </div>
                    <div className="wrap-progress">
                        <div className="branch">
                        <p className="branch-title">JavaScript</p>
                        </div>
                        <div className="progress-bar">
                            <div className="percent" style={{width:'88%'}}>
                            </div>
                            <p className="percent-number">88%</p>
                        </div>
                    </div>
                    <div className="wrap-progress">
                        <div className="branch">
                        <p className="branch-title">Laravel</p>
                        </div>
                        <div className="progress-bar">
                            <div className="percent" style={{width:'60%'}}>
                            </div>
                            <p className="percent-number">60%</p>
                        </div>
                    </div>
                    <div className="wrap-progress">
                        <div className="branch">
                        <p className="branch-title">PHP</p>
                        </div>
                        <div className="progress-bar">
                            <div className="percent" style={{width:'70%'}}>
                            </div>
                            <p className="percent-number">70%</p>
                        </div>
                    </div>
                </div>

            </div>
            <div id="hire-section">
                <h1>Etes-vous prêt à travailler avec moi dans votre projet de développement ?</h1>
                <p className="hire-tex">Je serais ravis de travailler avec vous, Veillez remplir le formulaire ci-dessous pour me faire savoir</p>
                <form>
                    <p>
                        <input type="text" placeholder="Votre Nom" />
                        <input type="text" placeholder="Votre email" />
                    </p>
                    <p>
                        <textarea placeholder="Votre message..."/>
                    </p>
                    <p>
                        <input type="submit" title="Soumettre" />
                    </p>
                </form>
            </div>
        </div>
    </div>
    )
}
export default Services;
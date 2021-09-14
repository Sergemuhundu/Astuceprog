import React,{useState, useEffect} from 'react';
import {Redirect, Link} from 'react-router-dom';
import '../../App.css';

const Signup=()=>{

function handleLogin(){
    window.location("/EditorScreen");
}

    return(
        <div className={'authBox'}>
            <div className={'leftBox'}>
                <div className={'bgGreen'}/>
                <div className={'imgAuth'}/>
                <div className={'imgText bold style1'}>AstuceProg</div>
                <div className={'imgText style2'}>Trouver les astuces de programmation</div>
            </div>
            <div className={'rightBox'}>
                <div className={'box'}>
                    <div className={'titleAuth'}>Inscrivez-vous sur AstuceProg</div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'text'} placeholder={"Nom d'utilisateur ou email"}/>
                    </div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'password'} placeholder={'Mot de passe'}/>
                    </div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'password'} placeholder={'Confirmer mot de passe'}/>
                    </div>
                    <div className={'btnLogin'} >S'inscrire</div>
                    <div className={'borderBox'}>
                    <p>Connectez-vous <a href="#">ici</a></p>
                        <div className={'line'}/>
                        <div className={'text2 or'}>OU</div>
                    </div>
                    <div className={'socialMediaBox'}>
                        <div className={'icAuth google'}/>
                        <div className={'icAuth facebook'}/>
                        <div className={'icAuth twitter'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Signup;
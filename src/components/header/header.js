// eslint-disable-next-line no-unused-vars
import React from 'react';
import './header.scss';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function Header(props) {
    return (
        <nav className="nav">
            <div className="head">
                <div className="logo">Gover</div>
                <div className="nav">
                    <ul className="nav-list">
                        <li><a href="" className="list-el">Strona główna</a></li>
                        <li><a href="" className="list-el">Funkcje</a></li>
                        <li><a href="" className="list-el">Konsultacja doradcy podatkowego</a></li>
                        <li><a href="" className="list-el">Kontakt</a></li>
                    </ul>
                    <button className="login">Zaloguj się</button>
                    <button className="rege">Rejestracja</button>
                </div>
            </div>
        </nav>
    );
}

export default Header;

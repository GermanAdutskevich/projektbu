// eslint-disable-next-line no-unused-vars
import React from 'react';
import './header.scss';
// import { slide as Menu } from 'react-burger-menu'
import {Link} from "react-router-dom";
import * as ROUTES from '../../constants/routes.js';
import SignOutButton from '../../layouts/SignOut/signout';
import { AuthUserContext } from '../../layouts/Session';
import AccountPage from '../../layouts/Account'

const Navigation = ({ authUser }) => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <nav className="nav">
        <div className="head">
            <div className="logo">Gover</div>
            <ul className="nav-list">
                <li>
                    <Link to={ROUTES.LANDING} className="btn btn-outline-primary mr-2">Landing</Link>
                </li>
                <li>
                    <Link to={ROUTES.ACCOUNT} className="btn btn-outline-primary mr-2">Account</Link>
                </li>
                <li>
                    <Link to={ROUTES.ADD_EVENT} className="btn btn-outline-primary mr-2">Dodaj Aktywa</Link>
                </li>
                <li>
                    <Link to={ROUTES.ALL_EVENT} className="btn btn-outline-primary mr-2">Dodaj Pasywa</Link>
                </li>
                <li>
                    <SignOutButton />
                </li>
            </ul>
        </div>
    </nav>
);

const NavigationNonAuth = () => (
    <nav className="nav">
        <div className="head">
            <div className="logo">Gover</div>
                <ul className="nav-list">
                    {/*<li>*/}
                    {/*    <Link to={ROUTES.LANDING} className="btn btn-outline-primary mr-2">Landing</Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to={ROUTES.SIGN_IN} className="btn btn-outline-primary mr-2 login">Zaloguj się</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.SIGN_UP} className="btn btn-outline-primary mr-2 rege">Zarejestruj się</Link>
                    </li>
                </ul>
            </div>
</nav>
);


export default Navigation;

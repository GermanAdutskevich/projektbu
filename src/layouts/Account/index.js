import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import Navigation from "../../components/header/header";
import Footer from "../../components/footer/footer";

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <>
                <Navigation/>
                    <div className="container_signin">
                        <section className="center">
                            <div className="container">
                                <div className="container">
                                    <h1 className="signh1">Account: {authUser.email}</h1>
                                    <PasswordForgetForm />
                                    {/*<PasswordChangeForm />*/}
                                </div>
                            </div>
                        </section>
                    </div>
                <Footer/>
            </>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
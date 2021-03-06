import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../constants/routes';
import Navigation from "../../components/header/header";
import Footer from "../../components/footer/footer";

const PasswordForgetPage = () => (
    <>
        <Navigation/>
            <div className="container">
                <h1>Zapomniales haslo</h1>
                <PasswordForgetForm />
            </div>
        <Footer/>
        </>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, error } = this.state;

        const isInvalid = email === '';

        return (
            <form className="signinform" onSubmit={this.onSubmit}>
                <input
                    name="email"
                    className="input_sign"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email"
                />
                <button className="signbutton btn btn-outline-primary" disabled={isInvalid} type="submit">
                    Zresetuj haslo
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Zapomniales hasla?</Link>
    </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import './signin.scss';
import { SignUpLink } from '../SignUp/signup';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../constants/routes';
import { PasswordForgetLink } from '../PasswordForget';
import Navigation from "../../components/header/header";
import Footer from "../../components/footer/footer";

const SignInPage = () => (
    <>
        <Navigation/>
            <div className="container_signin">
                <div className="center">
                    <h1 className="signh1">Zaloguj sie</h1>
                    <SignInForm />
                    <PasswordForgetLink />
                    <SignUpLink />
                </div>
            </div>
        <Footer/>
        </>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.ADD_EVENT);
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
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form className="signinform" onSubmit={this.onSubmit}>
                <input
                    className="input_sign"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Wpisz email"
                />
                <input
                    className="input_sign"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Wpisz haslo"
                />
                <button className="signbutton btn btn-outline-primary" disabled={isInvalid} type="submit">
                    Zaloguj sie!
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { FirebaseContext } from '../../Firebase';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../../Firebase';
import './signup.scss'
import Navigation from "../../components/header/header";
import Footer from "../../components/footer/footer";

const SignUpPage = () => (
    <>
        <Navigation/>
        <div className="container_signin">
            <section className="center">
                <div className="container">
                    <h1 className="signh1">Zarejestruj sie</h1>
                        <FirebaseContext.Consumer>
                            {firebase => <SignUpForm firebase={firebase} />}
                        </FirebaseContext.Consumer>
                </div>
            </section>
        </div>
        <Footer/>
        </>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                    });
            })
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.SIGN_UP);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (

            <form className="signinform" onSubmit={this.onSubmit}>
                <input
                    name="username"
                    className="input_sign"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Wpisz imie"
                />
                <input
                    name="email"
                    className="input_sign"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Wpisz email"
                />
                <input
                    name="passwordOne"
                    className="input_sign"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Wpisz haslo"
                />
                <input
                    name="passwordTwo"
                    className="input_sign"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Powtorz haslo"
                />
                <button className="signbutton btn btn-outline-primary" disabled={isInvalid} type="submit">Zarejestruj sie</button>


                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p className="signuplink">
        Nie masz profilu na Gover? <Link to={ROUTES.SIGN_UP}>Zarejestruj sie!</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);


export default SignUpPage;

export { SignUpForm, SignUpLink };
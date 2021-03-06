import React, { Component } from 'react';

import { withFirebase } from '../../Firebase';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { passwordOne } = this.state;

        this.props.firebase
            .doPasswordUpdate(passwordOne)
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
        const { passwordOne, passwordTwo, error } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo || passwordOne === '';

        return (
            <form className="signinform" onSubmit={this.onSubmit}>
                <input
                    name="passwordOne"
                    className="input_sign"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Nowe Haslo"
                />
                <input
                    name="passwordTwo"
                    className="input_sign"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Powtorz nowe haslo"
                />
                <button disabled={isInvalid} type="submit">
                    Zresetuj haslo
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(PasswordChangeForm);
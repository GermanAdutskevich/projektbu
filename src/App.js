import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Main from "./layouts/main-page";
import TableHeader from "./layouts/ListPage/list-page";
import * as ROUTES from './constants/routes.js';
import SignUpPage from "./layouts/SignUp/signup";
import SignInPage from "./layouts/SignIn/signin";
import Header from "./components/header/header";
import { AuthUserContext } from '../src/layouts/Session';
import { withAuthentication } from '../src/layouts/Session';
import PasswordForgetPage from "./layouts/PasswordForget";
import { withFirebase } from './Firebase';
import AdminPage from "./layouts/AdminPage";
import AccountPage from "./layouts/Account";
import AddEvent from "./layouts/AddEvent";
import AllEvent from "./layouts/AllEvent";



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {


        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        }
        )
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            <>
                <AuthUserContext.Provider value={this.state.authUser}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path={ROUTES.LANDING} component={Main}/>
                            <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
                            <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                            <Route path={ROUTES.ADD_EVENT} component={AddEvent}/>
                            <Route path={ROUTES.ALL_EVENT} component={AllEvent}/>
                            <Route path={ROUTES.ADMIN} component={AdminPage}/>
                            <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
                            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
                            <Header authUser={this.state.authUser} />
                        </Switch>
                    </BrowserRouter>
                </AuthUserContext.Provider>
            </>
        );
    }
}


export default withAuthentication(App);

import React from 'react';
import '../styles/main.scss';
// import {HashRouter} from 'react-router-dom';
import Header from "../components/header/header";
import Footer from "../components/footer/footer"
import Body from "../components/body/body";

function Main() {
            return (
                <React.Fragment>
                    <Header/>
                    <Body/>
                    <Footer/>
                </React.Fragment>
            )
}

export default Main;
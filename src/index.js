import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FirebaseContext from './Firebase/context';
import Firebase from './Firebase/firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App/>
    </FirebaseContext.Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

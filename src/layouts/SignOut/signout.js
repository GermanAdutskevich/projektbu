import React from 'react';

import { withFirebase } from '../../Firebase';

const SignOutButton = ({ firebase }) => (
    <button type="button"  className="btn btn-outline-primary mr-2 login" onClick={firebase.doSignOut}>
        Wyloguj sie
    </button>
);

export default withFirebase(SignOutButton);
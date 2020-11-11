import React from 'react';
import './body.scss';

function Body(props) {
    return(
        <main>
            <div className="main-body">
                <div className="container-body">
                    <div className="text-body"><div className="logo-body">Gover </div><p>pomoże Ci zrobić porządek w twoich rachunkach!</p></div>
                    <div className="button-body"> <button className="free-body">Kliknij, aby spóbować za darmo!</button> </div>
                </div>
            </div>
        </main>
    )
}

export default Body;
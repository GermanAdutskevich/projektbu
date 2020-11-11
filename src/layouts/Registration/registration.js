import React, { useState } from 'react';
import './registration.scss';


function Registration() {
    const [email, setEmail] = useState("");
    const [NIP, setNIP] = useState("");
    const [message, setMessage] = useState("");
    // const input_email = document.querySelector('.form-input-rege');
    //
    // function update(bgColor) {
    //     input_email.style.borderColor = bgColor;
    // }

    // select.onchange = function() {
    //     ( select.value === 'black' ) ? update('black','white') : update('white','black');
    // }

    const handleChange = (e) => {
        const validString = e.target.value.replace(/[0-9]/, "");
        setEmail(validString);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const expression = RegExp(/\S+@\S+\.\S+/);

        if (expression.test(email)) {
            setMessage("");
        } else {
            setMessage("Wong email format!!");
        }
    };


    return(

        <div className="container-register">

            <div className="main-register">
                <div className="logo">Gover</div>
                <form action="" onSubmit={handleSubmit} method="get" className="form-example" name="Myform">
                    <div className="form-div">
                        <input type="text" name="text" id="text" className="form-input-rege" required placeholder="Wpisz Imię"/>
                    </div>
                    <div className="form-div">
                        <input type="text" name="text" id="text" className="form-input-rege" required placeholder="Wpisz Nazwisko"/>
                    </div>
                    <div className="form-div">
                        {/*<label htmlFor="name" className="form-name">Nazwa firmy: </label>*/}
                        <input type="text" name="name" id="name" className="form-input-rege" required placeholder="Wpisz nazwę firmy"/>
                    </div>
                    <div className="form-div">
                        {/*<label htmlFor="activity" className="form-name">Forma działalności:</label>*/}
                        <select id="company">
                            <option value="SA">Sp.Akcyjna</option>
                            <option value="SK">Sp.Komandytowa</option>
                            <option value="SJ">Sp.Jawna</option>
                            <option value="SP">Sp.Partnerska</option>
                            <option value="sp.zo.o.">Sp.z o.o.</option>
                        </select>

                    </div>
                    <div className="form-div">
                        {/*<label htmlFor="text" className="form-name">NIP: </label>*/}
                        <input type="text" name="text" id="text" className="form-input-rege NIP" required placeholder="Wpisz NIP"/>
                    </div>
                    <div className="form-div">
                        {/*<label htmlFor="email" className="form-name">Email: </label>*/}
                        <input onChange={handleChange} value={email} className="form-input-rege" required placeholder="Wpisz email" />
                        <div className="error-email-rege">{message}</div>
                    </div>
                    <div className="form-div">
                        <input type="text" name="text" id="text" className="form-input-rege" required placeholder="Numer telefonu"/>
                    </div>
                    <div className="form-div">
                        {/*<label htmlFor="pwd" className="form-name">Hasło:</label>*/}
                        <input type="password" id="pwd" name="pwd" minLength="8" className="form-input-rege" placeholder="Wpisz hasło"/>
                    </div>
                    <div className="form-div">
                        {/*<label htmlFor="pwd" className="form-name">Powtórz hasło:</label>*/}
                        <input type="password" id="pwd" name="pwd" minLength="8" className="form-input-rege" placeholder="Powtórz hasło"/>
                    </div>

                    <div className="form-div">
                        <input type="submit" className="form-submit-rege" value="Zarejestruj się!"/>
                    </div>

                    <div className="form-div">
                        <a href="/#" className="back-rege">Wróć do strony głównej</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;
import React from 'react';
import './footer.scss';


function Footer(props) {
    return (
        <footer className="site-footer">
            <section className="menu-footer">
                <ul className="nav-footer">
                    <li><a href="" className="footer-el">Strona główna</a></li>
                    <li><a href="" className="footer-el">Funkcje</a></li>
                    <li><a href="" className="footer-el">Konsultacja doradcy podatkowego</a></li>
                    <li><a href="" className="footer-el">Kontakt</a></li>
                </ul>
            </section>
            <section className="social-footer">
                <div className="fa fa-facebook"/>
                <div className="fa fa-twitter"/>
                <div className="fa fa-google"/>
                <div className="fa fa-linkedin"/>
            </section>
        </footer>
    );
}

export default Footer;
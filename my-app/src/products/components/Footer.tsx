import React from "react";
import '../Footer.css'

function Footer() {
    return (
        <footer className="u-padding-horizontal-default">
            <div className="footer u-container">
                <img src="/LOGO/LOGO PNG/MGP GRIS-min.png" className="footer__logo" alt=""/>
                <div className="footer__partnership">
                    <p className="u-no-margin">En partenariat avec : </p>
                    <p>Association X.</p>
                    <p className="u-no-margin">Association Y.</p>
                </div>
                <div className="footer__info">
                    <p className="u-no-margin">Conditions générales de vente.</p>
                    <p>Contact : <a href="mailto:hello@mgpmasks.com" className="u-underline-grey u-font-grey">hello@mgpmasks.com</a></p>
                    <ul className="info__social">
                        <li><a href="https://www.facebook.com/mgp.masks/" className="u-no-margin u-font-grey">Facebook.</a></li>
                        <li><a href="https://www.instagram.com/mgp.masks/" className="u-no-margin u-font-grey">Instagram.</a></li>
                        <li><a href="https://twitter.com/mgpmasks" className="u-no-margin u-font-grey">Twitter.</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
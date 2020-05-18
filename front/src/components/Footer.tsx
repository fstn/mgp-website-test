import React from 'react';
import styled from "styled-components";

// language=LESS prefix=*{ suffix=}
// language=LESS prefix=*{ suffix=}
const Style = styled.div`
    footer {
      background: black;
      position: relative;
      z-index: 200;
    }

    .footer {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      color: #7c7c7c;
      background: black;
      position: relative;
      z-index: 200;
      padding: 8rem 0;
      font-size: 1rem;
      grid-row-gap: 2rem;
    }

    .footer__logo {
      width: 11.5rem;
    }

    .footer__partnership > * {
      margin: 0.5rem 0;
    }

    .footer__info > * {
      margin: 0.5rem 0;
    }

    .info__social > * {
      margin: 0.5rem 0;
    }

    @media (max-width: 425px) {
      .footer {
        grid-template-columns: 1fr;
      }
    }
    /*# sourceMappingURL=Footer.css.map */
`

function Footer() {
    return (
        <Style>
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
                        <p>Contact : <a href="mailto:hello@mgpmasks.com"
                                        className="u-underline-grey u-font-grey">hello@mgpmasks.com</a></p>
                        <ul className="info__social">
                            <li><a href="https://www.facebook.com/mgp.masks/"
                                   className="u-no-margin u-font-grey">Facebook.</a></li>
                            <li><a href="https://www.instagram.com/mgp.masks/"
                                   className="u-no-margin u-font-grey">Instagram.</a></li>
                            <li><a href="https://twitter.com/mgpmasks" className="u-no-margin u-font-grey">Twitter.</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </Style>
    )
}

export default Footer;

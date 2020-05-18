import styled from 'styled-components'
import Reveal from "react-reveal/Reveal";
import React from "react";
import {useHistory} from "react-router-dom";
import {useWindowSize} from "../../../lib/utils";
import ProductCta from "./ProductCTA";
import Logo from "../../../components/Logo";

// language=LESS prefix=*{ suffix=}
const Style = styled.div`

    .product__header {
      position: relative;
      min-height: 100vh;
      background: #f9f9f9;
    }

    .product__header-background {
      position: fixed;
      object-fit: cover;
      width: 100vw;
      height: 100%;
      z-index: 1;
      background-color: #f9f9f9;
    }


    .product__header-title {
      font-size: 6rem;
      font-weight: 900;
      margin: 6rem 0;
      line-height: 7.8rem;
    }

    .product__header-text {
      font-size: 2.3rem;
      margin-bottom: 3rem;
      line-height: 3rem;
    }


`


function ProductHeader({}: {}) {
    const history = useHistory()
    const size = useWindowSize()
    return (
        <Style>
            <Reveal effect="fadeIn" duration={1500} delay={300}>
                <img className="product__header-background" src="/IMAGES/VISUEL 6 copie-min.jpg"
                     style={{height: size.height, transition: "height 2s"}} alt=""/>
            </Reveal>

            <div className="product__header">
                <div className="wrapper">
                    <div className="u-container">

                        <Logo/>
                        <h1 className="product__header-title">
                            <Reveal effect="fadeInLeft" duration={500} delay={900}>
                                Masques
                            </Reveal>
                            <Reveal effect="fadeInLeft" duration={500} delay={1100}>
                                Grand
                            </Reveal>
                            <Reveal effect="fadeInLeft" duration={500} delay={1300}>
                                Public.
                            </Reveal>
                        </h1>
                        <p className="product__header-text">Choisissez vos masques.<br/>Commandez en groupe.
                            <br/>Faites baisser leur prix.</p>
                        <ProductCta/>
                    </div>
                </div>
            </div>
        </Style>
    );
}

export default ProductHeader;

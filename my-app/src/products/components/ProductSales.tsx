import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import gsap from 'gsap';

const Style = styled.div`


    width: 100%;`


function useOnScreen(ref: any, rootMargin = '0px') {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}

function ProductSales({}: {}) {

    const sectionRef = useRef<HTMLDivElement>(null);
    const onScreen = useOnScreen(sectionRef, '-300px');

    const fadeIn = (element: String) => {
        gsap.to(element, 1, {
            opacity: 1,
            y: 0,
            ease: 'power4.out',
            stagger: {
                amount: .3
            }
        })
    }

    const fadeOut = (element: String) => {
        gsap.to(element, 1, {
            opacity: 0,
            y: -20,
            ease: 'power4.out',
        })
    }


    onScreen ?
        fadeIn(".fadeIn")
        : fadeOut(".fadeIn")

    return (
        <Style>
            <main>
                <div className="product">

                    <div className="product__header u-padding-horizontal-default panels">
                        <div className="u-container">
                            <div className="product__header-logo">
                                <img className="logo" src="LOGO/LOGO PNG/MGP NOIR.png" alt=""/>
                            </div>
                            <h1 className="product__header-title">Masques<br/>Grand<br/>Public.</h1>
                            <p className="product__header-text">Choisissez vos masques.<br/>Invitez vos proches.<br/>Faîtes baissez leur prix.</p>
                            <button className="product__header-purchase">COMMANDER</button>
                        </div>
                    </div>


                    <div className="product-content" ref={sectionRef}>
                        <div className="u-container u-padding-horizontal-default panels">

                            <div className="product__mgp-quantity">
                                <div className="mgp-quantity page-section">
                                    <h2 className="page-section__title fadeIn">Des masques en grande quantité.</h2>
                                    <p className="page-section__text ">C'est le défi qui nous attend maintenant pour faire face au Covid19.</p>
                                    <p className="page-section__text ">Des masques pour se protéger et protéger les autres</p>
                                    <p className="page-section__text "><span className="u-underline">100 000</span>: le nombre de masques que nous pouvons produire chaque jour.</p>
                                </div>
                            </div>

                            <div className="product__mgp-quality">
                                <div className="mgp-quality page-section">
                                    <div className="mgp-quality__header">
                                        <h2 className="page-section__title">De la quantité oui.<br/>Mais de la qualité surtout.</h2>
                                        <p className="page-section__text">Nous utilisons de la viscose de <span className="u-underline">bambou biologique</span></p>
                                        <p className="page-section__text">pour des masques respirants et plus doux au toucher.</p>
                                        <p className="page-section__text">Avec <span className="u-underline">deux élastiques</span>, le masque s'adapte à toute les formes de visage.</p>
                                    </div>
                                    <div className="mgp-quality__features">
                                        <div className="mgp-quality__feature-group">
                                            <h4 className="mgp-quality__feature-title">Confortables mais sûrs.</h4>
                                            <p className="mgp-quality__feature-text">Deux couches de propylène sont là pour réduire le passage des éléments extérieur nocifs.</p>
                                        </div>
                                        <div className="mgp-quality__feature-group">
                                            <h4 className="mgp-quality__feature-title">Filtration garantie.</h4>
                                            <p className="mgp-quality__feature-text">Jusqu'à 15 lavages,<br/>en accord avec<br/>la législation Française.</p>
                                        </div>
                                        <div className="mgp-quality__feature-group">
                                            <h4 className="mgp-quality__feature-title">Origin controlée.</h4>
                                            <p className="mgp-quality__feature-text">Nos masques sont fabriqués<br/>et certifiés en Espagne</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product__mgp-design">
                                <div className="mgp-design page-section">
                                    <h2 className="page-section__title">Un design original et unisexe.</h2>
                                    <p className="page-section__text">Chaque masque est imprimé de manière <span className="u-underline">aléatoire,</span></p>
                                    <p className="page-section__text">des milliers de combinaisons sont possibles et <span className="u-underline">chaque masque est unique</span>.</p>
                                </div>
                            </div>

                            <div className="product__mgp-gallery">
                                <div className="mgp-gallery u-bottom-border">
                                    <img src="IMAGES/MASKS/VISUEL NOIR MOSAIC.jpg" alt=""/>
                                    <img src="IMAGES/MASKS/VISUEL BLANC CLASSIQUE.jpg" alt=""/>
                                    <img src="IMAGES/MASKS/VISUEL BLANC ALEATOIRE.jpg" alt=""/>
                                    <img src="IMAGES/MASKS/VISUEL NOIR CLOSE UP.jpg" alt=""/>
                                    <img src="IMAGES/MASKS/VISUEL NOIR ALEATOIRE.jpg" alt=""/>
                                    <img src="IMAGES/MASKS/VISUEL BLANC MOSAIC.jpg" alt=""/>
                                    <img src="IMAGES/MASKS/VISUEL BLANC CLOSE UP.jpg" alt=""/>
                                    <img src="IMAGES/MASKS/VISUEL NOIR CLASSIQUE.jpg" alt=""/>
                                </div>
                            </div>

                            <div className="product__mgp-design">
                                <div className="mgp-design page-section">
                                    <h2 className="page-section__title">En faire profiter<br/>le plus grand nombre</h2>
                                    <p className="page-section__text">Créer un groupe de commande pour faire baisser le prix de votre masque</p>
                                    <p className="page-section__text">jusqu'à <span className="u-underline">4 euros l'unité</span>.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </Style>
    );
}

export default ProductSales;

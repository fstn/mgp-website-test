import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';

const Style = styled.div`


    `

function useWindowSize() {
    const isClient = typeof window === 'object';
    
    function getSize() {
        return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
        };
    }
    
    const [windowSize, setWindowSize] = useState(getSize);
    
    useEffect((): any => {
        if (!isClient) {
        return false;
        }
        
        function handleResize() {
        setWindowSize(getSize());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
    
    return windowSize;
    }

function ProductSales({}: {}) {
    const size = useWindowSize()
    console.log(size)

    return (
        <Style>
            <main>
                <div className="product">
                    <Reveal effect="fadeIn" duration={1500} delay={300}>
                        <img className="product__header-background" src="IMAGES/VISUEL 6 copie-min.png" style={{ height: size.height, transition: "height 2s"}} alt=""/>
                    </Reveal>

                    <div className="product__header">
                        <div className="wrapper">
                            <div className="u-container">
                                <div className="product__header-logo">
                                    <img className="logo" src="LOGO/LOGO PNG/MGP NOIR-min.png" alt=""/>
                                </div>
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
                                <p className="product__header-text">Choisissez vos masques.<br/>Invitez vos proches.<br/>Faîtes baisser leur prix.</p>
                                <div className="product__header-buttons">
                                    <button className="product__header-purchase">COMMANDER</button>
                                    <button className="product__header-purchase u-white-background u-black-font">REJOINDRE UNE COMMANDE</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-content">

                            <div className="u-container product__mgp-quantity u-padding-horizontal-default">
                                <div className="mgp-quantity page-section">
                                    <Reveal effect="fadeInDown">
                                        <h2 className="page-section__title fadeQuantity">Des masques en grande quantité.</h2>
                                    </Reveal>
                                    <p className="page-section__text ">C'est le défi qui nous attend maintenant pour faire face au Covid19.</p>
                                    <p className="page-section__text ">Des masques pour se protéger et protéger les autres</p>
                                    <p className="page-section__text "><span className="u-underline">100 000</span>: le nombre de masques que nous pouvons produire chaque jour.</p>
                                </div>
                            </div>

                            <div className="u-container product__mgp-quality u-padding-horizontal-default">
                                <div className="mgp-quality page-section">
                                    <div className="mgp-quality__header">
                                        <Reveal effect="fadeInDown">
                                            <h2 className="page-section__title">De la quantité oui.<br/>Mais de la qualité surtout.</h2>
                                        </Reveal>
                                        <p className="page-section__text">Nous utilisons de la viscose de <span className="u-underline">bambou biologique</span></p>
                                        <p className="page-section__text">pour des masques respirants et plus doux au toucher.</p>
                                        <p className="page-section__text">Avec <span className="u-underline">deux élastiques</span>, le masque s'adapte à toute les formes de visage.</p>
                                    </div>
                                    <div className="mgp-quality__features">
                                        <div className="mgp-quality__feature-group">
                                            <Reveal effect="fadeInDown">
                                                <h4 className="mgp-quality__feature-title fadeFeature1">Confortables mais sûrs.</h4>
                                            </Reveal>
                                            <p className="mgp-quality__feature-text">Deux couches de propylène sont là pour réduire le passage des éléments extérieur nocifs.</p>
                                        </div>
                                        <div className="mgp-quality__feature-group">
                                            <Reveal effect="fadeInDown">
                                                <h4 className="mgp-quality__feature-title fadeFeature2">Filtration garantie.</h4>
                                            </Reveal>
                                            <p className="mgp-quality__feature-text">Jusqu'à 15 lavages,<br/>en accord avec<br/>la législation Française.</p>
                                        </div>
                                        <div className="mgp-quality__feature-group">
                                            <Reveal effect="fadeInDown">
                                                <h4 className="mgp-quality__feature-title fadeFeature3">Origine controlée.</h4>
                                            </Reveal>
                                            <p className="mgp-quality__feature-text">Nos masques sont fabriqués<br/>et certifiés en Espagne</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="u-container product__mgp-design u-padding-horizontal-default">
                                <div className="mgp-design page-section">
                                    <Reveal effect="fadeInDown">
                                        <h2 className="page-section__title">Un design original et unisexe.</h2>
                                    </Reveal>
                                    <p className="page-section__text">Chaque masque est imprimé de manière <span className="u-underline">aléatoire,</span></p>
                                    <p className="page-section__text">des milliers de combinaisons sont possibles et <span className="u-underline">chaque masque est unique</span>.</p>
                                </div>
                            </div>

                            <div className="u-container product__mgp-gallery u-padding-horizontal-default">
                                <div className="mgp-gallery">
                                    <Reveal effect="fadeInUp" duration={500}>
                                        <div className="mask-image">
                                            <img src="IMAGES/MASKS/VISUEL NOIR MOSAIC.jpg" alt=""/>
                                            <div className="mask-image__info">
                                                <h6>MASQUE PATTERN</h6>
                                                <p>couleur : NOIR</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500} delay={400}>
                                        <div className="mask-image">
                                            <img src="IMAGES/MASKS/VISUEL BLANC CLASSIQUE.jpg" alt=""/>
                                            <div className="mask-image__info">
                                                <h6>MASQUE SMALL LOGO</h6>
                                                <p>couleur : BLANC</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500}>
                                        <div className="mask-image">
                                            <img src="IMAGES/MASKS/VISUEL BLANC ALEATOIRE.jpg" alt=""/>
                                            <div className="mask-image__info">
                                                <h6>MASQUE SMALL LOGO</h6>
                                                <p>couleur : BLANC</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500} delay={400}>
                                        <div className="mask-image">
                                            <img src="IMAGES/MASKS/VISUEL NOIR CLOSE UP.jpg" alt=""/>
                                            <div className="mask-image__info">
                                                <h6>MASQUE BIG LOGO</h6>
                                                <p>couleur : NOIR</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500}>
                                        <div className="mask-image">
                                            <img src="IMAGES/MASKS/VISUEL NOIR ALEATOIRE.jpg" alt=""/>
                                            <div className="mask-image__info">
                                                <h6>MASQUE SMALL LOGO</h6>
                                                <p>couleur : NOIR</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500} delay={400}>
                                        <div className="mask-image">
                                            <img src="IMAGES/MASKS/VISUEL BLANC MOSAIC.jpg" alt=""/>
                                            <div className="mask-image__info">
                                                <h6>MASQUE PATTERN</h6>
                                                <p>couleur : BLANC</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500}>
                                        <div className="mask-image">
                                            <img src="IMAGES/MASKS/VISUEL BLANC CLOSE UP.jpg" alt=""/>
                                            <div className="mask-image__info">
                                                <h6>MASQUE BIG LOGO</h6>
                                                <p>couleur : BLANC</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500} delay={400}>
                                        <div className="mask-image">
                                            <img src="IMAGES/MASKS/VISUEL NOIR CLASSIQUE.jpg" alt=""/>
                                            <div className="mask-image__info">
                                                <h6>MASQUE SMALL LOGO</h6>
                                                <p>couleur : NOIR</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>

                            <div className="product__mgp-everyone page-section u-no-padding-bottom u-background-black u-grey-font u-padding-horizontal-default">
                                <div className="mgp-everyone u-bottom-border u-padding-bottom u-border-grey u-container">
                                    <Reveal effect="fadeInDown">
                                        <h2 className="page-section__title">En faire profiter<br/>le plus grand nombre</h2>
                                    </Reveal>
                                    <p className="page-section__text">Créer un groupe de commande pour faire baisser le prix de votre masque</p>
                                    <p className="page-section__text">jusqu'à <span className="u-underline">4 euros l'unité</span>.</p>
                                </div>
                            </div>

                            <div className="product__mgp-group-purchase page-section u-background-black u-grey-font">
                                <div className="mgp-group-purchase__header u-container u-padding-horizontal-default">
                                    <Reveal effect="fadeInDown">
                                        <h2 className="page-section__title">Plus vous êtes nombreux,<br/> plus c'est avantageux.</h2>
                                    </Reveal>
                                </div>
                                <div className="mgp-group-purchase__price-info u-container u-padding-horizontal-default">
                                    <div className="price-table__simple-order">
                                        <Reveal effect="fadeInDown">
                                            <h4 className="price-table__order-title">Commande simple.</h4>
                                        </Reveal>
                                        <div className="price-group">
                                            <p>1 personne :</p>
                                            <p><span className="price">7,50 €</span> / masque.</p>
                                        </div>
                                    </div>
                                    <div className="price-table__group-order">
                                        <Reveal effect="fadeInDown">
                                            <h4 className="price-table__order-title">Commande groupe.</h4>
                                        </Reveal>
                                        <div className="group-order__price-table">
                                            <div className="price-group">
                                                <p>2 personnes :</p>
                                                <p><span className="price">6,50 €</span> / masque.</p>
                                            </div>
                                            <div className="price-group">
                                                <p>25 personnes :</p>
                                                <p><span className="price">5,00 €</span> / masque.</p>
                                            </div>
                                            <div className="price-group">
                                                <p>5 personnes :</p>
                                                <p><span className="price">6,00 €</span> / masque.</p>
                                            </div>
                                            <div className="price-group">
                                                <p>50 personnes :</p>
                                                <p><span className="price">4,50 €</span> / masque.</p>
                                            </div>
                                            <div className="price-group">
                                                <p>10 personnes :</p>
                                                <p><span className="price">5,50 €</span> / masque.</p>
                                            </div>
                                            <div className="price-group">
                                                <p>100 personnes :</p>
                                                <p><span className="price">4,00 €</span> / masque.</p>
                                            </div>
                                        </div>
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

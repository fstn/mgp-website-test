import React from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';

const Style = styled.div`


    `

function ProductSales({}: {}) {

    return (
        <Style>
            <main>
                <div className="product">
                    <div className="product__header panels">
                        <Reveal effect="fadeIn" duration={1500} delay={300}>
                            <img className="product__header-background" src="IMAGES/VISUEL 6 copie-min.png" alt=""/>
                        </Reveal>
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
                                <p className="product__header-text">Choisissez vos masques.<br/>Invitez vos proches.<br/>Faîtes baissez leur prix.</p>
                                <button className="product__header-purchase">COMMANDER</button>
                            </div>
                        </div>
                    </div>


                    <div className="product-content">
                        <div className="u-container u-padding-horizontal-default panels">

                            <div className="product__mgp-quantity">
                                <div className="mgp-quantity page-section">
                                    <Reveal effect="fadeInDown">
                                        <h2 className="page-section__title">Des masques en grande quantité.</h2>
                                    </Reveal>
                                    <p className="page-section__text ">C'est le défi qui nous attend maintenant pour faire face au Covid19.</p>
                                    <p className="page-section__text ">Des masques pour se protéger et protéger les autres</p>
                                    <p className="page-section__text "><span className="u-underline">100 000</span>: le nombre de masques que nous pouvons produire chaque jour.</p>
                                </div>
                            </div>

                            <div className="product__mgp-quality">
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
                                            <Reveal effect="fadeInDown" duration={500} delay={400}>
                                                <h4 className="mgp-quality__feature-title">Confortables mais sûrs.</h4>
                                            </Reveal>
                                            <p className="mgp-quality__feature-text">Deux couches de propylène sont là pour réduire le passage des éléments extérieur nocifs.</p>
                                        </div>
                                        <div className="mgp-quality__feature-group">
                                            <Reveal effect="fadeInDown" duration={500} delay={500}>
                                                <h4 className="mgp-quality__feature-title">Filtration garantie.</h4>
                                            </Reveal>
                                            <p className="mgp-quality__feature-text">Jusqu'à 15 lavages,<br/>en accord avec<br/>la législation Française.</p>
                                        </div>
                                        <div className="mgp-quality__feature-group">
                                            <Reveal effect="fadeInDown" duration={500} delay={600}>
                                                <h4 className="mgp-quality__feature-title">Origine controlée.</h4>
                                            </Reveal>
                                            <p className="mgp-quality__feature-text">Nos masques sont fabriqués<br/>et certifiés en Espagne</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product__mgp-design">
                                <div className="mgp-design page-section">
                                    <Reveal effect="fadeInDown">
                                        <h2 className="page-section__title">Un design original et unisexe.</h2>
                                    </Reveal>
                                    <p className="page-section__text">Chaque masque est imprimé de manière <span className="u-underline">aléatoire,</span></p>
                                    <p className="page-section__text">des milliers de combinaisons sont possibles et <span className="u-underline">chaque masque est unique</span>.</p>
                                </div>
                            </div>

                            <div className="product__mgp-gallery">
                                <div className="mgp-gallery u-bottom-border">
                                    <Reveal effect="fadeInUp">
                                        <img src="IMAGES/MASKS/VISUEL NOIR MOSAIC.jpg" alt=""/>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500} delay={350}>
                                        <img src="IMAGES/MASKS/VISUEL BLANC CLASSIQUE.jpg" alt=""/>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500}>
                                        <img src="IMAGES/MASKS/VISUEL BLANC ALEATOIRE.jpg" alt=""/>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500} delay={400}>
                                        <img src="IMAGES/MASKS/VISUEL NOIR CLOSE UP.jpg" alt=""/>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500}>
                                        <img src="IMAGES/MASKS/VISUEL NOIR ALEATOIRE.jpg" alt=""/>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500} delay={400}>
                                        <img src="IMAGES/MASKS/VISUEL BLANC MOSAIC.jpg" alt=""/>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500}>
                                        <img src="IMAGES/MASKS/VISUEL BLANC CLOSE UP.jpg" alt=""/>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={500} delay={400}>
                                        <img src="IMAGES/MASKS/VISUEL NOIR CLASSIQUE.jpg" alt=""/>
                                    </Reveal>
                                </div>
                            </div>

                            <div className="product__mgp-design">
                                <div className="mgp-design page-section">
                                    <Reveal effect="fadeInDown">
                                        <h2 className="page-section__title">En faire profiter<br/>le plus grand nombre</h2>
                                    </Reveal>
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

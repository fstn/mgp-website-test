import React from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';

const Style = styled.div`


    `

function ProductSales({}: {}) {
    const mgpQuantityRef = React.useRef(null)
    const intersectionQuantity = useIntersection(mgpQuantityRef, { root: null, rootMargin: "0PX", threshold: 1 })
    const mgpQualityRef = React.useRef(null)
    const intersectionQuality = useIntersection(mgpQualityRef, { root: null, rootMargin: "0PX", threshold: 1 })

    const mgpFeature1Ref = React.useRef(null)
    const intersectionFeature1 = useIntersection(mgpFeature1Ref, { root: null, rootMargin: "0PX", threshold: 1 })

    const mgpImage1Ref = React.useRef(null)
    const intersectionImage1 = useIntersection(mgpImage1Ref, { root: null, rootMargin: "0PX", threshold: 0.5 })
    const mgpImage2Ref = React.useRef(null)
    const intersectionImage2 = useIntersection(mgpImage2Ref, { root: null, rootMargin: "0PX", threshold: 0.8 })
    const mgpImage3Ref = React.useRef(null)
    const intersectionImage3 = useIntersection(mgpImage3Ref, { root: null, rootMargin: "0PX", threshold: 0.5 })
    const mgpImage4Ref = React.useRef(null)
    const intersectionImage4 = useIntersection(mgpImage4Ref, { root: null, rootMargin: "0PX", threshold: 0.8 })
    const mgpImage5Ref = React.useRef(null)
    const intersectionImage5 = useIntersection(mgpImage5Ref, { root: null, rootMargin: "0PX", threshold: 0.5 })
    const mgpImage6Ref = React.useRef(null)
    const intersectionImage6 = useIntersection(mgpImage6Ref, { root: null, rootMargin: "0PX", threshold: 0.8 })
    const mgpImage7Ref = React.useRef(null)
    const intersectionImage7 = useIntersection(mgpImage7Ref, { root: null, rootMargin: "0PX", threshold: 0.5 })
    const mgpImage8Ref = React.useRef(null)
    const intersectionImage8 = useIntersection(mgpImage8Ref, { root: null, rootMargin: "0PX", threshold: 0.8 })
    
    const mgpDesignRef = React.useRef(null)
    const intersectionDesign = useIntersection(mgpDesignRef, { root: null, rootMargin: "0PX", threshold: 1 })
    const mgpEveryoneRef = React.useRef(null)
    const intersectionEveryone = useIntersection(mgpEveryoneRef, { root: null, rootMargin: "0PX", threshold: 1 })
    const mgpGroupPriceRef = React.useRef(null)
    const intersectionGroupPrice = useIntersection(mgpGroupPriceRef, { root: null, rootMargin: "0PX", threshold: 1 })

    const fadeIn = (element: string) => {
        gsap.to(element, 1, {
            opacity: 1,
            y: 0,
            ease: 'power4.out',
            stagger: {
                amount: .3
            }
        })
    }

    const fadeOut = (element: string) => {
        gsap.to(element, 1, {
            opacity: 0,
            y: -40,
            ease: 'power4.out',
        })
    }

    const fadeInCascade = () => {
        gsap.to(".fadeFeature1", 1, { opacity: 1, y: 0, ease: 'power4.out', stagger: { amount: .3 } });
        gsap.to(".fadeFeature2", 1, { opacity: 1, y: 0, ease: 'power4.out', stagger: { amount: .3 }, delay: 0.2 });
        gsap.to(".fadeFeature3", 1, { opacity: 1, y: 0, ease: 'power4.out', stagger: { amount: .3 }, delay: 0.4 });
    }   
    
    const fadeOutCascade = () => {
        gsap.to(".fadeFeature1", 1, { opacity: 0, y: -40, ease: 'power4.out' }); 
        gsap.to(".fadeFeature2", 1, { opacity: 0, y: -40, ease: 'power4.out', delay: 0.2 }); 
        gsap.to(".fadeFeature3", 1, { opacity: 0, y: -40, ease: 'power4.out', delay: 0.4 }); 
    }

    intersectionQuantity && intersectionQuantity.intersectionRatio < 1 ?  fadeOut(".fadeQuantity") : fadeIn(".fadeQuantity")
    intersectionQuality && intersectionQuality.intersectionRatio < 1 ?  fadeOut(".fadeQuality") : fadeIn(".fadeQuality")
    intersectionDesign && intersectionDesign.intersectionRatio < 1 ? fadeOut(".fadeDesign") : fadeIn(".fadeDesign")
    intersectionEveryone && intersectionEveryone.intersectionRatio < 1 ? fadeOut(".fadeEveryone") : fadeIn(".fadeEveryone")
    intersectionGroupPrice && intersectionGroupPrice.intersectionRatio < 1 ? fadeOut(".fadeGroupPrice") : fadeIn(".fadeGroupPrice")

    intersectionFeature1 && intersectionFeature1.intersectionRatio < 1 ? fadeOutCascade() : fadeInCascade()

    intersectionImage1 && intersectionImage1.intersectionRatio < 0.5 ? fadeOut(".fadeImage1") : fadeIn(".fadeImage1")
    intersectionImage2 && intersectionImage2.intersectionRatio < 0.8 ? fadeOut(".fadeImage2") : fadeIn(".fadeImage2")
    intersectionImage3 && intersectionImage3.intersectionRatio < 0.5 ? fadeOut(".fadeImage3") : fadeIn(".fadeImage3")
    intersectionImage4 && intersectionImage4.intersectionRatio < 0.8 ? fadeOut(".fadeImage4") : fadeIn(".fadeImage4")
    intersectionImage5 && intersectionImage5.intersectionRatio < 0.5 ? fadeOut(".fadeImage5") : fadeIn(".fadeImage5")
    intersectionImage6 && intersectionImage6.intersectionRatio < 0.8 ? fadeOut(".fadeImage6") : fadeIn(".fadeImage6")
    intersectionImage7 && intersectionImage7.intersectionRatio < 0.5 ? fadeOut(".fadeImage7") : fadeIn(".fadeImage7")
    intersectionImage8 && intersectionImage8.intersectionRatio < 0.8 ? fadeOut(".fadeImage8") : fadeIn(".fadeImage8")

    return (
        <Style>
            <main>
                <div className="product">
                    <Reveal effect="fadeIn" duration={1500} delay={300}>
                        <img className="product__header-background" src="IMAGES/VISUEL 6 copie-min.png" alt=""/>
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
                                <p className="product__header-text">Choisissez vos masques.<br/>Invitez vos proches.<br/>Faîtes baissez leur prix.</p>
                                <button className="product__header-purchase">COMMANDER</button>
                            </div>
                        </div>
                    </div>


                    <div className="product-content">
                        <div className="u-container u-padding-horizontal-default">

                            <div className="product__mgp-quantity">
                                <div className="mgp-quantity page-section">
                                    <h2 className="page-section__title fadeQuantity" ref={mgpQuantityRef}>Des masques en grande quantité.</h2>
                                    <p className="page-section__text ">C'est le défi qui nous attend maintenant pour faire face au Covid19.</p>
                                    <p className="page-section__text ">Des masques pour se protéger et protéger les autres</p>
                                    <p className="page-section__text "><span className="u-underline">100 000</span>: le nombre de masques que nous pouvons produire chaque jour.</p>
                                </div>
                            </div>

                            <div className="product__mgp-quality">
                                <div className="mgp-quality page-section">
                                    <div className="mgp-quality__header">
                                            <h2 className="page-section__title fadeQuality" ref={mgpQualityRef}>De la quantité oui.<br/>Mais de la qualité surtout.</h2>
                                        <p className="page-section__text">Nous utilisons de la viscose de <span className="u-underline">bambou biologique</span></p>
                                        <p className="page-section__text">pour des masques respirants et plus doux au toucher.</p>
                                        <p className="page-section__text">Avec <span className="u-underline">deux élastiques</span>, le masque s'adapte à toute les formes de visage.</p>
                                    </div>
                                    <div className="mgp-quality__features">
                                        <div className="mgp-quality__feature-group">
                                            <h4 className="mgp-quality__feature-title fadeFeature1" ref={mgpFeature1Ref}>Confortables mais sûrs.</h4>
                                            <p className="mgp-quality__feature-text">Deux couches de propylène sont là pour réduire le passage des éléments extérieur nocifs.</p>
                                        </div>
                                        <div className="mgp-quality__feature-group">
                                                <h4 className="mgp-quality__feature-title fadeFeature2">Filtration garantie.</h4>
                                            <p className="mgp-quality__feature-text">Jusqu'à 15 lavages,<br/>en accord avec<br/>la législation Française.</p>
                                        </div>
                                        <div className="mgp-quality__feature-group">
                                            <h4 className="mgp-quality__feature-title fadeFeature3">Origine controlée.</h4>
                                            <p className="mgp-quality__feature-text">Nos masques sont fabriqués<br/>et certifiés en Espagne</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product__mgp-design">
                                <div className="mgp-design page-section">
                                    <h2 className="page-section__title fadeDesign" ref={mgpDesignRef}>Un design original et unisexe.</h2>
                                    <p className="page-section__text">Chaque masque est imprimé de manière <span className="u-underline">aléatoire,</span></p>
                                    <p className="page-section__text">des milliers de combinaisons sont possibles et <span className="u-underline">chaque masque est unique</span>.</p>
                                </div>
                            </div>

                            <div className="product__mgp-gallery">
                                <div className="mgp-gallery u-bottom-border">
                                        <img src="IMAGES/MASKS/VISUEL NOIR MOSAIC.jpg" className="fadeImage1" ref={mgpImage1Ref} alt=""/>
                                        <img src="IMAGES/MASKS/VISUEL BLANC CLASSIQUE.jpg" className="fadeImage2" ref={mgpImage2Ref} alt=""/>
                                        <img src="IMAGES/MASKS/VISUEL BLANC ALEATOIRE.jpg" className="fadeImage3" ref={mgpImage3Ref} alt=""/>
                                        <img src="IMAGES/MASKS/VISUEL NOIR CLOSE UP.jpg" className="fadeImage4" ref={mgpImage4Ref} alt=""/>
                                        <img src="IMAGES/MASKS/VISUEL NOIR ALEATOIRE.jpg" className="fadeImage5" ref={mgpImage5Ref} alt=""/>
                                        <img src="IMAGES/MASKS/VISUEL BLANC MOSAIC.jpg" className="fadeImage6" ref={mgpImage6Ref} alt=""/>
                                        <img src="IMAGES/MASKS/VISUEL BLANC CLOSE UP.jpg" className="fadeImage7" ref={mgpImage7Ref} alt=""/>
                                        <img src="IMAGES/MASKS/VISUEL NOIR CLASSIQUE.jpg" className="fadeImage8" ref={mgpImage8Ref} alt=""/>
                                </div>
                            </div>

                            <div className="product__mgp-everyone">
                                <div className="mgp-everyone page-section">
                                        <h2 className="page-section__title fadeEveryone" ref={mgpEveryoneRef} >En faire profiter<br/>le plus grand nombre.</h2>
                                    <p className="page-section__text">Créer un groupe de commande pour faire baisser le prix de votre masque</p>
                                    <p className="page-section__text">jusqu'à <span className="u-underline">4 euros l'unité</span>.</p>
                                </div>
                            </div>

                            <div className="product__mgp-group-purchase page-section">
                                <div className="mgp-group-purchase__header">
                                    <h2 className="page-section__title fadeGroupPrice" ref={mgpGroupPriceRef}>Plus on est, moins c'est cher.</h2>
                                </div>
                                <div className="mgp-group-purchase__prices">
                                    <p className="u-font-light">3,50€ /masque<br/>pour 1 pack.</p>
                                    <p className="u-font-light">2,80€ /masque<br/>pour 10 packs.</p>
                                    <p className="u-font-light">2,40€ /masque<br/>pour 1000 packs.</p>
                                    <p className="u-font-medium">3,20€ /masque<br/>pour 2 packs.</p>
                                    <p className="u-font-medium">2,60€ /masque<br/>pour 50 packs.</p>
                                    <p className="u-font-medium">2,20€ /masque<br/>pour 5000 packs.</p>
                                    <p className="u-font-bold">3,00€ /masque<br/>pour 5 packs.</p>
                                    <p className="u-font-bold">2,50€ /masque<br/>pour 100 packs.</p>
                                    <p className="u-font-bold">2,00€ /masque<br/>pour 10000 packs.</p>
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

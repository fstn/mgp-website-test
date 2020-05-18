import React, {useEffect, useState} from 'react';
import Reveal from 'react-reveal/Reveal';


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

function ProductSales() {

    const size = useWindowSize()
    return (
        <>
            <div className="u-container product__mgp-quantity u-padding-horizontal-default">
                <div className="mgp-quantity page-section">
                    <Reveal effect="fadeInDown">
                        <h2 className="page-section__title fadeQuantity">Des masques en grande quantité.</h2>
                    </Reveal>
                    <p className="page-section__text ">C’est le défi qui nous attend dès maintenant pour faire face au
                        Covid19.</p>
                    <p className="page-section__text ">Des masques pour se protéger et pour protéger les autres.</p>
                    <br/>
                    <p className="page-section__text "><span className="u-underline">100 000</span> : Le nombre de
                        masques que nous pouvons produire chaque jour.</p>
                </div>
            </div>

            <div className="u-container product__mgp-quality u-padding-horizontal-default">
                <div className="mgp-quality page-section">
                    <div className="mgp-quality__header">
                        <Reveal effect="fadeInDown">
                            <h2 className="page-section__title">De la quantité oui. {size.width && size.width > 480 &&
                            <br/>}Mais de la qualité surtout.</h2>
                        </Reveal>
                        <p className="page-section__text">Nous avons fait de nombreux tests pour vous offrir aujourd’hui
                            le meilleur masque<br/>
                            grand public possible : le juste équilibre entre <span className="u-underline">protection, confort et design.</span>
                        </p>
                        <div className="mgp-quality__features u-margin-6-top">
                            <div className="mgp-feature-group">
                                <Reveal effect="fadeInDown">
                                    <h4 className="mgp-feature-title fadeFeature1">Filtration garantie.</h4>
                                </Reveal>
                                <p className="mgp-feature-text">Tous nos masques assurent une filtration garantie jusqu’à 15 lavages, en accord avec la législation Française.</p>
                            </div>
                            <div className="mgp-feature-group">
                                <Reveal effect="fadeInDown">
                                    <h4 className="mgp-feature-title fadeFeature2">Origine controlée.</h4>
                                </Reveal>
                                <p className="mgp-feature-text">Nos masques sont fabriqués en Espagne.</p>
                            </div>
                            <div className="mgp-feature-group">
                                <Reveal effect="fadeInDown">
                                    <h4 className="mgp-feature-title fadeFeature3">Un oeil sur l’avenir.</h4>
                                </Reveal>
                                <p className="mgp-feature-text">Nos masques sont lavables, réutilisables et recyclables.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="u-container product__mgp-design u-padding-horizontal-default">
                <div className="mgp-design page-section">
                    <Reveal effect="fadeInDown">
                            <h2 className="page-section__title">Pensés pour le plus grand nombre.</h2>
                        </Reveal>
                        <p className="page-section__text">
                            Avec leur <span className="u-underline">design unisexe</span>, les masques MGP s’adressent à
                            toutes et à tous.
                            Et avec leur <span className="u-underline">deux élastiques</span>,
                            ils s’adaptent à la forme de chaque visage pour une utilisation plus confortable et adaptée
                            à tous.
                        </p>

                        <img className="u-margin-6-top" src="/IMAGES/black_90.jpg" alt=""/>
                </div>
            </div>


            <div className="u-container product__mgp-variants u-padding-horizontal-default">
                <div className="mgp-variants page-section">
                    <div className="mgp-variants__header">
                        <Reveal effect="fadeInDown">
                            <h2 className="page-section__title">Un masque. Deux
                                possibilités.</h2>
                        </Reveal>
                        <p className="page-section__text">
                            Un masque grand public c’est un masque qui convient à tous et à toutes. Mais nous ne
                            sommes
                            pas tous pareils.
                            Voilà pourquoi MGP vous propose deux lignes bien différentes.</p>
                        <div className="mgp-variants__list u-margin-6-top">
                            <div>
                                <Reveal effect="fadeInDown">
                                    <h3 className="mgp-variant-title">MGP Bamboo</h3>
                                </Reveal>
                                <p className="mgp-variant-text">
                                    Respirants et confortables, les masques MGP Bamboo sont composés de 4
                                    couches de
                                    viscose de bambou biologique pour un toucher particulièrement doux et de
                                    deux
                                    couches de propylène pour réduire le passage des éléments extérieurs
                                    nocifs. </p>
                            </div>
                            <div>
                                <Reveal effect="fadeInDown">
                                    <h3 className="mgp-variant-title">MGP B&W</h3>
                                </Reveal>
                                <p className="mgp-variant-text">
                                    Pour vous le masque c’est plutôt noir ou plutôt blanc ? Logo Big ou logo
                                    Small ?
                                    Pattern ?
                                    Avec les masques MGP B&W trouvez la bonne combinaison avec votre look en
                                    jouant avec
                                    les couleurs et les logos tout en conservant une protection optimale. Et
                                    grâce à
                                    notre système d’impression aléatoire, chaque masque est unique.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="u-container product__mgp-gallery u-padding-horizontal-default">
                <div className="mgp-gallery">
                    <Reveal effect="fadeInUp" duration={500}>
                        <div className="mask-image">
                            <img src="/IMAGES/MASKS/VISUEL NOIR MOSAIC.jpg" alt=""/>
                            <div className="mask-image__info">
                                <h6>MASQUE PATTERN</h6>
                                <p>couleur : NOIR</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal effect="fadeInUp" duration={500} delay={400}>
                        <div className="mask-image">
                            <img src="/IMAGES/MASKS/VISUEL BLANC CLASSIQUE.jpg" alt=""/>
                            <div className="mask-image__info">
                                <h6>MASQUE SMALL LOGO</h6>
                                <p>couleur : BLANC</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal effect="fadeInUp" duration={500}>
                        <div className="mask-image">
                            <img src="/IMAGES/MASKS/VISUEL BLANC ALEATOIRE.jpg" alt=""/>
                            <div className="mask-image__info">
                                <h6>MASQUE SMALL LOGO</h6>
                                <p>couleur : BLANC</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal effect="fadeInUp" duration={500} delay={400}>
                        <div className="mask-image">
                            <img src="/IMAGES/MASKS/VISUEL NOIR CLOSE UP.jpg" alt=""/>
                            <div className="mask-image__info">
                                <h6>MASQUE BIG LOGO</h6>
                                <p>couleur : NOIR</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal effect="fadeInUp" duration={500}>
                        <div className="mask-image">
                            <img src="/IMAGES/MASKS/VISUEL NOIR ALEATOIRE.jpg" alt=""/>
                            <div className="mask-image__info">
                                <h6>MASQUE SMALL LOGO</h6>
                                <p>couleur : NOIR</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal effect="fadeInUp" duration={500} delay={400}>
                        <div className="mask-image">
                            <img src="/IMAGES/MASKS/VISUEL BLANC MOSAIC.jpg" alt=""/>
                            <div className="mask-image__info">
                                <h6>MASQUE PATTERN</h6>
                                <p>couleur : BLANC</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal effect="fadeInUp" duration={500}>
                        <div className="mask-image">
                            <img src="/IMAGES/MASKS/VISUEL BLANC CLOSE UP.jpg" alt=""/>
                            <div className="mask-image__info">
                                <h6>MASQUE BIG LOGO</h6>
                                <p>couleur : BLANC</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal effect="fadeInUp" duration={500} delay={400}>
                        <div className="mask-image">
                            <img src="/IMAGES/MASKS/VISUEL NOIR CLASSIQUE.jpg" alt=""/>
                            <div className="mask-image__info">
                                <h6>MASQUE SMALL LOGO</h6>
                                <p>couleur : NOIR</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div
                className="product__mgp-everyone page-section u-no-padding-bottom u-background-black u-font-light-grey u-padding-horizontal-default">
                <div className="mgp-everyone u-bottom-border u-padding-bottom u-border-grey u-container">
                    <Reveal effect="fadeInDown">
                        <h2 className="page-section__title">En faire profiter<br/>le plus grand nombre.</h2>
                    </Reveal>
                    <p className="page-section__text">Un masque grand public c’est aussi et surtout un masque au prix accessible.
                        Créez une commande “groupe” et faîtes baisser le prix de votre masque <span className="u-underline u-underline-white">jusqu'à 4 euros l'unité</span>.</p>
                </div>
            </div>

            <div className="product__mgp-group-purchase page-section u-background-black u-font-light-grey">
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
                        <Reveal effect="fadeInLeft" delay={400}>
                            <div className="price-group">
                                <p>1 personne :</p>
                                <p><span className="price">7,50 €</span> / masque.</p>
                            </div>
                        </Reveal>
                    </div>
                    <div className="price-table__group-order">
                        <Reveal effect="fadeInDown">
                            <h4 className="price-table__order-title">Commande groupe.</h4>
                        </Reveal>
                        <div className="group-order__price-table">
                            <Reveal effect="fadeInLeft" delay={400}>
                                <div className="price-group">
                                    <p>2 personnes :</p>
                                    <p><span className="price">6,50 €</span> / masque.</p>
                                </div>
                            </Reveal>
                            <Reveal effect="fadeInLeft" delay={400}>
                                <div className="price-group">
                                    <p>25 personnes :</p>
                                    <p><span className="price">5,00 €</span> / masque.</p>
                                </div>
                            </Reveal>
                            <Reveal effect="fadeInLeft" delay={400}>
                                <div className="price-group">
                                    <p>5 personnes :</p>
                                    <p><span className="price">6,00 €</span> / masque.</p>
                                </div>
                            </Reveal>
                            <Reveal effect="fadeInLeft" delay={400}>
                                <div className="price-group">
                                    <p>50 personnes :</p>
                                    <p><span className="price">4,50 €</span> / masque.</p>
                                </div>
                            </Reveal>
                            <Reveal effect="fadeInLeft" delay={400}>
                                <div className="price-group">
                                    <p>10 personnes :</p>
                                    <p><span className="price">5,50 €</span> / masque.</p>
                                </div>
                            </Reveal>
                            <Reveal effect="fadeInLeft" delay={400}>
                                <div className="price-group">
                                    <p>100 personnes :</p>
                                    <p><span className="price">4,00 €</span> / masque.</p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductSales;

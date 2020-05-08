import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import {Button, InputNumber, Radio} from "antd";
import './ProductPage.css';
import SectionContainer from "./product/SectionContainer";
import {RadioChangeEvent} from "antd/es/radio";

// @ts-ignore
const Style = styled.div`
  
    `
const ProductContainer = styled.div`
 
`


function ProductPage() {
    const [quantity, setQuantity] = useState<any>(1)
    const [selectedPack, setSelectedPack] = useState<any>("white")
    const [visible, setVisible] = useState<any>(false)
    const selectProductDiv: any = React.createRef()

    const selectPack = (e: RadioChangeEvent) => {
        setSelectedPack(e.target.value)
    }
    // @ts-ignore
    //
    // @ts-ignore
    return (
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


                <div className="product-content">
                    <div className="u-container u-padding-horizontal-default panels">

                        <div className="product__mgp-quantity">
                            <div className="mgp-quantity page-section">
                                <h2 className="page-section__title">Des masques en grande quantité.</h2>
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
                <Style>

                { /*@ts-ignore */}

                <SectionContainer black={false}
                                full={<>
                                    <h2>Choisissez votre pack de masques.</h2>
                                    { /*@ts-ignore */}
                                    <div style={{display: "flex"}} ref={selectProductDiv}>
                                        <div className="product-image">
                                            <img className="" src={`/img/small/${selectedPack}-1.jpg`}/>
                                        </div>
                                        <ProductContainer>
                                            <div className="product-text">
                                                <div className="name">MGP Le masque grand public</div>
                                                <div className="description">Pack de 3 masques</div>
                                                <div className={"product-selector"} style={{display: "flex"}}>
                                                    <Radio.Group defaultValue="white" size="large" onChange={selectPack}>
                                                        <Radio.Button className={"product-selector-btn"}
                                                                        value="white"><img
                                                            src={"/img/small/white-1.jpg"}/></Radio.Button>
                                                        <Radio.Button className={"product-selector-btn"}
                                                                        value="black"><img
                                                            src={"/img/small/black-1.jpg"}/></Radio.Button>
                                                        <Radio.Button className={"product-selector-btn"} value="mixt"><img
                                                            src={"/img/small/white-2.jpg"}/></Radio.Button>
                                                    </Radio.Group>
                                                </div>
                                                {/*<img className="image" src={get(product, 'pictures.thumbs')}/>*/}
                                                <div className="buy-btn-container">
                                                    <label>Quantity: </label>
                                                    <InputNumber  value={quantity} onChange={setQuantity}/>
                                                    <div>
                                                        <Button type={"link"} className={"btn-grey"}>18€</Button>
                                                        <Button type={"primary"} className={"btn-black"}>12€</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </ProductContainer>
                                    </div>
                                </>
                                }/>
            </Style>
            </div>
        </main>
    );
}

export default ProductPage;

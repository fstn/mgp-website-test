import React from 'react';
import styled from 'styled-components'
import './ProductPage.css'
import ProductSales from "./components/ProductSales";
import ProductHeader from "./components/ProductHeader";
import ProductCta from "./components/ProductCTA";

// @ts-ignore
const Style = styled.div.withConfig({displayName: "ProductPage"})
// language=LESS prefix=*{ suffix=}
        `

    width: 100%;
    min-height: 100%;
`

function ProductPage() {

    // @ts-ignore
    return (
        <Style>
            <main>
                <div className="product">
                    <ProductHeader/>
                </div>
                <div className="product-content">
                    <ProductSales/>
                    <div className={"u-container u-padding-horizontal-default "}>
                        <ProductCta/>
                    </div>
                </div>
            </main>
        </Style>
    );
}

export default ProductPage;

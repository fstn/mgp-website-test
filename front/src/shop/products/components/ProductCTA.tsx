import React from 'react';
import styled from 'styled-components'
import BuyBtn from "./BuyBtn";
import JoinBtn from "./JoinBtn";

// language=LESS prefix=*{ suffix=}
const Style = styled.div`
    padding-top: 3em;
    padding-bottom: 3em;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 768px) {
      display: block;
    }

`


function ProductCta({}: {}) {
    return (
        <Style>
            <BuyBtn/>
            <span></span>
            <JoinBtn/>
        </Style>
    );
}

export default ProductCta;

import React from 'react';
import styled from 'styled-components'
import {FloatingBox} from "../../../components/FloatingBox";

// @ts-ignore
const Style = styled(FloatingBox).withConfig({displayName: "Pricing"})
// language=LESS prefix=*{ suffix=}
`

    background: black;
    color: white;
    display: block;

    justify-content: space-between;
    
    * {
      color: white !important;
    }

    .pricing-content {
      font-size: x-small;
      line-height: 2;
    }
`

function zeroPad(num: number, places: number) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

function Pricing({discounts, className, productColor}: { discounts: Array<any>, className?: string, productColor?: any }) {

    return (
        <Style className={className}>
            <h2>Plus vous<br/> êtes<br/> nombreux,<br/> plus c'est<br/> avantageux.</h2>
            <div className="princing-content">
                {discounts.map((p: { discount: number, quantity: number }) => (
                    <>
                        <div className={"no-wrap"}>{zeroPad(p.quantity, 4)} <small>pers</small> {(1-p.discount) * (productColor?.price||0)}€<small> / masque</small>
                        </div>
                    </>
                ))}
            </div>
        </Style>
    );
}

export default Pricing;

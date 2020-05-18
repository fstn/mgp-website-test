import React from 'react';
import styled from 'styled-components'
import {FloatingBox} from "../../../components/FloatingBox";

// @ts-ignore
const Style = styled(FloatingBox).withConfig({displayName: "Congratulations"})
// language=LESS prefix=*{ suffix=}
        `
    justify-content: normal;
    img {
      margin-top: 5rem;
      margin-left: -40px !important;
    }
`


function Congratulations({order}: { order?: any }) {

    return (
        <Style>
            <h2>Vous recevrez très prochainement
                un mail pour vous prévenir
                de leur expédition. </h2>
            <hr/>

            <span className={"center"}>
                <img src={order?.items[0].productColor.pictures[0]}/>
            </span>
        </Style>
    );
}

export default Congratulations;

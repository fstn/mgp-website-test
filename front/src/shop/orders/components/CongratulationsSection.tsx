import React from 'react';
import styled from 'styled-components'
import Congratulations from "./Congratulations";
import Thanks2 from "./Thanks";

// @ts-ignore
const Style = styled.div.withConfig({displayName: "CongratulationsSection"})
// language=LESS prefix=*{ suffix=}
        `


    .grid-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      gap: 1em;
      grid-template-areas: "."
    }

    @media (min-width: 900px) {
      .grid-container {
        display: grid;
        grid-template-columns: 284px 284px;
        grid-template-rows: 1fr;
        justify-content: space-evenly;
        gap: 1em 1em;
        grid-template-areas: "."
      }
    }
`


function CongratulationsSection({order}: { order?: any }) {

    return (
        <Style>
            <div
                className={"section-content grid-container"}>
                <Thanks2 order={order}/>
                <Congratulations order={order}/>
            </div>
        </Style>
);
}

export default CongratulationsSection;

import React, {useContext} from 'react';
import styled from 'styled-components'
import {AppContext} from "../../../AppContextProvider";
import SelectProductOption from "./SelectProductOption";
import CountDown from "../../../components/CountDown";

// @ts-ignore
const Style = styled.div.withConfig({displayName: "SelectProductOptionSection"})
// language=LESS prefix=*{ suffix=}
`

    .select-grid-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      gap: 1em;
      grid-template-areas: "." "."
    }
    //
    //@media (min-width: 900px) {
    //  .select-grid-container {
    //    display: grid;
    //    grid-template-columns: 1fr min-content;
    //    grid-template-rows: 1fr;
    //    gap: 1em 1em;
    //    grid-template-areas: ". ."
    //  }
    //}
`


function SelectProductOptionSection({sale, product, teamOrder}: {sale?: any, product?: any, teamOrder?: any}) {
    const [context] = useContext<any>(AppContext);
    return (
        <Style>
            <div className="select-grid-container">
                    <SelectProductOption
                        color="#F9F9F9"
                        sale={sale}
                        product={product} disabled={false}
                        teamOrder={teamOrder}/>
                    {teamOrder &&
                    <CountDown createdAt={teamOrder?.createdAt}/>}
            </div>
        </Style>
    );
}

export default SelectProductOptionSection;

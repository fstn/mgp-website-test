import React from 'react';
import styled from 'styled-components'
import JoinOrderSection from "./JoinOrder";

// language=LESS prefix=*{ suffix=}
// language=LESS prefix=*{ suffix=}
const Style = styled.div`
  display: flex;
`

function JoinOrCreateOrder() {
    return (
        <Style>
            <JoinOrderSection/>
        </Style>
    );
}

export default JoinOrCreateOrder;

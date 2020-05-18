import React from 'react';
import styled from 'styled-components'
import JoinOrder from "./JoinOrder";

// language=LESS prefix=*{ suffix=}
// language=LESS prefix=*{ suffix=}
const Style = styled.div`
display: flex;

.section-content{
  flex-wrap: wrap;
  justify-content: center;
}
`

function JoinOrderSection({teamOrder}: { teamOrder?: any }) {
    return (
        <Style className={"join-order"}>
            <div className={"section-content flex flex-center "}>
                <JoinOrder teamOrder={teamOrder}/>
            </div>
        </Style>
    );
}

export default JoinOrderSection;


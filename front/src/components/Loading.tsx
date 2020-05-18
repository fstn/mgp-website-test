import React from 'react';
import styled from 'styled-components'

// language=LESS prefix=*{ suffix=}
const Style = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
`


function Loading({}: {}) {
    return (
        <Style className={"flex flex-center full-height full-width loading"}>
                <img src={"/LOGO/LOGO PNG/MGP NOIR.png"} className={"loading"} alt={"loading"} style={{margin: "auto"}} width={200}/>
        </Style>
    );
}

export default Loading;

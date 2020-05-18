import React from 'react';
import styled from 'styled-components'

// language=LESS prefix=*{ suffix=}
const Style = styled.div`
    border-top: 2.4px solid black;
    border-bottom: 2.4px solid black;
    padding: 2rem 0;

    .logo {
      width: 38rem;
    }`


function Logo({}: {}) {
    return (
        <Style>
            <img className="logo" src="/LOGO/LOGO PNG/MGP NOIR-min.png" alt=""/>
        </Style>
    );
}

export default Logo;

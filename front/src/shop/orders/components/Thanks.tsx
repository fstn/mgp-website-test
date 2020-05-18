import React from 'react';
import styled from 'styled-components'
import {FloatingBox} from "../../../components/FloatingBox";

// @ts-ignore
const Style = styled(FloatingBox).withConfig({displayName: "Thanks"})
// language=LESS prefix=*{ suffix=}
        `
    justify-content: normal;
`


function Thanks({order}: { order?: any }) {

    return (
        <Style>
            <h2>Merci d’avoir<br/> commandé un pack<br/> de masques MGP.</h2>
            <hr/>
            <br/>
            En attendant vous pouvez :<br/>
            Nous contacter si vous avez des questions : <a
            href="mailto:support@mgpmasks.com">support@mgpmasks.com</a><br/>
            Parler de nous et partager ce bon plan.<br/>
        </Style>
    );
}

export default Thanks;

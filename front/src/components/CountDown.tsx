import React from 'react';
import styled from 'styled-components'
import AntdCountDown from 'ant-design-pro/lib/CountDown'
import moment from 'moment'
import {FloatingBox} from "./FloatingBox";

// language=LESS prefix=*{ suffix=}
// language=LESS prefix=*{ suffix=}
const Style = styled(FloatingBox)`

display: block;
min-width: 240px;

.countdown {
  text-align: center;

  span span {
    font-size: 26px;
    letter-spacing: 3px;
    text-align: center;
  }
}
`

function CountDown({createdAt}: { createdAt?: Date }) {

    const targetTime = moment(createdAt).add(1, 'day').toDate()
    return (
        <Style>
            <h2>Temps restant: </h2>
            <hr/>
            <div className="countdown-content">
                <div className="countdown">
                    <AntdCountDown target={targetTime}/>
                </div>
            </div>
            <small>
                Si dans 24h aucun utilisateur n'a rejoint votre groupe,votre commande sera anulée et vous pourrez
                rejoindre un autre groupe
            </small>
        </Style>
    );
}

export default CountDown;

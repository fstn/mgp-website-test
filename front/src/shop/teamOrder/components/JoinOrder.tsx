import React, {useState} from 'react';
import styled from 'styled-components'
import Pin from "../../../components/Pin";
import {useHistory} from "react-router";
import {FloatingBox} from "../../../components/FloatingBox";
import {buyRoutes} from "../../../routes/buy";

// language=LESS prefix=*{ suffix=}
const Style = styled(FloatingBox)`

    min-width: 284px;

    label {
      font-size: 18px;
      font-weight: 500;
    }

    small {
      font-style: italic;
      font-size: 11px;
      font-weight: 500;
    }

`

function JoinOrder({teamOrder}: {
    teamOrder?: any,

}) {

    const [unlocked, setUnlocked] = useState()
    const history = useHistory()


    const setReferralTeamOrderAndRedirect = (_teamOrder: any) => {
        history.replace(`${buyRoutes.teamOrderBuy
            .replace(":teamOrderId", _teamOrder.id)
            .replace(":saleId", _teamOrder.sale.id)
            .replace(":productId", "1")}`)
    }

    return (
        <Style>
            <h2>Félicitations<br/> vous allez rejoindre<br/> une commande<br/> et bénéficier<br/> d’un tarif
                avantageux.</h2>
            <br/>
            <hr/>
            <br/>
            <label>code :</label>
            {<Pin validated={unlocked}
                  setTeamOrder={setReferralTeamOrderAndRedirect}
                  setValidated={setUnlocked}/>
            }
            <hr style={{marginTop: "-2px",}}/>
            <div style={{marginLeft: "1em", marginTop: "2.5em",}}>
                <small>Vous n'avez pas de code ?</small><br/>
                <small>Créez votre <a href={`${process.env.REACT_APP_HOST}/buy`}>Commande</a></small>
            </div>
            <footer>REJOINDRE</footer>
        </Style>
    );
}

export default JoinOrder;

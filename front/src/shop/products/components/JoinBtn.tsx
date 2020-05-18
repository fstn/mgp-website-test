import React from 'react';
import styled from 'styled-components'
import {useHistory} from "react-router-dom";
import {teamOrderRoutes} from "../../../routes/teamOrder";


// language=LESS prefix=*{ suffix=}
const Style = styled.div`

    .product__header-purchase {
      border: none;
      font-size: 1.6rem;
      color: white;
      font-weight: bold;
      min-width: 100%;
      background: black;
      height: 4.5rem;
    }

    @media (max-width: 768px) {

      display: block;
      width: 100%;

      .product__header-purchase {
        margin-right: 1rem;
        margin-top: 2rem;
      }
    }
`


function JoinBtn({}: {}) {
    const history = useHistory()
    return (
        <Style>
            <button className="product__header-purchase u-white-background u-black-font"
                    onClick={() => {
                        history.push(teamOrderRoutes.join.replace(":saleId", "1").replace(":productId", "1").replace(":teamOrderId", "*")
                        )
                    }}>REJOINDRE UNE COMMANDE
            </button>
        </Style>
    );
}

export default JoinBtn;

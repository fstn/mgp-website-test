import React, {useCallback, useContext, useEffect, useState} from 'react';
import styled from 'styled-components'
import {AppContext} from "../../../AppContextProvider";
import queryString from 'query-string'

import {useParams} from "react-router";
import Pricing from "../../products/components/Pricing";
import CountDown from '../../../components/CountDown';
import Share from "./Share";
import Loading from "../../../components/Loading";

// @ts-ignore
const Style = styled.div.withConfig({displayName: "ShareSection"})
// language=LESS prefix=*{ suffix=}
`

    overflow: hidden;

    .share-grid-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      gap: 1em;
      grid-template-areas: "."
    }

    @media (min-width: 900px) {
      .share-grid-container {
        display: grid;    
        grid-template-columns: 284px 284px;
        grid-template-rows: 1fr;
        justify-content: space-evenly;
        gap: 1em 1em;
        grid-template-areas: ". ."
      }
    }
    

`

function ShareSection({teamOrder}:{teamOrder?:any}) {
    const [context] = useContext<any>(AppContext);
    const [order, setOrder] = useState<any>()

    let {orderId} = useParams()

    const query = queryString.parse(window.location.search);
    const sessionId = query.session_id


    const loadOrder = useCallback(async () => {
        let order: any;
        if (sessionId) {
            order = (await context.axios.get(`/public/orders/by-session-id/${sessionId}`))?.data
        } else {
            order = (await context.axios.get(`/orders/${orderId}`))?.data
        }
        setOrder(order)
    }, [setOrder, context.axios, orderId, sessionId])

    useEffect(() => {
        if (!order && orderId) {
            loadOrder().then((r: any) => {
            })
        }
    }, [order, loadOrder])

    if(!teamOrder){
        return <Loading></Loading>
    }

    return (
        <Style>
            <div
                className={"share-section-content share-grid-container"}
                style={{minHeight: "350px",}}>
                <Pricing productColor={teamOrder.orders[0].items[0].productColor} discounts={teamOrder.sale.discounts}/>
                <Share teamOrder={teamOrder}/>
            </div>
        </Style>
    );
}

export default ShareSection;

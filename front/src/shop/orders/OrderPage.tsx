import React, {useCallback, useContext, useEffect, useState} from 'react';
import styled from 'styled-components'
import './OrderPage.css'
import {Route, Switch, useHistory, useParams} from "react-router-dom";
import {AppContext} from "../../AppContextProvider";
import {Modal} from "antd";
import {useSafeCall} from "../../utils/call";
import {useWindowSize} from "../../lib/utils";
import SelectProductOption from "../buy/components/SelectProductOption";
import {orderRoutes} from "../../routes/order";
import CongratulationsSection from "./components/CongratulationsSection";
import Logo from "../../components/Logo";
import Loading from "../../components/Loading";

// @ts-ignore
const Style = styled.div.withConfig({displayName: "OrderPage"})
// language=LESS prefix=*{ suffix=}
        `
    width: 100%;
    min-height: 100%;
`

function OrderPage() {
    const [teamOrder, setTeamOrder] = useState<any>()
    const [product, setProduct] = useState<any>()
    const [order, setOrder] = useState<any>()
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState<boolean>(true)
    const [context, setContext] = useContext<any>(AppContext)

    const history = useHistory()
    const size = useWindowSize()

    const {teamOrderId, orderId} = useParams()

    const loadOrder = useCallback(async () => {
            const _order = (await context.axios.get(`/public/orders/by-id/${orderId}`))?.data
            // const _order = (await context.axios.get(`orders/${orderId}?sessionId=${sessionId}`)).data
            setOrder(_order)
        }, [context, orderId, setOrder]
    )

    const [loadProductLoading, loadProduct] = useSafeCall(useCallback(async () => {
        const product = (await context.axios.get(`/public/products/1`))?.data
        setProduct(product)
        setContext({...context, product})
    }, [setProduct, context, setContext]))

    const [loadTeamOrderLoading, loadTeamOrder] = useSafeCall(useCallback(async () => {
        const _teamOrder = (await context.axios.get(`public/team-orders/${teamOrderId}`))?.data
        if (!_teamOrder) {
            return
        }
        setContext({...context, teamOrder: _teamOrder})
        setTeamOrder(_teamOrder)
        setVisible(true)
    }, [setContext, context, teamOrderId, setVisible]))


    useEffect(() => {
        if (!product) {
            loadProduct().then((r: any) => {
            })
        }
    }, [product, loadProduct])

    useEffect(() => {
        if (!order && !!orderId) {
            loadOrder().then((r: any) => {
            })
        }
    }, [order, orderId, loadOrder])

    useEffect(() => {
        if (!teamOrder && !!teamOrderId && teamOrderId !== "*") {
            loadTeamOrder().then((r: any) => {
            })
        }
    }, [teamOrder, teamOrderId, loadTeamOrder])


    useEffect(() => {
        setLoading(loadProductLoading || loadTeamOrderLoading)
    }, [loadProductLoading, loadTeamOrderLoading, setLoading])

    if (loading) {
        return (
            <Loading/>
        )
    }

    // @ts-ignore
    return (
        <Style>
            <main className={visible ? "blur-5" : ""}>
                <div className="wrapper">
                    <div className={"u-container"}>
                        <Logo/>
                        <Switch>
                            <Route path={Object.values(orderRoutes)}>
                                <SelectProductOption order={order} sale={order?.sale} product={product} disabled={false}
                                                     teamOrder={teamOrder}/>
                            </Route>
                        </Switch>
                    </div>
                    <Modal visible={visible} width={"100%"} className={"full-width"}
                           onCancel={() => {
                               setVisible(false)
                               setTeamOrder(undefined)
                               history.push('/')
                           }} maskClosable={true}>
                        <Switch>
                            <Route path={orderRoutes.congratulations}>
                                <CongratulationsSection order={order}/>
                            </Route>
                        </Switch>
                    </Modal>
                </div>
            </main>
        </Style>
    );
}

export default OrderPage;

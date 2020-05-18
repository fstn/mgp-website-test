import React, {useCallback, useContext, useEffect, useState} from 'react';
import styled from 'styled-components'
import './TeamOrderPage.css'
import {Route, Switch, useHistory, useParams} from "react-router-dom";
import {AppContext} from "../../AppContextProvider";
import {Modal} from "antd";
import {useSafeCall} from "../../utils/call";
import JoinOrderSection from "../teamOrder/components/JoinOrderSection";
import ShareSection from "../teamOrder/components/ShareSection";
import {useWindowSize} from "../../lib/utils";
import SelectProductOption from "../buy/components/SelectProductOption";
import {teamOrderRoutes} from "../../routes/teamOrder";
import Logo from "../../components/Logo";
import Loading from "../../components/Loading";

// @ts-ignore
const Style = styled.div.withConfig({displayName: "TeamOrderPage"})
// language=LESS prefix=*{ suffix=}
        `
    width: 100%;
    min-height: 100%;
`

function TeamOrderPage() {
    const [teamOrder, setTeamOrder] = useState<any>()
    const [product, setProduct] = useState<any>()
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState<boolean>(true)
    const [context, setContext] = useContext<any>(AppContext)

    const history = useHistory()
    const size = useWindowSize()

    const {teamOrderId, productId} = useParams()

    const [loadProductLoading, loadProduct] = useSafeCall(useCallback(async () => {
        const product = (await context.axios.get(`/public/products/${productId}`))?.data
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
        if (!product && !!productId) {
            loadProduct().then((r: any) => {
            })
        }
    }, [product, productId, loadProduct])

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
                        <div className="">
                            <Logo/>
                            <Switch>
                                <Route path="/">
                                    <SelectProductOption product={product} disabled={false} teamOrder={teamOrder}/>
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
                                <Route path={teamOrderRoutes.join}>
                                    <JoinOrderSection teamOrder={teamOrder}/>
                                </Route>
                                <Route path={teamOrderRoutes.share}>
                                    <ShareSection teamOrder={teamOrder}/>
                                </Route>
                            </Switch>
                        </Modal>
                    </div>
                </div>
            </main>
        </Style>
    );
}

export default TeamOrderPage;

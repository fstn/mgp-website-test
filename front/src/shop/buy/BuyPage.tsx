import React, {useCallback, useContext, useEffect, useState} from 'react';
import styled from 'styled-components'
import './BuyPage.css'
import {Route, Switch, useHistory, useParams} from "react-router-dom";
import {AppContext} from "../../AppContextProvider";
import {useSafeCall} from "../../utils/call";
import SelectProductOptionSection from "./components/SelectProductOptionSection";
import {useWindowSize} from "../../lib/utils";
import Loading from "../../components/Loading";
import Logo from "../../components/Logo";
import {buyRoutes} from "../../routes/buy";

// @ts-ignore
const Style = styled.div.withConfig({displayName: "BuyPage"})
// language=LESS prefix=*{ suffix=}
        `
    width: 100%;
    min-height: 100%;
`

function BuyPage() {
    const [teamOrder, setTeamOrder] = useState()
    const [product, setProduct] = useState()
    const [sale, setSale] = useState()
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [context, setContext] = useContext<any>(AppContext)

    const size = useWindowSize()

    const {teamOrderId, productId, saleId} = useParams()

    const [loadProductLoading, loadProduct] = useSafeCall(useCallback(async () => {
        const product = (await context.axios.get(`/public/products/${productId || 1}`))?.data
        setProduct(product)
        setContext({...context, product})
    }, [setProduct, context, setContext]))

    const [loadSaleLoading, loadSale] = useSafeCall(useCallback(async () => {
        const sale = (await context.axios.get(`/public/sales/${saleId || 1}`))?.data
        setSale(sale)
        setContext({...context, sale})
    }, [setSale, context, setContext]))

    const [loadTeamOrderLoading, loadTeamOrder] = useSafeCall(useCallback(async () => {
        const _teamOrder = (await context.axios.get(`public/team-orders/${teamOrderId}`))?.data
        if (!_teamOrder) {
            return
        }
        setContext({...context, teamOrder: _teamOrder})
        setTeamOrder(_teamOrder)
    }, [setContext, context, teamOrderId]))


    useEffect(() => {
        if (!sale && !!saleId) {
            loadSale().then((r: any) => {
            })
        }
    }, [sale, saleId, loadSale])

    useEffect(() => {
        if (!product && !!productId) {
            loadProduct().then((r: any) => {
            })
        }
    }, [product, productId, loadProduct])

    useEffect(() => {
        if (!teamOrder && !!teamOrderId) {
            loadTeamOrder().then((r: any) => {
            })
        }
    }, [teamOrder, teamOrderId, loadTeamOrder])


    useEffect(() => {
        setLoading(loadProductLoading || loadTeamOrderLoading || loadSaleLoading)
    }, [loadProductLoading, loadTeamOrderLoading, loadSaleLoading, setLoading])

    if (loading) {
        return (
            <Loading/>
        )
    }

    // @ts-ignore
    return (
        <Style>
            <main>
                <div className="wrapper" style={{minHeight: "auto"}}>
                    <div className="u-container">
                        <Logo/>
                        <Switch>
                            <Route path={Object.values(buyRoutes)}>
                                <SelectProductOptionSection sale={sale} product={product} teamOrder={teamOrder}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </main>
        </Style>
    );
}

export default BuyPage;

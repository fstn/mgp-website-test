import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import styled from 'styled-components'
import {CookiesProvider} from 'react-cookie';
import Footer from "./components/Footer";
import TeamOrderStatsPage from "./shop/stats/TeamOrderStatsPage";
import BuyPage from "./shop/buy/BuyPage";
import TeamOrderPage from "./shop/teamOrder/TeamOrderPage";
import {teamOrderRoutes} from "./routes/teamOrder";
import {orderRoutes} from "./routes/order";
import OrderPage from "./shop/orders/OrderPage";
import {buyRoutes} from "./routes/buy";
import {statsRoutes} from "./routes/stats";
import ProductPage from "./shop/products/ProductPage";
import {productRoutes} from "./routes/product";

// language=LESS prefix=*{ suffix=}
// language=LESS prefix=*{ suffix=}
const Style = styled.div`

height: 100%;
`;

function App() {
    return (
        <CookiesProvider>
            <Style>
                <Router>
                    <div className="App mgp">
                        <>
                            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                            <Switch>
                                <Route path={Object.values(teamOrderRoutes)}>
                                    <TeamOrderPage/>
                                </Route>
                                <Route path={Object.values(orderRoutes)}>
                                    <OrderPage/>
                                </Route>
                                <Route path={Object.values(statsRoutes)}>
                                    <TeamOrderStatsPage/>
                                </Route>
                                <Route path={Object.values(buyRoutes)}>
                                    <BuyPage/>
                                </Route>
                                <Route path={Object.values(productRoutes)}>
                                    <ProductPage/>
                                </Route>
                                <Route>
                                    <Redirect to={productRoutes.details.replace(":productId","1")} />
                                </Route>
                            </Switch>
                        </>
                    </div>
                </Router>
                <Footer/>
            </Style>
        </CookiesProvider>
    );
}

export default App;

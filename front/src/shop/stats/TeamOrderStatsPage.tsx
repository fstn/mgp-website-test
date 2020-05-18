import React, {useCallback, useContext, useEffect, useState} from 'react';
import styled from 'styled-components'
import {AppContext} from "../../AppContextProvider";
import {MiniArea, WaterWave} from "ant-design-pro/lib/Charts";
import {useSafeCall} from "../../utils/call";
import {useParams} from "react-router";
import {FloatingBox} from "../../components/FloatingBox";

import 'ant-design-pro/dist/ant-design-pro.css';
import CountDown from "../../components/CountDown";
import Pricing from "../products/components/Pricing";
import Reveal from "react-reveal/Reveal";
import Logo from "../../components/Logo";
import Loading from "../../components/Loading";


// @ts-ignore
const Style = styled.div.withConfig({displayName: "StatPage"})
// language=LESS prefix=*{ suffix=}
        `

    width: 100%;
    min-height: 100%;

    .stats {
    }

    .stats-container {
      margin-top: 4em;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 1em 1em;
      grid-template-areas: ". . ." ". . .";
    }

`

function useWindowSize() {
    const isClient = typeof window === 'object';

    const getSize = useCallback(() => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }, [isClient])

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect((): any => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [getSize, isClient]); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}

function TeamOrderStatsPage({}: {}) {
    const [context] = useContext<any>(AppContext);
    const [statsByMinutes, setStatsByMinutes] = useState<any[]>()
    const [stats, setStats] = useState<any>()
    const size = useWindowSize()

    const {teamOrderId} = useParams()

    // noinspection JSUnusedLocalSymbols
    const [loadStatsLoading, loadStats] = useSafeCall(
        useCallback(
            async () => {
                const _teamOrderStatsByMinutes = (await context.axios.get(`public/stats/team-orders/by-minutes/${teamOrderId}`))?.data
                setStatsByMinutes(_teamOrderStatsByMinutes)
                const _teamOrderStats = (await context.axios.get(`public/stats/team-orders/${teamOrderId}`))?.data
                setStats(_teamOrderStats)
            }, [setStatsByMinutes, setStats, teamOrderId, context.axios]
        )
    )

    useEffect(() => {
        if (!statsByMinutes || !stats) {
            loadStats().then((r: any) => {
            })
        }
    }, [statsByMinutes, stats, loadStats])


    if (!statsByMinutes || !stats) {
       return  <Loading/>
    }
    //
    return (
        <Style>
            <main>
                <Logo/>
                <div className="product">
                    <Reveal effect="fadeIn" duration={1500} delay={300}>
                        <img className="product__header-background" src="/IMAGES/VISUEL 6 copie-min.jpg"
                             style={{height: size.height, transition: "height 2s"}} alt=""/>
                    </Reveal>

                    <div className="product__header">
                        <div className="wrapper">
                            <div className="u-container">
                                <Logo/>
                                <div className="stats-container">
                                    {/*<Reveal effect="fadeInLeft" duration={500} delay={500}>*/}
                                    {/*    <Share className="max-full-width" teamOrder={stats}/>*/}
                                    {/*</Reveal>*/}
                                    <Reveal effect="fadeInLeft" duration={500} delay={0}>
                                        <FloatingBox className="max-full-width">
                                            <CountDown createdAt={stats.createdAt}/>
                                        </FloatingBox>
                                    </Reveal>
                                    <Reveal effect="fadeInLeft" duration={500} delay={1000}>
                                        <FloatingBox className="max-full-width">
                                            Nombre de commande: {stats.nbOfFriends}
                                            <MiniArea line color="black" height={200}
                                                      data={statsByMinutes.map<any>((s: any) => {
                                                          return {
                                                              x: s.createdAt,
                                                              y: s.nbOfFriends
                                                          }
                                                      })}/>

                                        </FloatingBox>
                                    </Reveal>
                                    <Reveal effect="fadeInLeft" duration={500} delay={500}>
                                        <FloatingBox className="max-full-width">
                                            Nombre de masque: {stats?.quantity}
                                            <MiniArea line color="black" height={200}
                                                      data={statsByMinutes.map<any>((s: any) => {
                                                          return {
                                                              x: s.createdAt,
                                                              y: s.quantity
                                                          }
                                                      })}/>

                                        </FloatingBox>
                                    </Reveal>
                                    <Reveal effect="fadeInLeft" duration={500} delay={0}>
                                        <FloatingBox className="flex flex-center max-full-width">
                                            <WaterWave height={161} color={"black"} title="Objectif"
                                                       percent={Math.round(stats.nbOfFriends / stats?.minQuantity * 100)}/>
                                        </FloatingBox>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Style>
    );
}

export default TeamOrderStatsPage;

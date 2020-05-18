import React, {useCallback, useContext, useEffect, useState} from 'react';
import styled from 'styled-components'
import {AppContext} from "../../../AppContextProvider";
import {get} from "lodash";
import {Button, Form, InputNumber, notification, Radio} from "antd";
import {useSafeCall} from "../../../utils/call";
import * as stripeService from "../../../utils/stripe";
import CurrencyFormat from 'react-currency-format';
import {FloatingBox} from "../../../components/FloatingBox";
import Reveal from "react-reveal/Reveal";
// @ts-ignore
import Loading from "../../../components/Loading";
import {useForm} from "antd/es/form/util";
import {scrollToBottom} from '../../../lib/utils';
import "./SelectProductOption.css"
// @ts-ignore
import Slider from "../../../components/Slider";

// @ts-ignore
const Style = styled(FloatingBox).withConfig({displayName: "SelectProductOption"})
// language=LESS prefix=*{ suffix=}
    `
    min-height: 200px;
    margin-top: 50px;
    padding: 0;

    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    gap: 1em 3em;
    align-items: center;
    
    background-color: ${(props: any) => props.color || "#FFFFFF"};
    
    
    .product-text {
      flex: 1 0;
    }
    
    .product-text h2 {
      font-weight: bold;
    }
    
    .ant-row.ant-form-item{
      height: fit-content;
    }
`

const stripe = window.Stripe("pk_test_iCfKjhl8zQ5Ys48Yvb0cPzwd00NEXTx4YG")

function SelectProductOption({sale, product, order, teamOrder, disabled:_disabled, color}: { sale?: any, product?: any, order?: any, teamOrder?: any, disabled?: boolean, color?: any }) {
    const [context] = useContext<any>(AppContext);
    const colorRef: any = React.useRef()
    const quantityRef: any = React.useRef()
    const modeRef: any = React.useRef()
    const payRef: any = React.useRef()
    const [form] = useForm()

    const [disabled,setDisabled] = useState(_disabled)
    const [pictures, setPictures] = useState([])

    // @ts-ignore
    const [quantity, setQuantity] = useState<any>(0)
    const setBeforeQuantity = useCallback(
        (newValue?: number) => {
            if (newValue !== quantity) {
                scrollToBottom(modeRef)
                form.setFieldsValue({...form.getFieldsValue(), immediate: defaultImmediate})
                setImmediate(defaultImmediate)
            }
            form.setFieldsValue({...form.getFieldsValue(), quantity: newValue})
            setQuantity(newValue)
        }, [setQuantity, quantity])

    // @ts-ignore
    const defaultImmediate = teamOrder ? false : undefined
    const [immediate, setImmediate] = useState(defaultImmediate)
    const setBeforeImmediate = useCallback(
        (newValue?: boolean) => {
            if (newValue !== immediate) {
                scrollToBottom(payRef)
            }
            setImmediate(newValue)
        }, [setImmediate, immediate])

    const [selectedColor, setSelectedColor] = useState<any>()
    const setBeforeSelectedColor = useCallback((newValue?: any) => {
        if (newValue?.id !== selectedColor?.id) {
            scrollToBottom(quantityRef)
            setQuantity(0)
            form.setFieldsValue({...form.getFieldsValue(), immediate: defaultImmediate, quantity: 0})
            setImmediate(defaultImmediate)
        }
        form.setFieldsValue({...form.getFieldsValue(), color: newValue})
        setSelectedColor(newValue)
    }, [setSelectedColor, selectedColor])

    const [selectedOption, setSelectedOption] = useState<any>()
    const setBeforeSelectedOption = useCallback((newValue?: any) => {
        if (newValue?.id !== selectedOption?.id) {
            scrollToBottom(colorRef)
            setSelectedColor(undefined)
            setQuantity(0)
            form.setFieldsValue({...form.getFieldsValue(), immediate: defaultImmediate, quantity: 0, color: undefined})
            setImmediate(defaultImmediate)
        }
        form.setFieldsValue({...form.getFieldsValue(), option: newValue})
        setSelectedOption(newValue)
    }, [setSelectedOption, selectedOption])


    const [loading, setLoading] = useState<boolean>(false)

    const [loadingCheckout, checkout] = useSafeCall(useCallback(async () => {
        // @ts-ignorequantity
        if (!selectedOption || !selectedColor) {
            notification["error"]({
                message: "Please select an option before",
                description: "",
                onClose: () => {
                }
            },)
            return
        }
        if (immediate) {
            let mode: any = (await stripeService.checkoutImmediate(sale?.id, selectedColor?.id, quantity, context.axios))?.data
            if (mode.mode === 'checkout') {
                await stripe.redirectToCheckout({
                    sessionId: mode.session.id
                })
            }
        } else {
            let mode: any = (await stripeService.checkoutFuture(sale?.id, selectedColor?.id, quantity, teamOrder, context.axios))?.data
            if (mode.mode === 'checkout') {
                await stripe.redirectToCheckout({
                    sessionId: mode.session.id
                })
            }
        }
    }, [immediate, selectedColor, sale, quantity, context.axios]))

    useEffect(() => {
        setLoading(loadingCheckout)
        setDisabled(loadingCheckout)
    }, [setLoading, loadingCheckout])

    useEffect(() => {
        const _pictures = selectedColor?.pictures || selectedOption?.pictures || product?.options[0]?.pictures || []
        // @ts-ignore
        setPictures(_pictures)
    }, [product, selectedOption, selectedColor, selectedOption, setPictures])

    if (!product) {
        return (<Loading/>)
    }

    const effect = {
        bottom:true,
        duration:500,
        collapse:true
    }

    // @ts-ignore
    return (
        <Style color={color}>
            <div className="product-image hidden-smartphone">
                <Slider pictures={pictures}/>
            </div>
            <div className="product-container">
                <div className="product-text">
                    {order && <h2>Votre<br/> commande<br/> en cours.</h2>}
                    {/*<div className="name">{selectedOption.name}</div>*/}
                    <Form>
                        <Form.Item label={"Choisissez vos masques MGP"} labelCol={{span: 24}}>
                            <div className={"option-selector"}
                                 style={{display: "flex"}}>
                                <Radio.Group disabled={disabled} defaultValue={selectedOption}
                                             onChange={(e) => {
                                                 setBeforeSelectedOption(e.target.value)
                                             }}>
                                    {product?.options && product!.options.map((o: any) => (
                                        <span
                                            key={o.id}>{
                                        <Radio.Button key={o.id} className={"option-selector-btn"}
                                                      value={o}>
                                          <div className={"option-selector-btn-container"}>
                                            <span>{o.name}</span>
                                            <small>{o.description}</small>
                                          </div>
                                        </Radio.Button>
                                        }</span>
                                    ))}
                                </Radio.Group>
                            </div>
                        </Form.Item>

                        <Reveal when={selectedOption !== undefined} >
                            <Form.Item label={"Couleur"} labelCol={{span: 24}} style={{height:"fit-content"}}>
                                <div className={"color-selector"}>
                                    <Radio.Group disabled={disabled || !selectedOption}
                                                 defaultValue={selectedOption}
                                                 onChange={(e) => {
                                                     setBeforeSelectedColor(e.target.value)
                                                 }}>
                                        {get(product, 'options') && selectedOption?.colors.map((c: any) => (
                                            <span
                                                key={c.id}>
                                            <Radio.Button className={"color-selector-btn"}
                                                          value={c}>
                                                {!c.color && <img alt={"button"} src={c.pictures[0]}/>
                                                }
                                                {c.color &&
                                                <div
                                                  className={"flex flex-center flex-column color-selector-btn__color-container"}>
                                                      <span className={"round-color"}
                                                            style={{backgroundColor: c.color}}/>
                                                  <small>{c.name}</small>
                                                </div>
                                                }
                                            </Radio.Button>

                                            </span>
                                        ))}
                                    </Radio.Group>
                                </div>
                            </Form.Item>
                        </Reveal>
                        <div ref={colorRef}/>
                        <Reveal {...effect} when={selectedColor !== undefined}>
                            <Form.Item label="Quantité" labelCol={{span: 24}}>
                                <div className={"quantity-selector"}>
                                    <Radio.Group disabled={disabled || !selectedColor}
                                                 defaultValue={selectedColor}
                                                 value={selectedColor}
                                                 style={{display: "contents"}}
                                                 onChange={(e) => {
                                                     setBeforeQuantity(e.target.value)
                                                 }}>
                                        <Radio.Button className={"quantity-selector-btn"} value={1}>1</Radio.Button>
                                        <Radio.Button className={"quantity-selector-btn"} value={2}>2</Radio.Button>
                                        <Radio.Button className={"quantity-selector-btn"} value={3}>3</Radio.Button>
                                    </Radio.Group>
                                    <InputNumber disabled={!selectedColor || disabled}
                                                 defaultValue={order?.items[0]?.quantity || 1}
                                                 value={quantity}
                                                 className={quantity > 0 ? "ant-radio-button-wrapper-checked" : ""}
                                                 onChange={setBeforeQuantity}/>
                                </div>
                            </Form.Item>
                        </Reveal>
                        <div ref={quantityRef}/>
                        <Reveal {...effect} when={quantity > 0}>
                            <Form.Item label="Mode" name="immediate" labelCol={{span: 24}}>
                                <div className={"immediate-selector"}>
                                    <Radio.Group disabled={disabled} defaultValue={immediate}
                                                 onChange={(e) => {
                                                     setBeforeImmediate(e.target.value)
                                                 }}>
                                        {!teamOrder && <Radio.Button value={true} disabled={!!teamOrder}>
                                          <div className={"immediate-selector-btn-container"}>
                                            <span>Commande simple</span>
                                            <small className={"full-width right"}>
                                              <CurrencyFormat displayType={"text"} fixedDecimalScale={true}
                                                              decimalScale={2}
                                                              value={(selectedColor?.price || 0) * quantity / 100}
                                                              suffix={"€"}/>
                                            </small>
                                          </div>
                                        </Radio.Button>
                                        }
                                        <Radio.Button value={false}>
                                            <div className={"immediate-selector-btn-container"}>
                                                <span>Commande groupée</span>
                                                <small>
                                                    {/*<CurrencyFormat displayType={"text"} fixedDecimalScale={true}*/}
                                                    {/*                decimalScale={2}*/}
                                                    {/*                value={(selectedColor?.price || 0) * 0.8 * quantity / 100}*/}
                                                    {/*                suffix={"€"}/>*/}
                                                    <div>Jusqu'à <CurrencyFormat
                                                        displayType={"text"} fixedDecimalScale={true} decimalScale={2}
                                                        value={(selectedColor?.price || 0) * 0.5 * quantity / 100}
                                                        suffix={"€"}/>
                                                    </div>
                                                </small>
                                            </div>
                                        </Radio.Button>
                                    </Radio.Group>
                                </div>
                            </Form.Item>
                        </Reveal>
                        <div ref={modeRef}/>
                        <br/>
                        <Reveal {...effect} when={immediate !== undefined && quantity > 0}>
                            <div className="buy-btn-container">
                                <div className={"flex flex-center margin-t-1 full-width"}>
                                    <Button loading={loading} type={"link"} className={"pay-btn btn-black full-width"}
                                            disabled={disabled}
                                            onClick={checkout}>
                                        <span style={{marginRight: "5px"}}>{"Payer "}</span>
                                        <CurrencyFormat displayType={"text"} fixedDecimalScale={true} decimalScale={2}
                                                        value={((immediate) ? 1 : 0.8) * ((selectedColor?.price || 0) * quantity) / 100}
                                                        preffix={" "}
                                                        suffix={"€"}/>
                                    </Button>
                                </div>
                            </div>
                        </Reveal>
                        <div ref={payRef}/>
                    </Form>
                </div>
            </div>
        </Style>
    )
        ;
}

export default SelectProductOption;

import React, {useCallback, useState} from 'react';
import styled from 'styled-components'
import {Button} from "antd";
import {LeftOutlined, RightOutlined} from '@ant-design/icons'

// @ts-ignore
const Style = styled.div.withConfig({displayName: "Slider"})
// language=LESS prefix=*{ suffix=}
        `
    display: grid;
    grid-template-columns: 30px 1fr 30px;
    column-gap: 1em;
    align-items: center;
    height: min-content;
`


function Slider({pictures}: { pictures: string[] }) {
    const [current, setCurrent] = useState(1)
    const setSafeCurrent = useCallback((value: number) => {
        if (value < 0) {
            value = pictures.length - 1;
        }
        if (value > pictures.length - 1) {
            value = 0;
        }
        setCurrent(value)
    }, [setCurrent, pictures])
    return (
        <Style>
            <Button shape="circle" onClick={() => setSafeCurrent(current - 1)}><LeftOutlined/></Button>
            {pictures.map((p, i) => {
                return (current === i) ? <img key={i} src={p}/> : <></>
            })}
            <Button shape="circle" onClick={() => setSafeCurrent(current + 1)}><RightOutlined/></Button>
        </Style>
    );
}


export default Slider;

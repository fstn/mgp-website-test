import React, {useContext} from 'react';
import styled from 'styled-components'

const Style = styled.div`
        width: 100%;
        min-height: 300px;
        position: relative;
        position: relative;
        text-align: left;
      .content{
        padding-left: 3em;
        padding-right: 3em;
        padding-top: 3em;
        padding-bottom: 3em;
      }
      .background-image{   
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        display: block;
        z-index: -1;
        transform: translateZ(0px);
      }
  .full{
    margin: auto;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: space-around;   
    
  }
  
  .product-selector{  
        display: flex;
        flex-wrap: wrap;
      .product-selector-btn{
        cursor: pointer;
        margin-right: 1em;
        margin-bottom: 1em;
        padding: 0;
        width: fit-content;
        height: fit-content;
        img{
          width: 100px;
        }
      }
      .product-selector-btn :hover{
        transform: scale(1.1);
      }
  }
   
  .left{
      transform-origin: 0;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        align-self: center;
  }
`


export default SectionContainer;

function SectionContainer({black, background, backgroundImage, left, full, ref}:
                              { black: boolean, background?: any, backgroundImage?: string, left?: any, full?: any, ref?: any }) {

    const bgColor = black ? "black" : ""
    const color = black ? "white" : ""
    return (
        <Style  className={`${bgColor}`}>
            <div className={`background-image`} style={{
                backgroundColor: bgColor,
                color: color,
                backgroundImage: `url("/img/small/${backgroundImage}")`
            }}/>
            <div className="content" ref={ref}>
                {background} {left && <div className={"left"}>{left}</div>}

                {full && <div className={"full"}>{full}</div>}
            </div>
        </Style>
    );
}

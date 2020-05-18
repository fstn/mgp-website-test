import styled from "styled-components";

// language=LESS prefix=*{ suffix=}
export const FloatingBox = styled.div`

    background: white;
    color: black;
    font-weight: bold;
    padding: 2em;
    padding-top: 2em;
    padding-bottom: 60px;
    flex-wrap: wrap;
    flex: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    min-height: 470px;

    @media (min-width: 1200px) {
      padding: 4em;
    }
    @media (max-width: 768px) {
      flex: 1 1 !important;
      padding: 4em;
      width: 100% !important;
      margin-right: 0 !important;
      margin-bottom: 1em !important;
      min-height: min-content;
    }

    h1 {
      font-size: 26px;
      line-height: 1.2;
    }

    h2 {
      color: black;
      font-size: 20px;
      line-height: 1.15;
      height: 140px;
    }

    small {
      font-weight: lighter;
    }

    label {
      font-size: 18px;
      font-weight: 500;
    }

    footer {
      background: black;
      color: white;
      width: 100%;
      align-content: center;
      align-self: center;
      text-align: center;
      position: absolute;
      bottom: 0px;
      left: 0;
      height: 50px;
      line-height: 50px;
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      @media (min-width: 700px) {
      }
    }

`

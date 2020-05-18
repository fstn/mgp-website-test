import React, {useEffect} from 'react';
import styled from 'styled-components'
import {FloatingBox} from "../../../components/FloatingBox";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {notification} from "antd";
import {CopyOutlined,} from '@ant-design/icons';
import AntdCountDown from "ant-design-pro/lib/CountDown";
import moment from "moment";

// language=LESS prefix=*{ suffix=}
// language=LESS prefix=*{ suffix=}
const Style = styled(FloatingBox)`

    min-width: 270px;
    flex: 1;
    display: block;

    .code {
      border-bottom: 1px solid;
      letter-spacing: 9px;
      line-height: 25px;
      background: #f5f5f5;
      text-align: center;
      font-size: 30px;
      width: 100%;
      margin-top: 11px;
    }

`

function Share({teamOrder, className}: { teamOrder?: any, className?: string }) {

    useEffect(() => {
        setTimeout(() => {
            var addthisScript = document.createElement('script');
            addthisScript.setAttribute('src', 'http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5eac7ad9d9919b39')
            if (document.body) document.body.appendChild(addthisScript)
        }, 500)
    }, [teamOrder])

    const targetTime = moment(teamOrder?.createdAt).add(1, 'day').toDate()
    return (
        <Style className={className}>
            <h2>Pendant 24h<br/>
                vous pouvez faire<br/>
                baisser le prix de vos<br/>
                masques en invitant <br/>
                vos amis à se joindre <br/>
                à votre commande !</h2>
            <hr/>
            <div className="flex flex-center flex-gap-1">
                <label>code à partager :</label>
                <CopyToClipboard text={teamOrder?.code}
                                 onCopy={() => {
                                     notification["info"]({
                                         message: 'Le code secret est copié',
                                         description: `${teamOrder?.code}`
                                     });
                                 }}>
                    <CopyOutlined className="btn"/>
                </CopyToClipboard>
            </div>
            <div className={"code"}>{`${teamOrder?.code}`}</div>
            <br/>
            <div className="countdown-content">
                <div className="countdown">
                    <small>Temps restant: </small>
                    <AntdCountDown target={targetTime}/>
                </div>
            </div>
            <br/>
            <small>
                <p style={{lineHeight:'1.5'}}>
                    Si dans 24h aucun utilisateur n'a rejoint votre groupe,votre commande sera anulée et vous pourrez
                    rejoindre un autre groupe
                </p>
            </small>

            <footer>PARTAGER <div className="addthis_inline_share_toolbox "
                                   data-url={`${process.env.REACT_APP_HOST}/buy/${teamOrder?.id}`}
                                   data-title="Check out this URL"></div></footer>
        </Style>
    );

}

export default Share;

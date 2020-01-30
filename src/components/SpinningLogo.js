import React from 'react';
import '../styles/spin.css';

export default function SpinningLogo(props) {
    return <img src={props.partyTime ? './pitViperLogo.png' : './logo.png'} className="spin-img" alt="" />;
}
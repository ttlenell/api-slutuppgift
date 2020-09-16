import React from 'react';
import './ResultDisplay.css';

const ResultDisplay = (props) => (
    <div id="resultDisplay">
        Namn: {props.name}<br/>
        Ålder: {props.age}<br/>
        Yrke: {props.profession}<br/><hr/>
    </div>
)

export default ResultDisplay;
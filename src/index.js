import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const imageUrls = [
    "images/cards/aerith.png",
    "images/cards/barret.png",
    "images/cards/cait.png",
    "images/cards/choco.png",
    "images/cards/cid.png",
    "images/cards/cloud.png",
    "images/cards/red.png",
    "images/cards/seph.png",
    "images/cards/squall.png",
    "images/cards/tifa.png",
    "images/cards/vincent.png",
    "images/cards/yuffie.png",
];

ReactDOM.render(<App images={imageUrls}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

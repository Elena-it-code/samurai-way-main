import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {state} from "./redux/state";







ReactDOM.render(
    <App dialogs={state.dialogs} messages={state.messages} postsData={state.postsData}/>, document.getElementById('root')
);
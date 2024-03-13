import './index.css';
import {addPost, RootStateType, state, StateType, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";


let rerenderEntireTree = ()=> {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>, document.getElementById('root')
    );
}
rerenderEntireTree();

subscribe(rerenderEntireTree)

// state: { state: StateType; }
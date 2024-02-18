import React from 'react';
import './App.css';
import './components/Header/Header.module.css';
import './components/Profile/Profile.module.css';
import './components/Navbar/Navbar.module.css';

import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {MainStateType, RootStateType} from "./redux/state";
import {Friends} from "./components/Friends/Friends";


function App (props: MainStateType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} render={  () => <Dialogs state={props.state.state} />}  />
                    <Route path={'/profile'} render={  ()=> <Profile state={props.state} addPost={props.addPost}/>}  />
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/friends'} render={ ()=> <Friends state={props.state.state}/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

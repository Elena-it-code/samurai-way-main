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
import {Friends} from "./components/Friends/Friends";
import {ActionTypes, StoreType} from "./redux/store";


export type PropsType = {
    store: StoreType
    dispatch: (action: ActionTypes) => void
}

const App: React.FC<PropsType> = (props: PropsType) => {
    const state = props.store.getState()


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route
                        path={'/dialogs'} // <Route /> следит за url, если написано /dialogs, значит выпоняет код ниже, т.е. запускает функцию render={() =>}
                           render={() => <Dialogs store={props.store}
                                                  dispatch={props.dispatch}/>}/>

                    <Route path={'/profile'}
                           render={() => <Profile postsData={state.profilePage.postsData}
                                                  dispatch={props.dispatch}
                                                  newPostText={state.profilePage.newPostText}/>}/>


                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/friends'} render={() => <Friends friends={state.sidebar.friends}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;


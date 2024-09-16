import React from 'react';
import './App.css';
import './components/Header/Header.module.css';
import './components/Profile/Profile.module.css';
import './components/Navbar/Navbar.module.css';

import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {Friends} from "./components/Friends/Friends";
import {AppRootStateType} from "./redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";



export type PropsType = {

}


const App: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch();

    // здесь мы объединяем селекторы, объявленные в наших редьюсерах, чтобы получить все необходимые данные
    //const profilePage = useSelector((state: AppRootStateType) => state.profilePage);
    //const dialogsPage = useSelector((state: AppRootStateType) => state.dialogsPage);
    const sidebar = useSelector((state: AppRootStateType) => state.sidebar);


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route /> следит за url, если написано /dialogs, значит выпоняет код ниже, т.е. запускает функцию render={() =>}*/}
                    <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                    <Route path={'/profile'} render={() => <Profile />}/>
                    <Route path={'/users'} render={() => <UsersContainer />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/friends'} render={() => <Friends sidebar={sidebar} dispatch={dispatch} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;


import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {UserDataType} from "../../redux/auth-reducer";


type HeaderPropsType = {
    auth: UserDataType


    /*isAuth: boolean // либо можем только его части
    login: string | null*/
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img alt={'logo'}
                 src='https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg'/>
            <div className={classes.loginBlock}>
                {props.auth.isAuth
                    ? props.auth.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}
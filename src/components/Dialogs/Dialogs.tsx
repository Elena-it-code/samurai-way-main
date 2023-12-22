import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemTypeProps = {
    name: string
    id: string
}


const DialogItem = (props: DialogItemTypeProps) => {
    const path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageTypeProps = {
    message: string
}
const Message = (props:MessageTypeProps) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={'Dimych'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Saha'} id={'4'}/>
                <DialogItem name={'Victor'} id={'5'}/>
                <DialogItem name={'Valera'} id={'6'}/>
            </div>
            <div className={classes.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your it-kamasutra?'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    )
}
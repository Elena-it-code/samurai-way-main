import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemTypeProps = {
    name: string
    id: number
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
    id: number
}
const Message = (props: MessageTypeProps) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

export const Dialogs = (props: DialogItemTypeProps) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Saha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}

    ]

    let messages = [
        {id: 7, message: 'Hi'},
        {id: 8, message: 'How is your it-kamasutra?'},
        {id: 9, message: 'Yo'},
        {id: 10, message: 'Yo'},
        {id: 11, message: 'Yo'},
        {id: 12, message: 'Yo'}

    ]

    let dialogsElement = dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messagesElement = messages.map(el => <Dialogs name={el.message} id={el.id} key={el.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>*/}
            </div>
            <div className={classes.messages}>
                {/*{messagesElement}*/}
                {/*       <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
                <Message message={messagesData[3].message} id={messagesData[3].id}/>
                <Message message={messagesData[4].message} id={messagesData[4].id}/>
                <Message message={messagesData[5].message} id={messagesData[5].id}/>*/}
            </div>
        </div>
    )
}
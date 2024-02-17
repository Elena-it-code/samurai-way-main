import React from "react";
import classes from "./Dialogs.module.css";
import {DialogItem, } from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {RootStateType} from "../../redux/state";


export const Dialogs = (props: RootStateType) => {

   /* let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Saha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}

    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 6, message: 'Yo'},
        {id: 5, message: 'Yo'}

    ]*/
    let dialogsElement = props.state.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElement = props.state.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {/*{dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)}*/}
                {dialogsElement}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>*/}
            </div>
            <div className={classes.messages}>
                {/*{messages.map(el => <Message key={el.id} id={el.id} message={el.message}/>)}*/}
                {messagesElement}
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
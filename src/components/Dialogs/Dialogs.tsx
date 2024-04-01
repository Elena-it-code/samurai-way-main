import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem,} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

/*
* Теперь наша компонента чистая, она принимает данные, и вызывает какие-то callback(и), если вдруг у неё что-то произойдет.
Мы теперь переиспользовать её в другом месте нашего проекта
ничего не поламается, т.к. она НЕ ЗАВИСИТ теперь от каких-то данных
*/



export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElement = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    let newMessage = React.createRef<HTMLTextAreaElement>();
    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
       props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div>{messagesElement}</div>
            </div>
            <div>
                <div>
                    <textarea value={props.dialogsPage.newMessageBody}
                              onChange={onNewMessageChange}
                              ref={newMessage}
                              className={classes.textarea}
                              placeholder={'Enter your message'}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick} className={classes.sendPost}>Send</button>
                </div>
            </div>
        </div>
    )
}




































//-------------------------------------------------------------------------------------------//
/*
let state = store.getState()

    let dialogsElement = state.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElement = state.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)
    /!*let newMessageBody = state.dialogsPage.newMessageBody*!/

    let newMessage = React.createRef<HTMLTextAreaElement>();
    const onSendMessageClick = () => {
        store.dispatch(sendMessageAC())
        // Функция `onSendMessageClick` является обработчиком события, который вызывается при нажатии на кнопку отправки
        // сообщения.
        // Вызывается диспетчер (dispatch) события `sendMessageAC()` с использованием `props.dispatch(sendMessageAC())`.
        // Это вызывает отправку сообщения в приложении.
        // Внутренняя реализация/логика функции `sendMessageAC` в нашем state добавит новое сообщение
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        store.dispatch(updateNewMessageBodyAC(body))
        // Функция `onNewMessageChange` является обработчиком события и вызывается при изменении содержимого текстового
        // поля (textarea), связанного с отправкой нового сообщения. Внутри этой функции происходят следующие действия:
        //1. Параметр `e` представляет объект события `ChangeEvent`, который генерируется при изменении значения
        // текстового поля.
        //
        // 2. Мы извлекаем новое значение текстового поля из свойства `value` объекта события `e.target`.
        // Это значение представляет текст, который пользователь вводит в текстовое поле.
        //
        // 3. Затем вызывается диспетчер (dispatch) события `updateNewMessageBodyAC(body)`, где `body` – это содержимое
        // текстового поля, которое мы предварительно извлекли. Функция `updateNewMessageBodyAC` в нашем store
        // обновит состояние приложения, добавив новый текст сообщения к формируемому для отправки сообщению.
        //
        // Поэтому, данная функция обрабатывает событие изменения текста в текстовом поле для формирования нового
        // сообщения и передает это значение в диспетчер для его дальнейшей обработки в приложении.
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div>{messagesElement}</div>
            </div>
            <div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              ref={newMessage}
                              className={classes.textarea}
                              placeholder={'Enter your message'}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick} className={classes.sendPost}>Send</button>
                </div>
            </div>
        </div>
    )
}*/

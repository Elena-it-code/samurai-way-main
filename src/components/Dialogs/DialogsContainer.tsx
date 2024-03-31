import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/store";
import {store} from "../../redux/redux-store";
import {useDispatch} from "react-redux";
import {Dialogs} from "./Dialogs";


export type DialogsContainerType = {

}


export const DialogsContainer = (props: DialogsContainerType) => { // задача контейнерной компоненты удовлетворить нужды презентационной

    let state = store.getState();

    // const dialogs = useSelector<AppRootStateType, DialogItemType[]>((state) => state.dialogsPage.dialogs);
    // const messages = useSelector<AppRootStateType, MessagesType[]>((state) => state.dialogsPage.messages);
    // const newMessageBody = useSelector<AppRootStateType, string>((state) => state.dialogsPage.newMessageBody);
    const dispatch = useDispatch();

    const onSendMessageClick = () => {
        dispatch(sendMessageAC())
    }

    const onNewMessageChange = (body: string) => {
        dispatch(updateNewMessageBodyAC(body))
    }
    //задача контейнерной компоненты отрисоавть презентационную компоненту и снобдить/передать ей необходимые данные
    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} dialogsPage={state.dialogsPage} sendMessage={onSendMessageClick} />
    )
}

// идея контейнерной колмпоненты просто быть обверткой для обчычной компоненты, для чистой компоненты, для FC компоненты
// Все что она делает, её задача удовлетворить нужды презентационной, ту которую она окружает



































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

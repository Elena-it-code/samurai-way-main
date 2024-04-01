import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/store";
import {AppRootStateType, store} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {DialogsItemType} from "../../redux/dialogs-reducer";




// export const DialogsContainer = () => { // задача контейнерной компоненты удовлетворить нужды презентационной
//
//     // const dialogs = useSelector<AppRootStateType, DialogItemType[]>((state) => state.dialogsPage.dialogs);
//     // const messages = useSelector<AppRootStateType, MessagesType[]>((state) => state.dialogsPage.messages);
//     // const newMessageBody = useSelector<AppRootStateType, string>((state) => state.dialogsPage.newMessageBody);
//     //const dispatch = useDispatch();
//
//     const onSendMessageClick = () => {
//         store.dispatch(sendMessageAC())
//     }
//
//     const onNewMessageChange = (body: string) => {
//         store.dispatch(updateNewMessageBodyAC(body))
//     }
//     //задача контейнерной компоненты отрисоавть презентационную компоненту и снобдить/передать ей необходимые данные
//     return (
//         <Dialogs updateNewMessageBody={onNewMessageChange} dialogsPage={store.getState().dialogsPage} sendMessage={onSendMessageClick} />
//     )
// }

// идея контейнерной колмпоненты просто быть обверткой для обчычной компоненты, для чистой компоненты, для FC компоненты
// Все что она делает, её задача удовлетворить нужды презентационной, ту которую она окружает

//типизируем то, что возвращает нам функция mapStateToProps
type MapStateToPropsType = {
    dialogsPage: DialogsItemType
}

type mapDispatchToPropsType = {
    sendMessage: ()=> void
    updateNewMessageBody: (body: string)=> void,
}

export type DialogsPropsType = MapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppRootStateType) => { // эта функция возвращает объект. В этом объекте будут сидеть данные из стейта. dialogsPage как свойство попадет в пропсы в нашу компоненту
    return {
        dialogsPage: state.dialogsPage // данные которые мы возьмем из стейта
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => { // callback(и), которые мы будем отправлять в нашу презентационную компоненту
    return {
        sendMessage: ()=> {
            dispatch(sendMessageAC());
        },
        updateNewMessageBody: (body: string)=> {
            dispatch(updateNewMessageBodyAC(body));
        },
    }
}


export let DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);


//    connect принимает два вызова () (). Он нам возвращает новую контейнерную компоненту
// 1. Первым вызовом connect() мы как бы настраиваем нашу компоненту, передавая две f (mapStateToProps, mapDispatchToProps)
// 2. вторым вызовом  у connect() (Dialogs), мы указываем какую компоненту мы хотим обвернуть/создать контейнерную компоненту
// Dialogs ты презентационная компонента. Мы хотим создать контейнерную компоненту, снобдить тебя данными
// Мы нашу компоненту Dialogs, как бы законнектили к store

// 1. mapStateToProps (такое наименование у этой функции по документации) смысл этой функции замапить стейт на пропсы.
// Т.е. превратить часть стейта state.dialogsPage в пропсы.
// Она вызывается и внутрь передается state. Эта функция должна return ретурнуть объект {}

// 2. mapDispatchToProps (такое наименование у этой функции по документации) эта функция передает callback(и). Эта функция должна return ретурнуть объект {}
// Можно было дать название и mapCallbackProps, но по сути callback(и), которые мы передаем в функцию, они dispatch(ат),
// соответсвенно отсюда имя у функции mapDispatchToProps


































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

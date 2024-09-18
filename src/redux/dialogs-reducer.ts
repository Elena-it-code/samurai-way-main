import {ActionTypes} from "./profile-reducer";


export type DialogsItemType = {
    dialogs: DialogItemType[]
    messages: MessagesType[]
    newMessageBody: string
}

export type DialogItemType = {
    name: string
    id: number
}
export type MessagesType = {
    id: number
    message: string
}

export type initialStateType = typeof initialState // говорим сделай типизацию автоматическую вот этого объекта


let initialState= {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Saha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ] as DialogItemType[], // типизируем наши свойства для автоматики
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 6, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as MessagesType[], // типизируем наши свойства для автоматики
    newMessageBody: "",

}// начальное состояние для страницы диалогов

export const dialogsReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            return {
                ...state,
                newMessageBody: action.payload.body  // Обновляем newMessageBody
            }
        }
        case "SEND-MESSAGE" : {
            let body = state.newMessageBody;  // Используем newMessageBody из dialogsPage
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: 6,
                        message: body
                    }
                ],
                newMessageBody: ""  // Очищаем newMessageBody после отправки сообщения
            }
        }
        default:
            return state
    }
}

export default dialogsReducer;



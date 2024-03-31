import {ActionTypes} from "./store";


let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Saha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 6, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageBody: "",

}// начальное состояние для страницы диалогов

export const dialogsReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            return {
                ...state,
                newMessageBody: action.body  // Обновляем newMessageBody
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



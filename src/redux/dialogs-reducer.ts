import {ActionTypes, RootStateType} from "./state";

export const dialogsReducer = (state: RootStateType, action: ActionTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            return {
                ...state,
                dialogsPage: {  // Обновляем dialogsPage
                    ...state.dialogsPage,
                    newMessageBody: action.body  // Обновляем newMessageBody
                }
            };
        }
        case "SEND-MESSAGE" : {
            let body = state.dialogsPage.newMessageBody;  // Используем newMessageBody из dialogsPage
            return {
                ...state,
                dialogsPage: {
                    ...state.dialogsPage,
                    messages: [
                        ...state.dialogsPage.messages,
                        {
                            id: 6,
                            message: body
                        }
                    ],
                    newMessageBody: ""  // Очищаем newMessageBody после отправки сообщения
                }
            };
        }
        default:
            throw new Error("I don't understand this type")
    }}



export default dialogsReducer;



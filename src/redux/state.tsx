
export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}
export type DialogItemType = {
    name: string
    id: number
}
export type MessagesType = {
    id: number
    message: string
}
type PostsDataTypeProps = {
    postsData: Array<PostDataType>
    newPostText: string

}
type DialogsItemType = {
    dialogs: DialogItemType[]
    messages: MessagesType[]
    newMessageBody: string
}
export type FriendsType = {
    id: number
    name: string
}
type FriendsTypeProps = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    profilePage: PostsDataTypeProps
    dialogsPage: DialogsItemType
    sidebar: FriendsTypeProps

}
// export type RootStateType = {
//     _state: MainStateType,
//     addPost: (postMessage: string)=> void
//     updateNewPostText: (newText: string)=> void
// }

// export type StateType = {
//     _state: RootStateType
// }

export type StoreType = {
    _state: RootStateType,
    // addPost: () => void,
    // updateNewPostText: (newText: string)=> void,
    _callSubscriber: ()=> void,
    subscribe: (observer: ()=> void)=> void
    getState: ()=> RootStateType
    dispatch: (action: ActionTypes)=> void
}

/*type AddPostActionType = {
    type: "ADD-POST"
    //newPostText: string
}*/

/*type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}*/

export type ActionTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>



export const store: StoreType= {
    _state: { // здесь xранятся все наши data
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 53},
                {id: 2, message: "It's my posts", likesCount: 37},
            ],
            newPostText: "it-kamasutra.com"
        }, // начальное состояние для страницы профиля
        dialogsPage: {
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

        }, // начальное состояние для страницы диалогов
        sidebar: {
            friends: [
                {id: 1, name: 'Olga'},
                {id: 2, name: 'Artem'},
                {id: 3, name: 'Igor'},
            ]
        } // начальное состояние для боковой панели
    },
    // здесь хранятся все наши методы объекта store

    _callSubscriber (){
        console.log('State changed')
    }, // Логика для перерисовки приложения
    subscribe (observer){
        this._callSubscriber = observer;
    }, // Логика для подписки на изменения в хранилище
    getState() {
        return this._state;
    }, // Возвращает текущее состояние

    dispatch(action){ // Если мы хотим как-то изменить данные, теперь обращаемя к dispatch
        if (action.type === "ADD-POST") {
            let newPost: PostDataType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                //message: action.newPostText,
                likesCount: 0
            }
            //state.state.profilePage.postsData.map(el=>[{...el, newPost}])
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = " ";  // зачищаем из BLL поле ввода input, после нажатия кнопки AddPost
            this._callSubscriber()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber()
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber()
        } else if (action.type === "SEND-MESSAGE") {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = " "
            this._state.dialogsPage.messages.push({
                id: 6,
                message: body
            })
            this._callSubscriber()
        }
    }
}
// store - OOP

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
    } as const
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}









//--------------------------------------------------------------------------------------------------------------------//
//УДАЛИЛИ НАШИ МЕТОДЫ ИЗ ОБЪЕКТА store ПОСЛЕ ВВОДА МЕТОДА dispatch, ТЕПЕРЬ ВСЕ В НЕМ
// addPost () {
//     let newPost: PostDataType = {
//         id: 5,
//         message: this._state.profilePage.newPostText,
//         //message: newPostText,
//         likesCount: 0
//     }
//     //state.state.profilePage.postsData.map(el=>[{...el, newPost}])
//     this._state.profilePage.postsData.push(newPost);
//     this._state.profilePage.newPostText = " ";  // зачищаем из BLL поле ввода input, после нажатия кнопки AddPost
//     this._callSubscriber()
// }, // Логика для добавления нового поста
// updateNewPostText (newText: string) {
//     this._state.profilePage.newPostText = newText;
//     this._callSubscriber()
// }, // Логика для обновления текста нового поста

//--------------------------------------------------------------------------------------------------------------------//
// export const state: RootStateType = {
//     state: {
//         profilePage: {
//             postsData: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 53},
//                 {id: 2, message: "It's my posts", likesCount: 37},
//             ],
//             newPostText: "it-kamasutra.com"
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Saha'},
//                 {id: 5, name: 'Victor'},
//                 {id: 6, name: 'Valera'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How is your it-kamasutra?'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'Yo'},
//                 {id: 6, message: 'Yo'},
//                 {id: 5, message: 'Yo'}
//             ]
//         },
//         sidebar: {
//             friends: [
//                 {id: 1, name: 'Olga'},
//                 {id: 2, name: 'Artem'},
//                 {id: 3, name: 'Igor'},
//             ]
//         }
//     }
// }











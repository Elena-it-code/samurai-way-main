import {UsersPropsType} from "../components/Users/UsersContainer";
import {ActionTypes} from "redux-form";
import {ProfileProps} from "../components/Profile/ProfileInfo/ProfileContainer";
import {UsersDataPropsType} from "./auth-reducer";

type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}
type DialogItemType = {
    name: string
    id: number
}
type MessagesType = {
    id: number
    message: string
}
export type PostsDataTypeProps = {
    postsData: Array<PostDataType>
    newPostText: string
    profile: ProfileProps
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
export type FriendsTypeProps = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    profilePage: PostsDataTypeProps
    dialogsPage: DialogsItemType
    sidebar: FriendsTypeProps
    usersPage: UsersPropsType
    auth: UsersDataPropsType

}

export type StoreType = {
    _state: RootStateType,
    _callSubscriber: (_state: RootStateType)=> void,
    subscribe: (observer: ()=> void)=> void
    getState: ()=> RootStateType
    dispatch: (action: ActionTypes)=> void
}







// export const store: StoreType= {
//     _state: { // здесь xранятся все наши data
//         profilePage: {
//             postsData: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 53},
//                 {id: 2, message: "It's my posts", likesCount: 37},
//             ],
//             newPostText: "it-kamasutra.com"
//         }, // начальное состояние для страницы профиля
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
//             ],
//         newMessageBody: "",
//
//         }, // начальное состояние для страницы диалогов
//         sidebar: {
//             friends: [
//                 {id: 1, name: 'Olga'},
//                 {id: 2, name: 'Artem'},
//                 {id: 3, name: 'Igor'},
//             ]
//         } // начальное состояние для боковой панели
//     },
//     // здесь хранятся все наши методы объекта store
//
//     _callSubscriber (state: RootStateType){
//         console.log('State changed')
//     }, // Логика для перерисовки приложения
//     subscribe (observer){
//         this._callSubscriber = observer;
//     }, // Логика для подписки на изменения в хранилище
//     getState() {
//         return this._state;
//     }, // Возвращает текущее состояние
//
//     dispatch(action){ // Если мы хотим как-то изменить данные, теперь обращаемя к dispatch
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar= sidebarReducer(this._state.sidebar, action)
//
//         this._callSubscriber(this._state) // уведомили подписчика
//         /*if (action.type === "ADD-POST") {
//             let newPost: PostDataType = {
//                 id: 5,
//                 message: this._state.profilePage.newPostText,
//                 //message: action.newPostText,
//                 likesCount: 0
//             }
//             //state.state.profilePage.postsData.map(el=>[{...el, newPost}])
//             this._state.profilePage.postsData.push(newPost);
//             this._state.profilePage.newPostText = " ";  // зачищаем из BLL поле ввода input, после нажатия кнопки AddPost
//             this._callSubscriber()
//         } else if (action.type === "UPDATE-NEW-POST-TEXT") {
//             this._state.profilePage.newPostText = action.newText;
//             this._callSubscriber()
//         } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
//             this._state.dialogsPage.newMessageBody = action.body
//             this._callSubscriber()
//         } else if (action.type === "SEND-MESSAGE") {
//             let body = this._state.dialogsPage.newMessageBody
//             this._state.dialogsPage.newMessageBody = " "
//             this._state.dialogsPage.messages.push({
//                 id: 6,
//                 message: body
//             })
//             this._callSubscriber()
//         }*/
//     }
// }
// store - OOP











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










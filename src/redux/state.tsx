


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
    addPost: (newPostText: string)=> void,
    updateNewPostText: (newText: string)=> void,
    rerenderEntireTree: ()=> void,
    subscribe: (observer: ()=> void)=> void
    getState: ()=> RootStateType
}



export const store: StoreType= {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 53},
                {id: 2, message: "It's my posts", likesCount: 37},
            ],
            newPostText: "it-kamasutra.com"
        },      // начальное состояние для страницы профиля
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
            ]
        },      // начальное состояние для страницы диалогов
        sidebar: {
            friends: [
                {id: 1, name: 'Olga'},
                {id: 2, name: 'Artem'},
                {id: 3, name: 'Igor'},
            ]
        }      // начальное состояние для боковой панели
    },
    addPost (newPostText:string) {
        let newPost: PostDataType = {
            id: 5,
            message: newPostText,
            likesCount: 0
        }
        //state.state.profilePage.postsData.map(el=>[{...el, newPost}])
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = " ";  // зачищаем из BLL поле ввода input, после нажатия кнопки AddPost
        this.rerenderEntireTree()
    },     // Логика для добавления нового поста
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree()
    },     // Логика для обновления текста нового поста
    rerenderEntireTree (){
        console.log('State changed')
    },     // Логика для перерисовки приложения
    subscribe (observer){
        this.rerenderEntireTree = observer;
    },     // Логика для подписки на изменения в хранилище
    getState() {
        return this._state;
    }     // Возвращает текущее состояние
}





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











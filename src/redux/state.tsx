export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}
export type DialogItemType = {
    name: string
    id: number
}
export type MessagesTypeProps = {
    id: number
    message: string
}
/*export type KeyType = {
    id: number
}*/
type PostsDataTypeProps = {
    postsData: Array<PostDataType>
}
type DialogsItemType = {
    dialogs: DialogItemType[]
    messages: MessagesTypeProps[]
}
export type StateType = {

    profilePage: PostsDataTypeProps
    dialogsPage: DialogsItemType
}
export type RootStateType = {
    state: StateType
}


export const state: RootStateType = {
    /*key: {
        id: 1
    },*/
    state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 53},
                {id: 2, message: "It's my posts", likesCount: 37},
            ]
        },
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
        }
        /*sidebar: {}*/
    }
}

/* export default state*/














































/*export type ProfilePage = {
    postsData: PostsDataTypeProps
}
export type DialogsPage = {
    dialogsPage: DialogsItemType
}*/

/*export default state*/

/*const postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 53},
    {id: 2, message: "It's my posts", likesCount: 37},
]

const dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Saha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'}

]

const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 6, message: 'Yo'},
    {id: 5, message: 'Yo'}

]*/
//общий тип для главного стейт


/*
//описали тип для postsData
type PostsDataTypeProps = {
    postsData: Array<PostDataType>
}
type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}
//описали тип для dialogs
type DialogsItemType = {
    dialogs: DialogItemType[]
    messages: MessagesTypeProps[]
}
export type DialogItemType = {
    name: string
    id: number
}
//описали тип для messages
/!*export type MessagesType = {
    messages: MessagesTypeProps[]
}*!/
type MessagesTypeProps = {
    id: number
    message: string
}
//общий тип для главного сайдбароа
type SidebarType = {}

export type RootStateType = {
    profilePage: PostsDataTypeProps
    dialogsPage:  DialogsItemType
    /!*sidebar: SidebarType*!/
}*/


/*
export let state: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 53},
            {id: 2, message: "It's my posts", likesCount: 37},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Saha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ]
        ,
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 6, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    /!*sidebar: {}*!/
}*/

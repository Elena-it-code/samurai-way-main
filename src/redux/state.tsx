import classes from "../components/FriendsSidebar/Friends.module.css";
import React from "react";

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

export type StateType = {
    profilePage: PostsDataTypeProps
    dialogsPage: DialogsItemType
    sidebar: FriendsTypeProps
}
export type RootStateType = {
    state: StateType
}


export const state: RootStateType = {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Olga'},
                {id: 2, name: 'Artem'},
                {id: 3, name: 'Igor'},
            ]
        }
    }
}



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



//описали тип для postsData
export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}
export type PostsDataTypeProps = {
    postsData: Array<PostDataType>
}


//описали тип для dialogs
export type DialogsItemType = {
    dialogs: DialogItemType[]
}
export type DialogItemType = {
    name: string
    id: number
}


//описали тип для messages
export type MessagesType = {
    messages: MessagesTypeProps[]
}
export type MessagesTypeProps = {
    id: number
    message: string
}



const postsData = [
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

]

ReactDOM.render(
    <App postsData={postsData} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);
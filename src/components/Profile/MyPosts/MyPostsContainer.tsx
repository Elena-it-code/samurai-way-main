import React from "react";
import {addPostAC, PostDataType, updateNewPostTextAC} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "../../../redux/redux-store";



export const MyPostsContainer= () => { // задача контейнерной компоненты удовлетворить нужды презентационной

    const postsData = useSelector<AppRootStateType, Array<PostDataType>>(state => state.profilePage.postsData);

    const addPostHandler = ()=> {
        store.dispatch(addPostAC())
    }
    let onPostChange =(text: string)=>{
        store.dispatch(updateNewPostTextAC(text ? text : " "))
    }
    //задача контейнерной компоненты отрисоавть презентационную компоненту и снобдить/передать ей необходимые данные
    return (
        <MyPosts addPost={addPostHandler} updateNewPostText={onPostChange} newPostText={store.getState().profilePage.newPostText} postsData={postsData}/>
    )
}

// идея контейнерной колмпоненты просто быть обверткой для обчычной компоненты, для чистой компоненты, для FC компоненты
// Все что она делает, её задача удовлетворить нужды презентационной, ту которую она окружает
import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType, RootStateType, StoreType} from "../../redux/state";
import {PropsType} from "../../App";

type MyPostsProps = {
    postsData: Array<PostDataType>
    addPost: (newPostText: string) => void;
    updateNewPostText: (newText: string)=> void,
    newPostText?: string;
}
// type ProfileProps = {
//     addPost: (newPostText: string) => void;
//     updateNewPostText: (newText: string) => void;
//     newPostText: string
//     postsData: StoreType;
//     // Другие пропсы
// }
/*export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}*/

/*export type PostsDataTypeProps = {
    postsData: Array<PostDataType>

}*/
/*export const postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 53},
    {id: 2, message: "It's my posts", likesCount: 37},
]*/
export const Profile = (props: MyPostsProps) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts addPost={props.addPost} updateNewPostText={props.updateNewPostText}  postsData={props.postsData} newPostText={props.newPostText? props.newPostText: ''}/>
            {/*<MyPosts addPost={props.store.addPost.bind(props.store)} updateNewPostText={props.store.updateNewPostText.bind(props.store)} newPostText={props.store.getState().profilePage.newPostText} postsData={props.store._state.profilePage.postsData}/>*/}
        </div>
    )
}

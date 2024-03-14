import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";

type MyPostsProps = {
    postsData: Array<PostDataType>
    addPost: (newPostText: string) => void;
    updateNewPostText: (newText: string)=> void,
    newPostText?: string;
}
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
            <MyPosts addPost={props.addPost} updateNewPostText={props.updateNewPostText}  newPostText={''} postsData={props.postsData}/>
        </div>
    )
}

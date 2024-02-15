import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDataTypeProps} from "../../index";


/*export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}

export type PostsDataTypeProps = {
    postsData: Array<PostDataType>
}
export const postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 53},
    {id: 2, message: "It's my posts", likesCount: 37},
]*/
export const Profile = (props: PostsDataTypeProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    )
}

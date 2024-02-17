import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {RootStateType, state} from "../../redux/state";


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
export const Profile = (props: RootStateType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts state={props.state}/>
        </div>
    )
}

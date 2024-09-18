import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileAPITypeProps} from "../../redux/profile-reducer";



type ProfilePropsComponentType = {
    profile: ProfileAPITypeProps;
};

export const Profile = (props: ProfilePropsComponentType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}
import React from 'react';
import classes from "./Friends.module.css"
import userPhoto from "../../assets/images/user.png"


export const FriendsSidebar = () => {
    return (
        <div className={classes.item}>
            <img className={classes.avaFriends}
             src={userPhoto}
             alt={'My avatar'}/>
            Andrew
            <img className={classes.avaFriends}
                 src={userPhoto}
                 alt={'My avatar'}/>
            Andrew
            <img className={classes.avaFriends}
                 src={userPhoto}
                 alt={'My avatar'}/>
            Andrew
        </div>
    );
};


import React from "react";
import classes from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src='https://www.free-wallpapers.su/data/media/3135/big/abs0299.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        Post 1
                    </div>
                    <div className={classes.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    )
}
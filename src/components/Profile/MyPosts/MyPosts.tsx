import React, {FC} from "react"
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts: FC = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 53},
        {id: 2, message: "It's my posts", likesCount: 37},
    ]

    return (
        <div className={classes.postBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea className={classes.textarea} placeholder={'your news'}/>
            </div>
            <div>
                <button className={classes.sendPost}>Send</button>
            </div>
            <div>
                New Post
            </div>
            <div className={classes.posts}>
            <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )
}
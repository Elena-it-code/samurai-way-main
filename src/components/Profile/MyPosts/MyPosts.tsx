import React, {FC} from "react"
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts: FC = () => {
    return (
        <div>
            My Posts
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
            <Post message={'Hi, how are you?'} likesCount={53}/>
            <Post message={"It's my posts"} likesCount={37}/>
            </div>
        </div>
    )
}
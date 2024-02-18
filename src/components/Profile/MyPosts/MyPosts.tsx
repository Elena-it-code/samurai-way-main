import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {RootStateType} from "../../../redux/state";


export const MyPosts= (props:RootStateType ) => {

    /*let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 53},
        {id: 2, message: "It's my posts", likesCount: 37},
    ]*/

    let newPostsElement = React.createRef<HTMLTextAreaElement>();
    const addPostHandler = ()=> {
        let text = newPostsElement.current?.value
        alert(text)
    }

    let postsElement = props.state.profilePage.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    return (
        <div className={classes.postBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostsElement} className={classes.textarea} placeholder={'your news'}></textarea>
            </div>
            <div>
                <button onClick={ addPostHandler } className={classes.sendPost}>Add post</button>
            </div>
            <div>
                New Post
            </div>
            <div className={classes.posts}>
                {postsElement}
                {/*<Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>*/}
            </div>
        </div>
    )
}
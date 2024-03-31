import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {PostDataType} from "../../../redux/store";
/*
* Теперь наша компонента чистая, она принимает данные, и вызывает какие-то callback(и), если вдруг у неё что-то произойдет.
Мы теперь переиспользовать её в другом месте нашего проекта
ничего не поламается, т.к. она НЕ ЗАВИСИТ теперь от каких-то данных
*/

type MyPostsProps = {
    postsData: Array<PostDataType>
    addPost: (newPostText: string) => void;
    updateNewPostText: (newText: string)=> void,
    newPostText: string
}

export const MyPosts= (props: MyPostsProps) => {

    let postsElement = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let newPostsElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = ()=> {
        props.addPost(" ")
    }

    let onPostChange =()=>{
        let text = newPostsElement.current?.value;
        props.updateNewPostText(text ? text : " ")
    }

    return (
        <div className={classes.postBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostsElement} value={props.newPostText} className={classes.textarea} placeholder={'your news'} />
            </div>
            <div>
                <button onClick={ addPostHandler } className={classes.sendPost}>Add post</button>
            </div>
            <div>
                New Post
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
}
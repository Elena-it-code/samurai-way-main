import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {MainStateType, MessagesType, RootStateType} from "../../../redux/state";

type PostDataType = {
    id: number,
    message: string,
    likesCount: number
    addPost: (postMessage: string)=> void
}

export const MyPosts= (props:MainStateType) => {

    /*let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 53},
        {id: 2, message: "It's my posts", likesCount: 37},
    ]*/

    let newPostsElement = React.createRef<HTMLTextAreaElement>();
    const addPostHandler = ()=> {
        // let text = newPostsElement.current?.value
        props.addPost(newPostsElement.current ? newPostsElement.current.value : ' ')
        if (newPostsElement.current) { // проверка на существование оюъекта. Если `newPostsElement.current` не равно `null` или `undefined`, то условие возвратит `true`, и соответствующий блок кода будет выполнен.
            newPostsElement.current.value = ''; // Очистка значения поля ввода
        }
    }

    let postsElement = props.state.state.profilePage.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


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
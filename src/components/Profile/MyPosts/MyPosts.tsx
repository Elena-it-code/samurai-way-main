import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {ProfileProps} from "../Profile";
import {addPostAC, PostDataType, updateNewPostTextAC} from "../../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";


/*type MyPostsProps = {
    postsData: Array<PostDataType>
    addPost: (newPostText: string) => void;
    updateNewPostText: (newText: string)=> void,
    newPostText: string
}*/

export const MyPosts= (props: ProfileProps) => {

    const postsData = useSelector<AppRootStateType, Array<PostDataType>>(state => state.profilePage.postsData)
    const dispatch = useDispatch();


    let postsElement = postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let newPostsElement = React.createRef<HTMLTextAreaElement>();
    const addPostHandler = ()=> {
        dispatch(addPostAC())
    }

    let onPostChange =()=>{
        let text = newPostsElement.current?.value;
        dispatch(updateNewPostTextAC(text ? text : " "))
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
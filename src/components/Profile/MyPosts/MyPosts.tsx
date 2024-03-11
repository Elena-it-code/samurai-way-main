import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {MainStateType} from "../../../redux/state";

/*type PostDataType = {
    id: number,
    message: string,
    likesCount: number
    addPost: (postMessage: string)=> void
}*/

export const MyPosts= (props:MainStateType) => {

    /*let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 53},
        {id: 2, message: "It's my posts", likesCount: 37},
    ]*/
    let postsElement = props.state.state.profilePage.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostsElement = React.createRef<HTMLTextAreaElement>();
    const addPostHandler = ()=> {
        props.addPost(" ")
        //props.updateNewPostText(' ') //  Мы на прямую в UI НЕ МОЖЕМ зачищать поле ввода ТАК НЕЛЬЗЯ!!! Теперь в самом теперь state/BLL нам зачищает поле ввода

            //let text = newPostsElement.current?.value
        //props.addPost(newPostsElement.current ? newPostsElement.current.value : ' ')
        // if (newPostsElement.current) { // проверка на существование оюъекта. Если `newPostsElement.current` не равно `null` или `undefined`, то условие возвратит `true`, и соответствующий блок кода будет выполнен.
        //     newPostsElement.current.value = ''; // Очистка значения поля ввода
        // }
    }


    let onPostChange =()=>{
        let text = newPostsElement.current?.value;
        props.updateNewPostText(text ? text : " ")

            // if (text !== undefined) {
            // props.updateNewPostText(text);
            // /*TypeScript не уверен, что `text` не будет равен `undefined`.
            // Это происходит из-за того, что при использовании оператора опциональной цепочки `.?` тип `text` становится `string | undefined`.
            // Чтобы решить эту проблему, мы можем явно проверить `text` на `undefined`, прежде чем передать его в `props.updateNewPostText`.
            // проверяем `text` на `undefined`, поэтому TypeScript будет уверен, что `text` имеет тип `string`, и ошибка TS2345 должна исчезнуть.
            // TS2345: Argument of type  string | undefined  is not assignable to parameter of type  string  Type  undefined  is not assignable to type  string*/
    }


    return (
        <div className={classes.postBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostsElement} value={props.state.state.profilePage.newPostText} className={classes.textarea} placeholder={'your news'} />
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
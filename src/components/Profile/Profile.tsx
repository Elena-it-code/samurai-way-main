import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostDataType} from "../../redux/state";



export type ProfileProps = {
    postsData: Array<PostDataType>;
    dispatch: (action: ActionTypes) => void;
    newPostText: string
    // Другие пропсы
}

export const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} dispatch={props.dispatch} newPostText={props.newPostText}/>
            {/*<MyPosts addPost={props.addPost} updateNewPostText={props.updateNewPostText}  postsData={props.postsData} newPostText={props.newPostText? props.newPostText: ''}/>*/}
            {/*<MyPosts addPost={props.store.addPost.bind(props.store)} updateNewPostText={props.store.updateNewPostText.bind(props.store)} newPostText={props.store.getState().profilePage.newPostText} postsData={props.store._state.profilePage.postsData}/>*/}
        </div>
    )
}





// const mapStateToProps = (state: RootStateType) => ({
//     postsData: state.profilePage.postsData,
//     newPostText: state.profilePage.newPostText
// });
//
// export default connect(mapStateToProps)(Profile);
//
// непосредственное использование экземпляра `store` в компоненте является неудачным подходом, так как обычно он
// передается через контекст, либо через коннекторы (как, например, `connect` из `react-redux`).
// Для доступа к состоянию из компонента следует либо использовать контекст, либо использовать коннекторы для
// связывания компонента с состоянием.

//В этом примере мы связываем компонент `Profile` с состоянием Redux, используя функцию `mapStateToProps` для выбора
// нужных свойств из состояния и передачи их в `Profile` как свойства.
//
// Таким образом, данные из состояния Redux станут доступные в компоненте `Profile`, и мы сможем использовать их
// в `MyPosts` корректным образом.

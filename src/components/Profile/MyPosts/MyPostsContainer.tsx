import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType, store} from "../../../redux/redux-store";
import {addPostAC, PostDataType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";




// export const MyPostsContainer= () => { // задача контейнерной компоненты удовлетворить нужды презентационной
//
//     const postsData = useSelector<AppRootStateType, Array<PostDataType>>(state => state.profilePage.postsData);
//
//     const addPostHandler = ()=> {
//         store.dispatch(addPostAC())
//     }
//     let onPostChange =(text: string)=>{
//         store.dispatch(updateNewPostTextAC(text ? text : " "))
//     }
//     //задача контейнерной компоненты отрисоавть презентационную компоненту и снобдить/передать ей необходимые данные
//     return (
//         <MyPosts addPost={addPostHandler} updateNewPostText={onPostChange} newPostText={store.getState().profilePage.newPostText} postsData={postsData}/>
//     )
// }

// идея контейнерной колмпоненты просто быть обверткой для обчычной компоненты, для чистой компоненты, для FC компоненты
// Все что она делает, её задача удовлетворить нужды презентационной, ту которую она окружает
type MapStateToPropsType = {
    postsData: Array<PostDataType>,
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void,
    updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state: AppRootStateType) => { // эта функция возвращает объект. В этом объекте будут сидеть данные из стейта. dialogsPage как свойство попадет в пропсы в нашу компоненту
    return {
        postsData: state.profilePage.postsData,  // данные которые мы возьмем из стейта
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => { // callback(и), которые мы будем отправлять в нашу презентационную компоненту
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateNewPostText: (text: string)=>{
            dispatch(updateNewPostTextAC(text ? text : " "))
        }
    }
}


export let MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);



//    connect принимает два вызова () (). Он нам возвращает новую контейнерную компоненту
// 1. Первым вызовом connect() мы как бы настраиваем нашу компоненту, передавая две f (mapStateToProps, mapDispatchToProps)
// 2. вторым вызовом  у connect() (MyPosts), мы указываем какую компоненту мы хотим обвернуть/создать контейнерную компоненту
// MyPosts ты презентационная компонента. Мы хотим создать контейнерную компоненту, снобдить тебя данными
// Мы нашу компоненту MyPosts, как бы законнектили к store

// 1. mapStateToProps (такое наименование у этой функции по документации) смысл этой функции замапить стейт на пропсы.
// Т.е. превратить часть стейта store.getState().profilePage.newPostText и передать в пропсы.
// Она вызывается и внутрь передается state. Эта функция должна return ретурнуть объект {}

// 2. mapDispatchToProps (такое наименование у этой функции по документации) эта функция передает callback(и). Эта функция должна return ретурнуть объект {}. Внутрь приходит функция dispatch
// Можно было дать название и mapCallbackProps, но по сути callback(и), которые мы передаем в функцию, они dispatch(ат),
// соответсвенно отсюда имя у функции mapDispatchToProps
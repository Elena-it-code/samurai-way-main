import {ActionTypes, PostDataType} from "./store";


let initialState = { // одноразовый объект, у него есть стартовые данные. В случае , если state не придет
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 53},
        {id: 2, message: "It's my posts", likesCount: 37},
    ],
    newPostText: "it-kamasutra.com"
} // начальное состояние для страницы профиля

const profileReducer = (state = initialState, action: ActionTypes) => { // то именно это объект initialState будет его начальным state(ом)
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state, // делаем копию стэйта
                postsData: [...state.postsData, newPost], // перезаписываем свойство postsData в этом объекте, новое знчаение
                newPostText: "" // очищаем поле текста после добавления поста
            }
        }
        case "UPDATE-NEW-POST-TEXT" : {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
};

export default profileReducer;
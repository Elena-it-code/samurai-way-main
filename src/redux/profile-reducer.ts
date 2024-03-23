import {ActionTypes, PostDataType, RootStateType, StoreType} from "./state";

const profileReducer = (state: RootStateType, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostDataType = {
                id: 5,
                message: state.profilePage.newPostText,
                likesCount: 0
            }
            let newPostsData = [...state.profilePage.postsData, newPost];
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    postsData: newPostsData,
                    newPostText: "" // очищаем поле текста после добавления поста
                }
            };
        }
        case "UPDATE-NEW-POST-TEXT" : {
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    newPostText: action.newText
                }
            };
        }
        default:
            throw new Error("I don't understand this type");
    }
};

export default profileReducer;
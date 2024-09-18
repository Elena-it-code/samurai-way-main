


export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}

type initialStateType = {
    postsData: Array<PostDataType>
    newPostText: string
    profile: ProfileAPITypeProps
}

export type ProfileAPITypeProps  = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    };
    photos: {
        small: string
        large: string
    }


}
let initialState: initialStateType = { // одноразовый объект, у него есть стартовые данные. В случае , если state не придет
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 53},
        {id: 2, message: "It's my posts", likesCount: 37},
    ],
    newPostText: "it-kamasutra.com",
    profile: {
        userId: 1,
        lookingForAJob: false,
        lookingForAJobDescription: 'bla bla',
        fullName: 'Andrey',
        contacts: {
            github: 'Lorem Ipsum',
            vk: 'Lorem Ipsum',
            facebook: 'Lorem Ipsum',
            instagram: 'Lorem Ipsum',
            twitter: 'Lorem Ipsum',
            website: 'Lorem Ipsum',
            youtube: 'Lorem Ipsum',
            mainLink: 'Lorem Ipsum',
        },
        photos: {
            small: 'Lorem Ipsum',
            large: 'Lorem Ipsum'
        }}
} // начальное состояние для страницы профиля

const profileReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => { // то именно это объект initialState будет его начальным state(ом)
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
                newPostText: action.payload.newText
            }
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profile}
        }
        default:
            return state
    }
};






export type ActionTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof sidebarAC>
    | ReturnType<typeof setUsersProfile>

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {
            newText
        }
    } as const
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        payload: {
            body
        }
    } as const
}
export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}

export const sidebarAC = () => {
    return {
        type: " "
    } as const
}

export const setUsersProfile = (profile: any) => {
    return {
        type: "SET-USER-PROFILE",
        payload: {
            profile
        }
    } as const
}



export default profileReducer;
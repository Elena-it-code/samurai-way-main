// Тип данных для ответа от сервера
export type UsersDataPropsType = {
    resultCode: 0
    messages: string [],
    fieldsErrors: string [],
    data: UserDataType;
}

// Тип для данных аутентификации пользователя
export type UserDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type initialStateType = {
        userId: number | null
        email: string | null
        login: string | null
        isAuth: boolean
}


let initialState: initialStateType = { // одноразовый объект, у него есть стартовые данные. В случае , если state не придет
        userId: 1,
        email: 'lorem Ipsum lorem Ipsum',
        login: 'loremIpsum',
        isAuth: false
} // начальное состояние


const authReducer = (state: initialStateType = initialState, action: ActionForUsersDataTypes): initialStateType => { // то именно это объект initialState будет его начальным state(ом)
    switch (action.type) {

        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload.data,
                isAuth: true
            }

        default:
            return state
    }
};


export type ActionForUsersDataTypes =
    | ReturnType<typeof setAuthUserData>


export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => {
    return {
        type: "SET-USER-DATA" as const,
        payload: {
            data: {
                userId,
                email,
                login
            }
        }
    } as const
}





export default authReducer;
export type UsersType = {
    // id: number
    // photoUrl: string
    // followed: boolean
    // name: string
    // status: string
    // location: LocationType
    name: string;
    id: number;
    uniqueUrlName: string | null;
    photos: {
        small: string | null;
        large: string | null;
    };
    status: string | null;
    followed: boolean;
    location?: { // Опционально, если location может быть undefined
        country: string;
        city: string;
    };
}

type initialStateType = {
    users: UsersType[]
}

const FOLLOW = "FOLLOW"

let initialState: initialStateType = { // одноразовый объект, у него есть стартовые данные. В случае , если state не придет
    users: []
} // начальное состояние для страницы user(ов)


const usersReducer = (state: initialStateType = initialState, action: ActionForUsersTypes): initialStateType => { // то именно это объект initialState будет его начальным state(ом)
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, // сделали копию нашего state(а)
                users: state.users.map(u => (u.id === action.userID ? {...u, followed: true} : u))
                // Эта же запись только более в развернутом варианте. Пошагово. Они индентичны.
                // users: state.users.map(u => {
                //     if(u.id === action.userID) {
                //         return {...u, followed: true}
                //     }
                //     return u
                // })
            }
        case "UNFOLLOW":
            return {
                ...state, // сделали копию нашего state(а)
                users: state.users.map(u => (u.id === action.userID ? {...u, followed: false} : u))
            }
        case "SET-USERS":
            if ('users' in action) { // Добавили проверку if ('users' in action) перед доступом к свойству users в случае, когда action.type равно "SET-USERS". Это гарантирует, что TypeScript поймет, что свойство users существует в этом случае.
                return {
                    ...state,
                    users: [...state.users, ...action.users]
                }
            }
            return state;
        default:
            return state // Возвращаем текущее состояние по умолчанию
    }
};


export type ActionForUsersTypes =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>

export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID // значение user(а), которго нам нужно за- follow(ить) либо unFollow(ить)
    } // либо таким способом указываем const через переменную
}

export const unFollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID // значение user(а), которго нам нужно за- follow(ить) либо unFollow(ить)
    } as const  // либо таким способом указываем const через as const
}

export const setUsersAC = (users: UsersType[]) => {
    return {
        type: "SET-USERS",
        users // откуда-то с сервака придут к нам эти users(ы)
    } as const
}


export default usersReducer;
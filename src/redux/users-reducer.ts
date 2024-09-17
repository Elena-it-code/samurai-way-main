export type UsersType = {
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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


let initialState: initialStateType = { // одноразовый объект, у него есть стартовые данные. В случае , если state не придет
    users: [],
    pageSize: 5,
    totalUsersCount: 0, // общее число user(ов)
    currentPage: 1,
    isFetching: false

} // начальное состояние для страницы user(ов)


const usersReducer = (state: initialStateType = initialState, action: ActionForUsersTypes): initialStateType => { // то именно это объект initialState будет его начальным state(ом)
    switch (action.type) {

        case "FOLLOW":
            return {
                ...state, // сделали копию нашего state(а)
                users: state.users.map(u => (u.id === action.payload.userID ? {...u, followed: true} : u))
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
                users: state.users.map(u => (u.id === action.payload.userID ? {...u, followed: false} : u))
            }

        case "SET-USERS":
                //return {...state, users: [...state.users, ...action.payload.users] }
                return {...state, users: action.payload.users } // перезатираем массив user(ов), а не добавляем в конец

        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.currentPage}

        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.payload.count}

        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}

        default:
            return state // Возвращаем текущее состояние по умолчанию
    }
};


export type ActionForUsersTypes =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>



export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        payload: {
            userID // значение user(а), которго нам нужно за- follow(ить) либо unFollow(ить)
        } // либо таким способом указываем const через переменную
    } as const
}

export const unFollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userID
        } // значение user(а), которго нам нужно за- follow(ить) либо unFollow(ить)
    } as const  // либо таким способом указываем const через as const
}

export const setUsersAC = (users: UsersType[]) => {
    return {
        type: "SET-USERS",
        payload: {
            users
        } // откуда-то с сервака придут к нам эти users(ы)
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: {
            currentPage
        }
    } as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        payload: {
            count: totalUsersCount
        }
    } as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        payload: {
            isFetching
        }
    } as const
}




export default usersReducer;
export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type LocationType = {
    country: string,
    city: string
}

type initialStateType = {
    users: UsersType[]
}

const FOLLOW = "FOLLOW"

let initialState: initialStateType = { // одноразовый объект, у него есть стартовые данные. В случае , если state не придет
    users: [
       /* {
            id: 1,
            followed: false,
            fullName: 'Sophia T.',
            status: 'I am the Monarch of Motivation',
            location: {country: ' Great Britain', city: 'Manchester'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Olivia S.',
            status: 'I am the King of the Jungle',
            location: {country: 'France', city: 'Paris'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Emma M.',
            status: 'I am the Master of My Destiny',
            location: {country: 'Italy', city: 'Rome'}
        },
        {
            id: 4,
            followed: false,
            fullName: 'Harper T.',
            status: 'I am the Captain of My Soul',
            location: {country: 'Australia', city: 'Sydney'}
        },
        {
            id: 5,
            followed: true,
            fullName: 'Mia F.',
            status: 'I am the Czar of Confidence',
            location: {country: 'Canada', city: 'Vancouver'}
        },
        {
            id: 6,
            followed: true,
            fullName: 'Abigail D.',
            status: 'I am the Ruler of Resilience',
            location: {country: 'Germany', city: 'Berlin'}
        }*/
    ]
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
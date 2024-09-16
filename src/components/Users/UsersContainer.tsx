import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../redux/users-reducer";
import {Users} from "./Users";




// Тип для mapStateToProps
type MapStateToPropsType = {
    usersPage: {
        users: UsersType[]
        pageSize: number
        totalUsersCount: number
        currentPage: number
    }
}
// Тип для mapDispatchToProps
type mapDispatchToPropsType = {
    follow: (useId: number)=> void
    unFollow: (useId: number)=> void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number)=>void
    setTotalUsersCount: (totalCount: number) => void
}


// Тип для пропсов компонента UsersComponentUnused
export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType



// Функция mapStateToProps
let mapStateToProps = (state: AppRootStateType) => { // эта функция возвращает объект. В этом объекте будут сидеть данные из стейта. usersPage как свойство попадет в пропсы в нашу компоненту
    return {
        usersPage: {
            users: state.usersPage.users, // данные которые мы возьмем из стейта
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage
        }
    }
}

// Функция mapDispatchToProps
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => { // callback(и), которые мы будем отправлять в нашу презентационную компоненту
    return {
        follow: (userId)=> {
            dispatch(followAC(userId))
        },
        unFollow: (userId)=> {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UsersType[])=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) =>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

// Создаем контейнерный компонент & Экспортируем его
export let UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unFollowAC,
    UsersType
} from "../../redux/users-reducer";
import React from "react";
import {RootStateType} from "../../redux/store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";




// Тип для mapStateToProps
type MapStateToPropsType = {
    usersPage: {
        users: UsersType[]
        pageSize: number
        totalUsersCount: number
        currentPage: number
        isFetching: boolean
    }
}
// Тип для mapDispatchToProps
type mapDispatchToPropsType = {
    follow: (useId: number)=> void
    unFollow: (useId: number)=> void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number)=>void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean)=> void

}
// Тип для пропсов компонента UsersComponentUnused
export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

// --- Container component ---
// Контейнерная компонента, которая делает axios запросы
export class UsersAPIComponent extends React.Component<UsersPropsType, RootStateType> {

    componentDidMount() {

        this.props.toggleIsFetching(true) // перед запросом мы говорим true покажи крутилку

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false) // когда к нам пришел ответ от серсера мы говорим false, убери крутилку
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
            .catch(error => { // Блок catch для обработки ошибок при выполнении запроса.
                console.error('Error fetching users:', error);
            });

    }

    onPageChanged = (pageNumber: number) => {

        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true) // перед запросом мы говорим true покажи крутилку

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false) // когда к нам пришел ответ от серсера мы говорим false, убери крутилку
                this.props.setUsers(response.data.items)
            })
            .catch(error => { // Блок catch для обработки ошибок при выполнении запроса.
                console.error('Error fetching users:', error);
            });
    }

    render() {
        return <>
            {this.props.usersPage.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.usersPage.totalUsersCount}
                      pageSize={this.props.usersPage.pageSize}
                      currentPage={this.props.usersPage.currentPage}
                      users={this.props.usersPage.users}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
            />
        </>
    }
}



// Функция mapStateToProps
let mapStateToProps = (state: AppRootStateType) => { // эта функция возвращает объект. В этом объекте будут сидеть данные из стейта. usersPage как свойство попадет в пропсы в нашу компоненту
    return {
        usersPage: {
            users: state.usersPage.users, // данные которые мы возьмем из стейта
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching: boolean) =>{
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

// --- Container components ---
// Создаем контейнерный компонент & Экспортируем его. Он связывает нас со store(ом) и redux(ом)
// Обертка над UsersAPIComponent, которая делает axios запросы, тоже грязная side-эффект
export let UsersContainer = connect (mapStateToProps, mapDispatchToProps) (UsersAPIComponent);
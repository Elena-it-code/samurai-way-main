import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"
import {RootStateType} from "../../redux/store";


export class Users extends React.Component<UsersPropsType, RootStateType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
            .catch(error => { // Блок catch для обработки ошибок при выполнении запроса.
                console.error('Error fetching users:', error);
            });

    }

    onPageChanged = (pageNumber: number) => {

        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
            .catch(error => { // Блок catch для обработки ошибок при выполнении запроса.
                console.error('Error fetching users:', error);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize) // Math.ceil() - округляем полученное число в большую сторону
        let pages = []
        for (let i= 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return (
                            <span key={p}
                                  className={this.props.usersPage.currentPage === p ? styles.selectedPage : ''}
                            onClick={(e)=>{this.onPageChanged(p)}} >{p}</span>
                        )
                    })}

                </div>
                {
                    this.props.usersPage.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto}
                                 src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 alt={'My avatar'}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={()=>{this.props.unFollow(u.id)}}> Unfollow </button >
                                    : <button onClick={()=>{this.props.follow(u.id)}}> Follow </button>}

                        </div>
                    </span>
                            <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                        </div>
                    )
                }
            </div>
        );
    }
}


// Типизация компонента:
// React.Component<UsersProps, RootStateType> указывает на типизированные пропсы и состояние.

// Объяснение:
//     Класс Users:
//     Этот класс наследуется от React.Component и типизирован с использованием двух типов: UsersPropsType для пропсов и RootStateType для состояния.
//
//     Конструктор:
//     Конструктор класса Users принимает параметр props типа UsersPropsType.
//     Внутри конструктора вызывается super(props), что необходимо для корректной инициализации базового класса React.Component.
//
//     Запрос данных:
//     1. Внутри конструктора выполняется HTTP-запрос к API с использованием библиотеки axios.
//     2. Запрос выполняется к URL https://social-network.samuraijs.com/api/1.0/users.
//     3. После получения ответа (response), вызывается метод setUsers из пропсов (this.props.setUsers), который
//     предназначен для обновления состояния компонента с полученными данными.
//     4. Обработка ошибок. Добавлен блок catch для обработки ошибок при выполнении запроса.
//
//      Типизация:
//      constructor(props: UsersPropsType):
//      Это типизация для конструктора, который содержит все необходимые свойства, включая setUsers.
//
//      componentDidMount:
//      Запрос данных выполняется в методе componentDidMount, что является лучшей практикой для выполнения асинхронных
//      операций при монтировании компонента.
//      Метод жизненного цикла componentDidMount(), вызывается после того, как компонент был добавлен в DOM.
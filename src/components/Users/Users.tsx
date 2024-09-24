import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {followAPI, unFollowAPI} from "../../api/api";


//   --- Presentation component ---
//   Чистая презентационная компонента  Users, Ни загрязнена ничем, ни делат запросы ничего. Она чистая. Какие props(ы) пришли то и отобразила.
type UsersPropsComponentType ={
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    users: UsersType[];
    onPageChanged: (pageNumber: number) => void;
    follow: (userId: number)=> void
    unFollow: (userId: number)=> void
}

export const Users = (props: UsersPropsComponentType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) // Math.ceil() - округляем полученное число в большую сторону
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
                              className={props.currentPage === p ? styles.selectedPage : ''}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}>{p}</span>
                    )
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img className={styles.userPhoto}
                                 src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 alt={'My avatar'}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {

                                    unFollowAPI(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unFollow(u.id)
                                            }
                                        })
                                        .catch(error => {
                                            console.error('Error fetching users:', error);
                                        });

                                }}> Unfollow </button>

                                : <button onClick={() => {


                                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}` , {},
                                    //     {
                                    //         withCredentials: true,
                                    //         headers: {
                                    //             'API-KEY': '89840915-003b-4683-9c71-791c31d58bf4'
                                    //         }
                                    //     } ) // *** 1

                                    followAPI(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id) // *** 2
                                            }
                                        })
                                        .catch(error => {
                                            console.error('Error fetching users:', error);
                                        });

                                }}> Follow </button>

                            }

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





// ОБЪЯСНЕНИЕ:
// *** 1
// В запросе методе post принимает объект настройки в частности {withCredentials: true} как 3 параметром
// *** 2
// if (response.data.resultCode === 0) {
//      props.follow(u.id)
//  }
// если все ОК, сервер подтвердил, что произошла отписка, resultCode === 0 ответ значит все ОК,
// то мы тогда уже dispatch(им) этот callback() props.follow(u.id)

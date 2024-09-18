import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


//   --- Presentation component ---
//   Чистая презентационная компонента  Users, Ни загрязнена ничем, ни делат запросы ничего. Она чистая. Какие props(ы) пришли то и отобразила.
type UsersPropsComponentType ={
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    users: UsersType[];
    onPageChanged: (pageNumber: number) => void;
    follow: (useId: number)=> void
    unFollow: (useId: number)=> void
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
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.unFollow(u.id)
                                    }}> Unfollow </button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}> Follow </button>}

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
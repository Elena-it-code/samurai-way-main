import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"




export const Users: React.FC<UsersPropsType> = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) { // если длина массива равна 0 то только в этом случае мы будем со старта сетать user(ов). Таким образом мы избавимся от зацикливания постоянно сетать user(ов)

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })

    }
    return (
        <div>
            {
                props.usersPage.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto}
                                 src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 alt={'My avatar'}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={()=>{props.unFollow(u.id)}}> Unfollow </button >
                                    : <button onClick={()=>{props.follow(u.id)}}> Follow </button>}

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
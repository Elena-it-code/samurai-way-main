import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"
import {RootStateType} from "../../redux/store";


export class Users extends React.Component<UsersPropsType, RootStateType> {
    getUsers = () =>
    {
        if (this.props.usersPage.users.length === 0) { // если длина массива равна 0 то только в этом случае мы будем со старта сетать user(ов). Таким образом мы избавимся от зацикливания постоянно сетать user(ов)

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
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
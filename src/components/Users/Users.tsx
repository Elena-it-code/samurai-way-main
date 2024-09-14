import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css";




export const Users: React.FC<UsersPropsType> = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) { // если длина массива равна 0 то только в этом случае мы будем со старта сетать user(ов). Таким образом мы избавимся от зацикливания постоянно сетать user(ов)
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://sun9-71.userapi.com/s/v1/ig2/856OFohw01cPP6KKQIF7JwrK-nARnFHfPI1m-6_LwEuxJUsWQgEdgBfEh4HQKPu-hdY4wY3-_jmwMdI0CFVFAdvG.jpg?size=400x400&quality=96&crop=203,0,833,833&ava=1',
                    followed: false,
                    fullName: 'Sophia T.',
                    status: 'I am the Monarch of Motivation',
                    location: {country: ' Great Britain', city: 'Manchester'}
                },
                {
                    id: 2,
                    photoUrl: 'https://sun9-71.userapi.com/s/v1/ig2/856OFohw01cPP6KKQIF7JwrK-nARnFHfPI1m-6_LwEuxJUsWQgEdgBfEh4HQKPu-hdY4wY3-_jmwMdI0CFVFAdvG.jpg?size=400x400&quality=96&crop=203,0,833,833&ava=1',
                    followed: true,
                    fullName: 'Olivia S.',
                    status: 'I am the King of the Jungle',
                    location: {country: 'France', city: 'Paris'}
                },
                {
                    id: 3,
                    photoUrl: 'https://sun9-71.userapi.com/s/v1/ig2/856OFohw01cPP6KKQIF7JwrK-nARnFHfPI1m-6_LwEuxJUsWQgEdgBfEh4HQKPu-hdY4wY3-_jmwMdI0CFVFAdvG.jpg?size=400x400&quality=96&crop=203,0,833,833&ava=1',
                    followed: false,
                    fullName: 'Emma M.',
                    status: 'I am the Master of My Destiny',
                    location: {country: 'Italy', city: 'Rome'}
                },
                {
                    id: 4,
                    photoUrl: 'https://sun9-71.userapi.com/s/v1/ig2/856OFohw01cPP6KKQIF7JwrK-nARnFHfPI1m-6_LwEuxJUsWQgEdgBfEh4HQKPu-hdY4wY3-_jmwMdI0CFVFAdvG.jpg?size=400x400&quality=96&crop=203,0,833,833&ava=1',
                    followed: false,
                    fullName: 'Harper T.',
                    status: 'I am the Captain of My Soul',
                    location: {country: 'Australia', city: 'Sydney'}
                },
                {
                    id: 5,
                    photoUrl: 'https://sun9-71.userapi.com/s/v1/ig2/856OFohw01cPP6KKQIF7JwrK-nARnFHfPI1m-6_LwEuxJUsWQgEdgBfEh4HQKPu-hdY4wY3-_jmwMdI0CFVFAdvG.jpg?size=400x400&quality=96&crop=203,0,833,833&ava=1',
                    followed: true,
                    fullName: 'Mia F.',
                    status: 'I am the Czar of Confidence',
                    location: {country: 'Canada', city: 'Vancouver'}
                },
                {
                    id: 6,
                    photoUrl: 'https://sun9-71.userapi.com/s/v1/ig2/856OFohw01cPP6KKQIF7JwrK-nARnFHfPI1m-6_LwEuxJUsWQgEdgBfEh4HQKPu-hdY4wY3-_jmwMdI0CFVFAdvG.jpg?size=400x400&quality=96&crop=203,0,833,833&ava=1',
                    followed: true,
                    fullName: 'Abigail D.',
                    status: 'I am the Ruler of Resilience',
                    location: {country: 'Germany', city: 'Berlin'}
                }
            ]
        )
    }
    return (
        <div>
            {
                props.usersPage.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto}
                                 src={u.photoUrl}
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    );
}
import React from "react";
import {ProfileAPITypeProps} from "../../../redux/profile-reducer";



type ProfileInfoPropsType = {
    profile: ProfileAPITypeProps
};

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            {/*<img className={classes.fon}*/}
            {/*     src='https://images.wallpaperscraft.ru/image/single/gorod_neboskreby_most_202527_3840x2400.jpg'*/}
            {/*     alt={'fon image'}/>*/}
            {/*<div/>*/}
            {/*<div className={classes.wrapper}>*/}
            {/*    <div className={classes.block1}>*/}
            {/*        <img className={classes.avatar}*/}
            {/*             src='https://sun9-71.userapi.com/s/v1/ig2/856OFohw01cPP6KKQIF7JwrK-nARnFHfPI1m-6_LwEuxJUsWQgEdgBfEh4HQKPu-hdY4wY3-_jmwMdI0CFVFAdvG.jpg?size=400x400&quality=96&crop=203,0,833,833&ava=1'*/}
            {/*             alt={'My avatar'}/>*/}
            {/*    </div>*/}
            {/*    <div className={classes.descriptionBlock}>*/}
            {/*        <h2>Tom H.</h2>*/}
            {/*        <p>DATE OF BIRTH: 15 September</p>*/}
            {/*        <p>CITY: Hammersmith</p>*/}
            {/*        <p>EDUCATION: Drama Centre London</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<img alt={'photo profile'} src={props.profile.photos.large}/>*/}
            {/*/!*ava + description*!/*/}
            <div>
                <p>Photos:</p>
                <ul>
                    <img alt={'photo profile'} src={props.profile.photos.large}/>
                </ul>
                <h1>{props.profile.fullName}</h1>
                <p>User ID: {props.profile.userId}</p>
                <p>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</p>
                <p>Looking for a job description: {props.profile.lookingForAJobDescription}</p>
                <p>Contacts:</p>
                <ul>
                    <li>GitHub: {props.profile.contacts.github}</li>
                    <li>VK: {props.profile.contacts.vk}</li>
                    <li>Facebook: {props.profile.contacts.facebook}</li>
                    <li>Instagram: {props.profile.contacts.instagram}</li>
                    <li>Twitter: {props.profile.contacts.twitter}</li>
                    <li>Website: {props.profile.contacts.website}</li>
                    <li>YouTube: {props.profile.contacts.youtube}</li>
                    <li>Main Link: {props.profile.contacts.mainLink}</li>
                </ul>
            </div>
            </div>

    )
}

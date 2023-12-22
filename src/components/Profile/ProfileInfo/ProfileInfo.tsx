import React from "react";
import classes from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <img className={classes.fon}
                 src='https://images.wallpaperscraft.ru/image/single/gorod_neboskreby_most_202527_3840x2400.jpg'
                 alt={'fon image'}/>
            <div/>
            <div className={classes.wrapper}>
                <div className={classes.block1}>
                    <img className={classes.avatar}
                         src='https://sun9-71.userapi.com/s/v1/ig2/856OFohw01cPP6KKQIF7JwrK-nARnFHfPI1m-6_LwEuxJUsWQgEdgBfEh4HQKPu-hdY4wY3-_jmwMdI0CFVFAdvG.jpg?size=400x400&quality=96&crop=203,0,833,833&ava=1'
                         alt={'My avatar'}/>
                </div>
                <div className={classes.descriptionBlock}>
                    <h2>Tom H.</h2>
                    <p>DATE OF BIRTH: 15 September</p>
                    <p>CITY: Hammersmith</p>
                    <p>EDUCATION: Drama Centre London</p>
                </div>
            </div>
            {/*ava + description*/}
            </div>

    )
}

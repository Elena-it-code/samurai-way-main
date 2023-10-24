import React from "react";
import classes from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div><img className={classes.fon}
                      src='https://images.wallpaperscraft.ru/image/single/gorod_neboskreby_most_202527_3840x2400.jpg' alt={'fon image'}/>
                <div/>
                <div className={classes.wrapper}>
                    <div className={classes.block1}>
                        <img className={classes.avatar}
                             src='https://sun9-71.userapi.com/s/v1/ig2/856OFohw01cPP6KKQIF7JwrK-nARnFHfPI1m-6_LwEuxJUsWQgEdgBfEh4HQKPu-hdY4wY3-_jmwMdI0CFVFAdvG.jpg?size=400x400&quality=96&crop=203,0,833,833&ava=1' alt={'My avatar'}/>
                    </div>
                    <div className={classes.block2}>
                        <h2>Tom H.</h2>
                        <p>DATE OF BIRTH: 15 September</p>
                        <p>CITY: Hammersmith</p>
                        <p>EDUCATION: Drama Centre London</p>
                    </div>
                </div>
                {/*ava + description*/}
                <div>
                    <h2>My posts</h2>
                    <div>
                        <input className={classes.input} placeholder={'your news'}/>
                    </div>
                    <div>
                        <button className={classes.sendPost}>Send</button>
                    </div>
                    {/*<div>
                        New Post
                    </div>*/}
                    <div className={classes.posts}>
                        <div className={`${classes.item} ${classes.circle}`}>
                            Post 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        <div className={`${classes.item} ${classes.circle}`}>
                            Post 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

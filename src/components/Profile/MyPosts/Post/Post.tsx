import React, {FC} from "react"
import classes from "./Post.module.css";


export type PostsPropsType={
    message: string;
    likesCount: number
}
export const Post: FC<PostsPropsType> = (props) => {
    return (
        <div className={`${classes.item} ${classes.circle}`}>
            <img className={classes.avatar}
                 src='https://sun9-71.userapi.com/s/v1/ig2/856OFohw01cPP6KKQIF7JwrK-nARnFHfPI1m-6_LwEuxJUsWQgEdgBfEh4HQKPu-hdY4wY3-_jmwMdI0CFVFAdvG.jpg?size=400x400&quality=96&crop=203,0,833,833&ava=1'
                 alt={'My avatar'}/>
            {props.message}
            <div>
                <span>Like 👍: </span> {props.likesCount}
            </div>
        </div>
    )
}
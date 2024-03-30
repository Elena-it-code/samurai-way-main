import React from "react";
import {FriendsType, RootStateType, StoreType} from "../../redux/store";

type FriendsTypeProps = {
    friends: Array<FriendsType>
}

export const Friends =(props: FriendsTypeProps)=>{
    return (
        <div>
            {props.friends.map(el=>el.name)}
        </div>
    )
}
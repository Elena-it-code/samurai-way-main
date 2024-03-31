import React from "react";
import {store} from "../../redux/redux-store";
import {ActionTypes} from "redux-form";

type FriendsTypeProps = {
    /*friends: Array<FriendsType>*/
    sidebar: any
    dispatch: (action: ActionTypes) => void
}

export const Friends =(props: FriendsTypeProps)=>{
    let state = store.getState()
    return (
        <div>
            {state.sidebar.friends.map(el=>el.name)}
        </div>
    )
}
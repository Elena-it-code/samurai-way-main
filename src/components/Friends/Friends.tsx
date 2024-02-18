import React from "react";
import {RootStateType} from "../../redux/state";


export const Friends =(props: RootStateType)=>{
    return (
        <div>
            {props.state.sidebar.friends.map(el=>el.name)}
        </div>
    )
}
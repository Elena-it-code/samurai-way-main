import React from "react";
import classes from "./../Dialogs.module.css";


export type MessageTypeProps = {
    message: string
    id: number
}
export const Message = (props: MessageTypeProps) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}
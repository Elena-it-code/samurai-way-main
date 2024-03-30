import {ActionTypes, PostDataType, RootStateType} from "./store";

export const sidebarReducer = (state: RootStateType, action: ActionTypes) => {
    switch (action.type) {

        case " ": {
            return {
                ...state
            }
        }
        default:
            throw new Error("I don't understand this type")
    }}

export default sidebarReducer;


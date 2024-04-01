import {ActionTypes, FriendsTypeProps, RootStateType} from "./store";


let initialState = {
    friends: [
        {id: 1, name: 'Olga'},
        {id: 2, name: 'Artem'},
        {id: 3, name: 'Igor'},
    ]
} // начальное состояние для боковой панели

export const sidebarReducer = (state= initialState, action: ActionTypes) => {
    switch (action.type) {

        case " ": {
            return {
                ...state
            }
        }
        default:
            return state
    }}

export default sidebarReducer;


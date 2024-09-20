import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({ // по факту мы создали объект, один общий рутовый Редьюсер
    profilePage: profileReducer, // свойство profilePage и присвоили ему значение profileReducer, которе является редьюсером для страницы Profile и он отвечает за эту страницу
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


// непосредственно создаём store
export const store= createStore(rootReducer); // закомбайненные редьюсеры отдаем store
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store // глобальная область видимости мы создали. В консоли сможем видеть полностью его


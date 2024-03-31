import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const reducers = combineReducers({ // по факту мы создали объект
    profilePage: profileReducer, // свойство profilePage и присвоили ему значение profileReducer, которе является редьюсером для страницы Profile и он отвечает за эту страницу
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});


// непосредственно создаём store
export const store= createStore(reducers); // закомбайненные редьюсеры отдаем store
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof reducers>


// @ts-ignore
window.store = store // глобальная область видимости мы создали. В консоли сможем видеть полностью его


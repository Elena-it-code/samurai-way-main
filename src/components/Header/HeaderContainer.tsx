import React from "react";
import {AppRootStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import {setAuthUserData, UserDataType} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";


type MapStateToPropsType = {
    auth: UserDataType // передаем весь объект auth

    /*isAuth: boolean // либо можем только его части
    login: string | null*/
}

type MapDispatchToPropsType = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null) => void
}
export type UserDataProps = MapStateToPropsType & MapDispatchToPropsType


export class HeaderAPIContainer extends React.Component<UserDataProps> { // типизируем ProfileAPIContainer с объединенным типом MergedProps, чтобы он мог принимать как данные из Redux, так и параметры маршрута.


    // *** ОБЪЯСНЕНИЕ ***
    componentDidMount() {

        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id: userId, email, login} = data.data;
                    this.props.setAuthUserData(userId, email, login);
                }
            })
            .catch(error => { // ### 4
                console.error('Error fetching users:', error);
            });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}


// Функция mapStateToProps
// Эта функция возвращает объект. В этом объекте будут сидеть данные из стейта
let mapStateToProps = (state: AppRootStateType) => {
    return {
        auth: state.auth // Передаем весь объект auth

        /*isAuth: state.auth.isAuth, // либо можем только его части
        login: state.auth.login */
    }
}

export let HeaderContainer = connect(mapStateToProps,
    {
        setAuthUserData
    })(HeaderAPIContainer)


// *** ОБЪЯСНЕНИЕ *** :
// *** 1  Проверка статуса ответа
// Проверяем, что статус ответа равен 200 (успешный запрос).
// *** 2  Проверка resultCode:
// Проверяем, что resultCode равен 0, что означает успешное выполнение запроса.
// *** 3  Извлечение данных:
// Извлекаем id, email и login из response.data.data.
// *** 4  Обработка ошибок:
// Если resultCode не равен 0, то выведим сообщения об ошибках из response.data.messages
// *** 5  Добавили этот log() для более детальной информации


// componentDidMount() { // ### 1
//         axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}) // ### 2
//             .then(response => { // ### 3
//                 console.log('Response status:', response.status); // *** 1
//                 console.log('Response data:', response.data); // *** 2
//                 if (response.data.resultCode === 0) {
//                     let {id: userId, email, login} = response.data.data;
//                     console.log('Setting user data:', userId, email, login); // *** 3
//                     this.props.setAuthUserData(userId, email, login);
//                 } else {
//                     console.error('Error fetching user data:', response.data.messages); // *** 4
//                 }
//             })
//             .catch(error => { // ### 4
//                 console.error('Error fetching users:', error);
//                 console.error('Error details:', error.response); // *** 5
//             });
//     }
//
//
// *** ОБЪЯСНЕНИЕ *** :
// В этом коде выполняется следующая последовательность действий:
//
// ### 1. **Метод `componentDidMount()`**
//    - Это метод жизненного цикла компонента в React, который вызывается сразу после того, как компонент был добавлен
//    в DOM (т.е. после первоначального рендеринга).
//    - В данном случае, `componentDidMount` используется для выполнения асинхронного запроса к серверу сразу после того,
//    как компонент был смонтирован.
//
// ### 2. **Выполнение HTTP-запроса с помощью `axios`**
//    - `axios.get(...)` — это HTTP GET-запрос к указанному URL (`https://social-network.samuraijs.com/api/1.0/auth/me`).
//    - `withCredentials: true` — это опция, которая указывает, что запрос должен включать куки и другие учетные данные,
//    чтобы сервер мог аутентифицировать пользователя.
//
// ### 3. **Обработка ответа от сервера**
//    - `.then(response => { ... })` — это блок, который выполняется, когда запрос успешно завершается.
//    - Внутри блока проверяется, равен ли `response.data.data.resultCode` значению `0`. Если это так, значит,
//    запрос был успешным, и сервер вернул данные о пользователе.
//    - Если `resultCode` равен `0`, то из ответа извлекаются данные о пользователе (`userId`, `email`, `login`) и
//    передаются в метод `setAuthUserData`, который, вероятно, обновляет состояние компонента или сохраняет данные
//    о пользователе в глобальном состоянии (например, через Redux).
//
// ### 4. **Обработка ошибок**
//    - `.catch(error => { ... })` — это блок, который выполняется, если во время запроса произошла ошибка.
//    - Внутри блока ошибка логируется в консоль с помощью `console.error('Error fetching users:', error);`.
//
// ### Итог:
// Этот код выполняет запрос к серверу для получения данных о текущем аутентифицированном пользователе.
// Если запрос успешен, данные о пользователе сохраняются в состояние компонента или в глобальное состояние.
// Если запрос завершается с ошибкой, ошибка логируется в консоль.






import React from "react";
import {Profile} from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {ProfileAPITypeProps, setUsersProfile} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type MapStateToPropsType = {
    profilePage: {
        profile: ProfileAPITypeProps
    }
}
// Тип для mapDispatchToProps
type mapDispatchToPropsType = {
    setUsersProfile: (data: ProfileAPITypeProps)=> void
}
// Тип для пропсов компонента UsersComponentUnused
export type ProfileProps = MapStateToPropsType & mapDispatchToPropsType


//Мы создаем новый тип MergedProps, который объединяет ProfileProps и RouteComponentProps.
type MergedProps = ProfileProps & RouteComponentProps<RouteParams>; // Создание объединенного типа MergedProps:
// ОБЪЯСНЕНИЕ:
// Создание объединенного типа MergedProps:
// Мы создаем новый тип MergedProps, который объединяет ProfileProps и RouteComponentProps.
// Использование withRouter:
// Мы передаем ProfileContainer (который уже является результатом connect) в withRouter.
// Типизация ProfileAPIContainer:
// Мы типизируем ProfileAPIContainer с объединенным типом MergedProps, чтобы он мог принимать как данные из Redux, так и параметры маршрута.


// Определим тип для параметров маршрута:
type RouteParams = {
    userId: string;
}; // Используем этот тип при определении MergedProps ---> RouteComponentProps<RouteParams>


export class ProfileAPIContainer extends React.Component<MergedProps> { // типизируем ProfileAPIContainer с объединенным типом MergedProps, чтобы он мог принимать как данные из Redux, так и параметры маршрута.

    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUsersProfile(response.data);
            })
            .catch(error => { // Блок catch для обработки ошибок при выполнении запроса.
                console.error('Error fetching users:', error);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profilePage.profile} />
            </div>
        )
    }
}


let mapStateToProps = (state: AppRootStateType) => { // эта функция возвращает объект. В этом объекте будут сидеть данные из стейта. usersPage как свойство попадет в пропсы в нашу компоненту
    return {
        profilePage: {
            profile: state.profilePage.profile
        }
    }
}


let ProfileContainer = connect(mapStateToProps, {
    setUsersProfile,
})(ProfileAPIContainer);

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default WithUrlDataContainerComponent;








// ОБЪЯСНЕНИЕ, что происходит в строке `let userId = this.props.match.params.userId`.
//
// ### Объяснение:
// 1. **`this.props.match`**:
//    - `this.props.match` — это объект, который предоставляется компоненте, обернутой в `withRouter`, и содержит информацию о текущем маршруте.
//    - Этот объект содержит свойство `params`, которое представляет собой объект с параметрами маршрута, определенными в пути маршрута.
//
// 2. **`params`**:
//    - `params` — это объект, который содержит все параметры маршрута, определенные в пути маршрута. Например, если у вас есть маршрут `/profile/:userId`, то `params` будет содержать свойство `userId`, значение которого будет соответствовать значению, переданному в URL.
//
// 3. **`userId`**:
//    - `userId` — это конкретное свойство объекта `params`, которое содержит значение параметра `userId`, переданного в URL.
//
// ### Пример:
//
// Предположим, что у вас есть маршрут, определенный так:
// <Route path="/profile/:userId" component={WithUrlDataContainerComponent} />
// И пользователь переходит по URL `/profile/123`. В этом случае:
// - `this.props.match.params` будет содержать объект `{ userId: '123' }`.
// - `let userId = this.props.match.params.userId` присвоит переменной `userId` значение `'123'`.
// ### Полная строка:
// let userId = this.props.match.params.userId;
// Эта строка кода извлекает значение параметра `userId` из объекта `params`, который является частью объекта `match`, предоставленного компоненте через `withRouter`. Это значение затем используется для формирования URL запроса к API:
//
// axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
//
// ### Итог:
//
// - **`this.props.match`**: Объект, содержащий информацию о текущем маршруте.
// - **`params`**: Объект, содержащий параметры маршрута.
// - **`userId`**: Значение параметра `userId`, извлеченное из `params`.
//
// Это позволяет динамически формировать URL запроса к API на основе параметров маршрута, переданных в URL.
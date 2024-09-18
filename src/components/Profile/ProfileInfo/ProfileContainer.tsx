import React from "react";
import {Profile} from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {ProfileAPITypeProps, setUsersProfile} from "../../../redux/profile-reducer";


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


export class ProfileAPIContainer extends React.Component<ProfileProps > {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export let ProfileContainer = connect(mapStateToProps,
    {
        setUsersProfile
    })(ProfileAPIContainer);
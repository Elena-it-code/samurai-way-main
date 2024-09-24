import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '89840915-003b-4683-9c71-791c31d58bf4',
    },
})



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) { // передали 1 и 10 , по умолчанию если не передано ничего
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response => {
                return response.data;
            }));
    }
}






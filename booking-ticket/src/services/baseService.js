import Axios from "axios"
import { DOMAIN, TOKEN, TOKEN_CYBERSOFT } from '../util/settings/config'


// export const http = axios.create({
//     baseURL: `${DOMAIN}`,
//     timeout: 30000,
// })

// http.interceptors.request.use((config) => {
//     config.headers = {
//         ...config.headers,
// 'TokenCyberSoft': TOKEN_CYBERSOFT,
//         'Authorization': localStorage.getItem(TOKEN)
//     }
//     return config;
// }, (errors) => {
//     return Promise.reject(errors)
// })


export class baseService {
    //put json về phía backend
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN),
                'TokenCyberSoft': TOKEN_CYBERSOFT,
            } //JWT
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN),
                'TokenCyberSoft': TOKEN_CYBERSOFT,
            } //JWT
        })
    }


    get = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN),
                'TokenCyberSoft': TOKEN_CYBERSOFT,
            } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }

    delete = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN),
                'TokenCyberSoft': TOKEN_CYBERSOFT,
            } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
}
//redux-thunk set up trong configStore
import axios from 'axios'
import { qlyPhimService } from '../../services/QuanLyPhimService';
import { DOMAIN, TOKEN } from '../../util/settings/config';
import { SET_CAROUSEL } from './types/CarouselType';

// export const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIyOS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzIyNzIwMDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MjQxOTYwMH0.SZe3CJl1OkNH-0zfzqOV0CSC8WZ6q2hw64UykpCytT0";
// export const ACCESS_TOKEN = TOKEN;


// export const http = axios.create({
//     baseURL: `${DOMAIN}`,
//     timeout: 30000,
// })

// http.interceptors.request.use((config) => {
//     config.headers = {
//         ...config.headers,
//         'TokenCyberSoft': TOKEN_CYBERSOFT,
//         'Authorization': localStorage.getItem(ACCESS_TOKEN)
//     }
//     return config;
// }, (errors) => {
//     return Promise.reject(errors)
// })



export const getCarouselAction = async (dispatch) => {

    try {
        // const result = await http.get('/api/QuanLyPhim/LayDanhSachBanner');
        const result = await qlyPhimService.layDanhSachBanner();
        

        console.log('rs',result)


        dispatch({
            type: SET_CAROUSEL,
            arrImg: result.data.content,
        })

    } catch (error) {
        console.log('error', error);
    }


}


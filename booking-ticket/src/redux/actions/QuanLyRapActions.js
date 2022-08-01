import { qlyRapService } from "../../services/QuanLyRapService";
import {SET_HE_THONG_RAP} from "./types/QuanLyRapType";

export const layDanhSachRapAction = () => {
    return async dispatch => {
        try {
            const rs = await qlyRapService.layDanhSachRap();

            console.log('list rap', rs.data.content);
            if (rs.status === 200) {
                dispatch({
                    type: SET_HE_THONG_RAP,
                    arrRap: rs.data.content
                })
            }

        } catch (error) {
            console.log('errors', error)
        }
    }
}
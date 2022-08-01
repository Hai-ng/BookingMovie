import { qlyPhimService } from "../../services/QuanLyPhimService";
import {SET_DANH_SACH_PHIM} from './types/QuanLyPhimType';

export const layDanhSachPhimAction = () => {

    return  async (dispatch) => {
        try {
            const result = await qlyPhimService.layDanhSachPhim();
            console.log('rs danh sach phim',result)


            //sau khi lay danh sach phim từ api ve sẽ đưa -> redux(reducer)
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrMovie: result.data.content,
            })

        } catch (error) {
            console.log('error', error);
        }

    }
}
//redux-thunk set up trong configStore
import { qlyPhimService } from '../../services/QuanLyPhimService';
import { SET_CAROUSEL } from './types/CarouselType';

export const getCarouselAction =
    async (dispatch) => {
        try {
            // const result = await http.get('/api/QuanLyPhim/LayDanhSachBanner');
            const result = await qlyPhimService.layDanhSachBanner();
            console.log('rs banner',result)

            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content,
            })

        } catch (error) {
            console.log('error', error);
        }

    }


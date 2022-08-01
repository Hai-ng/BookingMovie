import { SET_HE_THONG_RAP } from "../actions/types/QuanLyRapType";

const stateDefault = {
    arrRap: [],
}

export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_HE_THONG_RAP: {
            state.arrRap = action.arrRap;
            return {...state};
        }
    
        default: return {...state}
            break;
    }

}
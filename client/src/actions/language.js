import * as api from "../api";
import { FETCH_ALL } from '../constants/actionTypes';

export const getLanguages = () => async (dispatch) => {
    try {
        const { data } = await api.getLanguages();
        dispatch({ type: FETCH_ALL, payload: data })
        
    } catch (error) {
        console.log(error);
    }
};

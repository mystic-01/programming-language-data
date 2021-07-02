import { FETCH_ALL } from '../constants/actionTypes';

const language = (language = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return [...action.payload];
        default:
            return language;
    }
};

export default language;
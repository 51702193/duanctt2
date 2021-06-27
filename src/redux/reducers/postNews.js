import { PROVINCES_CALL_SUCCESS_POST_NEWS, DISTRICTS_CALL_SUCCESS_POST_NEWS,
    WARDS_CALL_SUCCESS_POST_NEWS,
    STREETS_CALL_SUCCESS_POST_NEWS 
} from "redux/actionTypes";

const initialState = {
    districts: [],
    provinces: [],
    streets: [],
    wards: []
};

const postNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISTRICTS_CALL_SUCCESS_POST_NEWS: {
            const data = action.payload.data;
            return {
                ...state,
                districts: data
            };
        }

        case PROVINCES_CALL_SUCCESS_POST_NEWS: {
            const data = action.payload.data;
            return {
                ...state,
                provinces: data
            };
        }

        case STREETS_CALL_SUCCESS_POST_NEWS: {
            const data = action.payload.data;
            return {
                ...state,
                streets: data
            };
        }

        case WARDS_CALL_SUCCESS_POST_NEWS: {
            const data = action.payload.data;
            return {
                ...state,
                wards: data
            };
        }

        default:
            return state;
    }
};

export default postNewsReducer;
export { initialState };
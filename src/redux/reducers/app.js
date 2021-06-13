import { USER_LOGIN, USER_LOGOUT } from "redux/actionTypes";

const initialState = {
    user: {}
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN: {
            const { user } = action.payload;
            return {
                ...state,
                user: user
            };
        }

        case USER_LOGOUT: {
            const { user } = action.payload;
            return {
                ...state,
                user: {}
            };
        }

        default:
            return state;
    }
};

export default appReducer;
export { initialState };
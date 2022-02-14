import TYPES from "../const/AuthConstant";
// import { isEmpty } from "../helpers/functions";

const { USER_AUTH_SUCCESS, USER_AUTH_FAILURE, IS_LOGGING_OUT } = TYPES;

const initiaState = {
    isLoggingIn: false,
    // isProcessing: false,
    // isLoggingOut: false,
    user: {},
    error: "",
}

export const authReducer = (state = initiaState, action) => {
    switch (action.type) {
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                isLoggingIn: action.payload,
                // isLoggingIn: !isEmpty(action.payload),
                user: action.payload,
        };

        case USER_AUTH_FAILURE:
            return {
                ...state,
                error: action.payload,
        };

        case IS_LOGGING_OUT:
            return {
                ...state,
                isLoggingIn: false,
        }
        default:
        return state;
    }
}
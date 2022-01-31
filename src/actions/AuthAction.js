import { login } from "../request/AuthRequest";
import TYPES from "../const/AuthConstant"




const { USER_AUTH_SUCCESS, USER_AUTH_FAILURE, IS_LOGGING_OUT } = TYPES;

export const getUser = (data) => {
    return (dispatch) => {
        const response = login(data)
        response.then(res => {
            dispatch({ type: USER_AUTH_SUCCESS, payload:res })
            console.log(res, 'from success')
            // let token = res?.data?.data?.access_token
            // let name = res?.data?.data?.user?.name
            // localStorage.setItem('token', token)
            //localStorage.setItem('name', name)
        })
            .catch(error => {
                //console.log(error, 'from error messssss')
                dispatch({ type: USER_AUTH_FAILURE, payload: "login failed" })
            })
    }
}


export const logOut = ()=>{
    return (dispatch) =>{
        dispatch({type: IS_LOGGING_OUT, payload: true})
    }
}
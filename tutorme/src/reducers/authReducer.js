const initState = {
    authError: null,
    firebase: null,
}
const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed',
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return{
                ...state,
                authError: null,
                firebase: action.firebase,
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        default:
            return state;
    }
}

export default authReducer;
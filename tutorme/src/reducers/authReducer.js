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
        default:
            return state;
    }
}

export default authReducer;
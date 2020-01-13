export const signIn = (Credentials) =>{
    return(dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            Credentials.userEmail,
            Credentials.userPassword,
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'});
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR', err});
        });
    }
}
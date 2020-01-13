export const signIn = (Credentials) =>{
    return(dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        console.log(Credentials.userEmail);
        console.log(Credentials.userPassword);
        firebase.auth().signInWithEmailAndPassword(
           
            Credentials.userEmail,
            Credentials.userPassword,
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS', firebase});
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR', err});
        });
    }
}
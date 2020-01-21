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


export const signOut =()=>{
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: 'SGINOUT_SUCCESS'});
        })
    }
}

export const signUp =(newUser) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password,

        ).then((resp)=> {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                address: newUser.address,
                city: newUser.city,
                state: newUser.state,
                post: newUser.post,
    
            })
        }).then(()=>{
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch(err =>{
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}
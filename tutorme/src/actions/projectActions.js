export const createProject = (project) =>{
    return (dispatch, getState)=>{
        //make async data call to database
        dispatch({type:'CREATE_PROJECT', project});
    }

};
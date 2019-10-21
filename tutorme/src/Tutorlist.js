import React, {useState, useEffect} from 'react';
import './App.css';



class Tutorlist extends React.Component{
//     useEffect( {
//         fetchItems();
//     }, []);

//    const fetchItems = async() =>{
//         const data = await fetch(
//             "https://fortnite-api.theapinetwork.com/users/id?username=Ninja"
//         );
//         const items = await data.json();
//         console.log(items);
//     }
    render(){
        return(
            <div class="m-4">
                <div>
                    <img></img>
                </div>
                <div>
                    <div>
                        <label>First Name</label>
                        <label>Last Name</label>
                        <label>Reviews:</label>
                    </div>
                    
                </div>

            </div>
        );
    }
}









export default Tutorlist;
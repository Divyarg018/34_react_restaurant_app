import { useState, useEffect } from 'react';
import './Restaurant.css';

function Restaurant(props){
 

    async function getData(){
        let backend_url = 'http://localhost:3200/data';
        let response = await fetch(backend_url);

        let responseData = await response.json();
        console.log(responseData);
    }

  

    return(
        <div>
            <h1>Restaurant Component</h1>
        </div>
    );
}

export default Restaurant;
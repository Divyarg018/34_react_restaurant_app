import { useState, useEffect } from 'react';
import './Restaurant.css';

function Restaurant(props) {
    const [menuData, setMenuData] = useState({
        flag: false,
        foodData: null,
        drinkData: null
    });

    async function getData() {
        let backend_url = 'http://localhost:3200/data';
        let response = await fetch(backend_url);
        let responseData = await response.json();
        // setMenuData = {
        //     flag: true,
        //     foodData: responseData[0],
        //     drinkData: responseData[1]
        // };
    }

    useEffect(() => {
        getData();
    }, []);

    let arr = ['divya', 'archana', 'chaithanya'];
    return (
        <div>
            <h1>{ arr }</h1>
        </div>
    );
}

export default Restaurant;
import { ALL_REST } from "../src/config";
import { useState, useEffect } from "react";

const useRestaurantData = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        // API call
        getRestaurant();
    }, []);

    async function getRestaurant() {
        const data = await fetch(ALL_REST);
        const json = await data.json();
        // console.log(data);
        setAllRestaurants(json?.data?.cards);
        setFilteredRestaurant(json?.data?.cards);
    }

    return { allRestaurants, filteredRestaurant,setFilteredRestaurant };
};

export default useRestaurantData;

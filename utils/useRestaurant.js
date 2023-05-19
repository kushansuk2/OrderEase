import { useState, useEffect } from "react";
import { REST_MENU } from "../src/config";

/**
 * this file is custom hook, custom hooks are nothing but normal js function we make custom hook to make our code clear and it make code more maintainable and testable difference between normal function and hook is hooks have state inside them they handle state related logic while normal function does not have any state.
 * custom hooks let you share statefull logic but not state itself 
 */ 

const useRestaurant = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        getResInfo();
    }, []);

    const getResInfo = async () => {
        const data = await fetch(REST_MENU + resId);
        const json = await data.json();
        setResInfo(json);
        // console.log(json);
    };

    return resInfo;
};

export default useRestaurant;

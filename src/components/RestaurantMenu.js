import React, { useState, useEffect } from "react";
import { IMG_CDN_URL, REST_MENU } from "../config";
import { useParams } from "react-router-dom";
import useRestaurant from "../../utils/useRestaurant";

const RestaurantMenu = () => {
    const { resId } = useParams(); // object destructuring on the go
    // const [resInfo, setResInfo] = useState(null);

    const resInfo = useRestaurant(resId);
    

    if (!resInfo) return <>no</>;

    const info = resInfo?.data?.cards[0]?.card?.card?.info;
    const menu =
        resInfo?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards;
    // the above menu is array of objects having menu details in it we need map over it

    return (
        <div className="menu-container">
            <div>
                <h1>Restaurant ID: {resId}</h1>
                <h2>{info?.name}</h2>
                <img
                    src={IMG_CDN_URL + info?.cloudinaryImageId}
                    className="menu-image"
                />
                <h3>{info?.area}</h3>
                <h3>{info?.city}</h3>
                <h3>{info?.avgRating}</h3>
                <h3>{info?.costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul className="listed-menu">
                    {menu?.map((currMenu) => {
                        return (
                            <li key={currMenu?.card?.info?.id}>
                                {currMenu?.card?.info?.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;

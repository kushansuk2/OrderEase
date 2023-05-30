import { restrauantList } from "../config";
import SearchNotFound from "./SearchNotFound";
import ShimmerUi from "./ShimmerUi";
import RestrauntCard from "./RestrauntCard";
import { useState,lazy,Suspense } from "react";
import { Link } from "react-router-dom";
import useRestaurantData from "../../utils/useRestaurantData";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
    console.log("render");

    const [searchText, setSearchText] = useState("");
    const [display, setDisplay] = useState(false);

    const { allRestaurants, filteredRestaurant, setFilteredRestaurant } =
        useRestaurantData();

    const errorPage = () => {
        return <h1>asdasdasd</h1>;
    };
    const filterData = () => {
        const data = allRestaurants.filter((curr) => {
            return curr?.data?.data?.name
                ?.toLowerCase()
                ?.includes(searchText?.toLowerCase());
        });
        setFilteredRestaurant(data); // hooks are asyncronous it takes some time to update the value otherwise it will make the browser inactive for sometimes
        // console.log(data.length);
        // console.log(filterData.length);
        // setTimeout(1000);
        // console.log(filterData.length);

        if (data.length === 0) {
            setDisplay(true);
            // errorPage();
            // console.log("first");
            // return <h1>hello</h1>;
            //<SearchNotFound />;
        } else setDisplay(false);
    };

    const isOnline = useOnlineStatus();
    if (!isOnline) return <h1>Offline, check your internet connection</h1>;

    if (!allRestaurants) return null;

    if (allRestaurants.length === 0) {
        // this is called conditional rendering
        return <ShimmerUi />;
    }

    return (
        <>
            <div className="flex p-3 my-6 bg-pink-50 justify-center">
                <input
                    type="text"
                    className="p-3 rounded-md w-96 hover:scale-105"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                ></input>

                <button
                    className="p-3 rounded-md ml-6 bg-purple-600 hover:scale-105"
                    onClick={() => {
                        filterData();
                    }}
                >
                    Search
                </button>
            </div>

            <div className="flex flex-wrap justify-between mx-5">
                {filteredRestaurant?.map((restaurant) => {
                    return (
                        <Link
                            key={restaurant?.data?.data?.id}
                            to={"/restaurant/" + restaurant?.data?.data?.id}
                        >
                            <RestrauntCard
                                {...restaurant?.data?.data}
                                key={restaurant?.data?.data?.id}
                            />
                        </Link>
                    );
                })}
            </div>
            {display && (
                <div className="error-container">
                    <SearchNotFound />
                </div>
            )}
        </>
    );
};

export default Body;

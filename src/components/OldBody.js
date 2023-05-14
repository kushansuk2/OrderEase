import { restrauantList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

const Body = () => {

    // if i call api here it will re render for many times which is not good practice
    //     good is as in when page loads call the api
    //     two approaches
// loads api then render the page or render the shimmer ui first then load api and then rerender this is best way

// for this we will use useEffect, it calls the function whenever the the hooks wants it to be called
// component re renders when state chnages or props changes
// we pass dependency array to useEffect so it does not call this function on all re render
// when empty array is passed as dependency it calls the function just once after rendering is done at last **
// dep [] => once after intilal render make api call here
// dep [searchText] => once after initial render and then everytime after re render when searchText changes
        
    // let searchText = "KFC";
    // onChange={(e) => {
    //     searchText = e.target.value;
    // }}
    // by creating local variable we can get input from input box but it does not re renders it because react does not know that the local variable got changed
    // to solve this problem we use hooks, hooks are nothing but just a function which returns an array conataining a variable and a function to update the provided variable
    // the variable provided here is monitored by react, whenever it changes it gets re rendered this done by reconcilation algo
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restrauantList);

    const filterData = () => {
        const data = restrauantList.filter((curr) => {
            return curr.data.data.name.includes(searchText);
        });
        setRestaurants(data);
    };

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        // in onChnage we pass a function where logic is written of what to do when there is change in event here e is event
                    }}
                ></input>
                <button
                    className="search-btn"
                    onClick={() => {
                        filterData();
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restList">
                {/* <RestrauntCard restaurant={restrauantList[0]} />
            <RestrauntCard restaurant={restrauantList[1]} />
            <RestrauntCard restaurant={restrauantList[2]} /> */}
                {/* {(() => {
                const output = [];
                for (let i = 0; i < restrauantList.length; i++) {
                    output.push(
                        <RestrauntCard {...restrauantList[i]?.data?.data} />
                    );
                }
                return output;
            })()} */}
                {restaurants.map((restaurant) => {
                    return (
                        <RestrauntCard
                            {...restaurant?.data?.data}
                            key={restaurant?.data?.data?.id}
                        />
                    );
                })}
            </div>
            {/* // these are react fragment */}
        </>
    );
};

// no key <<<<<< index key << unqiue key

export default Body;

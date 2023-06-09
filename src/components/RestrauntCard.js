import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
    // destructuring on the fly instead of writting props we can destructure props -> {restaurant}
    // here props react wraps every property in props
    // ?. optional chaining
    // this look ugly props.restaurant?.data?.data?.name so do destrucute
    // we can de structure everything on the fly
    // const { name, cuisines, avgRating, cloudinaryImageId } =
    //     restaurant?.data?.data;
    return (
        <div className="card">
            <img alt="card image" src={IMG_CDN_URL + cloudinaryImageId} className="card-image"/>
            <h4 className="card-title">{name}</h4>
            <p className="card-cuisine">{cuisines?.slice(0,2)?.join(", ")}</p>
            <p className="card-rating">{avgRating} stars</p>
        </div>
    );
};

// <RestrauntCard  props/> props is properties are just passing parameters inside the function as it is functional component

// const BurgerKing = {
//     name: "Burger King",
//     image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_140,c_fill/eqir7a3dsgp63esmticd",
//     cuisines: ["Burger", "American"],
//     rating: "4.3",
// };

// const RestrauntCard = () => {
//     // this restrauant card is hardcoded, we need dynamic
//     return (
//         <div className="card">
//             <img
//                 alt="card image"
//                 src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_140,c_fill/eqir7a3dsgp63esmticd"
//             />
//             <h2>Burger King</h2>
//             <h3>Burgers, American</h3>
//             <h4>4.3 Stars</h4>
//         </div>
//     );
// };

// in real world there are so many restraunt object we get array of object making so many restraunt cards is not good

// now dynamic restraunt card looks like this dynamic ui is called config driven ui
// ui is configured by the data sent by the backend
// const RestrauntCard = () => {
//     return (
//         <div className="card">
//             <img alt="card image" src={BurgerKing.image} />
//             <h2>{BurgerKing.name}</h2>
//             <h3>{BurgerKing.cuisines.join(", ")}</h3>
//             <h4>{BurgerKing.rating}</h4>
//         </div>
//     );
// };

export default RestrauntCard;

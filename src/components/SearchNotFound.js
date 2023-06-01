import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const SearchNotFound = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>No Search Found {typeof user}</h1>
        </div>
    );
};

export default SearchNotFound;

import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "dummy name",
        email: "dummy@email.com",
    },
});

UserContext.displayName = "UserContext";

export default UserContext;

/* when nesting the context ptovider it creates empty constext for the children of it anything coming below it in the tree 
*/
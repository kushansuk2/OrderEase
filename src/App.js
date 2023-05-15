import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // named import and default import
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SearchNotFound from "./components/SearchNotFound";
import RestaurantMenu from "./components/RestaurantMenu";

// import * as xyz from "..." here xyz is an object
// in default we can     rename

// app layout component it consist of header body and footer
// app layout design
// Header
//  --Logo,NavItems,Cart
// Body
//  --SearchBar
//  --RestraunantList
//      --RestrauantCard (many cards)
//      --Image,Name,Rating,Cuisines
// Footer
//  --Links,Copyright

// react fragment is componet which can be used when we don't want extra div in dom as in jsx we are allowed to have only one parent we can also use it as <> .. </>

// to give inline css we need to create object of css like const CssObject = {..} ans pass it like this div style = {object name} {} -> inside this because we can write any code of js in it

const AppLayout = () => {
    return (
        <React.Fragment>
            <div className="main">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </React.Fragment>
    );
};

/* routing in react is done by package named as react-router-dom it is not given by react it is external package by remix for routing we import a function named as createBrowerRouter. in this finction we write appRouter configuration which means if certain path is provid in url then which component/elemet should be loaded this function  takes arr of js objects each object has path and element there is one special object which has key as errorElement which means if the path does not exist then rather then showing ugly red errors we can show our custom error page for this page create-router-dom provides a function/hook named useRouterError which has all the info about the error such as error status , stausText and many more it return an object containing all this info. Now we have created the configuration but how will react know this config file has been created and we have to render the pages according to this config. For that react-router-dom provides a component which takes this config function as props and do rendering accordingly so in root.render we render this component whose name is RouterProvider    */

const appRouter = createBrowserRouter([
    {
        errorElement: <Error />,
    },
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ],
    },
]); // here we pass config about are routing

// rendering the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

import { Outlet } from "react-router";
import React from "react";
import ProfileClass from "./ProfileClass";

const About2 = () => {
    return (
        <>
            <h1>This is Created by Kushan Sukhtankar</h1>
            <p> Hello Wordld!</p>
            <ProfileClass name="parent" />
            <ProfileClass name="child" />
            {/* here both component calls are sibling to each other so the order of execution is both render are called first and then did mount are called in order */}
        </>
    );
};

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent constructor");
    }

    async componentDidMount() {
        console.log("parent did mount");
    }

    render() {
        console.log("parent render");
        return (
            <>
                <h1>This is Created by Kushan Sukhtankar</h1>
                <p> Hello Wordld!</p>
                <ProfileClass name="child" />
            </>
        );
    }
}

export default About;

import React from "react";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props); // here we call super because we intialize props member of class to props we passed so that we can access it in constructor also
        // states are created here state is also a member
        this.state = {
            userInfo: {
                name: "",
                location: ""
            }
        }
        console.log(this.props.name + " constructor");
    }

    async componentDidMount(){ // here we call our api as it is call just once after intial render
        const data = await fetch("https://api.github.com/users/kushan23")
        const json = await data.json();
        this.setState({
            userInfo : json
        })
        console.log(json);
        console.log(this.props.name + " component did mount");
    }

    componentDidUpdate(){// called after every render expect intial render
        console.log(this.props.name + " rendering");
    }

    render() {
        // this mehtod needs to be over-ridden
        console.log(this.props.name + " rendering");
        // here props is member of class
        const {name,location,login} = this?.state?.userInfo;
        return (
            <>
                <h1>Profile class component</h1>
                <h2>{name}</h2>
                <h2>{location}</h2>
                <h2>{login}</h2>
                {/* <p>{this.state.count}</p>
                <button
                    onClick={() => {
                        this.setState({ count: 1 }); // we do not mutate state directly
                    }}
                >
                    SetCount
                </button> */}
            </>
        );
    }
}

export default ProfileClass;

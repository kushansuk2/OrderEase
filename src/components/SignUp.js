import React, { useState } from "react";
import FormInput from "./FormInput";

const SignUp = () => {
    const [values, setValues] = useState({
        // here all input fields will be stored in state object
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    // now we will create a input object which will have an array of objects each object is here info about each form field
    // in form input element has name attribute which is used to uniquely determine the that input only it is helpful to retrieve its info in backend

    const inputValues = [
        {
            id: 1,
            name: "username",
            placeholder: "username",
            label: "username",
            type: "text",
        },
        {
            id: 1,
            name: "email",
            placeholder: "email",
            label: "email",
            type: "text",
        },
        {
            id: 1,
            name: "birthday",
            placeholder: "birthday",
            label: "birthday",
            type: "text",
        },
        {
            id: 1,
            name: "password",
            placeholder: "password",
            label: "password",
            type: "text",
        },
        {
            id: 1,
            name: "consfirmPassword",
            placeholder: "consfirmPassword",
            label: "consfirmPassword",
            type: "text",
        },
    ];

    // to set values of state object we can this via setValues(key: updatedValue) we need to pass new object with updated values

    const handleValuesChange = (e) => {
        setValues({ ...values, [e.target.name]: [e.target.value] });
    };

    return (
        <div className="signup-form">
            <form>
                {inputValues.map((input) => {
                    return (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={handleValuesChange}
                        />
                    );
                })}
            </form>
        </div>
    );
};

export default SignUp;

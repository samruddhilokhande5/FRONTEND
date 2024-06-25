import React, { useEffect, useState } from "react";


const NewEmployee = () => {

    const [firstName, setFirstName] = useState("");
    const [firstNameIsValid, setFirstNameIsValid] = useState();

    const [lastName, setLastName] = useState("");
    const [lastNameIsValid, setLastNameIsValid] = useState();

    const [mobileNo, setMobileNo] = useState("");
    const [mobileNoIsValid, setMobileNoIsValid] = useState();

    const [state, setState] = useState("");
    const [stateIsValid, setStateIsValid] = useState();

    const [city, setCity] = useState("");
    const [cityIsValid, setCityIsValid] = useState();

    const [formIsValid, setFormIsValid] = useState(false);

    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
        console.log("firstNameHandler ", event.target.value);
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
        console.log("lastNameHandler", event.target.value);
    }

    const mobileNoHandler = (event) => {
        setMobileNo(event.target.value);
        console.log(" mobileNoHandler", event.target.value);
    }

    const stateHandler = (event) => {
        setState(event.target.value);
        console.log("stateHandler ", event.target.value);
    }

    const cityHandler = (event) => {
        setCity(event.target.value);
        console.log("cityHandler ", event.target.value);
    }

    const validatefirstNameHandler = () => {
        setFirstNameIsValid(firstName.matchAll('A to Z'));
    }

    const validatelastNameHandler = () => {
        setLastNameIsValid(lastName.matchAll('A to Z'));
    }

const validatemobileNoHandler = () => {

   setMobileNoIsValid (mobileNo.trim().length > 11 ? true : false);
   
}

    const validatestateHandler = () => {
        setStateIsValid(state.matchAll('A to Z'));
    }

    const validatecityHandler = () => {
        setCityIsValid(city.matchAll('A to Z'));
    }

    /*  useEffect(() => {
         console.log("firstname = " + firstName);
         console.log("lastname = " + lastName);
         console.log("mobileno = " + mobileNo);
         console.log("state = " + state);
         console.log("city = " + city);
     }, [firstName, lastName, mobileNo, state, city]); */

    return (
        <>
            <h1>I am New Employee</h1>
            <form onSubmit={async (event) => {
                event.preventDefault();
                console.log("firstname = " + firstName);
                console.log("lastname = " + lastName);
                console.log("mobileno = " + mobileNo);
                console.log("state = " + state);
                console.log("city = " + city);

                const loadData = {
                    firstName: firstName,
                    lastName: lastName,
                    mobileNo: mobileNo,
                    state: state,
                    city: city
                };

                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(loadData),
                };

                const response = await fetch(
                    'http://localhost:3002/employees',
                    requestOptions
                );

                const responseJSON = await response.json();
                console.log("data entered ", responseJSON);
                window.location.replace('http://localhost:3000/employee-list');
            }}>
               
                <label for="firstName">First Name : </label>
                <input id="firstName" name="firstName" type="text"
                    onChange={firstNameHandler} value={firstName} onBlur={validatefirstNameHandler} />
                   <br />

                <label for="lastname">LastName : </label>
                <input id="lastname" name="lastname" type="text"
                    onChange={lastNameHandler} value={lastName} onBlur={validatelastNameHandler} />
                <br />
                
                <label for="mobileNo">MobileNo : </label>
                <input id="mobileNo" name="mobileNo" type="text"
                    onChange={mobileNoHandler} value={mobileNo} onBlur={validatemobileNoHandler} />
                <br />
                <label for="state">State : </label>
                <input id="state" name="state" type="text"
                    onChange={stateHandler} value={state} onBlur={validatestateHandler} />
                <br />
                <label for="city">City : </label>
                <input id="city" name="city" type="text"
                    onChange={cityHandler} value={city} onBlur={validatecityHandler}/>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default NewEmployee;
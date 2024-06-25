import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const EditEmployee = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");

    const searchParams = new URLSearchParams(document.location.search);
    console.log(">>>>>" + searchParams.get("id"));
    const id = searchParams.get("id");

    useEffect(() => {
        console.log("firstname = " + firstName);
        console.log("lastname = " + lastName);
        console.log("mobileno = " + mobileNo);
        console.log("state = " + state);
        console.log("city = " + city);
        fetchEmployee();
    }, []);

    const fetchEmployee = async () => {
        const response = await fetch(`http://localhost:3002/employees/${id}`);
        const responseJSON = await response.json();
        console.log("Employee is ", responseJSON);
        setFirstName(responseJSON.firstName);
        setLastName(responseJSON.lastName);
        setMobileNo(responseJSON.mobileNo);
        setState(responseJSON.state);
        setCity(responseJSON.city);
    };


    return (
        <>
            <h1>I am new Employee</h1>
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
                    city: city,
                };

                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(loadData),
                };

                const response = await fetch(`http://localhost:3002/employees/${id}`,
                    requestOptions);

                const responseJSON = await response.json();
                console.log("data Entered", responseJSON);
            }}>


                <label for="firstName">FirstName : </label>
                <input id="firstName" name="firstName" type="text" value={firstName}
                    onChange={(event) => {
                        setFirstName(event.target.value);
                    }} />
                <br />
                <label for="lastname">LastName : </label>
                <input id="lastname" name="lastname" type="text" value={lastName}
                    onChange={(event) => {
                        setLastName(event.target.value);
                    }} />
                <br />
                <label for="mobileNo">MobileNo : </label>
                <input id="mobileNo" name="mobileNo" type="text" value={mobileNo}
                    onChange={(event) => {
                        setMobileNo(event.target.value);
                    }} />
                <br />
                <label for="state">State : </label>
                <input id="state" name="state" type="text" value={state}
                    onChange={(event) => {
                        setState(event.target.value);
                    }} />
                <br />
                <label for="city">City : </label>
                <input id="city" name="city" type="text" value={city}
                    onChange={(event) => {
                        setCity(event.target.value);
                    }} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default EditEmployee;
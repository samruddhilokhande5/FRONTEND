import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        data();
    }, []);

    const data = async () => {
        const response = await fetch('http://localhost:3002/employees');
        const responseJSON = await response.json();
        console.log(responseJSON);
        setEmployees(responseJSON);
    }

    return (
        <>
            <h1>I am Employee List</h1>
          
            <Link to="/new-employee">New Employee </Link>

            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>MobileNo.</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => {
                        return <tr>
                            <td>{employee._id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.mobileNo}</td>
                            <td>{employee.state}</td>
                            <td>{employee.city}</td>

                            <td><Link to={`/edit-employee?id=${employee._id}`}>Edit Employee</Link></td>

                            <td><Button variant="primary"
                                onClick={async () => {
                                    console.log(employee._id);
                                    const requestOptions = {
                                        method: 'DELETE',
                                        headers: { 'Content-Type': 'application/json' },
                                    };

                                    const response = await fetch(`http://localhost:3002/employees/${employee._id}`,
                                        requestOptions);

                                    const responseJSON = await response.json();
                                    console.log(responseJSON);
                                    data();
                                }}
                            >Delete</Button></td>
                        </tr>
                    })}
                </tbody>
            </Table>

        </>
    );
};

export default EmployeeList;
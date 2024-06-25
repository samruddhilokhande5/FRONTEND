import React from "react";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import EmployeeList from "../pages/Employee/employee-list";
import NewEmployee from "../pages/Employee/new-employee";
import EditEmployees from "../pages/Employee/edit-employee";


const MainContent =() => {
    return(
    <>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<EmployeeList />} />
                <Route path="new-employee" element={<NewEmployee />} />
                <Route path="edit-employee" element={<EditEmployees/>} />
                <Route path="employee-list" element={<EmployeeList />} />
                </Route>
            </Routes>
            
    </>
    );
};

export default MainContent;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SideBarItem = (props) => {

    return (
        <>
            <Link to={props.path}>{props.title}</Link>
        </>
    );
};

export default SideBarItem;
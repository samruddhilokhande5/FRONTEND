import React, { useState } from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';
import Header from "../Header";
import MainContent from "../MainContent";


const SideBar = () => {
   return(
   <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            <NavLink exact to="/employee-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem  icon="fa-solid fa-user">Employees</CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>

      <div className="SideContent" style={{width:"calc(100% )"}} >
      <Header />
      <MainContent/>
      </div>
    </div>
    
    );
};

export default SideBar;
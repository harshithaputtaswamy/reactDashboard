import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {  ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaGem, FaHeart, FaList, FaRegHeart, FaChartBar, FaGalacticRepublic } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiChatPrivateLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { GiShipWheel } from "react-icons/gi";
import { IoIosApps } from "react-icons/io";
import logo from "../assets/logo.png"

import 'react-pro-sidebar/dist/css/styles.css';
import '../styles/SideBar.css'

  const SideBar = () =>{
    return (
    <div id="sidebar">
      <ProSidebar collapsed={false}>
        <SidebarHeader>
          <div className="p-4 d-flex flex-row align-middle">
            <img src={logo} alt="logo" height="30" />
            <h6 style={{color: 'black', fontWeight: 700}} className="align-middle my-auto ml-3">
              Artemis
            </h6>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <p style={{fontSize: 10, margin: 5}}>MAIN</p>
            <MenuItem active={true} icon={<FiHome />}><a href="/dashboard">Dashboard</a></MenuItem>
            <MenuItem icon={<BiCog />}>Discover</MenuItem>
            <SubMenu title="Users" icon={<RiChatPrivateLine />}>
              <MenuItem icon={<BiCog />}>Sub Menu</MenuItem>
            </SubMenu>
            <SubMenu title="Documents" icon={<FaGalacticRepublic />}>
            </SubMenu>
            <SubMenu title="Applications" icon={<IoIosApps />}>
            </SubMenu>
            <SubMenu title="Pages" icon={<IoIosApps />}>
            </SubMenu>
          </Menu>
          <Menu iconShape="square" style={{marginTop: 30}}>
            <p style={{fontSize: 10, margin: 5}}>SECONDARY</p>
            <MenuItem icon={<BiCog />}>Support Center</MenuItem>
            <MenuItem icon={<BiCog />}>Inbox</MenuItem>
            <MenuItem icon={<BiCog />}>File Manager</MenuItem>
            <MenuItem icon={<BiCog />}>Data List</MenuItem>
          </Menu>
          <Menu iconShape="square" style={{marginTop: 30}}>
            <MenuItem icon={<BiCog />}>Settings</MenuItem>
            <MenuItem icon={<FiLogOut />}>Log Out</MenuItem>
          </Menu>
        </SidebarContent>
          {/* <SidebarFooter>
              <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
              </Menu>
          </SidebarFooter> */}
      </ProSidebar>
    </div>
  )
}

export default SideBar

import React from "react";
import {  ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaListUl, FaRegFile } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { BiCog, BiBook, BiFolder } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";
import { AiOutlineGlobal, AiOutlineInbox, AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineContactSupport } from "react-icons/md";
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
            <MenuItem icon={<AiOutlineGlobal />}>Discover</MenuItem>
            <SubMenu title="Users" icon={<BsPersonSquare />}>
              <MenuItem icon={<BiCog />}>Sub Menu</MenuItem>
            </SubMenu>
            <SubMenu title="Documents" icon={<BiBook />}>
            </SubMenu>
            <SubMenu title="Applications" icon={<AiOutlineAppstore />}>
            </SubMenu>
            <SubMenu title="Pages" icon={<FaRegFile />}>
            </SubMenu>
          </Menu>
          <Menu iconShape="square" style={{marginTop: 30}}>
            <p style={{fontSize: 10, margin: 5}}>SECONDARY</p>
            <MenuItem icon={<MdOutlineContactSupport />}>Support Center</MenuItem>
            <MenuItem icon={<AiOutlineInbox />}>Inbox</MenuItem>
            <MenuItem icon={<BiFolder />}>File Manager</MenuItem>
            <MenuItem icon={<FaListUl />}>Data List</MenuItem>
          </Menu>
          <Menu iconShape="square" style={{marginTop: 30}}>
            <MenuItem icon={<BiCog />}>Settings</MenuItem>
            <MenuItem icon={<FiLogOut />}>Log Out</MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  )
}

export default SideBar

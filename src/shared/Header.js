import React from 'react';
import { MDBInput } from 'mdbreact';
import { AiOutlineSetting, AiOutlineSearch } from 'react-icons/ai'
import { BiMessageAlt } from 'react-icons/bi'
import { TiBell } from 'react-icons/ti'
import { RiArrowDownSLine } from 'react-icons/ri'
import profile from '../assets/profile.png'

const Header = () =>{

  return (
    <div className="d-flex flex-row justify-content-between bg-white">
      <div className="col-5 py-3 d-flex flex-row">
        <AiOutlineSearch size={20} color="gray" className="absolute d-inline-block mr-2 mt-3"/>
        <div>
          <MDBInput label="Type to search..."/>
        </div>
      </div>
      <div className="d-flex flex-row col-4 justify-content-end my-auto">
        <div className="d-flex flex-row">
          <AiOutlineSetting size={20} color="gray" className="my-auto mx-2" />
          <BiMessageAlt size={20} color="gray" className="my-auto mx-2" />
          <TiBell size={20} color="gray" className="my-auto mx-2" />
        </div>
        <div className="d-flex flex-row">
          <div className="my-auto mx-2">
            <h6 className="m-0 p-0 small font-weight-bold my-auto">Thomas Brown</h6>
            <p className="m-0 p-0 small">Devleloper</p>
          </div>
          <div className="mx-2">
            <img src={profile} height="50" alt="profile"/>
          </div>
            <RiArrowDownSLine size={20} color="gray" className="my-auto"/>
        </div>
      </div>
    </div>
  )
}

export default Header
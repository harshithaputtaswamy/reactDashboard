import React, { useState } from 'react';
import { MDBInput, MDBProgress, MDBDataTable } from 'mdbreact';
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Select from 'react-select';
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineUpload } from 'react-icons/ai'

const Home = () =>{
  const [btnActive, setBtnActive] = useState({active: 'incoming'})
  const [data, setData] = useState({
    columns: [
      {
        label: <MDBInput label='Invoice ID' type="checkbox" id="checkbox5" style={{height: 15, width: '55%'}}/>,
        field: 'invoice',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'asc',
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
      },
      {
        label: 'Descriptions',
        field: 'descriptions',
        sort: 'asc',
      }
    ],
    rows: [
      {
        invoice: <MDBInput label="MRTYHJKL" type="checkbox" id="checkbox5" style={{height: 15, width: '50%'}}/>,
        date: '08.04.2021',
        description: 'Code 2345678',
        status: <p style={{backgroundColor: '#2ec761', padding: '5px 10px', margin: 'auto', width: 'fit-content', borderRadius: 20, color: 'white'}}>Completed</p>,
        descriptions: '$23454'
      },
      {
        invoice: <MDBInput label="MRTYHJKL" type="checkbox" id="checkbox5" style={{height: 15, width: '50%'}}/>,
        date: '08.04.2021',
        description: 'Code 2345678',
        status: <p style={{backgroundColor: '#2ec761', padding: '5px 10px', margin: 'auto', width: 'fit-content', borderRadius: 20, color: 'white'}}>Completed</p>,
        descriptions: '$23454'
      },
      {
        invoice: <MDBInput label="MRTYHJKL" type="checkbox" id="checkbox5" style={{height: 15, width: '50%'}}/>,
        date: '08.04.2021',
        description: 'Code 2345678',
        status: <p style={{backgroundColor: '#2ec761', padding: '5px 10px', margin: 'auto', width: 'fit-content', borderRadius: 20, color: 'white'}}>Completed</p>,
        descriptions: '$23454'
      },
      {
        invoice: <MDBInput label="MRTYHJKL" type="checkbox" id="checkbox5" style={{height: 15, width: '50%'}}/>,
        date: '08.04.2021',
        description: 'Code 2345678',
        status: <p style={{backgroundColor: '#2ec761', padding: '5px 10px', margin: 'auto', width: 'fit-content', borderRadius: 20, color: 'white'}}>Completed</p>,
        descriptions: '$23454'
      },
      {
        invoice: <MDBInput label="MRTYHJKL" type="checkbox" id="checkbox5" style={{height: 15, width: '50%'}}/>,
        date: '08.04.2021',
        description: 'Code 2345678',
        status: <p style={{backgroundColor: '#2ec761', padding: '5px 10px', margin: 'auto', width: 'fit-content', borderRadius: 20, color: 'white'}}>Completed</p>,
        descriptions: '$23454'
      },
      {
        invoice: <MDBInput label="MRTYHJKL" type="checkbox" id="checkbox5" style={{height: 15, width: '50%'}}/>,
        date: '08.04.2021',
        description: 'Code 2345678',
        status: <p style={{backgroundColor: '#2ec761', padding: '5px 10px', margin: 'auto', width: 'fit-content', borderRadius: 20, color: 'white'}}>Completed</p>,
        descriptions: '$23454'
      },
    ]
  })

  const barOptions = {
    chart: {
      id: "basic-bar",
      height: 50,
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      floating: true,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    },
    yaxis: {
      floating: true,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
    },
    grid: {
      show: false,
      
    },
    markers: {
      colors: ['#F44336']
    },
  }
  const barSeries = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]

  const lineSeries = [
    {
      name: "series-2",
      data: [30, 10, 50, 20, 70, 10, 40, 45, 50, 49, 60, 70, 91]
    }
  ]

  const lineOptions = {
    chart: {
      type: 'area',
      height: 50,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: '',
      align: 'left',
    },
    subtitle: {
      text: '',
      align: 'left'
    },
    yaxis: {
      floating: true,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
    },
    grid: {
      show: false
    },
    xaxis: {
      floating: true,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003]
    },
  };

  const dropDownOptions = [
    { value: 'option1', label: 'Monthly' },
    { value: 'option2', label: 'Quaterly' },
    { value: 'option3', label: 'Yearly' },
  ];

  return (
    <div className="container p-0 my-4">
      <div className="d-flex flex-row col-12">
        <div className="col-6 my-4 h-100">
          <div className="p-4 text-left bg-white mb-4">
            <div className="d-flex flex-row justify-content-between">
              <h6 className="small grey-text">Total Income</h6>
              <BsThreeDots color="gray"/>
            </div>
            <div className="d-flex flex-row align-middle">
              <h3 style={{fontWeight: 900}} className="m-0 mr-2">$123,456.78</h3>
              <p className="bg-success px-2 text-white my-auto py-1" style={{borderRadius: 15, fontSize: 10}}>+6.9%</p>
            </div>
            <MDBProgress value={75} className="my-2"/>
            <p style={{fontSize: 10}} className="grey-text">Yearly goal</p>
          </div>
          <div className="bg-white text-left p-4">
            <div className="d-flex flex-row justify-content-between">
              <h6 className="small grey-text">New Users</h6>
              <BsThreeDots color="gray"/>
            </div>
            <div className="d-flex flex-row align-middle">
              <h3 style={{fontWeight: 900}} className="m-0 mr-2">94.3%</h3>
              <p className="bg-success px-2 text-white my-auto py-1" style={{borderRadius: 15, fontSize: 10}}>+6.9%</p>
            </div>
            <div className="mixed-chart">
            <Chart
              options={barOptions}
              series={barSeries}
              type="bar"
              width="500"
              height="100"
            />
          </div>
          </div>
        </div>
        <div className="col-6 my-4">
          <div className="p-4 bg-white text-left h-100">
            <div className="d-flex flex-row justify-content-between">
              <h5 className="font-weight-bold">Balance</h5>
              <div style={{width: 150}}>
              <Select
                value={dropDownOptions[0]}
                onChange={() =>{}}
                options={dropDownOptions}
              />
              </div>
            </div>
            <hr />
            <div className="d-flex flex-row justify-content-between">
              <div className="border border-light w-50 py-2 px-3 mx-3 rounded">
                <p className="small grey-text p-0 m-0">Earnings</p>
                <div className="d-flex flex-row align-middle">
                  <h3 style={{fontWeight: 900}} className="m-0 mr-2">94.3%</h3>
                  <p className="bg-success px-2 text-white my-auto py-1" style={{borderRadius: 15, fontSize: 10}}>+6.9%</p>
                </div>
              </div>
              <div className="border border-light w-50 py-2 px-3 mx-3 rounded">
                <p className="small grey-text p-0 m-0">Sales Value</p>
                <div className="d-flex flex-row align-middle">
                  <h3 style={{fontWeight: 900}} className="m-0 mr-2">$95,333</h3>
                  <p className="bg-success px-2 text-white my-auto py-1" style={{borderRadius: 15, fontSize: 10}}>+6.9%</p>
                </div>
              </div>
            </div>
            <div id="chart">
              <ReactApexChart options={lineOptions} series={lineSeries} type="area" height="210" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 mb-5 bg-white mx-4">
        <div className="d-flex flex-row justify-content-between mb-3">
          <h6 className="font-weight-bold text-left px-4 my-auto">Recent Transactions</h6>
          <ReactHTMLTableToExcel
            id="detail_table_btn"
            className="btn btn-sm btn-primary my-auto mx-5"
            table="detail_table"
            filename="details"
            sheet="details"
            buttonText={<p className="p-0 m-0"><AiOutlineUpload size={15} className="mr-2"/>Export</p>}/>
        </div>
        <div className="d-flex flex-row">
          <button onClick={() => {setBtnActive({active: 'incoming'})}} className={"py-2 px-3 bg-transparent small custBtn" + String(btnActive["active"] === "incoming" ? 'Active' : '')} id="incoming">Incoming</button>
          <button onClick={() => {setBtnActive({active: 'invoice'})}} className={"py-2 px-3 bg-transparent small custBtn" + String(btnActive["active"] === "invoice" ? 'Active' : '')} id="invoice">Invoices</button>
        </div>
        <MDBDataTable
         id="detail_table"
          striped
          small
          data={data}
          paging={false}
          searching={false}
        />
      </div>
    </div>
  )
}

export default Home
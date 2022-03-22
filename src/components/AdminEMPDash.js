import Axios from 'axios';
import React, { useEffect, useState } from 'react';
// import React from 'react';
import { useHistory } from 'react-router-dom';
import navLogoImg from '../images/logo.png';
import userDP from '../images/user.jpg';
import AccessDenied from './AccessDenied';
import {Link} from "react-router-dom"

export default function AdminEMPDash() {
  let history = useHistory();

  // Logout Logic 
  const handleLogout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      history.push("/admin")
    }, 1000);
  }

  
// Select Cities from Texas 
const [selectState, setSelectState] = useState("");
const onClickProceed = () => {
  if (selectState === "Dallas") {
    window.location.href = "/empdallasreg"
  }

  else if (selectState === "Houston") {
    window.location.href = "/emphoustonreg"
  }
}


  // Houston Forms Map Logic 
  const [employeeUserList, setEmployeeUserList] = useState([]);
  useEffect(() => {
    Axios.get("https://directplacement.herokuapp.com/totalemployeeh").then((response) => {
      setEmployeeUserList(response.data)
    })
  }, [])


  // Dallas Forms Map Logic 
  const [employeeUserListDallas, setEmployeeUserListDallas] = useState([]);
  useEffect(() => {
    Axios.get("https://directplacement.herokuapp.com/api/authd/totalemployeed").then((response) => {
      setEmployeeUserListDallas(response.data)
    })
  }, [])

  return (
    <>
      {
        localStorage.getItem("token") ?
          <div>
            <header className="header_area" style={{ position: "sticky", borderBottom: "1px solid #00a2e5" }}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <nav className="navbar navbar-expand-lg navbar-light" style={{ display: "flex", justifyContent: "space-between" }}>


                      <a className="navbar-brand" href="/">
                        <img className='mx-3' src={navLogoImg} alt="logo" /></a>

                      <div className="social_menus ml-auto">
                        <div className="quick_info_links">
                          <ul>
                            <li>
                              <button className="btn create_btn mx-4 employee_create_btn" data-bs-toggle="modal" data-bs-target="#locationModal" ><span><ion-icon name="add-outline"></ion-icon></span>create</button>
                            </li>
                            <li>
                              <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                            </li>
                          </ul>
                        </div>
                      </div>


                    </nav>
                  </div>
                </div>
              </div >
            </header >


            < section className="dashboard_area" >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-3 tab_bg">
                    <div className="dashboard_tab sticky">

                      <div className="user_id_img">
                        <img src={userDP} alt="" />
                      </div>
                      <h3 className="user_id_name">Admin</h3>

                      <div className="tab">
                        <Link to="/admindashboard"><button className="tablinks "><b></b><b></b><span><ion-icon name="home-outline"></ion-icon></span>home</button></Link>
                        <button className="tablinks active" ><b></b><b></b><span><ion-icon name="person-outline"></ion-icon></span>employee</button>
                        {/* <button className="tablinks"><b></b><b></b><span><ion-icon name="cart-outline"></ion-icon></span>Sales</button> */}

                      </div>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="dashboard_body">
                      <div id="home" className="tabcontent" style={{ display: "block" }}>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="dash_board_title"><h2>administrator</h2></div>
                          </div>
                        </div>
                        {/* <Codes/> */}
                        <div className="dashboard_body">
                          <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">

                            <div className="home_overview">
                                <div className="over_overview_heading">
                                </div>

                                <div className="oders_bar">
                                  
                                </div>
                                <div className="your_orders">
                                  <div className="over_overview_heading d-flex justify-content-center">
                                    <h4>Total Employees</h4>
                                  </div>

                                  <div style={{ height: "18em" }} className="home_overview job_table table-responsive">
                                    <table className="table">
                                      <thead style={{ borderBottom: "2px solid #dee2e6", borderTop: "1px solid #dee2e6" }}>
                                        <tr >
                                          <th scope="col">Name</th>
                                          <th scope="col">Place</th>
                                          <th scope="col">Position</th>
                                          <th scope="col">Email</th>
                                          <th scope="col">Phone</th>
                                        </tr>
                                      </thead>

                                      {/* Houston Employee Mapping */}
                                      {employeeUserList.map((val, key) => {
                                        return (
                                          <tbody key={key}>
                                            <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                              <td>{val.name}</td>
                                              <td>{val.place}</td>
                                              <td>{val.position}</td>
                                              <td>{val.email}</td>
                                              <td>{val.phone}</td>
                                            </tr>
                                          </tbody>
                                        )
                                      })}


                                      {/* Dallas Employee Mapping  */}
                                      {employeeUserListDallas.map((val, key) => {
                                        return (
                                            <tbody key={key}>
                                            <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                              <td>{val.name}</td>
                                              <td>{val.place}</td>
                                              <td>{val.position}</td>
                                              <td>{val.email}</td>
                                              <td>{val.phone}</td>
                                            </tr>
                                          </tbody>
                                        )
                                      })}


                                    </table>
                                  </div>


                                </div>
                              </div>
                              
                            </div>
                          </div>
                        </div>

                      </div>


                      <div className='chart'>
                        {/* <LineChart/> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ section >

            {/* <!-- Location Select Modal --> */}
            <div className="modal fade" id="locationModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel" style={{ color: "#00a2e5" }}>Choose Location</h5>
                  </div>


                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Select City</label>
                      <select style={{ marginTop: "5px" }} className="form-control" id="exampleFormControlSelect1"
                        onChange={(e) => {
                          const selectedState = e.target.value;
                          setSelectState(selectedState)
                        }}
                      >
                        <option >Please select a location</option>
                        <option>Houston</option>
                        <option>Dallas</option>
                        {/* <option>Texas</option> */}
                        {selectState}
                      </select>

                    </div>
                  </div>


                  <div className="modal-footer d-flex justify-content-center">
                    <button onClick={onClickProceed} id='proceedBtn' type="button" className="btn btn-primary" >Proceed</button>
                    {/* <button id='proceedBtn' type="button" className="btn btn-primary" >Proceed</button> */}
                  </div>

                </div>
              </div>
            </div>

          </div > : <AccessDenied />}
    </>
  )
}

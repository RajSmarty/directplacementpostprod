import React, { useContext, useEffect, useState, useRef } from 'react'
// import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import navLogoImg from '../images/logo.png';
import userDP from '../images/customer2.png';
import Axios from 'axios';
import AccessDenied from './AccessDenied';
import codeContext from "../context/codes/codeContext"
import FileBase64 from 'react-file-base64';
import { createItem, getItems } from '../functions';
import Spinner from './SpinnerLogin';

export default function EmpDashboardD() {
  let history = useHistory();

  const refClose = useRef(null)
  const [spinner, setSpinner] = useState("")


  // Upload Images coding starts from here: 
  const [item, setItem] = useState({ image: '' });
  const [items, setItems] = useState([])
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setSpinner(<Spinner />);
    const result = await createItem(item);

    setItems([...items, result]);
    setTimeout(() => {
      refClose.current.click();
      setSpinner("");
    }, 0);

  }

  useEffect(() => {
    const fetchData = async () => {


      const result = await getItems();
      console.log('fetch data from', result)
      setItems(result)
    }
    fetchData()
  }, [])

  // GET EMPLOYEE DETAILS MAPPING LOGIC
  useEffect(() => {
    if (localStorage.getItem("token")) {

      getUserdDetails()
    }
    else {
      history.push("/")
    }
    // eslint-disable-next-line
  }, [])

  // LOGOUT LOGIC 
  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem("token");
    }, 0);
    history.push("/")
  }

  // VIEW ACTIVE JOB ORDERS COUNT LOGIC 
  const [activeHoustonCount, setActiveHoustonCount] = useState();
  useEffect(() => {
    const config = {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    };
    Axios.get("https://directplacement.herokuapp.com/activecount", config).then((response) => {
      setActiveHoustonCount(response.data)
    })
  }, [])

  // VIEW ACTIVE ORDERS LISTS LOGIC 
  const [activejob, setActivejob] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    };
    Axios.get("https://directplacement.herokuapp.com/activelist", config).then((response) => {
      setActivejob(response.data)
    })
  }, [])

  // VIEW TOTAL JOB ORDERS COUNT LOGIC 
  const [allOrderCount, setAllOrderCount] = useState()
  useEffect(() => {
    const config = {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    };
    Axios.get("https://directplacement.herokuapp.com/allordercount", config).then((response) => {
      setAllOrderCount(response.data)
    })
  }, [])


  // MODAL FOR VIEWING ACTIVE & CLOSED ORDERS IN DETAIL BY SELECTING ONE OF THEM
  const [selectState, setSelectState] = useState("");
  const onClickProceed = () => {
    if (selectState === "Active") {
      window.location.href = "/empactivepaged"
    }

    else if (selectState === "Closed") {
      window.location.href = "/empclosedpaged"
    }

  }

  // GET USER FORMS DETAILS MAPPING LOGIC
  useEffect(() => {
    if (localStorage.getItem("token")) {

      getCodes()
    }
    else {
      history.push("/")
    }
    // eslint-disable-next-line
  }, [])

  // STATUS CHANGE TO ACTIVE LOGIC
  const onClickActiveH = (_id) => {


    // paraStatusH.innerHTML = "Active"
    // paraStatusH.style.color = "Green"
    setTimeout(() => {

      Axios.put(`https://directplacement.herokuapp.com/updateactive/${_id}`)

    }, 1000);

  }

  // STATUS CHANGE TO CLOSED LOGIC 
  const onClickClosedH = (_id) => {

    // paraStatusH.innerHTML = "Closed"
    // paraStatusH.style.color = "Red"
    setTimeout(() => {

      Axios.put(`https://directplacement.herokuapp.com/updateclosed/${_id}`)

    }, 1000);

  }


  // CONTEXT API LOGIC

  const context = useContext(codeContext);
  const { codes, jsonD, getCodes, getUserdDetails } = context;

  return (

    <>
      {
        localStorage.getItem("token") ?
          <div>
            <form method="GET">
              <header className="header_area" style={{ position: "sticky", borderBottom: "1px solid #00a2e5" }}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12">
                      <nav className="navbar navbar-expand-lg navbar-light" style={{ display: "flex", justifyContent: "space-between" }}>
                        <a className="navbar-brand" href="/">
                          <img className='mx-3' src={navLogoImg} alt="logo" /></a>
                        {/* <button onClick={handleLogout} className="btn btn-primary mx-3">Logout</button> */}
                        {/* <button className="btn btn-primary mx-3">Logout</button> */}
                      </nav>
                    </div>
                  </div>
                </div>
              </header>


              {/* <!-- ===========dashboard body=== --> */}

              <section className="dashboard_area">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-3 tab_bg">
                      <div className="dashboard_tab sticky">

                        <div className="" data-bs-toggle="modal" data-bs-target="#changeImg" style={{ cursor: "pointer", display: "flex", flexDirection: "column-reverse" }}>
                          {items.length === 0 &&
                            <div style={{ marginTop: "1rem", marginLeft: "7.5rem", width: '100px', height: "6.25rem", borderRadius: "50%", border: "4px solid #00a2e5" }}>
                              <img style={{ borderRadius: "50%", width: "100%" }} src={userDP} alt="" />
                            </div>
                          }
                          {items?.map(item => (
                            <div key={item._id}>
                              <img className="activator" style={{ marginTop: "1rem", marginLeft: "7.5rem", width: '100px', height: "6rem", borderRadius: "50%", position: "absolute", border: "4px solid #00a2e5" }} src={item.image} alt="" />
                            </div>
                          ))}
                        </div>

                        {/* <h3 className="user_id_name">{userName}</h3> */}
                        {jsonD.map((jsonobjD) => {
                          return (
                            <>
                              <section style={{ marginTop: "8rem" }} key={jsonobjD._id} jsonobjD={jsonobjD}>
                                <div className="user_id_name" style={{ display: "flex", justifyContent: "space-between" }}>
                                  <p style={{ marginLeft: "6.5em", fontWeight: "bold" }}>{jsonobjD.name}{" "}</p>
                                  <ion-icon name="create-outline" style={{ fontSize: "20px", marginRight: "4.5em", cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#changeName"></ion-icon>
                                </div>
                                <div style={{ height: "18rem" }} className="user_designation">
                                  <p style={{ fontWeight: "bold", textAlign: "left", marginLeft: "6rem" }} className="user_position">position: <span>{jsonobjD.position}</span></p>

                                  <p style={{ fontWeight: "bold", textAlign: "left", marginLeft: "6rem" }} className="user_position">place: <span>{jsonobjD.place}</span></p>

                                </div>
                              </section>
                            </>
                          )
                        })}
                        {/* <p style={{ fontWeight: "bold" }} className="user_position">position: <span>{userPosition}</span></p> */}
                        {/* <p className="user_state">state: <span>andhrapradesh</span></p> */}
                        <div className="user_setting">

                          <h6 style={{ marginLeft: "2em" }} onClick={handleLogout}>
                            <span>
                              <ion-icon name="log-out-outline"></ion-icon>
                            </span> log out</h6>
                        </div>


                      </div>
                    </div>
                    <div className="col-sm-9">
                      <div className="dashboard_body">
                        <div className="dash_board_title">
                          <h2>dashboard</h2>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="home_overview user_dashboard">
                              <div className="over_overview_heading">
                                <h4>orders</h4>
                                <Link to="/formD" style={{ textDecoration: "none" }}><button className="btn create_btn employee_create_btn"><span>
                                  <ion-icon name="add-outline" role="img" className="md hydrated" aria-label="add outline"></ion-icon>
                                </span> create</button></Link>
                              </div>

                              <div className="user_orders_area">
                                <div className="user_oder_item" data-bs-toggle="modal" data-bs-target="#ActiveJobOrder">
                                  <div className="order_icon">
                                    <ion-icon name="hourglass-outline" role="img" className="md hydrated"
                                      aria-label="hourglass outline"></ion-icon>
                                  </div>
                                  <div className="order_content" id="active_job">
                                    <h4>active job orders</h4>
                                    <h2>{activeHoustonCount}</h2>
                                  </div>
                                </div>

                                <div className="user_oder_item user_total_order" data-bs-toggle="modal" data-bs-target="#activeClosedOrder">
                                  <div className="order_icon">
                                    <ion-icon name="layers-outline"></ion-icon>
                                  </div>
                                  <div className="order_content" id="active_job">
                                    <h4>total job orders</h4>
                                    <h2>{allOrderCount}</h2>
                                  </div>
                                </div>
                              </div>

                              <div className="filter_bar">
                                <h4>filter your table: </h4>
                                <div className="form-group categories">
                                  <select className="form-control" id="exampleFormControlSelect1">
                                    <option value="">Last 6 months</option>
                                    <option value="">Last 1 year</option>
                                    <option value="">Last 3 years</option>
                                  </select>
                                </div>
                              </div>

                              <div className="your_orders">
                                <div className="over_overview_heading">
                                  <h4>total job orders</h4>

                                </div>

                                <div className="user_table table-responsive">
                                  <table className="table">
                                    <thead style={{ borderBottom: "2px solid #dee2e6", borderTop: "1px solid #dee2e6" }}>
                                      <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Property Name</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">End Date</th>
                                        {/* <th scope="col">Emp Name</th> */}
                                        <th scope="col">Temp Phone Number</th>
                                        <th scope="col">Temp Name</th>
                                        <th scope="col">Status</th>


                                      </tr>
                                    </thead>

                                    {codes.map((code) => {
                                      return (
                                        // Codeitem  
                                        <tbody key={code._id} code={code}>
                                          <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                            <td style={{ color: "grey" }}>{code.todaydate}</td>
                                            <td>{code.propertyname}</td>
                                            <td>Dallas</td>
                                            <td>{code.phone}</td>
                                            <td>{code.enddate}</td>
                                            {/* CLIENT LAST UPDATE */}
                                            {/* {jsonD.map((jsonobjD) => {
                                              return (
                                                <>
                                                  <td key={jsonobjD._id} jsonobjD={jsonobjD}>{jsonobjD.name}{" "}</td>
                                                  <td key={jsonobjD._id} jsonobjD={jsonobjD}>{jsonobjD.phone}{" "}</td>
                                                </>
                                              )
                                            })} */}
                                            <td>{code.phoneno}</td>
                                            <td>{code.tempname}</td>

                                            {/* <td id='statusColorH' className="active_status"> */}
                                            <td>
                                              <div >
                                                <p type="text"
                                                  placeholder='Active'
                                                  style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                                >
                                                  {code.status}
                                                </p>

                                                <ul className="dropdown-menu">
                                                  <li><p onClick={() => onClickActiveH(code._id)} className="activeDesign dropdown-item"

                                                  >Active</p></li>

                                                  <li><p onClick={() => onClickClosedH(code._id)} className="closedDesign dropdown-item">Closed</p></li>
                                                </ul>

                                              </div>
                                            </td>
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
                  </div>
                </div>
              </section>



              {/* <!-- Button trigger modal --> */}

              {/* <!-- Modal --> */}
              {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel" style={{ color: "#00a2e5" }}>Choose Location</h5>
                </div>


                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Select State</label>
                    <select style={{ marginTop: "5px" }} className="form-control" id="exampleFormControlSelect1"
                      onChange={(e) => {
                        const selectedState = e.target.value;
                        setSelectState(selectedState)
                      }}
                    >
                      <option >Please select a location</option>
                      <option>Houston</option>
                      <option>Dallas</option>
                      <option>Texas</option>
                      {selectState}
                    </select>

                  </div>
                </div>


                <div className="modal-footer d-flex justify-content-center">
                  <button onClick={onClickProceed} id='proceedBtn' type="button" className="btn btn-primary" >Proceed</button>
                  <button id='proceedBtn' type="button" className="btn btn-primary" >Proceed</button>
                </div>

              </div>
            </div>
          </div> */}

            </form>

            {/* <!--Edit Name Modal --> */}
            <div className="modal fade" id="changeName" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw" }}>
                      <h5 className="modal-title" id="exampleModalLabel">Edit Name</h5>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  {/* <div className="modal-body"><input type="text" className="form-control" id="ename" name="ename" value={editName.ename} aria-describedby="emailHelp" onChange={onChange} minLength={5} required /> */}
                  <div className="modal-body"><input type="text" className="form-control" id="ename" name="ename" aria-describedby="emailHelp" minLength={5} required />
                  </div>
                  <div className="modal-footer">
                    {/* <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                    {/* <button type="button" className="btn btn-primary" onClick={handleClickEdit}>Save changes</button> */}
                  </div>
                </div>
              </div>
            </div>


            {/* <!--Edit Pic Modal --> */}
            <div className="modal fade" id="changeImg" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw" }}>
                      <h5 className="modal-title" id="exampleModalLabel">Change Profile Picture</h5>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <input type="text" className="form-control "

                        onChange={e => setItem({ ...item, title: e.target.value })}
                      />
                      <FileBase64
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setItem({ ...item, image: base64 })}
                      />

                    </form>
                  </div>
                  <div className="modal-footer">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw" }}>
                      {/* <button onClick={onFormSubmit} type="button" className="btn btn-primary" >Upload</button> */}
                      <span ref={refClose} className="" data-bs-dismiss="modal"></span>
                      <button id='uploaderBtn' style={{ display: "flex", justifyContent: "center", width: "40%" }} onClick={onSubmitHandler} type="button" className="btn btn-primary" >Upload {spinner}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* <!-- Active Order Modal --> */}
            <div className="modal fade" id="ActiveJobOrder" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

              <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                  <div className="modal-header text-center">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw" }}>
                      <h4 className="text-center" style={{ fontWeight: "bold", color: "#0a9900" }} >Total Active Orders</h4>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">











                    <div className="home_overview job_table table-responsive">
                      <table className="table">
                        <thead style={{ borderBottom: "2px solid #dee2e6", borderTop: "1px solid #dee2e6" }}>
                          <tr >
                            <th scope="col">Date</th>
                            <th scope="col">Property Name</th>
                            <th scope="col">City</th>
                            <th scope="col">Phone</th>
                            <th scope="col">End Date</th>
                            {/* <th scope="col">Emp Name</th> */}
                            <th scope="col">Temp Phone Number</th>
                            <th scope="col">Temp Name</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>

                        {/* Mapping */}
                        {activejob.map((val, key) => {
                          return (
                            <tbody key={key} >
                              <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                <td style={{ color: "grey" }}>{val.todaydate}</td>
                                <td>{val.propertyname}</td>
                                <td>Dallas</td>
                                <td>{val.phone}</td>
                                <td>{val.enddate}</td>
                                {/* {jsonD.map((jsonobjD) => {
                                  return (
                                    <>
                                      <td key={jsonobjD._id} jsonobjD={jsonobjD}>{jsonobjD.name}{" "}</td>
                                      <td key={jsonobjD._id} jsonobjD={jsonobjD}>{jsonobjD.phone}{" "}</td>
                                    </>
                                  )
                                })} */}
                                <td>{val.phoneno}</td>
                                <td>{val.tempname}</td>

                                <td id='statusColorH' className="active_status">
                                  <div >
                                    <p type="text"
                                      placeholder='Active'
                                      style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                    >
                                      {val.status}
                                    </p>

                                    <ul className="dropdown-menu">
                                      <li><p className="activeDesign dropdown-item"

                                      >Active</p></li>

                                      <li><p className="closedDesign dropdown-item">Closed</p></li>
                                    </ul>

                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          )
                        })}
                      </table>
                    </div>



                  </div>
                  <div className="modal-footer">

                  </div>
                </div>
              </div>
            </div>


            {/* Choose Active/Closed Modal  */}
            <div className="modal fade" id="activeClosedOrder" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel" style={{ color: "#00a2e5" }}>Choose Location</h5>
                  </div>


                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Select Order Type</label>
                      <select style={{ marginTop: "5px" }} className="form-control" id="exampleFormControlSelect1"
                        onChange={(e) => {
                          const selectedState = e.target.value;
                          setSelectState(selectedState)
                        }}
                      >
                        <option>Please select order type</option>
                        <option>Active</option>
                        <option>Closed</option>
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
          </div> : <AccessDenied />}
    </>
  )
}

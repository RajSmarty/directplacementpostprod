import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import navLogoImg from '../images/logo.png';
import userDP from '../images/user.jpg';
import AccessDenied from './AccessDenied';
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  let history = useHistory();

  // Logout Logic 
  const handleLogout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      history.push("/admin")
    }, 1000);
  }


  // Select Cities from Different Region 
  const [selectState, setSelectState] = useState("");
  const onClickProceed = () => {
    if (selectState === "Dallas") {
      window.location.href = "/empdallasreg"
    }

    else if (selectState === "Houston") {
      window.location.href = "/emphoustonreg"
    }

    else if (selectState === "Arkansas") {
      window.location.href = "/emparkansasreg"
    }
  }


  // ACTIVE ORDERS HOUSTON + DALLAS + ARKANSAS
  const [activeList, setActiveList] = useState([]);
  const [activeDList, setActiveDList] = useState([]);
  const [activeAList, setActiveAList] = useState([]);
  useEffect(() => {

    Axios.get("https://directplacement.herokuapp.com/api/empuserformh/activeorders").then((response) => {
      setActiveList(response.data)
    })

    Axios.get("https://directplacement.herokuapp.com/api/empuserformd/activeorders").then((response) => {
      setActiveDList(response.data)
    })

    Axios.get("https://directplacement.herokuapp.com/api/empuserforma/activeorders").then((response) => {
      setActiveAList(response.data)
    })
  }, [])


  // CLOSED ORDERS HOUSTON + DALLAS + ARKANSAS
  const [closedList, setClosedList] = useState([]);
  const [closedDList, setClosedDList] = useState([]);
  const [closedAList, setClosedAList] = useState([]);
  useEffect(() => {

    Axios.get("https://directplacement.herokuapp.com/api/empuserformh/closedorders").then((response) => {
      setClosedList(response.data)
    })

    Axios.get("https://directplacement.herokuapp.com/api/empuserformd/closedorders").then((response) => {
      setClosedDList(response.data)
    })

    Axios.get("https://directplacement.herokuapp.com/api/empuserforma/closedorders").then((response) => {
      setClosedAList(response.data)
    })
  }, [])


  // All ACTIVE ORDERS from Houston, Dallas & Arkansas
  const [activeHoustonCount, setActiveHoustonCount] = useState();
  const numActiveHouston = async () => {
    try {
      const res = await fetch("https://directplacement.herokuapp.com/api/empuserformh/activecount", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });


      const resd = await fetch("https://directplacement.herokuapp.com/api/empuserformd/activecount", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const resa = await fetch("https://directplacement.herokuapp.com/api/empuserforma/activecount", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      const datad = await resd.json();
      const dataa = await resa.json();



      setActiveHoustonCount(data + datad + dataa);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    numActiveHouston();
  });


  // All CLOSED ORDERS from Houston, Dallas & Arkansas
  const [closedHoustonCount, setClosedHoustonCount] = useState();
  const numClosedHouston = async () => {
    try {
      const res = await fetch("https://directplacement.herokuapp.com/api/empuserformh/closedcount", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const resd = await fetch("https://directplacement.herokuapp.com/api/empuserformd/closedcount", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const resa = await fetch("https://directplacement.herokuapp.com/api/empuserforma/closedcount", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });


      const data = await res.json();
      const datad = await resd.json();
      const dataa = await resa.json();

      setClosedHoustonCount(data + datad + dataa);


      // if (data === 0) {
      //   setClosedHoustonCount(datad);
      // }
      // else if (datad === 0) {
      //   setClosedHoustonCount(data);

      // }
      // else if (data && datad !== 0) {
      //   setClosedHoustonCount(data + datad);

      // }

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    numClosedHouston();
  });


  // TOTAL ORDERS from Houston, Dallas & Arkansas
  const [allOrderCount, setAllOrderCount] = useState()
  const totalOrders = async () => {

    try {
      const res = await fetch("https://directplacement.herokuapp.com/api/empuserformh/allordercount", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const resd = await fetch("https://directplacement.herokuapp.com/api/empuserformd/allordercount", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const resa = await fetch("https://directplacement.herokuapp.com/api/empuserforma/allordercount", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      const datad = await resd.json();
      const dataa = await resa.json();

      setAllOrderCount(data + datad + dataa);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    totalOrders();
  });


  // Houston Forms Map Logic 
  const [employeeUserList, setEmployeeUserList] = useState([]);
  useEffect(() => {
    Axios.get("https://directplacement.herokuapp.com/api/empuserformh/read").then((response) => {
      setEmployeeUserList(response.data)
    })
  }, [])


  // Dallas Forms Map Logic 
  const [employeeUserListDallas, setEmployeeUserListDallas] = useState([]);
  useEffect(() => {
    Axios.get("https://directplacement.herokuapp.com/api/empuserformd/read").then((response) => {
      setEmployeeUserListDallas(response.data)
    })
  }, [])

  // Arkansas Forms Map Logic 
  const [employeeUserListArkansas, setEmployeeUserListArkansas] = useState([]);
  useEffect(() => {
    Axios.get("https://directplacement.herokuapp.com/api/empuserforma/read").then((response) => {
      setEmployeeUserListArkansas(response.data)
    })
  }, [])



  // STATUS CHANGE TO ACTIVE LOGIC (HOUSTON)
  const onClickActiveH = (_id) => {

    // paraStatusH.innerHTML = "Active"
    // paraStatusH.style.color = "Green"
    setTimeout(() => {
      Axios.put(`https://directplacement.herokuapp.com/api/empuserformh/updateactiveh/${_id}`)
    }, 1000);
  }

  // STATUS CHANGE TO CLOSED LOGIC 
  const onClickClosedH = (_id) => {

    // paraStatusH.innerHTML = "Closed"
    // paraStatusH.style.color = "Red"
    setTimeout(() => {
      Axios.put(`https://directplacement.herokuapp.com/api/empuserformh/updateclosedh/${_id}`)
    }, 1000);

  }


  // STATUS CHANGE TO ACTIVE LOGIC (DALLAS)
  const onClickActiveD = (_id) => {

    setTimeout(() => {
      Axios.put(`https://directplacement.herokuapp.com/api/empuserformd/updateactived/${_id}`)
    }, 1000);
  }

  // STATUS CHANGE TO CLOSED LOGIC (DALLAS)
  const onClickClosedD = (_id) => {

    setTimeout(() => {
      Axios.put(`https://directplacement.herokuapp.com/api/empuserformd/updateclosedd/${_id}`)
    }, 1000);

  }


  // STATUS CHANGE TO ACTIVE LOGIC (ARKANSAS)
  const onClickActiveA = (_id) => {

    setTimeout(() => {
      Axios.put(`https://directplacement.herokuapp.com/api/empuserforma/updateactivea/${_id}`)
    }, 1000);
  }

  // STATUS CHANGE TO CLOSED LOGIC (ARKANSAS)
  const onClickClosedA = (_id) => {

    setTimeout(() => {
      Axios.put(`https://directplacement.herokuapp.com/api/empuserforma/updatecloseda/${_id}`)
    }, 1000);
  }

  // View Particular Houston Form Map Logic 
  // const [houstonForm, setHoustonForm] = useState([]);
  // useEffect((_id) => {
  //   Axios.get(`https://directplacement.herokuapp.com/api/empuserformh/reads/${_id}`).then((response) => {
  //     setHoustonForm(response.data)
  //   })
  // }, [])

  // View Particular Dallas Form Map Logic 
  // const [dallasForm, setDallasForm] = useState([]);
  // useEffect((_id) => {
  //   Axios.get(`https://directplacement.herokuapp.com/api/empuserformd/reads/${_id}`).then((response) => {
  //     setDallasForm(response.data)
  //   })
  // }, [])




  // const paraStatusH = document.getElementById("paraStatusH");
  // const paraStatusD = document.getElementById("paraStatusD");
  // const statusColorH = document.getElementById("statusColorH");
  // const statusColorD = document.getElementById("statusColorD");
  // let p = document.getElementsByTagName("p")


  setTimeout(() => {

    // if (paraStatusH.innerHTML === "Closed") {
    //   paraStatusH.style.color = "Red"
    // }
    // else if (paraStatusH.innerHTML === "Active") {
    //   paraStatusH.style.color = "Green"
    // }

  }, 1000);


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


            {/* < !-- =========== dashboard body === --> */}

            < section className="dashboard_area" >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-2 tab_bg">
                    <div className="dashboard_tab sticky">

                      <div className="user_id_img">
                        <img src={userDP} alt="" />
                      </div>
                      <h3 className="user_id_name">Admin</h3>

                      <div className="tab">
                        <button className="tablinks active"><b></b><b></b><span><ion-icon name="home-outline"></ion-icon></span>home</button>
                        <Link to="/adminempdash"><button className="tablinks" ><b></b><b></b><span><ion-icon name="person-outline"></ion-icon></span>employee</button></Link>
                        {/* <button className="tablinks"><b></b><b></b><span><ion-icon name="cart-outline"></ion-icon></span>Sales</button> */}

                      </div>
                    </div>
                  </div>
                  <div className="col-sm-10">
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
                                  <h4>overview</h4>
                                </div>

                                <div className="oders_bar">
                                  <div style={{ textShadow: "1px 1px 3px grey", boxShadow: "1px 1px 5px #999797" }} className="order_item active_order" data-bs-toggle="modal" data-bs-target="#ActiveJobOrder">
                                    <div className="order_icon">
                                      <ion-icon name="hourglass-outline"></ion-icon>
                                    </div>
                                    <div className="order_content" id="active_job">
                                      <h4>active job orders</h4>
                                      <h2>{activeHoustonCount}</h2>
                                    </div>
                                  </div>


                                  <div style={{ textShadow: "1px 1px 3px grey", boxShadow: "1px 1px 5px #999797" }} className="order_item closed_order" id="closed_job" data-bs-toggle="modal" data-bs-target="#ClosedJobOrder" >
                                    <div className="order_icon">
                                      <ion-icon name="checkmark-done-outline"></ion-icon>
                                    </div>
                                    <div className="order_content">
                                      <h4>closed job orders</h4>
                                      <h2>{closedHoustonCount}</h2>
                                    </div>
                                  </div>

                                  <div style={{ textShadow: "1px 1px 3px grey", boxShadow: "1px 1px 5px #999797" }} className="order_item total_order active_order_item" id="all_job" data-bs-toggle="modal" data-bs-target="#TotalJobOrdered">
                                    <div className="order_icon">
                                      <ion-icon name="layers-outline"></ion-icon>
                                    </div>
                                    <div className="order_content">
                                      <h4>total job orders</h4>
                                      <h2>{allOrderCount}</h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="your_orders">
                                  <div className="over_overview_heading">
                                    <h4>Recent job orders</h4>
                                  </div>

                                  <div style={{ height: "18em" }} className="home_overview job_table table-responsive">
                                    <table className="table">
                                      <thead style={{ borderBottom: "2px solid #dee2e6", borderTop: "1px solid #dee2e6" }}>
                                        <tr >
                                          <th scope="col">Date</th>
                                          <th scope="col">Property Name</th>
                                          <th scope="col">Place</th>
                                          <th scope="col">Phone</th>
                                          <th scope="col">End Date</th>
                                          <th scope="col">Emp Name</th>
                                          <th scope="col">Emp Phone</th>
                                          <th scope="col">Temp Name</th>
                                          <th scope="col">Status</th>
                                          <th scope="col">View Form</th>
                                        </tr>
                                      </thead>


                                      {/* Houston Employee Mapping */}
                                      {employeeUserList.map((val) => {
                                        return (
                                          <tbody key={val._id}>
                                            <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                              <td style={{ color: "grey" }}>{val.todaydate}</td>
                                              <td>{val.propertyname}</td>
                                              <td>Houston</td>
                                              <td>{val.phone}</td>
                                              <td>{val.enddate}</td>
                                              <td>Rishav</td>
                                              <td>123456789</td>
                                              <td>{val.tempname}</td>

                                              <td>
                                                <div >
                                                  <p type="text"
                                                    placeholder='Active'
                                                    style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                                  >
                                                    {val.employeeStatus}
                                                  </p>

                                                  <ul className="dropdown-menu">
                                                    <li><p onClick={() => onClickActiveH(val._id)} className="activeDesign dropdown-item"

                                                    >Active</p></li>

                                                    <li><p onClick={() => onClickClosedH(val._id)} className="closedDesign dropdown-item">Closed</p></li>
                                                  </ul>

                                                </div>
                                              </td>

                                              {/* View Form Here */}
                                              <td ><button key={val._id} data-bs-toggle="modal" data-bs-target="#formDetailH" style={{ width: "5rem", height: "1.8em", borderRadius: "20%", boxShadow: "1px 1px 4.5px #303030" }} className="btn-primary">View</button></td>
                                            </tr>
                                          </tbody>
                                        )
                                      })}


                                      {/* Dallas Employee Mapping  */}
                                      {employeeUserListDallas.map((val, key) => {
                                        return (
                                          <tbody key={key}>
                                            <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                              <td style={{ color: "grey" }}>{val.todaydate}</td>
                                              <td>{val.propertyname}</td>
                                              <td>Dallas</td>
                                              <td>{val.phone}</td>
                                              <td>{val.enddate}</td>
                                              <td>Rishav</td>
                                              <td>123456789</td>
                                              <td>{val.tempname}</td>
                                              <td>
                                                <div >
                                                  <p type="text"
                                                    placeholder='Active'
                                                    style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                                  >
                                                    {val.employeeStatus}
                                                  </p>

                                                  <ul className="dropdown-menu">
                                                    <li><p onClick={() => onClickActiveD(val._id)} className="activeDesign dropdown-item"

                                                    >Active</p></li>

                                                    <li><p onClick={() => onClickClosedD(val._id)} className="closedDesign dropdown-item">Closed</p></li>
                                                  </ul>

                                                </div>
                                              </td>

                                              {/* View Form Here */}
                                              <td><button data-bs-toggle="modal" data-bs-target="#formDetailD" style={{ width: "5rem", height: "1.8em", borderRadius: "20%", boxShadow: "1px 1px 4.5px #303030" }} className="btn-primary">View</button></td>
                                            </tr>
                                          </tbody>
                                        )
                                      })}

                                      {/* Arkansas Employee Mapping  */}
                                      {employeeUserListArkansas.map((val, key) => {
                                        return (
                                          <tbody key={key}>
                                            <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                              <td style={{ color: "grey" }}>{val.todaydate}</td>
                                              <td>{val.propertyname}</td>
                                              <td>Arkansas</td>
                                              <td>{val.phone}</td>
                                              <td>{val.enddate}</td>
                                              <td>Rishav</td>
                                              <td>123456789</td>
                                              <td>{val.tempname}</td>
                                              <td>
                                                <div >
                                                  <p type="text"
                                                    placeholder='Active'
                                                    style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                                  >
                                                    {val.employeeStatus}
                                                  </p>

                                                  <ul className="dropdown-menu">
                                                    <li><p onClick={() => onClickActiveA(val._id)} className="activeDesign dropdown-item"

                                                    >Active</p></li>

                                                    <li><p onClick={() => onClickClosedA(val._id)} className="closedDesign dropdown-item">Closed</p></li>
                                                  </ul>

                                                </div>
                                              </td>

                                              {/* View Form Here */}
                                              <td><button data-bs-toggle="modal" data-bs-target="#formDetailD" style={{ width: "5rem", height: "1.8em", borderRadius: "20%", boxShadow: "1px 1px 4.5px #303030" }} className="btn-primary">View</button></td>
                                            </tr>
                                          </tbody>
                                        )
                                      })}


                                    </table>
                                  </div>


                                </div>
                              </div>


                              <div className="home_overview product_views">
                                <div className="over_overview_heading">
                                  <h4>order views</h4>
                                  <div className="form-group categories">
                                    <select className="form-control" id="exampleFormControlSelect1">
                                      <option value="">last 7 days</option>
                                      <option value="">last 1 month</option>
                                      <option value="">last 3 months</option>
                                    </select>
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




            {/*<<<<<<<<----------ACTIVE/CLOSE/TOTAL MODALS STARTS FROM HERE:- ------------->>>>>>> */}

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
                            <th scope="col">Place</th>
                            <th scope="col">Phone</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Emp Name</th>
                            <th scope="col">Emp Phone</th>
                            <th scope="col">Temp Name</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>

                        {/* Active Houston Mapping */}
                        {activeList.map((val, key) => {
                          return (
                            <tbody key={key}>
                              <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                <td style={{ color: "grey" }}>{val.todaydate}</td>
                                <td>{val.propertyname}</td>
                                <td>Houston</td>
                                <td>{val.phone}</td>
                                <td>{val.enddate}</td>
                                <td>Rishav</td>
                                <td>123456789</td>
                                <td>{val.tempname}</td>

                                <td>
                                  <div >
                                    <p type="text"
                                      placeholder='Active'
                                      style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                    >
                                      {val.employeeStatus}
                                    </p>

                                    <ul className="dropdown-menu">
                                      <li><p onClick={() => onClickActiveH(val._id)} className="activeDesign dropdown-item"

                                      >Active</p></li>

                                      <li><p onClick={() => onClickClosedH(val._id)} className="closedDesign dropdown-item">Closed</p></li>
                                    </ul>

                                  </div>
                                </td>

                              </tr>
                            </tbody>
                          )
                        })}


                        {/* Active Dallas Mapping  */}
                        {activeDList.map((val, key) => {
                          return (
                            <tbody key={key}>
                              <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                <td style={{ color: "grey" }}>{val.todaydate}</td>
                                <td>{val.propertyname}</td>
                                <td>Dallas</td>
                                <td>{val.phone}</td>
                                <td>{val.enddate}</td>
                                <td>Rishav</td>
                                <td>123456789</td>
                                <td>{val.tempname}</td>
                                <td>
                                  <div >
                                    <p type="text"
                                      placeholder='Active'
                                      style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                    >
                                      {val.employeeStatus}
                                    </p>

                                    <ul className="dropdown-menu">
                                      <li><p onClick={() => onClickActiveD(val._id)} className="activeDesign dropdown-item"

                                      >Active</p></li>

                                      <li><p onClick={() => onClickClosedD(val._id)} className="closedDesign dropdown-item">Closed</p></li>
                                    </ul>

                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          )
                        })}

                        {/* Active Arkansas Mapping  */}
                        {activeAList.map((val, key) => {
                          return (
                            <tbody key={key}>
                              <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                <td style={{ color: "grey" }}>{val.todaydate}</td>
                                <td>{val.propertyname}</td>
                                <td>Arkansas</td>
                                <td>{val.phone}</td>
                                <td>{val.enddate}</td>
                                <td>Rishav</td>
                                <td>123456789</td>
                                <td>{val.tempname}</td>
                                <td>
                                  <div >
                                    <p type="text"
                                      placeholder='Active'
                                      style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                    >
                                      {val.employeeStatus}
                                    </p>

                                    <ul className="dropdown-menu">
                                      <li><p onClick={() => onClickActiveA(val._id)} className="activeDesign dropdown-item"

                                      >Active</p></li>

                                      <li><p onClick={() => onClickClosedA(val._id)} className="closedDesign dropdown-item">Closed</p></li>
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



            {/* <!-- Closed Order Modal --> */}
            <div className="modal fade" id="ClosedJobOrder" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

              <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                  <div className="modal-header text-center">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw" }}>
                      <h4 className="text-center" style={{ fontWeight: "bold", color: "#ff5959" }} >Total Closed Orders</h4>
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
                            <th scope="col">Place</th>
                            <th scope="col">Phone</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Emp Name</th>
                            <th scope="col">Emp Phone</th>
                            <th scope="col">Temp Name</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>

                        {/* Closed Houston Mapping */}
                        {closedList.map((val, key) => {
                          return (
                            <tbody key={key}>
                              <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                <td style={{ color: "grey" }}>{val.todaydate}</td>
                                <td>{val.propertyname}</td>
                                <td>Houston</td>
                                <td>{val.phone}</td>
                                <td>{val.enddate}</td>
                                <td>Rishav</td>
                                <td>123456789</td>
                                <td>{val.tempname}</td>

                                <td>
                                  <div >
                                    <p type="text"
                                      placeholder='Active'
                                      style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                    >
                                      {val.employeeStatus}
                                    </p>

                                    <ul className="dropdown-menu">
                                      <li><p onClick={() => onClickActiveH(val._id)} className="activeDesign dropdown-item"

                                      >Active</p></li>

                                      <li><p onClick={() => onClickClosedH(val._id)} className="closedDesign dropdown-item">Closed</p></li>
                                    </ul>

                                  </div>
                                </td>

                              </tr>
                            </tbody>
                          )
                        })}


                        {/* Closed Dallas Mapping  */}
                        {closedDList.map((val, key) => {
                          return (
                            <tbody key={key}>
                              <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                <td style={{ color: "grey" }}>{val.todaydate}</td>
                                <td>{val.propertyname}</td>
                                <td>Dallas</td>
                                <td>{val.phone}</td>
                                <td>{val.enddate}</td>
                                <td>Rishav</td>
                                <td>123456789</td>
                                <td>{val.tempname}</td>
                                <td>
                                  <div >
                                    <p type="text"
                                      placeholder='Active'
                                      style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                    >
                                      {val.employeeStatus}
                                    </p>

                                    <ul className="dropdown-menu">
                                      <li><p onClick={() => onClickActiveD(val._id)} className="activeDesign dropdown-item"

                                      >Active</p></li>

                                      <li><p onClick={() => onClickClosedD(val._id)} className="closedDesign dropdown-item">Closed</p></li>
                                    </ul>

                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          )
                        })}

                        {/* Closed Arkansas Mapping  */}
                        {closedAList.map((val, key) => {
                          return (
                            <tbody key={key}>
                              <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                <td style={{ color: "grey" }}>{val.todaydate}</td>
                                <td>{val.propertyname}</td>
                                <td>Arkansas</td>
                                <td>{val.phone}</td>
                                <td>{val.enddate}</td>
                                <td>Rishav</td>
                                <td>123456789</td>
                                <td>{val.tempname}</td>
                                <td>
                                  <div >
                                    <p type="text"
                                      placeholder='Active'
                                      style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                    >
                                      {val.employeeStatus}
                                    </p>

                                    <ul className="dropdown-menu">
                                      <li><p onClick={() => onClickActiveA(val._id)} className="activeDesign dropdown-item"

                                      >Active</p></li>

                                      <li><p onClick={() => onClickClosedA(val._id)} className="closedDesign dropdown-item">Closed</p></li>
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



            {/* <!-- Total Order Modal --> */}
            <div className="modal fade" id="TotalJobOrdered" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

              <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                  <div className="modal-header text-center">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw" }}>
                      <h4 className="text-center" style={{ fontWeight: "bold", color: "blue" }} >Total Orders</h4>
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
                            <th scope="col">Place</th>
                            <th scope="col">Phone</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Emp Name</th>
                            <th scope="col">Emp Phone</th>
                            <th scope="col">Temp Name</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>




                        {/* Houston Employee Mapping */}
                        {employeeUserList.map((val) => {
                          return (
                            <tbody key={val._id} val={val}>
                              <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                <td style={{ color: "grey" }}>{val.todaydate}</td>
                                <td>{val.propertyname}</td>
                                <td>Houston</td>
                                <td>{val.phone}</td>
                                <td>{val.enddate}</td>
                                <td>Rishav</td>
                                <td>123456789</td>
                                <td>{val.tempname}</td>

                                <td>
                                  <div >
                                    <p type="text"
                                      placeholder='Active'
                                      style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                    >
                                      {val.employeeStatus}
                                    </p>

                                    <ul className="dropdown-menu">
                                      <li><p onClick={() => onClickActiveH(val._id)} className="activeDesign dropdown-item"

                                      >Active</p></li>

                                      <li><p onClick={() => onClickClosedH(val._id)} className="closedDesign dropdown-item">Closed</p></li>
                                    </ul>

                                  </div>
                                </td>




                                {/* View Form Here */}
                                <td><button key={val._id} data-bs-toggle="modal" data-bs-target="#formDetailH" style={{ width: "5rem", height: "1.8em", borderRadius: "20%", boxShadow: "1px 1px 4.5px #303030", marginLeft: "1rem" }} className="btn-primary">View</button></td>
                                <td><button style={{ border: "0px solid white", backgroundColor: "transparent" }}><img style={{ height: "30px" }} src="https://img.icons8.com/plasticine/100/000000/filled-trash.png" alt='' /></button></td>
                              </tr>
                            </tbody>
                          )
                        })}


                        {/* Dallas Employee Mapping  */}
                        {employeeUserListDallas.map((val, key) => {
                          return (
                            <tbody key={key}>
                              <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                <td style={{ color: "grey" }}>{val.todaydate}</td>
                                <td>{val.propertyname}</td>
                                <td>Dallas</td>
                                <td>{val.phone}</td>
                                <td>{val.enddate}</td>
                                <td>Rishav</td>
                                <td>123456789</td>
                                <td>{val.tempname}</td>
                                <td>
                                  <div >
                                    <p type="text"
                                      placeholder='Active'
                                      style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                    >
                                      {val.employeeStatus}
                                    </p>

                                    <ul className="dropdown-menu">
                                      <li><p onClick={() => onClickActiveD(val._id)} className="activeDesign dropdown-item"

                                      >Active</p></li>

                                      <li><p onClick={() => onClickClosedD(val._id)} className="closedDesign dropdown-item">Closed</p></li>
                                    </ul>

                                  </div>
                                </td>


                                {/* View Form Here */}
                                <td><button data-bs-toggle="modal" data-bs-target="#formDetailD" style={{ width: "5rem", height: "1.8em", borderRadius: "20%", boxShadow: "1px 1px 4.5px #303030", marginLeft: "1rem" }} className="btn-primary">View</button></td>
                                <td><button style={{ border: "0px solid white", backgroundColor: "transparent" }}><img style={{ height: "30px" }} src="https://img.icons8.com/plasticine/100/000000/filled-trash.png" alt='' /></button></td>
                              </tr>
                            </tbody>
                          )
                        })}

                        {/* Arkansas Employee Mapping  */}
                        {employeeUserListArkansas.map((val, key) => {
                          return (
                            <tbody key={key}>
                              <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                <td style={{ color: "grey" }}>{val.todaydate}</td>
                                <td>{val.propertyname}</td>
                                <td>Arkansas</td>
                                <td>{val.phone}</td>
                                <td>{val.enddate}</td>
                                <td>Rishav</td>
                                <td>123456789</td>
                                <td>{val.tempname}</td>
                                <td>
                                  <div >
                                    <p type="text"
                                      placeholder='Active'
                                      style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                    >
                                      {val.employeeStatus}
                                    </p>

                                    <ul className="dropdown-menu">
                                      <li><p onClick={() => onClickActiveA(val._id)} className="activeDesign dropdown-item"

                                      >Active</p></li>

                                      <li><p onClick={() => onClickClosedA(val._id)} className="closedDesign dropdown-item">Closed</p></li>
                                    </ul>

                                  </div>
                                </td>


                                {/* View Form Here */}
                                <td><button data-bs-toggle="modal" data-bs-target="#formDetailD" style={{ width: "5rem", height: "1.8em", borderRadius: "20%", boxShadow: "1px 1px 4.5px #303030", marginLeft: "1rem" }} className="btn-primary">View</button></td>
                                <td><button style={{ border: "0px solid white", backgroundColor: "transparent" }}><img style={{ height: "30px" }} src="https://img.icons8.com/plasticine/100/000000/filled-trash.png" alt='' /></button></td>
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

            {/*<<<<<<<<---------- ACTIVE/CLOSE/TOTAL MODALS ENDS HERE:- ------------->>>>>>> */}







            {/* <!-- View FULL Form Details of a particular Houston User Modal --> */}
            {employeeUserList.map((val) => {
              return (
                <div key={val._id} className="modal fade" id="formDetailH" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                  <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                      <div className="modal-header text-center">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw" }}>

                          <h4 className="text-center" style={{ fontWeight: "bold" }} ><span style={{ color: "grey" }}>User: </span>{val.tempname} </h4>
                          <span className='mx-2' style={{ fontSize: "28px", marginBottom: "0.4rem", color: "#0293cf", fontWeight: "lighter" }}>|</span>
                          <h4 className="text-center" style={{ fontWeight: "bold" }} ><span style={{ color: "grey" }}> Status: </span>{val.employeeStatus}</h4>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <section className="setting_sec">
                          <div className="container">
                            <div className="setting_box">
                              <form method="POST">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">

                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Date</label>
                                        <input type="text" name='todaydate' className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field"
                                          value={val.todaydate} readOnly style={{ fontWeight: "Bold" }}

                                        />
                                      </div>

                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Staffing Manager</label>
                                        <input type="text" name='staffingmanager' className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field"
                                          value={val.staffingmanager} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>


                                  {/* Position  */}
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1" style={{ marginBottom: "3.1%" }}>Position</label>

                                        <input style={{ fontWeight: "bold" }} className="form-control setting_input" type="text" placeholder="Manager" name='hourlybillingrate' value={val.position} readOnly />
                                      </div>
                                    </div>
                                  </div>

                                  {/* Hourly Billing Rate  */}
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1" style={{ marginBottom: "3.1%" }}>Hourly Billing Rate</label>

                                        <input style={{ fontWeight: "bold" }} className="form-control setting_input" type="text" placeholder="Empty Field" name='hourlybillingrate' value={val.hourlybillingrate} readOnly />
                                      </div>
                                    </div>
                                  </div>


                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Property Name</label>
                                        <input name='propertyname' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.propertyname} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Property Address</label>
                                        <input name='propertyaddress' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.propertyaddress} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">

                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Phone No</label>
                                        <input name='phone' type="text"
                                          className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.phone} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>

                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">FAX No</label>
                                        <input name='fax' type="number" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.fax} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>

                                    </div>
                                  </div>
                                </div>

                                <div className="Manager_area mt-5"></div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Management Company Name</label>
                                        <input name='managementcompanyname' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Management Company Name" value={val.managementcompanyname} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Billing E-mail Address</label>
                                        <input name='billingemailaddress' type="email" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Billing E-mail Address" value={val.billingemailaddress} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Manager's Name/Who Ordered Temp</label>
                                        <input name='managernamewhoorderedtemp' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.managernamewhoorderedtemp} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Manager's E-mail Address</label>
                                        <input name='manageremailaddress' type="email" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.manageremailaddress} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleFormControlSelect1">Property Grade</label>
                                        <input className="form-control setting_input" type="text" name="propertygrade" id="propertygrade" placeholder="Empty Field" value={val.propertygrade} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Number of Units</label>
                                        <input name='numberofunits' type="email" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.numberofunits} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Bilingual</label>
                                        <input className="form-control setting_input" type="text" name="bilingual" id="bilingual" placeholder="Empty Field" value={val.bilingual} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Software</label>
                                        <input name='software' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.software} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Permanent Pay Rate</label>
                                        <input name='permanentpayrate' type="email" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.permanentpayrate} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleFormControlSelect1">Tax Credit</label>
                                        <input className="form-control setting_input" type="text" name="taxcredit" id="taxcredit" placeholder="Empty Field" value={val.taxcredit} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleFormControlSelect1">Type of Assignment</label>
                                        <input className="form-control setting_input" type="text" name="typeofassignment" id="typeofassignment" placeholder="Empty Field" value={val.typeofassignment} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">EPA Certified</label>
                                        <input className="form-control setting_input" type="text" name="epacertified" id="epacertified" placeholder="Empty Field" value={val.epacertified} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Temp's Name</label>
                                        <input type="text" name='tempname' className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field"
                                          value={val.tempname} readOnly style={{ fontWeight: "Bold" }}
                                        />
                                      </div>
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Phone No</label>
                                        <input name='phoneno' type="number" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.phoneno} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Temporaray Pay Rate</label>
                                        <input name='temporaraypayrate' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.temporaraypayrate} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Start Date</label>
                                        <input name='startdate' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.startdate} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">End Date</label>
                                        <input name='enddate' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.enddate} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-sm-12">
                                    <div className="setting_area">
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleFormControlTextarea1">Your Message(Optional)</label>
                                        <textarea name='yourmessage' className="form-control setting_input" id="exampleFormControlTextarea1" rows="4"
                                          placeholder="Empty Field" value={val.yourmessage} readOnly style={{ fontWeight: "Bold" }}></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </section>
                      </div>

                      <div className="modal-footer">

                      </div>
                    </div>
                  </div>
                </div>
              )
            })}


            {/* <!-- View FULL Form Details of a particular Dallas User Modal --> */}
            {employeeUserListDallas.map((val) => {
              return (
                <div key={val._id} className="modal fade" id="formDetailD" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                  <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                      <div className="modal-header text-center">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw" }}>

                          <h4 className="text-center" style={{ fontWeight: "bold" }} ><span style={{ color: "grey" }}>User: </span>{val.tempname} </h4>
                          <span className='mx-2' style={{ fontSize: "28px", marginBottom: "0.4rem", color: "#0293cf", fontWeight: "lighter" }}>|</span>
                          <h4 className="text-center" style={{ fontWeight: "bold" }} ><span style={{ color: "grey" }}> Status: </span>{val.employeeStatus}</h4>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <section className="setting_sec">
                          <div className="container">
                            <div className="setting_box">
                              <form method="POST">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">

                                      {/* <form> */}
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Date</label>
                                        <input type="text" name='todaydate' className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field"
                                          value={val.todaydate} readOnly style={{ fontWeight: "Bold" }}

                                        />
                                      </div>

                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Staffing Manager</label>
                                        <input type="text" name='staffingmanager' className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field"
                                          value={val.staffingmanager} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* <div className="form-group" style={{ marginTop: "3%" }}>
                      <label htmlFor="exampleInputEmail1" style={{ marginBottom: "3.1%" }}>Hourly Billing Rate</label> */}
                                      {/* <input type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="" onChange={handleOnChange} readonly="readonly" value={text1} /> */}

                                      {/* <input style={{ fontWeight: "bold", color: "#7d7d7d", backgroundColor: "white" }} className="form-control setting_input" type="text" placeholder="" name='hourlybillingrate'  readOnly />
                    </div> */}
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Property Name</label>
                                        <input name='propertyname' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.propertyname} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Property Address</label>
                                        <input name='propertyaddress' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.propertyaddress} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}

                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Phone No</label>
                                        <input name='phone' type="text"
                                          className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.phone} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>

                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">FAX No</label>
                                        <input name='fax' type="number" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.fax} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>

                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>

                                <div className="Manager_area mt-5"></div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Management Company Name</label>
                                        <input name='managementcompanyname' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Management Company Name" value={val.managementcompanyname} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Billing E-mail Address</label>
                                        <input name='billingemailaddress' type="email" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Billing E-mail Address" value={val.billingemailaddress} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Manager's Name/Who Ordered Temp</label>
                                        <input name='managernamewhoorderedtemp' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.managernamewhoorderedtemp} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Manager's E-mail Address</label>
                                        <input name='manageremailaddress' type="email" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.manageremailaddress} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleFormControlSelect1">Property Grade</label>
                                        <input className="form-control setting_input" type="text" name="propertygrade" id="propertygrade" placeholder="Empty Field" value={val.propertygrade} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Number of Units</label>
                                        <input name='numberofunits' type="email" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.numberofunits} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Bilingual</label>
                                        <input className="form-control setting_input" type="text" name="bilingual" id="bilingual" placeholder="Empty Field" value={val.bilingual} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Software</label>
                                        <input name='software' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.software} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Permanent Pay Rate</label>
                                        <input name='permanentpayrate' type="email" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.permanentpayrate} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleFormControlSelect1">Tax Credit</label>
                                        <input className="form-control setting_input" type="text" name="taxcredit" id="taxcredit" placeholder="Empty Field" value={val.taxcredit} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleFormControlSelect1">Type of Assignment</label>
                                        <input className="form-control setting_input" type="text" name="typeofassignment" id="typeofassignment" placeholder="Empty Field" value={val.typeofassignment} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">EPA Certified</label>
                                        <input className="form-control setting_input" type="text" name="epacertified" id="epacertified" placeholder="Empty Field" value={val.epacertified} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Temp's Name</label>
                                        <input type="text" name='tempname' className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field"
                                          value={val.tempname} readOnly style={{ fontWeight: "Bold" }}
                                        // value={userData.temp}
                                        // onChange={handleInputs}
                                        />
                                      </div>
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Phone No</label>
                                        <input name='phoneno' type="number" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.phoneno} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Temporaray Pay Rate</label>
                                        <input name='temporaraypayrate' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.temporaraypayrate} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Start Date</label>
                                        <input name='startdate' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.startdate} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">End Date</label>
                                        <input name='enddate' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.enddate} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-12">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleFormControlTextarea1">Your Message(Optional)</label>
                                        <textarea name='yourmessage' className="form-control setting_input" id="exampleFormControlTextarea1" rows="4"
                                          placeholder="Empty Field" value={val.yourmessage} readOnly style={{ fontWeight: "Bold" }}></textarea>
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </section>




                      </div>

                      <div className="modal-footer">

                      </div>
                    </div>
                  </div>
                </div>
              )
            })}


            {/* <!-- View FULL Form Details of a particular Arkansas User Modal --> */}
            {employeeUserListArkansas.map((val) => {
              return (
                <div key={val._id} className="modal fade" id="formDetailD" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                  <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                      <div className="modal-header text-center">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw" }}>

                          <h4 className="text-center" style={{ fontWeight: "bold" }} ><span style={{ color: "grey" }}>User: </span>{val.tempname} </h4>
                          <span className='mx-2' style={{ fontSize: "28px", marginBottom: "0.4rem", color: "#0293cf", fontWeight: "lighter" }}>|</span>
                          <h4 className="text-center" style={{ fontWeight: "bold" }} ><span style={{ color: "grey" }}> Status: </span>{val.employeeStatus}</h4>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <section className="setting_sec">
                          <div className="container">
                            <div className="setting_box">
                              <form method="POST">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">

                                      {/* <form> */}
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Date</label>
                                        <input type="text" name='todaydate' className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field"
                                          value={val.todaydate} readOnly style={{ fontWeight: "Bold" }}

                                        />
                                      </div>

                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Staffing Manager</label>
                                        <input type="text" name='staffingmanager' className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field"
                                          value={val.staffingmanager} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* <div className="form-group" style={{ marginTop: "3%" }}>
                      <label htmlFor="exampleInputEmail1" style={{ marginBottom: "3.1%" }}>Hourly Billing Rate</label> */}
                                      {/* <input type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="" onChange={handleOnChange} readonly="readonly" value={text1} /> */}

                                      {/* <input style={{ fontWeight: "bold", color: "#7d7d7d", backgroundColor: "white" }} className="form-control setting_input" type="text" placeholder="" name='hourlybillingrate'  readOnly />
                    </div> */}
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Property Name</label>
                                        <input name='propertyname' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.propertyname} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Property Address</label>
                                        <input name='propertyaddress' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.propertyaddress} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}

                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Phone No</label>
                                        <input name='phone' type="text"
                                          className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.phone} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>

                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">FAX No</label>
                                        <input name='fax' type="number" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.fax} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>

                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>

                                <div className="Manager_area mt-5"></div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Management Company Name</label>
                                        <input name='managementcompanyname' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Management Company Name" value={val.managementcompanyname} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Billing E-mail Address</label>
                                        <input name='billingemailaddress' type="email" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Billing E-mail Address" value={val.billingemailaddress} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Manager's Name/Who Ordered Temp</label>
                                        <input name='managernamewhoorderedtemp' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.managernamewhoorderedtemp} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Manager's E-mail Address</label>
                                        <input name='manageremailaddress' type="email" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.manageremailaddress} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleFormControlSelect1">Property Grade</label>
                                        <input className="form-control setting_input" type="text" name="propertygrade" id="propertygrade" placeholder="Empty Field" value={val.propertygrade} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Number of Units</label>
                                        <input name='numberofunits' type="email" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.numberofunits} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Bilingual</label>
                                        <input className="form-control setting_input" type="text" name="bilingual" id="bilingual" placeholder="Empty Field" value={val.bilingual} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Software</label>
                                        <input name='software' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.software} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Permanent Pay Rate</label>
                                        <input name='permanentpayrate' type="email" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.permanentpayrate} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleFormControlSelect1">Tax Credit</label>
                                        <input className="form-control setting_input" type="text" name="taxcredit" id="taxcredit" placeholder="Empty Field" value={val.taxcredit} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleFormControlSelect1">Type of Assignment</label>
                                        <input className="form-control setting_input" type="text" name="typeofassignment" id="typeofassignment" placeholder="Empty Field" value={val.typeofassignment} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-4">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">EPA Certified</label>
                                        <input className="form-control setting_input" type="text" name="epacertified" id="epacertified" placeholder="Empty Field" value={val.epacertified} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Temp's Name</label>
                                        <input type="text" name='tempname' className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field"
                                          value={val.tempname} readOnly style={{ fontWeight: "Bold" }}
                                        // value={userData.temp}
                                        // onChange={handleInputs}
                                        />
                                      </div>
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Phone No</label>
                                        <input name='phoneno' type="number" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.phoneno} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Temporaray Pay Rate</label>
                                        <input name='temporaraypayrate' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.temporaraypayrate} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-6">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">Start Date</label>
                                        <input name='startdate' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.startdate} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1">End Date</label>
                                        <input name='enddate' type="text" className="form-control setting_input" id="exampleInputEmail1"
                                          aria-describedby="emailHelp" placeholder="Empty Field" value={val.enddate} readOnly style={{ fontWeight: "Bold" }} />
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>

                                  <div className="col-sm-12">
                                    <div className="setting_area">
                                      {/* <form> */}
                                      <div className="form-group mt-3">
                                        <label htmlFor="exampleFormControlTextarea1">Your Message(Optional)</label>
                                        <textarea name='yourmessage' className="form-control setting_input" id="exampleFormControlTextarea1" rows="4"
                                          placeholder="Empty Field" value={val.yourmessage} readOnly style={{ fontWeight: "Bold" }}></textarea>
                                      </div>
                                      {/* </form> */}
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </section>




                      </div>

                      <div className="modal-footer">

                      </div>
                    </div>
                  </div>
                </div>
              )
            })}



            {/* <!-- Location Select Modal --> */}
            <div className="modal fade" id="locationModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel" style={{ color: "#00a2e5" }}>Choose Location</h5>
                  </div>


                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Select Region</label>
                      <select style={{ marginTop: "5px" }} className="form-control" id="exampleFormControlSelect1"
                        onChange={(e) => {
                          const selectedState = e.target.value;
                          setSelectState(selectedState)
                        }}
                      >
                        <option >Please select a location</option>
                        <option>Houston</option>
                        <option>Dallas</option>
                        <option>Arkansas</option>
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

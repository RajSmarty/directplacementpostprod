import React, { useEffect, useState } from 'react';
import Axios from 'axios';


export default function EmpClosedD() {

    useEffect(() => {
        const config = {
            headers: {
                "auth-token": localStorage.getItem("token"),
            },
        };
        Axios.get("https://directplacement.herokuapp.com/closedlist", config).then((response) => {
            setEmployeeUserList(response.data)
        })
    }, [])

    const [employeeUserList, setEmployeeUserList] = useState([]);

    return (
        <div>
            <div className="container mt-4">

                <div className="home_overview job_table table-responsive">
                    <h1 className='text-center mb-4'>Total Closed Orders</h1>
                    <table className="table">
                        <thead style={{ borderBottom: "2px solid #dee2e6", borderTop: "1px solid #dee2e6" }}>
                            <tr >
                                <th scope="col">Date</th>
                                <th scope="col">Property Name</th>
                                <th scope="col">City</th>
                                <th scope="col">Phone</th>
                                <th scope="col">End Date</th>
                                <th scope="col">Temp Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>

                        {/* Active Mapping */}
                        {employeeUserList.map((val, key) => {
                            return (
                                <tbody key={key}>
                                    <tr style={{ fontWeight: "bold", color: "#141414" }}>
                                        <td style={{ color: "grey" }}>{val.todaydate}</td>
                                        <td>{val.propertyname}</td>
                                        <td>Dallas</td>
                                        <td>{val.phone}</td>
                                        <td>{val.enddate}</td>
                                        <td>{val.tempname}</td>

                                        <td id='statusColorH' className="deactive_status">
                                            <div >
                                                <p id='paraStatusH' type="text"
                                                    placeholder='Active'
                                                    style={{ cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false"

                                                >
                                                    {val.status}
                                                </p>

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
    )
}

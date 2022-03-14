import Axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Backend() {

    useEffect(() => {
        Axios.get("http://localhost:5000/api/codes/read").then((response) => {
            setEmployeeList(response.data)
        })
    }, [])


    const addToList = () => {
        Axios.post("http://localhost:5000/api/codes/insert", {
            employee: employee,
            employeeNum: employeeNum
        });
    };

    const updateEmployee = (id) => {
        Axios.put("http://localhost:5000/api/codes/update", {
            id: id,
            newEmployee: newEmployee
        })
    }


    const deleteEmployee = (id) => {
        Axios.delete(`http://localhost:5000/api/codes/delete/${id}`);
    }

    



    const [employee, setEmployee] = useState("")
    const [employeeNum, setEmployeeNum] = useState(0)
    const [employeeList, setEmployeeList] = useState([])
    const [newEmployee, setNewEmployee] = useState("")



    return (
        <div className='container'>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", alignItems: "center" }}>
                {/* <h1 className='text-center'>CRUD APP</h1> */}

                <label htmlFor='Employee'></label>
                <input className='mt-2' type="text" onChange={(event) => {
                    setEmployee(event.target.value)
                }} />

                <label htmlFor='Employee ID'></label>
                <input className='mt-2' type="number" onChange={(event) => {
                    setEmployeeNum(event.target.value)
                }} />

                <button onClick={addToList} className='mt-2 btn btn-primary'>Submit</button>

                <hr />


                <h4>Backend Database Data</h4>

                {employeeList.map((val, key) => {
                    return (
                        <div className='mb-1' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid red", width: "15rem", backgroundColor: "pink" }} key={key}>
                            <p>{val.employee}</p>
                            <p>{val.employeeNum}</p>
                            <div style={{ display: "flex" }}>
                                <input style={{ width: "75%" }} type="text"
                                    onChange={(event) => {
                                        setNewEmployee(event.target.value)
                                    }} />
                                <button onClick={()=> updateEmployee(val._id)} className='mx-3'>Update</button>
                            </div>
                            <button onClick={()=> deleteEmployee(val._id)} className='mt-1 btn-primary'>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

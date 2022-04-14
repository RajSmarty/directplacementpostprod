import codeContext from "./codeContext";
import { useState } from "react";

const Codestate = (props) => {
  const host = "https://directplacement.herokuapp.com"
  const codesInitial = []
  const [codes, setCodes] = useState(codesInitial)
  const [json, setJson] = useState(codesInitial)
  const [jsonD, setJsonD] = useState(codesInitial)
  const [jsonA, setJsonA] = useState(codesInitial)
  const [image, setImage] = useState(codesInitial)



  // Get Houston User Details
  const getUserDetails = async () => {
    // API Call 
    const response = await fetch(`${host}/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      }
    });
    // const json = await response.json()
    const jsonobj = await response.json();
    setJson(json.concat(jsonobj))
    console.log(json)
    // setJson(json)
  }

  // Get Dallas User Details
  const getUserdDetails = async () => {
    // API Call 
    const response = await fetch(`${host}/api/authd/getuserd`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      }
    });
    // const json = await response.json()
    const jsonobjD = await response.json();
    setJsonD(jsonD.concat(jsonobjD))
    console.log(jsonD)
    // setJson(json)
  }

  // Get Arkansas User Details
  const getUserADetails = async () => {
    // API Call 
    const response = await fetch(`${host}/api/authark/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      }
    });
    // const json = await response.json()
    const jsonobjA = await response.json();
    setJsonA(jsonA.concat(jsonobjA))
    console.log(jsonA)
  }


  const getImages = async () => {
    // API Call 
    const response = await fetch(`${host}/api/img/getimage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      }
    });
    // const json = await response.json()
    const jsonimg = await response.json();
    setImage(image.concat(jsonimg))
    console.log(image)
    // setJson(json)
  }

  // Get all Codes
  const getCodes = async () => {
    // API Call 
    const response = await fetch(`${host}/fetchallcodes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      }
    });
    const json = await response.json()
    setCodes(json)
  }

  // Get all Active Codes
  const getActiveCodes = async () => {
    // API Call 
    const response = await fetch(`${host}/fetchallactivecodes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      }
    });
    const json = await response.json()
    setCodes(json)
  }

  // Add a Code
  const addCode = async (todaydate, staffingmanager, propertyname, phone, propertyaddress, fax, managementcompanyname, billingemailaddress, managernamewhoorderedtemp, manageremailaddress, propertygrade, numberofunits, bilingual, software, permanentpayrate, taxcredit, typeofassignment, epacertified, tempname, startdate, phoneno, enddate, temporaraypayrate, yourmessage, status) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/addcode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),

      },
      body: JSON.stringify({ todaydate, staffingmanager, propertyname, phone, propertyaddress, fax, managementcompanyname, billingemailaddress, managernamewhoorderedtemp, manageremailaddress, propertygrade, numberofunits, bilingual, software, permanentpayrate, taxcredit, typeofassignment, epacertified, tempname, startdate, phoneno, enddate, temporaraypayrate, yourmessage, status })
    });

    const code = await response.json();
    setCodes(codes.concat(code))
  }


  // Add Houston Admin Code
  const addHoustonAdmin = async (todaydate, staffingmanager, propertyname, phone, propertyaddress, fax, managementcompanyname, billingemailaddress, managernamewhoorderedtemp, manageremailaddress, propertygrade, numberofunits, bilingual, software, permanentpayrate, taxcredit, typeofassignment, epacertified, tempname, startdate, phoneno, enddate, temporaraypayrate, yourmessage, employeeStatus) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/empuserformh/insert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ todaydate, staffingmanager, propertyname, phone, propertyaddress, fax, managementcompanyname, billingemailaddress, managernamewhoorderedtemp, manageremailaddress, propertygrade, numberofunits, bilingual, software, permanentpayrate, taxcredit, typeofassignment, epacertified, tempname, startdate, phoneno, enddate, temporaraypayrate, yourmessage, employeeStatus })
    });

    const code = await response.json();
    setCodes(codes.concat(code))
  }

  // Add Dallas Admin Code
  const addDallasAdmin = async (todaydate, staffingmanager, propertyname, phone, propertyaddress, fax, managementcompanyname, billingemailaddress, managernamewhoorderedtemp, manageremailaddress, propertygrade, numberofunits, bilingual, software, permanentpayrate, taxcredit, typeofassignment, epacertified, tempname, startdate, phoneno, enddate, temporaraypayrate, yourmessage, employeeStatus) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/empuserformd/insert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ todaydate, staffingmanager, propertyname, phone, propertyaddress, fax, managementcompanyname, billingemailaddress, managernamewhoorderedtemp, manageremailaddress, propertygrade, numberofunits, bilingual, software, permanentpayrate, taxcredit, typeofassignment, epacertified, tempname, startdate, phoneno, enddate, temporaraypayrate, yourmessage, employeeStatus })
    });

    const code = await response.json();
    setCodes(codes.concat(code))
  }

  // Add Arkansas Admin Code
  const addArkansasAdmin = async (todaydate, staffingmanager, propertyname, phone, propertyaddress, fax, managementcompanyname, billingemailaddress, managernamewhoorderedtemp, manageremailaddress, propertygrade, numberofunits, bilingual, software, permanentpayrate, taxcredit, typeofassignment, epacertified, tempname, startdate, phoneno, enddate, temporaraypayrate, yourmessage, employeeStatus) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/empuserforma/insert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ todaydate, staffingmanager, propertyname, phone, propertyaddress, fax, managementcompanyname, billingemailaddress, managernamewhoorderedtemp, manageremailaddress, propertygrade, numberofunits, bilingual, software, permanentpayrate, taxcredit, typeofassignment, epacertified, tempname, startdate, phoneno, enddate, temporaraypayrate, yourmessage, employeeStatus })
    });

    const code = await response.json();
    setCodes(codes.concat(code))
  }

  // Delete a Code
  const deleteCode = async (id) => {
    // API Call
    const response = await fetch(`${host}/deletecode/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),

      }
    });
    // eslint-disable-next-line
    const json = response.json();
    const newCodes = codes.filter((code) => { return code._id !== id })
    setCodes(newCodes)
  }

  // Edit a Code
  const editCode = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/updatecode/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),

      },
      body: JSON.stringify({ title, description, tag })
    });
    // eslint-disable-next-line
    const json = await response.json();

    let newCodes = JSON.parse(JSON.stringify(codes))
    // Logic to edit in client
    for (let index = 0; index < newCodes.length; index++) {
      const element = newCodes[index];
      if (element._id === id) {
        newCodes[index].title = title;
        newCodes[index].description = description;
        newCodes[index].tag = tag;
        break;
      }
    }
    setCodes(newCodes);
  }


  // updateName
  const updateName = async (id, name) => {
    // API Call 
    const response = await fetch(`${host}/updatename/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),

      },
      body: JSON.stringify({ name })
    });
    // eslint-disable-next-line
    const json = await response.json();

    let newName = JSON.parse(JSON.stringify(json))
    // Logic to edit in client
    for (let index = 0; index < newName.length; index++) {
      const element = newName[index];
      if (element._id === id) {
        newName[index].name = name;
        break;
      }
    }
    setJson(newName);
  }


  return (
    <codeContext.Provider value={{ codes, json, jsonD, jsonA, getUserDetails, addCode, addHoustonAdmin, addDallasAdmin, addArkansasAdmin, deleteCode, editCode, getCodes, getActiveCodes, updateName, getImages, getUserdDetails, getUserADetails }}>
      {props.children}
    </codeContext.Provider>
  )

}
export default Codestate;
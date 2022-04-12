import React, { useContext, useState } from 'react'
import codeContext from "../context/codes/codeContext"
import navLogoImg from '../images/logo.png'
import { Dropdown } from 'react-bootstrap';

export default function FormArkansas() {
  const context = useContext(codeContext);
  const { addCode } = context;
  const { addArkansasAdmin } = context;


  const [code, setCode] = useState({
    todaydate: "", staffingmanager: "", propertyname: "", phone: "", propertyaddress: "", fax: "", managementcompanyname: "", billingemailaddress: "", managernamewhoorderedtemp: "", manageremailaddress: "", propertygrade: "", numberofunits: "", bilingual: "", software: "", permanentpayrate: "", taxcredit: "",
    typeofassignment: "", epacertified: "", tempname: "", startdate: "", phoneno: "", enddate: "", temporaraypayrate: "", yourmessage: "", status: "Active"
  })

  const handleClick = (e) => {
    e.preventDefault();
    addCode(code.todaydate, code.staffingmanager, code.propertyname, code.phone, code.propertyaddress, code.fax, code.managementcompanyname, code.billingemailaddress, code.managernamewhoorderedtemp, code.manageremailaddress, code.propertygrade, code.numberofunits, code.bilingual, code.software, code.permanentpayrate, code.taxcredit, code.typeofassignment, code.epacertified, code.tempname, code.startdate, code.phoneno, code.enddate, code.temporaraypayrate, code.yourmessage, code.status);

    setCode({
      todaydate: "", staffingmanager: "", propertyname: "", phone: "", propertyaddress: "", fax: "", managementcompanyname: "", billingemailaddress: "", managernamewhoorderedtemp: "", manageremailaddress: "", propertygrade: "", numberofunits: "", bilingual: "", software: "", permanentpayrate: "", taxcredit: "",
      typeofassignment: "", epacertified: "", tempname: "", startdate: "", phoneno: "", enddate: "", temporaraypayrate: "", yourmessage: "", status: "Active"
    })
    setTimeout(() => {

      addArkansasAdmin(code.todaydate, code.staffingmanager, code.propertyname, code.phone, code.propertyaddress, code.fax, code.managementcompanyname, code.billingemailaddress, code.managernamewhoorderedtemp, code.manageremailaddress, code.propertygrade, code.numberofunits, code.bilingual, code.software, code.permanentpayrate, code.taxcredit, code.typeofassignment, code.epacertified, code.tempname, code.startdate, code.phoneno, code.enddate, code.temporaraypayrate, code.yourmessage, code.employeeStatus);

      setCode({
        todaydate: "", staffingmanager: "", propertyname: "", phone: "", propertyaddress: "", fax: "", managementcompanyname: "", billingemailaddress: "", managernamewhoorderedtemp: "", manageremailaddress: "", propertygrade: "", numberofunits: "", bilingual: "", software: "", permanentpayrate: "", taxcredit: "",
        typeofassignment: "", epacertified: "", tempname: "", startdate: "", phoneno: "", enddate: "", temporaraypayrate: "", yourmessage: "", employeeStatus: "Active"
      })
      setTimeout(() => {
        window.location.href = "/empdasha"
      }, 500);
    }, 1000);
  }

  const onChange = (e) => {
    setCode({ ...code, [e.target.name]: e.target.value })

  }


  // FORM RATES 
  const handleLeadMaintainence = () => {
    setText1("$ 30.95");
    setTextPosition("Lead Maintainence");
  }

  const handlePropertyManager = () => {
    setText1("$ 31.95");
    setTextPosition("Property Manager");

  }

  const handleAssistantMaintenance = () => {
    setText1("$ 28.95");
    setTextPosition("Assistant Maintenance");

  }

  const handleAssistantPropertyManager = () => {
    setText1("$ 28.95");
    setTextPosition("Assistant Property Manager");

  }

  const handleMaintenanceTechNonCertified = () => {
    setText1("$ 26.95");
    setTextPosition("Maintenance Tech Non-Certified");

  }

  const handleBilingualLeasingConsultant = () => {
    setText1("$ 25.95");
    setTextPosition("Bilingual Leasing Consultant");

  }

  const handleMakeReady = () => {
    setText1("$ 25.95");
    setTextPosition("Make Ready");

  }

  const handleLeasingConsultant = () => {
    setText1("$ 24.95");
    setTextPosition("Leasing Consultant");

  }


  const handlePorter = () => {
    setText1("$ 23.95");
    setTextPosition("Porter");

  }

  const handleConcierge = () => {
    setText1("$ 26.95");
    setTextPosition("Concierge");

  }

  const handleHousekeeper = () => {
    setText1("$ 23.95");
    setTextPosition("Housekeeper");

  }

  const handleOnChange = (event) => {
    setText1(event.target.value);
  }

  const [text1, setText1] = useState('$');
  const [textPosition, setTextPosition] = useState('');

  return (
    <>

      <header className="header_area" style={{ position: "sticky", borderBottom: "1px solid #00a2e5" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                  <img className='mx-3' src={navLogoImg} alt="logo" /></a>
              </nav>
            </div>
          </div>
        </div>
      </header>


      {/* <!-- ===========dashboard body=== --> */}
      <div className=""></div>
      <div className="setting_title">
        {/* <div className="setting_title" style={{backgroundImage:{workOrderImg}, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>work order form</h2>
              <h2 style={{ fontSize: "100%" }}>State:- <span style={{ fontWeight: "bold" }}>Arkansas</span></h2>
            </div>
          </div>
        </div>
      </div>

      <section className="setting_sec">
        <div className="container">
          <div className="setting_box">
            <form method="POST">
              <div className="row">
                <div className="col-sm-6">
                  <div className="setting_area">

                    {/* <form> */}
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Today's Date</label>
                      <input type="date" name='todaydate' className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="01/01/2022"
                        value={code.todaydate} onChange={onChange}
                      // value={userData.username}
                      // onChange={handleInputs}
                      // onChange={(event) => {
                      //   setEmpUserName(event.target.value)
                      // }}
                      />
                    </div>

                    <div className="form-group mt-3" style={{ borderBottom: "1px solid #00a2e5" }}>
                      <label htmlFor="exampleFormControlSelect1">Group positions together by category</label>
                      {/* <select className="form-control setting_input" id="exampleFormControlSelect1"> */}
                      <div className="mt-2 " style={{ width: "85%", textAlign: "start" }} >
                        <div >
                          <div className="dropdown" >
                            <Dropdown style={{ width: "100%", textAlign: "start" }}>
                              <Dropdown.Toggle style={{ backgroundColor: "white", color: "grey", border: "0px solid black", width: "30%", marginBottom: "0.9%", textAlign: "start" }} variant="success" id="dropdown-basic" >
                                Positions
                              </Dropdown.Toggle>

                              <input className="mt-2" style={{ fontWeight: "bold", backgroundColor: "white", border: "0px solid white", borderRadius: "4px", padding: "1px 1px", width: "70%", color: "rgb(0 143 203)" }} type="text" onChange={handleOnChange} value={textPosition} readOnly="readonly" />




                              <Dropdown.Menu style={{ border: "0px solid white", boxShadow: "0px 1px 1px blue", backgroundColor: "white", borderRadius: "4px", padding: "5px 5px", width: "98%" }}>
                                <Dropdown.Item id="leadmaint" value={text1} onClick={handleLeadMaintainence} href="#/action-1" >Lead Maintenance</Dropdown.Item>
                                <Dropdown.Item onClick={handlePropertyManager} href="#/action-2">Property Manager</Dropdown.Item>
                                <Dropdown.Item onClick={handleAssistantMaintenance} href="#/action-3">Assistant Maintenance</Dropdown.Item>
                                <Dropdown.Item onClick={handleAssistantPropertyManager} href="#/action-1">Assistant Property Manager</Dropdown.Item>
                                <Dropdown.Item onClick={handleMaintenanceTechNonCertified} href="#/action-1">Maintenance Tech Non Certified</Dropdown.Item>
                                <Dropdown.Item onClick={handleConcierge} href="#/action-1">Concierge</Dropdown.Item>
                                <Dropdown.Item onClick={handleMakeReady} href="#/action-1">Make Ready</Dropdown.Item>
                                <Dropdown.Item onClick={handleBilingualLeasingConsultant} href="#/action-1">Bilingual Leasing Consultant</Dropdown.Item>
                                <Dropdown.Item onClick={handlePorter} href="#/action-1">Porter</Dropdown.Item>

                                <Dropdown.Item onClick={handleLeasingConsultant} href="#/action-1">Leasing Consultant</Dropdown.Item>
                                <Dropdown.Item onClick={handleHousekeeper} href="#/action-1">Housekeeper</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                          </div>

                        </div>
                        {/* </select> */}

                      </div>

                    </div>
                    {/* </form> */}
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="setting_area">
                    {/* <form> */}
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Staffing Manager</label>
                      <input type="text" name='staffingmanager' className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Manager's Name"
                        value={code.staffingmanager} onChange={onChange} />
                    </div>
                    <div className="form-group" style={{ marginTop: "3%" }}>
                      <label htmlFor="exampleInputEmail1" style={{ marginBottom: "3.1%" }}>Hourly Billing Rate</label>
                      {/* <input type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="" onChange={handleOnChange} readonly="readonly" value={text1} /> */}

                      <input style={{ fontWeight: "bold", color: "#7d7d7d", backgroundColor: "white" }} className="form-control setting_input" type="text" placeholder="" name='hourlybillingrate' onChange={handleOnChange} value={text1} readOnly />
                    </div>
                    {/* </form> */}
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="setting_area">
                    {/* <form> */}
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Property Name</label>
                      <input name='propertyname' type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Property Name" value={code.propertyname} onChange={onChange} />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Property Address</label>
                      <input name='propertyaddress' type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Property Address" value={code.propertyaddress} onChange={onChange} />
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
                        aria-describedby="emailHelp" placeholder="Phone No" value={code.phone} onChange={onChange} />
                    </div>

                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">FAX No</label>
                      <input name='fax' type="number" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="FAX No" value={code.fax} onChange={onChange} />
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
                        aria-describedby="emailHelp" placeholder="Management Company Name" value={code.managementcompanyname} onChange={onChange} />
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
                        aria-describedby="emailHelp" placeholder="Billing E-mail Address" value={code.billingemailaddress} onChange={onChange} />
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
                        aria-describedby="emailHelp" placeholder="Manager's Name/Who Ordered Temp" value={code.managernamewhoorderedtemp} onChange={onChange} />
                    </div>
                    {/* </form> */}
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="setting_area">
                    {/* <form> */}
                    <div className="form-group  mt-3">
                      <label htmlFor="exampleInputEmail1">Manager's E-mail Address</label>
                      <input name='manageremailaddress' type="email" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Manager's E-mail Address" value={code.manageremailaddress} onChange={onChange} />
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
                      <select style={{ color: "grey" }} name='propertygrade' className="form-control setting_input" id="exampleFormControlSelect1" value={code.propertygrade} onChange={onChange}>
                        <option >Select from the given below</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
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
                        aria-describedby="emailHelp" placeholder="50" value={code.numberofunits} onChange={onChange} />
                    </div>
                    {/* </form> */}
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="setting_area">
                    {/* <form> */}
                    {/* <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Bilingual</label>
                      <div className="check_area">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="Bilingual2" id="Bilingual" defaultChecked/>
                          <label className="form-check-label" htmlFor="Bilingual1">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="Bilingual2" id="Bilingual" />
                          <label className="form-check-label" htmlFor="Bilingual2">
                            No
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div className="form-group mt-3">
                      <label htmlFor="bilingual1">Bilingual</label>
                      <select style={{ color: "grey" }} name='bilingual' className="form-control setting_input" id="bilingual1" value={code.bilingual} onChange={onChange}>
                        <option>Select from the given below</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
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
                        aria-describedby="emailHelp" placeholder="Software Name" value={code.software} onChange={onChange} />
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
                        aria-describedby="emailHelp" placeholder="$1000.00" value={code.permanentpayrate} onChange={onChange} />
                    </div>
                    {/* </form> */}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <div className="setting_area">
                    {/* <form> */}
                    {/* <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">Tax Credit</label>
                      <div className="check_area">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="taxcredit" id="taxcredit1" defaultChecked/>
                          <label className="form-check-label" htmlFor="taxcredit1">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="taxcredit" id="taxcredit2" />
                          <label className="form-check-label" htmlFor="taxcredit2">
                            No
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div className="form-group mt-3">
                      <label htmlFor="taxcredit1">Tax Credit</label>
                      <select style={{ color: "grey" }} name='taxcredit' className="form-control setting_input" id="taxcredit1" value={code.taxcredit} onChange={onChange}>
                        <option>Select from the given below</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    {/* </form> */}
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="setting_area">
                    {/* <form> */}
                    {/* <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">Type of Assignment</label>
                      <div className="check_area">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="typeofassignment" id="typeofassignment1" defaultChecked/>
                          <label className="form-check-label" htmlFor="typeofassignment1">
                            Temp
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="typeofassignment" id="typeofassignment2" />
                          <label className="form-check-label" htmlFor="typeofassignment2">
                            Perm
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div className="form-group mt-3">
                      <label htmlFor="typeofassignment1">Type of Assignment</label>
                      <select style={{ color: "grey" }} name='typeofassignment' className="form-control setting_input" id="typeofassignment1" value={code.typeofassignment} onChange={onChange}>
                        <option>Select from the given below</option>
                        <option>Temp</option>
                        <option>Perm</option>
                      </select>
                    </div>
                    {/* </form> */}
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="setting_area">
                    {/* <form> */}
                    {/* <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">EPA Certified</label>
                      <div className="check_area">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="epacertified" id="epacertified1" defaultChecked/>
                          <label className="form-check-label" htmlFor="epacertified1">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="epacertified" id="epacertified2" />
                          <label className="form-check-label" htmlFor="epacertified2">
                            No
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div className="form-group mt-3">
                      <label htmlFor="epacertified1">EPA Certified</label>
                      <select style={{ color: "grey" }} name='epacertified' className="form-control setting_input" id="epacertified1" value={code.epacertified} onChange={onChange}>
                        <option>Select from the given below</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
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
                        aria-describedby="emailHelp" placeholder="Temp's Name"
                        value={code.tempname} onChange={onChange}
                      // value={userData.temp}
                      // onChange={handleInputs}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Phone No</label>
                      <input name='phoneno' type="number" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Phone No" value={code.phoneno} onChange={onChange} />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Temporaray Pay Rate</label>
                      <input name='temporaraypayrate' type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="$ 1000.00" value={code.temporaraypayrate} onChange={onChange} />
                    </div>
                    {/* </form> */}
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="setting_area">
                    {/* <form> */}
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Start Date</label>
                      <input name='startdate' type="date" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="01/01/2022" value={code.startdate} onChange={onChange} />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">End Date</label>
                      <input name='enddate' type="date" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="01/01/2022" value={code.enddate} onChange={onChange} />
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
                        placeholder="Type a message here" value={code.yourmessage} onChange={onChange}></textarea>
                    </div>
                    {/* </form> */}
                  </div>
                </div>
              </div>
            </form>
            {/* <button onClick={addToList} className="btn setting_submit  mt-5">submit</button> */}
            <button onClick={handleClick} className="btn setting_submit  mt-5">submit</button>

            {/* <button className="btn setting_submit  mt-5">submit</button> */}

          </div>
        </div>
      </section>
    </>
  )
}

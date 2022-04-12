import React, { useState } from 'react'
import navLogoImg from '../images/logo.png'
import { Dropdown } from 'react-bootstrap';



export default function Formtexas() {

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

  const handleConcierge = () => {
    setText1("$ 26.95");
    setTextPosition("Concierge");

  }

  const handleMakeReady = () => {
    setText1("$ 25.95");
    setTextPosition("Make Ready");

  }

  const handleBilingualLeasingConsultant = () => {
    setText1("$ 25.95");
    setTextPosition("Bilingual Leasing Consultant");

  }

  const handlePorter = () => {
    setText1("$ 23.95");
    setTextPosition("Porter");

  }

  const handleLeasingConsultant = () => {
    setText1("$ 24.95");
    setTextPosition("Leasing Consultant");

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
            </div>
          </div>
        </div>
      </div>

      <section className="setting_sec">
        <div className="container">
          <div className="setting_box">
            <div className="row">
              <div className="col-sm-6">
                <div className="setting_area">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">today's date</label>
                      <input type="email" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="01/01/2022" />
                    </div>

                    <div className="form-group mt-3" style={{borderBottom: "1px solid #00a2e5"}}>
                      <label htmlFor="exampleFormControlSelect1">select position</label>
                      {/* <select className="form-control setting_input" id="exampleFormControlSelect1"> */}
                        <div className="mt-2 " style={{ width: "85%", textAlign: "start" }} >
                          <div >
                            <div className="dropdown" >
                              <Dropdown style={{ width: "100%",  textAlign: "start" }}>
                                <Dropdown.Toggle style={{ backgroundColor: "white", color: "grey", border: "0px solid black",  width: "30%", marginBottom:"0.9%", textAlign:"start" }} variant="success" id="dropdown-basic" >
                                  Positions
                                </Dropdown.Toggle>

                                <input className="mt-2" style={{ fontWeight: "bold", backgroundColor: "white", border: "0px solid white", borderRadius: "4px", padding: "1px 1px", width: "70%", color: "rgb(0 143 203)" }} type="text"  onChange={handleOnChange} value={textPosition} readOnly="readonly" />


                                

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
                  </form>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="setting_area">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Staffing Manager</label>
                      <input type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Manager's Name" />
                    </div>
                    <div className="form-group" style={{marginTop:"3%"}}>
                      <label htmlFor="exampleInputEmail1" style={{marginBottom:"3.1%"}}>Hourly Billing Rate</label>
                      {/* <input type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="" onChange={handleOnChange} readOnly="readonly" value={text1} /> */}

                      <input style={{fontWeight:"bold", color:"#7d7d7d", backgroundColor:"white"}} className="form-control setting_input" type="text" placeholder="" onChange={handleOnChange} value={text1} readOnly/>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="setting_area">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Company Name</label>
                      <input type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Company Name" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Company Address</label>
                      <input type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Company Address" />
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="setting_area">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Phone No</label>
                      <input type="number" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Phone No" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">FAX No</label>
                      <input type="number" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="FAX No" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="Manager_area mt-5"></div>

            <div className="row">
              <div className="col-sm-6">
                <div className="setting_area">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Manager's Name/Who Ordered Temp</label>
                      <input type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Manager's Name/Who Ordered Temp" />
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="setting_area">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Manager's E-mail Address</label>
                      <input type="email" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Manager's E-mail Address" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <div className="setting_area">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">Property Grade</label>
                      <select className="form-control setting_input" id="exampleFormControlSelect1">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="setting_area">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Number of Units</label>
                      <input type="email" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="50" />
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="setting_area">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Bilingual</label>
                      <div className="check_area">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                            value="option1" defaultChecked />
                          <label className="form-check-label" htmlFor="exampleRadios1">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                            value="option2" />
                          <label className="form-check-label" htmlFor="exampleRadios2">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="setting_area">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Software</label>
                      <input type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Software Name" />
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="setting_area">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Permanent Pay Rate</label>
                      <input type="email" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="$1000.00" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <div className="setting_area">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">Tax Credit</label>
                      <div className="check_area">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                            value="option1" defaultChecked />
                          <label className="form-check-label" htmlFor="exampleRadios3">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4"
                            value="option2" />
                          <label className="form-check-label" htmlFor="exampleRadios4">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="setting_area">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">Type of Assignment</label>
                      <div className="check_area">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5"
                            value="option1" defaultChecked />
                          <label className="form-check-label" htmlFor="exampleRadios5">
                            Temp
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6"
                            value="option2" />
                          <label className="form-check-label" htmlFor="exampleRadios6">
                            Perm
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="setting_area">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">EPA Certified</label>
                      <div className="check_area">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios7"
                            value="option1" defaultChecked />
                          <label className="form-check-label" htmlFor="exampleRadios7">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios8"
                            value="option2" />
                          <label className="form-check-label" htmlFor="exampleRadios8">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="setting_area">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Temp's Name</label>
                      <input type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Temp's Name" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Phone No</label>
                      <input type="number" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Phone No" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Temporaray Pay Rate</label>
                      <input type="text" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="$ 1000.00" />
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="setting_area">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">Start Date</label>
                      <input type="date" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="01/01/2022" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleInputEmail1">End Date</label>
                      <input type="date" className="form-control setting_input" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="01/01/2022" />
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="setting_area">
                  <form>
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlTextarea1">Your Message(Optional)</label>
                      <textarea className="form-control setting_input" id="exampleFormControlTextarea1" rows="4"
                        placeholder="Type a message here"></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <a href="/empdash" className="btn setting_submit  mt-5">submit</a>
          </div>
        </div>
      </section>
    </>
  )
}

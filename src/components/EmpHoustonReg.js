import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

export default function EmpHoustonReg() {

    // const loaderBtn = document.getElementById("loaderBtn");
    let history = useHistory();
    const [credentials, setCredentials] = useState({ name: "", position: "", email: "", phone: "", password: "" })


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (credentials.email.length === 0) {
            alert("Please Fill all the Inputs")
            window.location.reload()
            // } else {
            //     props.mode === "light" ? cardOpacity.classList.add("opacity-50") : cardOpacity.classList.add("opacity-75")
            // setSpinner(<Spinner />)
            // props.mode === "light" ? setSpinner(<Spinner />) : setSpinnerDark(<SpinnerDark />)
            // loaderBtn.style.backgroundColor = "rgb(0 0 167)"

            // setLoader(<LoaderMUI />);
            // setSpinner(<Spinner />);
        }


        const { name, position, email, phone, password, pic: url } = credentials;
        const response = await fetch("https://directplacement.herokuapp.com/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, position, email, phone, password, pic: url })
        });
        const data = await response.json()
        setTimeout(() => {

            console.log(data);
            if (data) {
                // Save the auth token and redirect
                // setTimeout(() => {
                // history.push("/Authenticating");

                setTimeout(() => {
                    localStorage.setItem('token', data.authtoken);
                    history.push("/adminempdash");
                }, 11000);
                // }, 0);

            }
            else {
                alert("User already exists!");
                setTimeout(() => {
                    console.log("Reloading Page...")
                    window.location.reload()
                }, 0);
            }
        }, 1000);

    }

    const handleOnChange = (event) => {

        setCredentials({ ...credentials, [event.target.name]: event.target.value })
        setTextName(event.target.value.text3)
        setText1(event.target.value.text1)
        setText2(event.target.value.text2)
        setText3(event.target.value.text3)
        setText4(event.target.value.text4)
        setText5(event.target.value.text5)



    }



    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")
    const [text4, setText4] = useState("")
    const [text5, setText5] = useState("")

    const [textName, setTextName] = useState("")


    return (
        <section className='login_sec'>
            <div className="login_area">

                {/* Heading Starts */}
                <div className="d-flex justify-content-center">
                    <h5 style={{ color: "#00a3e5" }}>Create Employee ID</h5>
                </div>
                {/* Heading Ends */}

                <hr style={{ borderTop: "1px solid #00a3e5" }} />

                <div className="log_in_box">
                    <div className="">
                        <form onSubmit={handleSubmit}>

                            {/* Name Section  */}
                            <div className="form-group">
                                <label style={{ marginTop: "1px" }} htmlFor="exampleInputName" className="form-label"><strong style={{ color: "rgb(0 208 229)" }}>Name</strong></label>

                                <input className="form-control login_inputs" id="name" type="text" name="name" minLength="3" required placeholder="Enter Name"
                                    onChange={handleOnChange} value={textName}
                                />
                                <span className='mt-3'><ion-icon name="person"></ion-icon></span>
                            </div>

                            {/* Position Section */}
                            <div className="form-group">
                                <label style={{ marginTop: "1px" }} htmlFor="exampleInputName" className="form-label"><strong style={{ color: "rgb(0 208 229)" }}>Position</strong></label>

                                <input className="form-control login_inputs" id="namea" type="text" name="position" minLength="3" placeholder="Enter Position"
                                    onChange={handleOnChange} value={text4}
                                />
                                <span className='mt-3'><ion-icon name="bag-handle-outline"></ion-icon></span>
                            </div>

                            {/* E-mail Section */}
                            <div className="form-group">
                                <label style={{ marginTop: "1px" }} htmlFor="exampleInputEmail1" className="form-label"><strong style={{ color: "rgb(0 208 229)" }}>Email address</strong></label>

                                <input className="form-control login_inputs" id="nameb" type="text" name="email" placeholder="Enter e-mail" required
                                    onChange={handleOnChange} value={text2}
                                />
                                <span className='mt-3'><ion-icon name="mail-outline"></ion-icon></span>

                                <small id="emailvalid" className="form-text text-muted invalid-feedback">
                                    <b style={{ color: "red" }}> Your email must be a valid email</b>
                                </small>
                            </div>

                            {/* Phone Section */}
                            <div className="form-group">
                                <label style={{ marginTop: "1px" }} htmlFor="exampleInputNumber" className="form-label"><strong style={{ color: "rgb(0 208 229)" }}>Phone Number</strong></label>

                                <input className="form-control login_inputs" id="namec" type="number" name="phone" placeholder="Enter Phone Number"
                                    onChange={handleOnChange} value={text5}
                                />
                                <span className='mt-3'><ion-icon name="call-outline"></ion-icon></span>
                            </div>

                            {/* Create Password Section */}
                            <div className="form-group">
                                <label style={{ marginTop: "1px" }} htmlFor="inputPassword5" className="form-label"><strong style={{ color: "rgb(0 208 229)" }}>Create a Password</strong></label>

                                <input className="form-control login_inputs" id="named" type="password" name="password" placeholder="Enter Password" required
                                    onChange={handleOnChange} value={text1}
                                />
                                <span className='mt-3'><ion-icon name="lock-closed"></ion-icon></span>
                            </div>

                            {/* Confirm Password Section */}
                            <div className="form-group">
                                <label style={{ marginTop: "1px" }} htmlFor="inputPassword6" className="form-label"><strong style={{ color: "rgb(0 208 229)" }}>Re-enter Password</strong></label>

                                <input className="form-control login_inputs" id="namee" type="password" name="cpassword" placeholder="Enter Password" required
                                    onChange={handleOnChange} value={text3}
                                />
                                <span className='mt-3'><ion-icon name="lock-closed"></ion-icon></span>
                            </div>

                            {/* Create Button Section */}
                            <div className="container" style={{ width: "35%" }}>
                                <button style={{ backgroundColor: "#019140", color: "white" }} id="loaderBtn" disabled={credentials.email.length === 0 || credentials.password.length === 0} type="submit" className="btn mt-3 my-1 mx-4"
                                >Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function AdminSignup(props) {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
    let history = useHistory();

    const loaderBtn = document.getElementById("loaderBtn");
    const cardOpacity = document.getElementById("cardOpacity");



    const handleSubmit = async (event) => {
        event.preventDefault()

        if (credentials.email.length === 0) {
            alert("Please Fill all the Inputs")
            window.location.reload()
        } else {
            props.mode === "light" ? cardOpacity.classList.add("opacity-50") : cardOpacity.classList.add("opacity-75")

            // props.mode === "light" ? setSpinner(<Spinner />) : setSpinnerDark(<SpinnerDark />)
            loaderBtn.style.backgroundColor = "rgb(0 0 167)"

            // setLoader(<LoaderMUI />);
            // setSpinner(<Spinner />);
        }


        const { name, email, password } = credentials;
        const response = await fetch("https://directplacement.herokuapp.com/api/adminauth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        setTimeout(() => {

            console.log(json);
            if (json.Response) {
                // Save the auth token and redirect
                localStorage.setItem('token', json.adminauthtoken);
                history.push("/admin");
                alert("Admin Registration Successfull!");
                setTimeout(() => {
                    console.log("Reloading Page...")
                    window.location.reload()
                }, 0);
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

    }

    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")
    const [textName, setTextName] = useState("")

    return (
        <>
            {/* {loading} */}

            <div style={{ backgroundColor: "#e0e0e0", height: "99.99vh" }} className="">
                {/* {spinner}{spinnerDark} */}
                <div style={{ display: "flex", flexDirection: "column", height: "100%" }} className=" mb-3" >
                    <div style={{ display: "flex", margin: "auto", justifyContent: "center", width: "90%" }} >
                        <div id="cardOpacity" className="card " style={{ width: " 28rem", borderRadius: "12px", backgroundColor: "#00a2e5", boxShadow: props.mode === "light" ? "#b5b0ff 9px 10px 13px" : "rgb(15 14 29) 9px 10px 13px", borderLeft: props.mode === "light" ? "1px solid rgba(0, 0, 0, 0.18)" : "", borderBottom: props.mode === "light" ? "1px solid rgb(0 0 0 / 6%)" : "", borderRight: props.mode === "light" ? "1px solid rgb(0 0 0 / 6%)" : "", borderTop: props.mode === "light" ? "1px solid rgba(0, 0, 0, 0.18)" : "" }}>
                            {/* {loader} */}

                            <div className="card-body" style={{ paddingBottom: "0rem" }} >

                                <h3 className="card-title mb-3" style={{ color: "black", marginLeft: "10%", fontWeight: "bold", fontSize: "1.5em" }} >Administrator Registration</h3>
                                <form onSubmit={handleSubmit}>


                                    <div className="">
                                        <label htmlFor="exampleInputName" className="form-label"><strong style={{ color: "#262626" }}>Name</strong></label>


                                        <input style={{ backgroundColor: props.mode === "light" ? "white" : "#eae4e4", border: props.mode === "light" ? "" : "1px solid grey" }} id="name" className="form-control" onChange={handleOnChange} value={textName} type="text" name="name" minLength="3" required placeholder="Enter your Name" />

                                    </div>


                                    <div className="my-2">
                                        <label htmlFor="exampleInputEmail1" className="form-label"><strong style={{ color: "#262626" }}>Email address</strong></label>


                                        <input style={{ backgroundColor: props.mode === "light" ? "white" : "#eae4e4", border: props.mode === "light" ? "" : "1px solid grey" }} id="email" className="form-control" onChange={handleOnChange} value={text2} type="text" name="email" placeholder="Enter your e-mail" />
                                        <small id="emailvalid" className="form-text text-muted invalid-feedback">
                                            <b style={{ color: "red" }}> Your email must be a valid email</b>
                                        </small>


                                    </div>

                                    <div className="my-2">
                                        <label htmlFor="inputPassword5" className="form-label"><strong style={{ color: "#262626" }}>Create a Password</strong></label>


                                        <input style={{ backgroundColor: props.mode === "light" ? "white" : "#eae4e4", border: props.mode === "light" ? "" : "1px solid grey" }} id="password" className="form-control" onChange={handleOnChange} value={text1} type="password" name="password" placeholder="Enter your Password" />
                                        <small id="passwordvalid" className="form-text text-muted invalid-feedback">
                                            <b style={{ color: "red" }}> Your password should be minimum 8 characters long and not start with a number</b>
                                        </small>

                                    </div>


                                    <div className="mb-3 ">
                                        <label htmlFor="inputPassword6" className="form-label"><strong style={{ color: "#262626" }}>Re-enter Password</strong></label>



                                        <input style={{ backgroundColor: props.mode === "light" ? "white" : "#eae4e4", border: props.mode === "light" ? "" : "1px solid grey" }} id="password2" className="form-control" onChange={handleOnChange} value={text3} type="password" name="password" placeholder="Enter your Password" />
                                        <small id="passwordvalid2" className="form-text text-muted invalid-feedback">
                                            <b style={{ color: "red" }}>Password didn't match</b>
                                        </small>

                                        <Link to="/passwordreset" style={{ textDecoration: "none" }}><span style={{ color: "white", textShadow: "2px 2px 5px #1e1e1f" }} >Forgot password?</span></Link>

                                    </div>


                                    <div className="container" style={{ width: "35%" }}>
                                        <button style={{ backgroundColor: "#019140", color: "white" }} id="loaderBtn" disabled={credentials.email.length === 0 || credentials.password.length === 0} onChange={handleOnChange} type="submit" className="btn mt-3 my-1 ">Submit</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className='mx-2' style={{ display: "flex", justifyContent: "end", color: "grey" }}>
                        <p>Powered by <span style={{ color: "black" }}>nargeeks</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
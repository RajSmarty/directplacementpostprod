import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import userLogoImg from '../images/logo1.png';
import Spinner from './SpinnerLogin';


export default function Admin() {

  let loaderBtn = document.getElementById("loaderBtn");
  const [spinner, setSpinner] = useState("")


  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (credentials.email.length === 0) {
      alert("Please Fill all the Inputs")
      window.location.reload()
    } else {

      loaderBtn.style.backgroundColor = "rgb(52 176 223)"
      setSpinner(<Spinner />);

    }

    const response = await fetch("https://directplacement.herokuapp.com/api/adminauth/login",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
    const json = await response.json()
    setTimeout(() => {

      // console.log(json);
      if (json.Response) {
        // Save the auth token and redirect
        // loaderBtn.style.backgroundColor = "rgb(0 0 167)"
        localStorage.setItem('token', json.authtoken);
        history.push("/admindashboard");

      }
      else {
        alert("Invalid credentials");
        setTimeout(() => {
          console.log("Reloading Page...")
          window.location.reload()
        }, 0);
      }
    }, 1000);

  }

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <section className="login_sec">
        <div className="login_area">
          <div className="brand_img">
            <img src={userLogoImg} alt='logo' />
          </div>
          <h2 style={{ fontWeight: "bolder" }}>Administrator log in</h2>

          <div className="log_in_box">
            <form onSubmit={handleSubmit}>


              <div className="form-group">
                <input id="email" onChange={handleOnChange} value={credentials.email} type="text" name="email" className="form-control login_inputs" aria-describedby="emailHelp" placeholder="User Name" />
                <span><ion-icon name="person"></ion-icon></span>
              </div>



              <div className="form-group mt-3">
                <input type="password" className="form-control login_inputs" id="password" aria-describedby="emailHelp" placeholder="Your Password" onChange={handleOnChange} value={credentials.password} name="password" />
                <span><ion-icon name="lock-closed"></ion-icon></span>
              </div>



              <button disabled={credentials.email.length === 0 || credentials.password.length === 0} id="loaderBtn" className="btn log_in_submit mt-3" style={{ display: "flex", justifyContent: "center", width: "100%", borderRadius: "8px", fontWeight: "bold", backgroundColor: "rgb(52 176 223)" }}>log in{spinner}</button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}

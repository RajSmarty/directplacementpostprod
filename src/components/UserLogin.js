import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import userLogoImg from '../images/logo1.png';
import Spinner from './SpinnerLogin';

export default function UserLogin() {
  let history = useHistory();
  const [credentials, setCredentials] = useState({ email: "", password: "" })


  let loaderBtn = document.getElementById("loaderBtn");
  const [spinner, setSpinner] = useState("")


  // LOGIN Credentials LOGIC
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (credentials.email.length === 0) {
      alert("Please Fill all the Inputs")

      window.location.reload()
    }
    else {

      loaderBtn.style.backgroundColor = "rgb(52 176 223)"
      setSpinner(<Spinner />);
    }

    const response = await fetch("https://directplacement.herokuapp.com/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const data = await response.json()
    // setTimeout(() => {

    console.log(data);
    if (!data || response.status === 400) {
      if (credentials.email.length === 0) {
        alert("Please Fill all the Inputs")
        window.location.reload()
      }
      else {

        loaderBtn.style.backgroundColor = "rgb(52 136 223)"
        setSpinner(<Spinner />);
      }
      const response = await fetch("https://directplacement.herokuapp.com/api/authd/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
      const datad = await response.json()

      if (!datad || response.status === 400) {
        if (credentials.email.length === 0) {
          alert("Please Fill all the Inputs")
          window.location.reload()
        }
        else {

          loaderBtn.style.backgroundColor = "rgb(52 136 223)"
          setSpinner(<Spinner />);
        }
        const response = await fetch("https://directplacement.herokuapp.com/api/authark/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const dataa = await response.json()
        // setTimeout(() => {


        // }, 0);
        if (!dataa || response.status === 400) {
          alert("Invalid credentials");
          setTimeout(() => {
            console.log("Reloading Page...")
            window.location.reload()
          }, 0);
        }
        else {
          localStorage.setItem('token', dataa.authtoken);

          history.push("/empdasha");
        }
      }

      else {

        localStorage.setItem('token', datad.authtoken);

        history.push("/empdashd");
      }
    }

    else {
      // Save the auth token and redirect
      loaderBtn.style.backgroundColor = "rgb(52 136 223)"
      localStorage.setItem('token', data.authtoken);

      history.push("/empdash");

    }
    // else {
    //   alert("Invalid credentials");
    //   setTimeout(() => {
    //     console.log("Reloading Page...")
    //     window.location.reload()
    //   }, 0);
    // }
    // }, 1000);

  }

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div>
        <section className="login_sec">
          <div className="login_area">
            <div className="brand_img">
              <img src={userLogoImg} alt='logo' />
            </div>
            <h2>user log in</h2>

            <div className="log_in_box">
              <form onSubmit={handleSubmit}>


                <div className="form-group">
                  <input className="form-control login_inputs" id="email"
                    onChange={handleOnChange} value={credentials.email}
                    type="text" name="email" aria-describedby="emailHelp" placeholder="E-mail" />
                  <span><ion-icon name="person"></ion-icon></span>
                </div>


                <div className="form-group mt-3">
                  <input id="password"
                    onChange={handleOnChange} value={credentials.password}
                    type="password" name="password" className="form-control login_inputs" aria-describedby="emailHelp" placeholder="Your Password" />
                  <span><ion-icon name="lock-closed"></ion-icon></span>
                </div>


                <button id="loaderBtn" disabled={credentials.email.length === 0 || credentials.password.length === 0} style={{ display: "flex", justifyContent: "center", width: "100%", borderRadius: "8px", fontWeight: "bold", backgroundColor: "rgb(52 176 223)" }} type="submit" className="btn log_in_submit mt-3">log in{spinner}</button>
              </form>
            </div>
          </div>
        </section>

      </div>
    </>

  )
}

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Formdallas from './components/Formdallas';
import UserLogin from './components/UserLogin';
import EmpDashboard from './components/EmpDashboard';
import EmpDashboardD from './components/EmpDashboardD';
import FormHouston from './components/FormHouston';
import AdminDashboard from './components/AdminDashboard';
import AdminEMPDash from './components/AdminEMPDash';
// import Admin from './components/Admin';
import AdminSignup from './components/AdminSignup';
import AccessDenied from './components/AccessDenied';
import Error from './components/Error';
import Backend from './components/Backend';
import EmpHoustonReg from './components/EmpHoustonReg';
import EmpDallasReg from './components/EmpDallasReg';
import Contact from './components/Contact';
import Codestate from './context/codes/Codestate';

import EmpActive from './components/EmpActive';
import EmpClosed from './components/EmpClosed';
import EmpActiveD from './components/EmpActiveD';
import EmpClosedD from './components/EmpClosedD';

import FormArkansas from './components/FormArkansas';
import EmpArkansasReg from './components/EmpArkansasReg';
import EmpDashboardA from './components/EmpDashboardA';
import EmpActiveA from './components/EmpActiveA';
import EmpClosedA from './components/EmpClosedA';
import Signup from './components/Signup';
import Login from './components/Login';
import PasswordReset from './components/PasswordReset';
import ForgotPassword from './components/ForgotPassword';
import Demo from './components/Demo';


function App() {


  return (
    <>
      <Codestate>
        <Router>
          <div>
            <Switch>

              <Route exact path="/">
                <UserLogin />
              </Route>


              <Route exact path="/demo">
                <Demo />
              </Route>


              <Route exact path="/contact">
                <Contact />
              </Route>

              {/* <Route exact path="/admin">
                <Admin />
              </Route> */}

              <Route exact path="/adminregX7gCvHkk7jkjjh3jfvBHJv8YGYG5ubjuBJbJNKJBKbj3jfvBHJv8YGYkbYG1yuugb">
                <AdminSignup />
              </Route>

              <Route exact path="/admindashboard">
                <AdminDashboard />
              </Route>

              <Route exact path="/adminempdash">
                <AdminEMPDash />
              </Route>

              <Route exact path="/empdash">
                <EmpDashboard />
              </Route>

              <Route exact path="/empactivepage">
                <EmpActive />
              </Route>

              <Route exact path="/empclosedpage">
                <EmpClosed />
              </Route>

              <Route exact path="/empactivepaged">
                <EmpActiveD />
              </Route>

              <Route exact path="/empclosedpaged">
                <EmpClosedD />
              </Route>


              <Route exact path="/empactivepagea">
                <EmpActiveA />
              </Route>

              <Route exact path="/empclosedpagea">
                <EmpClosedA />
              </Route>

              <Route exact path="/emphoustonreg">
                <EmpHoustonReg />
              </Route>

              <Route exact path="/emparkansasreg">
                <EmpArkansasReg />
              </Route>

              <Route exact path="/empdashd">
                <EmpDashboardD />
              </Route>

              <Route exact path="/empdasha">
                <EmpDashboardA />
              </Route>

              <Route exact path="/empdallasreg">
                <EmpDallasReg />
              </Route>

              <Route exact path="/formD">
                <Formdallas />
              </Route>

              <Route exact path="/formH">
                <FormHouston />
              </Route>

              <Route exact path="/formA">
                <FormArkansas />
              </Route>

              <Route exact path="/signup">
                <Signup />
              </Route>

              <Route exact path="/admin">
                <Login />
              </Route>

              <Route exact path="/forgot-password">
                <ForgotPassword />
              </Route>

              <Route exact path="/password-reset/:id/:token">
                <PasswordReset />
              </Route>

              <Route exact path="/back">
                <Backend />
              </Route>

              <Route exact path="/accessdenied">
                <AccessDenied />
              </Route>

              <Route>
                <Error heading="Error" />
              </Route>

            </Switch>
          </div>
        </Router>
      </Codestate>
    </>
  )
}

export default App;

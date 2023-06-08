import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../Homepage";
import Companies from "../Companies"
import Jobs from "../JobList"
import Login from "../LoginForm"
import Profile from "../Profile"
import Signup from "../SignupForm"
import CompanyDetail from "../CompanyDetail"
import PrivateRoute from "./PrivateRoute";



const Routes = ({ login, signup }) => {

    return (

    <div>
        <Switch>
            <Route exact path="/">
            <Homepage />
            </Route>

            <Route exact path="/login">
            <Login login={login}/>
            </Route>


            <Route exact path="/signup">
            <Signup signup={signup}/>
            </Route>
            
            <PrivateRoute exact path="/companies">
            <Companies />
            </PrivateRoute>

            <PrivateRoute exact path="/jobs">
            <Jobs/>
            </PrivateRoute>

            <PrivateRoute exact path="/companies/:handle">
            <CompanyDetail />
            </PrivateRoute>

            <PrivateRoute path="/profile">
            <Profile/>
            </PrivateRoute>

            <Redirect to="/" />
        </Switch>
    </div>
    )
}

export default Routes;
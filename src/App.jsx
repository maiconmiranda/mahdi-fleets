import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboardLink/Dashboard";
import { Home } from "./components/home/Home";
import { HowItWorks } from "./components/howItWorks/HowItWorks";
import { LogIn } from "./components/logIn/LogIn";
import { CreateAccount } from "./components/signUp/CreateAccount";
import { SignUp } from "./components/signUp/SignUp";
import { CreateCompany } from "./components/createCompany/CreateCompany";
import UpdateCompany from "./components/createCompany/DashUpdateCompany";
import ViewAllDrivers from "./components/driverCompanyDash/DashViewAllDrivers";
import ViewDriver from "./components/driverCompanyDash/DashViewOneDriver";
import ViewAllVehicles from "./components/vehicle/DashViewFleet";
import AddVehicles from "./components/vehicle/DashAddVehicle";
import EditVehicles from "./components/vehicle/DashEditVehicle";
import ViewOneVehicle from "./components/vehicle/DashViewOneVehicle";
import DisplayAssignDriver from "./components/assignDriver/DashAssignDriverToVehicle";
import ViewReports from "./components/viewReports/DashViewReports";
import DashDailyTrack from "./components/viewDailyTracks/DashDailyTrack";
import DashReportByVehicle from "./components/dailytrackByVehicle/DashReportByVehicle";
import { GetUser } from './components//main/getUser';
import { Driver } from "./components/driverPage/Driver";
import { DriverProtectedRoute } from './components/protectedRoutes/DriverProtectedRoute';
import { ProtectedRoute } from './components/protectedRoutes/ProtectedRoute'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <ProtectedRoute path="/company" component={Dashboard} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/login" component={LogIn} />
      <Route path="/create-account" component={CreateAccount} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/create-company" component={CreateCompany} />     
      <Route path="/get_user" component={GetUser} />
      <ProtectedRoute path="/update-company" component={UpdateCompany} />
      <ProtectedRoute path="/view-all-drivers" component={ViewAllDrivers} />
      <ProtectedRoute path="/view-driver" component={ViewDriver} />
      <ProtectedRoute path="/view-all-vehicles" component={ViewAllVehicles} />
      <ProtectedRoute path="/add-vehicle" component={AddVehicles} />
      <ProtectedRoute path="/edit-vehicle/" component={EditVehicles} />      
      <ProtectedRoute path="/view-vehicle/:id" component={ViewOneVehicle} />
      <ProtectedRoute path="/assign-driver" component={DisplayAssignDriver} />
      <ProtectedRoute path="/view-reports" component={ViewReports} />
      <ProtectedRoute path="/view-daily-track" component={DashDailyTrack} />
      <ProtectedRoute path="/daily-report-vehicle" component={DashReportByVehicle} />
      <DriverProtectedRoute path="/driver" component={Driver} />
    </Switch>
  );
};

export default App;

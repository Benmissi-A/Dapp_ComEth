import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import Create from "./components/pages/Create";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
// import Vote from "./components/pages/Vote";
// import Proposition from "./components/pages/Proposition";
// import Info from "./components/pages/Info";
// import Stats from "./components/pages/Stats";
// import Budget from "./components/pages/Budget";
// import People from "./components/pages/People";
import LandingHeader from "./components/organisms/LandingHeader";
import MainHeader from "./components/organisms/MainHeader";
//import ErrorTemlate from "./components/templates/ErrorTemlate";

const Dapp = ({ comEthAdr }) => {
  //console.log(window.location.pathname);

  return (
    <>
      {window.location.pathname === "/" ? <LandingHeader /> : <MainHeader />}
      <Switch>
        <Route exact path="/" component={LandingPage}>
          <LandingPage />
        </Route>
        <Route exact path="/Create" component={Create}>
          <Create />
        </Route>
        <Route exact path="/Login" component={Login}>
          <Login />
        </Route>
        <Route exact path="/Home" component={Home}>
          <Home comEthAdr={comEthAdr} />
        </Route>
        {/* <Route exact path="/Vote" component={Vote}>
          <Vote />
        </Route>
        <Route exact path="/Proposition" component={Proposition}>
          <Proposition />
        </Route>
        <Route exact path="/Info" component={Info}>
          <Info />
        </Route>
        <Route exact path="/Stats" component={Stats}>
          <Stats />
        </Route>
        <Route exact path="/Budget" component={Budget}>
          <Budget />
        </Route>
        <Route exact path="/People" component={People}>
          <People />
        </Route> */}
      </Switch>
    </>
  );
};

export default Dapp;

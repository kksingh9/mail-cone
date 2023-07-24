import React from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "../component/SideBar/SideBar";
import EmailList from "../component/EmailList/EmailList";
import Compose from "../component/Compose/Compose";
import Header from "../component/Header/Header";
import { useSelector } from "react-redux";
import Emaildetail from "../component/Emaildetail/Emaildetail";

function Routerer() {
  const show = useSelector((state) => state.compose.compose);
  return (
    <div>
      <Header />
      <div className="app__body">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <EmailList />
          </Route>
          <Route path="/mail">
            <Emaildetail />
          </Route>
        </Switch>
      </div>
      {show && <Compose />}
      {/* </Switch> */}
    </div>
  );
}

export default Routerer;

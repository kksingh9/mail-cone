import React from 'react'
import { Route, Switch , Redirect} from 'react-router-dom';
import SideBar from "../component/SideBar/SideBar"
import EmailList from "../component/EmailList/EmailList";
import Compose from "../component/Compose/Compose";
import Header from "../component/Header/Header";
import { useSelector } from 'react-redux';
import Emaildetail from '../component/Emaildetail/Emaildetail';

function Routerer() {
  const show = useSelector((state) => state.compose.compose)
  return (
    
         <div>
        {/* <Switch>
      <Route> */}
      <Header />
      {/* </Route> */}
      <div className='app__body'>
      <SideBar />
        <Switch>
          {/* <Route path="/">
            <Redirect to="/" />
          </Route> */}
      <Route exact path="/" >
      <EmailList />
      </Route>
      <Route path="/mail">
        <Emaildetail />
      </Route>
      </Switch>
      </div>
     {show && <Compose /> }
      {/* </Switch> */}
    </div>

  )
}

export default Routerer

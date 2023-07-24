//import logo from './logo.svg';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import AuthForm from "./component/auth/AuthForm";
//import Mailbox from './pages/Mailbox';
import { Route, Switch, Redirect } from "react-router-dom";
import Routerer from "./Routerer/Routerer";

let initial = true;
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const update = useSelector((state) => state.inboxmail.emaildetail);
  useEffect(() => {
    const updateData = async () => {
      try {
        const response = await fetch(
          `https://mail-box-43bb3-default-rtdb.firebaseio.com/mail/${update.id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(update),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    if (initial) {
      initial = false;
      return;
    }
    updateData();
  }, [update]);

  return (
    <div>
      <Switch>
        {isLoggedIn && <Routerer />}
        {!isLoggedIn && (
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path="/login">
            <AuthForm />
          </Route>
        )}

        {!isLoggedIn && (
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        )}
      </Switch>
    </div>
  );
}

export default App;

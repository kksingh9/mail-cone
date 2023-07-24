import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AuthForm.module.css";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../store/auth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useHistory();
  const dispatch = useDispatch();

  const enterEmailInputRef = useRef();
  const enterPasswordInputRef = useRef();
  const enterConfirmPasswordRef = useRef();

  const SwitchHandler = () => {
    setIsLogin((prevent) => !prevent);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = enterEmailInputRef.current.value;
    const enteredPassword = enterPasswordInputRef.current.value;
    //const enteredConfirmPassword = enterConfirmPasswordRef.current.value;
    //dispatch(authActions.login());
    setIsLoading(true);
    //let url;
    if (isLogin) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDYe7rxDYbi7WgXlIL3QX92DmYYVyXFWho",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            // passwordE: enteredConfirmPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed";
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          //console.log(data);

          dispatch(authSliceActions.login(data.idToken));
          navigate.push("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDYe7rxDYbi7WgXlIL3QX92DmYYVyXFWho",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            // passwordE: enteredConfirmPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            // return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed";

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {})
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  return (
    <section className={classes.authform}>
      {/* <h1>{isLogin ? "Login" : "Sign Up"}</h1> */}
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/28f079101541375.5f213137aab68.jpg"
        height={61}
        width={121}
        alt="mailbox"
      />
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.form}>
          <label htmlFor="email">Email Id</label>
          <input type="email" id="email" ref={enterEmailInputRef} required />
        </div>
        <div className={classes.form}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={enterPasswordInputRef}
            required
          />
        </div>
        {!isLogin && (
          <div className={classes.form}>
            <label htmlFor="confirmpassword">Comfirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              ref={enterConfirmPasswordRef}
              required
            />
          </div>
        )}
        <div className={classes.action}>
          <br></br>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          <br></br>
          {isLoading && <p>Sending request...</p>}
          <button type="button" onClick={SwitchHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
